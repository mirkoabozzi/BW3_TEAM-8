export const SET_USER = "SET_USER";
export const SET_PROFILES = "SET_PROFILES";
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const ADD_EXPERIENCE_REQUEST = "ADD_EXPERIENCE_REQUEST";
export const ADD_EXPERIENCE_FAILURE = "ADD_EXPERIENCE_FAILURE";
export const UPDATE_EXPERIENCES_LIST = "UPDATE_EXPERIENCES_LIST";
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_LOADING_ON = "GET_POSTS_LOADING_ON";
export const GET_POSTS_LOADING_OFF = "GET_POSTS_LOADING_OFF";
export const SET_PROFILES_ASIDE = "SET_PROFILES_ASIDE";
export const SET_PROFILES_ASIDE_ERROR = "SET_PROFILES_ASIDE_ERROR";
export const ADD_NEW_POST = "ADD_NEW_POST";
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const SEARCH_JOBS_REQUEST = "SEARCH_JOBS_REQUEST";
export const SEARCH_JOBS_SUCCESS = "SEARCH_JOBS_SUCCESS";
export const SEARCH_JOBS_FAILURE = "SEARCH_JOBS_FAILURE";
export const SET_SELECTED_JOB = " SET_SELECTED_JOB";
export const GET_COMMENTS_HOME = "GET_COMMENTS_HOME";

const token = import.meta.env.VITE_API_KEY;

export const getUser = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const user = await resp.json();
        // console.log("user", user);
        dispatch({ type: SET_USER, payload: user });
      } else {
        throw new Error("Errore nel recupero dell'utente");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProfiles = (query) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const profiles = await resp.json();
        // console.log("profiles", profiles);
        const filteredProfiles = profiles.filter((profile) => `${profile.name.toLowerCase()} ${profile.surname.toLowerCase()}`.includes(query.toLowerCase()));
        dispatch({ type: SET_PROFILES, payload: filteredProfiles });
      } else {
        throw new Error("Errore nella ricerca dei profili");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setSelectedUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_SELECTED_USER, payload: user });
      dispatch(fetchExperiences(user._id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (resp.ok) {
        const experiences = await resp.json();
        dispatch({ type: SET_EXPERIENCES, payload: experiences });
      } else {
        throw new Error("Errore nel recupero delle esperienze");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfilePicture = (userId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        method: "POST",
        body: formData,
      });
      if (resp.ok) {
        // console.log(resp);
        dispatch(getUser());
      } else {
        throw new Error("Errore nel caricamendo dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addExperience = (userId, experience) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      });

      if (resp.ok) {
        const newExperience = await resp.json();
        dispatch(fetchExperiences(userId));
        return newExperience;
      } else {
        const errorText = await resp.text();
        throw new Error(`Errore nella creazione dell'esperienza: ${errorText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperience = (userId, experienceId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        const errorText = await resp.text();
        throw new Error(`Errore nella cancellazione dell'esperienza: ${errorText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateExperience = (userId, experienceId, experience) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      });

      if (resp.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        const errorText = await resp.text();
        throw new Error(`Errore nella modifica dell'esperienza: ${errorText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadProfilePicture = (userId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (resp.ok) {
        dispatch(getUser());
      } else {
        throw new Error("Errore nel caricamento dell'immagine del profilo");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadExperiencePicture = (userId, experienceId, file) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("experience", file);

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}/picture`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (resp.ok) {
        dispatch(fetchExperiences(userId));
      } else {
        throw new Error("Errore nel caricamento dell'immagine dell'esperienza");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS_LOADING_ON });
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const posts = await resp.json();
        // console.log("posts", posts);
        dispatch({ type: GET_POSTS, payload: posts });
        dispatch({ type: GET_POSTS_LOADING_OFF });
      } else {
        throw new Error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// azione per profili aside
export const fetchProfilesAside = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const profiles = await response.json();
        // console.log("profiles aside", profiles);
        dispatch({ type: SET_PROFILES_ASIDE, payload: profiles });
      } else {
        throw new Error("Error fetching profiles. Status: " + response.status);
      }
    } catch (error) {
      console.error("Fetch profiles aside error:", error);
      dispatch({ type: SET_PROFILES_ASIDE_ERROR, payload: error.message });
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch(getPosts());
      } else {
        throw new Error("Errore nella rimozione del post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePost = (postId, newText) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
      });
      if (resp.ok) {
        dispatch(getPosts());
      } else {
        throw new Error("Errore nell'aggiornamento del post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// azione per jobs

export const setSelectedJob = (job) => ({
  type: SET_SELECTED_JOB,
  payload: job,
});

export const fetchJobs = (company) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const annunci = await response.json();
        // console.log("annunci", annunci.data);
        dispatch({ type: FETCH_JOBS_SUCCESS, payload: { company, jobs: annunci.data } });
      } else {
        throw new Error("Error fetching company posts. Status: " + response.status);
      }
    } catch (error) {
      console.error("Fetch company posts error:", error);
      dispatch({ type: FETCH_JOBS_FAILURE, payload: { company, error: error.message } });
    }
  };
};

export const updateProfile = (newInfoProfile) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInfoProfile),
      });
      if (resp.ok) {
        dispatch(getUser());
      } else {
        throw new Error("Errore nella modifica delle info profilo");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// azione per ricerca lavori

export const searchJobs = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_JOBS_REQUEST });
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
    if (!response.ok) {
      throw new Error("Network was not okay");
    }
    const data = await response.json();
    // console.log("jobs", data.data);
    dispatch({ type: SEARCH_JOBS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: SEARCH_JOBS_FAILURE, payload: error.message });
  }
};

//commenti home

export const getCommentsHome = () => {
  // dispatch({ type: GET_POSTS_LOADING_ON });
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        const comments = await resp.json();
        // console.log("comments", comments);
        dispatch({ type: GET_COMMENTS_HOME, payload: comments });
        // dispatch({ type: GET_POSTS_LOADING_OFF });
      } else {
        throw new Error("Errore nel recupero dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postComment = (newComment) => {
  // console.log("handlepost", newComment);
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (resp.ok) {
        dispatch(getCommentsHome());
      } else {
        throw new Error("Errore nell'invio del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch(getCommentsHome());
      } else {
        throw new Error("errore nella rimozione del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
