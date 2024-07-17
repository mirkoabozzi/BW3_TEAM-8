import { useEffect } from "react";
import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.homeReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(posts);

  return <div>Home</div>;
};
export default Home;
