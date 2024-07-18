import { useEffect } from "react";
import { Card, Image, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/actions";

const HomeLeftBar = () => {
  const user = useSelector((state) => state.mainReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Container>
      <Card className="mb-3">
        <Link to={"/profile"}>
          <Card.Img variant="top" src={user.image} height={100} style={{ objectFit: "cover" }} />
        </Link>

        <Card.Body className="text-center">
          <Link to={"/profile"}>
            <Image
              src={user.image}
              roundedCircle
              height={80}
              width={80}
              className="mb-2"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                border: "3px solid white",
                marginTop: "-40px",
              }}
            />
          </Link>
          <Card.Title className="mt-2">
            {user.name} {user.surname}
          </Card.Title>

          <Card.Text>{user.title}</Card.Text>
          <Card.Text className="text-start">
            <small>
              Visitatori del profilo: <strong>10</strong>
            </small>
            <Button variant="link" className="p-0">
              <small>Visualizza tutte le analisi</small>
            </Button>
          </Card.Text>
          <Card.Text className="mt-2 text-start">
            <strong>Sblocca strumenti e informazioni Premium</strong>
            <Button variant="outline-primary">Prova Premium per 0 EUR</Button>
          </Card.Text>

          <Card.Text className="mb-0 text-start">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImJvb2ttYXJrLWZpbGwtc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik0xMyA0YTMgMyAwIDAwLTMtM0gzdjE0bDUtNC41IDUgNC41eiIvPgo8L3N2Zz4="
              alt=""
              width={20}
            />
            <strong>Elementi salvati</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 text-start">
        <Card.Body>
          <Card.Title>
            <small>Recenti</small>
          </Card.Title>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNhbGVuZGFyLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMiAydjlhMyAzIDAgMDAzIDNoNmEzIDMgMCAwMDMtM1Yyem04LjUgMS41YTEgMSAwIDExLTEgMSAxIDEgMCAwMTEtMXptLTUgMGExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTF6TTEyIDExYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY3aDh6Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Daje Roma dajeee
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNhbGVuZGFyLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMiAydjlhMyAzIDAgMDAzIDNoNmEzIDMgMCAwMDMtM1Yyem04LjUgMS41YTEgMSAwIDExLTEgMSAxIDEgMCAwMTEtMXptLTUgMGExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTF6TTEyIDExYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY3aDh6Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Expecto Patronum
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNhbGVuZGFyLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMiAydjlhMyAzIDAgMDAzIDNoNmEzIDMgMCAwMDMtM1Yyem04LjUgMS41YTEgMSAwIDExLTEgMSAxIDEgMCAwMTEtMXptLTUgMGExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTF6TTEyIDExYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY3aDh6Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            How to become a pro at CoD
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNhbGVuZGFyLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMiAydjlhMyAzIDAgMDAzIDNoNmEzIDMgMCAwMDMtM1Yyem04LjUgMS41YTEgMSAwIDExLTEgMSAxIDEgMCAwMTEtMXptLTUgMGExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTF6TTEyIDExYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY3aDh6Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Macciocapatonda è un alieno?
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNhbGVuZGFyLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMiAydjlhMyAzIDAgMDAzIDNoNmEzIDMgMCAwMDMtM1Yyem04LjUgMS41YTEgMSAwIDExLTEgMSAxIDEgMCAwMTEtMXptLTUgMGExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTF6TTEyIDExYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY3aDh6Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Ciao mamma sono su linkedin
          </Card.Text>
          <Card.Title>
            <small>Gruppi</small>
          </Card.Title>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imdyb3VwLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNOC41IDdoLTFBMS41IDEuNSAwIDAwNiA4LjVWMTRoNFY4LjVBMS41IDEuNSAwIDAwOC41IDd6TTEyLjc1IDhoLS41QTEuMjUgMS4yNSAwIDAwMTEgOS4yNVYxNGgzVjkuMjVBMS4yNSAxLjI1IDAgMDAxMi43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI0IiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjUuNSIgcj0iMS41Ii8+CiAgPHBhdGggZD0iTTMuNzUgOGgtLjVBMS4yNSAxLjI1IDAgMDAyIDkuMjVWMTRoM1Y5LjI1QTEuMjUgMS4yNSAwIDAwMy43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjMuNSIgY3k9IjUuNSIgcj0iMS41Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Valerio Lundini fan club
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imdyb3VwLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNOC41IDdoLTFBMS41IDEuNSAwIDAwNiA4LjVWMTRoNFY4LjVBMS41IDEuNSAwIDAwOC41IDd6TTEyLjc1IDhoLS41QTEuMjUgMS4yNSAwIDAwMTEgOS4yNVYxNGgzVjkuMjVBMS4yNSAxLjI1IDAgMDAxMi43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI0IiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjUuNSIgcj0iMS41Ii8+CiAgPHBhdGggZD0iTTMuNzUgOGgtLjVBMS4yNSAxLjI1IDAgMDAyIDkuMjVWMTRoM1Y5LjI1QTEuMjUgMS4yNSAwIDAwMy43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjMuNSIgY3k9IjUuNSIgcj0iMS41Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Invecchiare come Joe Biden
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imdyb3VwLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNOC41IDdoLTFBMS41IDEuNSAwIDAwNiA4LjVWMTRoNFY4LjVBMS41IDEuNSAwIDAwOC41IDd6TTEyLjc1IDhoLS41QTEuMjUgMS4yNSAwIDAwMTEgOS4yNVYxNGgzVjkuMjVBMS4yNSAxLjI1IDAgMDAxMi43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI0IiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjUuNSIgcj0iMS41Ii8+CiAgPHBhdGggZD0iTTMuNzUgOGgtLjVBMS4yNSAxLjI1IDAgMDAyIDkuMjVWMTRoM1Y5LjI1QTEuMjUgMS4yNSAwIDAwMy43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjMuNSIgY3k9IjUuNSIgcj0iMS41Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Marvel Cinematic Universe
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imdyb3VwLXNtYWxsIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIxNngxNiIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNOC41IDdoLTFBMS41IDEuNSAwIDAwNiA4LjVWMTRoNFY4LjVBMS41IDEuNSAwIDAwOC41IDd6TTEyLjc1IDhoLS41QTEuMjUgMS4yNSAwIDAwMTEgOS4yNVYxNGgzVjkuMjVBMS4yNSAxLjI1IDAgMDAxMi43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI0IiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMTIuNSIgY3k9IjUuNSIgcj0iMS41Ii8+CiAgPHBhdGggZD0iTTMuNzUgOGgtLjVBMS4yNSAxLjI1IDAgMDAyIDkuMjVWMTRoM1Y5LjI1QTEuMjUgMS4yNSAwIDAwMy43NSA4eiIvPgogIDxjaXJjbGUgY3g9IjMuNSIgY3k9IjUuNSIgcj0iMS41Ii8+Cjwvc3ZnPg=="
              alt=""
              width={20}
            />{" "}
            Lavorare fa male
          </Card.Text>
          <Card.Title>
            <small>Hashtag Seguiti</small>
          </Card.Title>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imhhc2h0YWctc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik02LjY1IDExaDJsLS4zMyAzaDJsLjMzLTNIMTRWOWgtMy4xM2wuMjYtMkgxNFY1aC0yLjY1bC4zMy0zaC0ybC0uMzMgM2gtMmwuMzMtM2gtMmwtLjMzIDNIMnYyaDMuMTNsLS4yNiAySDJ2MmgyLjY1bC0uMzMgM2gyem0uNDgtNGgybC0uMjYgMmgtMnoiLz4KPC9zdmc+"
              alt=""
              width={20}
            />{" "}
            motogp
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imhhc2h0YWctc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik02LjY1IDExaDJsLS4zMyAzaDJsLjMzLTNIMTRWOWgtMy4xM2wuMjYtMkgxNFY1aC0yLjY1bC4zMy0zaC0ybC0uMzMgM2gtMmwuMzMtM2gtMmwtLjMzIDNIMnYyaDMuMTNsLS4yNiAySDJ2MmgyLjY1bC0uMzMgM2gyem0uNDgtNGgybC0uMjYgMmgtMnoiLz4KPC9zdmc+"
              alt=""
              width={20}
            />{" "}
            universe
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9Imhhc2h0YWctc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik02LjY1IDExaDJsLS4zMyAzaDJsLjMzLTNIMTRWOWgtMy4xM2wuMjYtMkgxNFY1aC0yLjY1bC4zMy0zaC0ybC0uMzMgM2gtMmwuMzMtM2gtMmwtLjMzIDNIMnYyaDMuMTNsLS4yNiAySDJ2MmgyLjY1bC0uMzMgM2gyem0uNDgtNGgybC0uMjYgMmgtMnoiLz4KPC9zdmc+"
              alt=""
              width={20}
            />{" "}
            travel
          </Card.Text>
          <Card.Title className="text-center">
            <small>
              <a className="text-decoration-none" href="#">
                Scopri di più
              </a>
            </small>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>
            <small>Le mie pagine</small>
          </Card.Title>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBkYXRhLXRlc3RpZD0ibG9nbyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiPjxnIGRhdGEtdGVzdGlkPSJsb2dvLWljb24iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNF8xMTgwMikiPjxwYXRoIGQ9Ik0wIDE1LjY3MjZMMTUuNjcyNiAwVjcuMTI0NEwzLjU3Nzg1IDE5LjIyMDJMMCAxNS42NzI2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzI0XzExODAyKSIvPjxwYXRoIGQ9Ik0xMi4wMTk3IDI3Ljc3MjZMMjcuNjkyNCAxMi4xVjE5LjIyNDRMMTUuNTk3NiAzMS4zMjAyTDEyLjAxOTcgMjcuNzcyNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNF8xMTgwMikiLz48cGF0aCBkPSJNMTkuMTY1IDE1LjY0NzZMMy40OTIzMSAzMS4zMjAyVjI0LjE5NThMMTUuNTg4MSAxMi4xTDE5LjE2NSAxNS42NDc2WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzI0XzExODAyKSIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjRfMTE4MDIiIHgxPSIwIiB5MT0iOS42MTAxMiIgeDI9IjE1LjY3MjYiIHkyPSI5LjYxMDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjxzdG9wIG9mZnNldD0iMC43OSIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI0XzExODAyIiB4MT0iNTkuODc0MiIgeTE9IjkuMTc5MjkiIHgyPSI0NS40MjQiIHkyPSI0Mi4wNTIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjU1MjA4MyIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzI0XzExODAyIiB4MT0iMTkuMTY2IiB5MT0iMjEuNzEwMSIgeDI9IjMuNDkyMzEiIHkyPSIyMS43MTAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjIxIiBzdG9wLWNvbG9yPSIjQ0IyMzc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjYwMDhGIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImNsaXAwXzI0XzExODAyIj48cmVjdCB3aWR0aD0iMTM2IiBoZWlnaHQ9IjMxLjMyMDMiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"
              alt=""
              width={20}
            />
            Epicoders
            <br />
            <small style={{ marginLeft: "20px" }}>2 nuove notifiche</small>
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBkYXRhLXRlc3RpZD0ibG9nbyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiPjxnIGRhdGEtdGVzdGlkPSJsb2dvLWljb24iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNF8xMTgwMikiPjxwYXRoIGQ9Ik0wIDE1LjY3MjZMMTUuNjcyNiAwVjcuMTI0NEwzLjU3Nzg1IDE5LjIyMDJMMCAxNS42NzI2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzI0XzExODAyKSIvPjxwYXRoIGQ9Ik0xMi4wMTk3IDI3Ljc3MjZMMjcuNjkyNCAxMi4xVjE5LjIyNDRMMTUuNTk3NiAzMS4zMjAyTDEyLjAxOTcgMjcuNzcyNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNF8xMTgwMikiLz48cGF0aCBkPSJNMTkuMTY1IDE1LjY0NzZMMy40OTIzMSAzMS4zMjAyVjI0LjE5NThMMTUuNTg4MSAxMi4xTDE5LjE2NSAxNS42NDc2WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzI0XzExODAyKSIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjRfMTE4MDIiIHgxPSIwIiB5MT0iOS42MTAxMiIgeDI9IjE1LjY3MjYiIHkyPSI5LjYxMDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjxzdG9wIG9mZnNldD0iMC43OSIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI0XzExODAyIiB4MT0iNTkuODc0MiIgeTE9IjkuMTc5MjkiIHgyPSI0NS40MjQiIHkyPSI0Mi4wNTIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjU1MjA4MyIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzI0XzExODAyIiB4MT0iMTkuMTY2IiB5MT0iMjEuNzEwMSIgeDI9IjMuNDkyMzEiIHkyPSIyMS43MTAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjIxIiBzdG9wLWNvbG9yPSIjQ0IyMzc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjYwMDhGIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImNsaXAwXzI0XzExODAyIj48cmVjdCB3aWR0aD0iMTM2IiBoZWlnaHQ9IjMxLjMyMDMiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"
              alt=""
              width={20}
            />
            Epicoders
            <br />
            <small style={{ marginLeft: "20px" }}>2 nuove notifiche</small>
          </Card.Text>
          <Card.Text>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBkYXRhLXRlc3RpZD0ibG9nbyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiPjxnIGRhdGEtdGVzdGlkPSJsb2dvLWljb24iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNF8xMTgwMikiPjxwYXRoIGQ9Ik0wIDE1LjY3MjZMMTUuNjcyNiAwVjcuMTI0NEwzLjU3Nzg1IDE5LjIyMDJMMCAxNS42NzI2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzI0XzExODAyKSIvPjxwYXRoIGQ9Ik0xMi4wMTk3IDI3Ljc3MjZMMjcuNjkyNCAxMi4xVjE5LjIyNDRMMTUuNTk3NiAzMS4zMjAyTDEyLjAxOTcgMjcuNzcyNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8yNF8xMTgwMikiLz48cGF0aCBkPSJNMTkuMTY1IDE1LjY0NzZMMy40OTIzMSAzMS4zMjAyVjI0LjE5NThMMTUuNTg4MSAxMi4xTDE5LjE2NSAxNS42NDc2WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzI0XzExODAyKSIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjRfMTE4MDIiIHgxPSIwIiB5MT0iOS42MTAxMiIgeDI9IjE1LjY3MjYiIHkyPSI5LjYxMDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjxzdG9wIG9mZnNldD0iMC43OSIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzI0XzExODAyIiB4MT0iNTkuODc0MiIgeTE9IjkuMTc5MjkiIHgyPSI0NS40MjQiIHkyPSI0Mi4wNTIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjU1MjA4MyIgc3RvcC1jb2xvcj0iI0NCMjM3NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2MDA4RiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzI0XzExODAyIiB4MT0iMTkuMTY2IiB5MT0iMjEuNzEwMSIgeDI9IjMuNDkyMzEiIHkyPSIyMS43MTAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjIxIiBzdG9wLWNvbG9yPSIjQ0IyMzc2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjYwMDhGIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImNsaXAwXzI0XzExODAyIj48cmVjdCB3aWR0aD0iMTM2IiBoZWlnaHQ9IjMxLjMyMDMiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"
              alt=""
              width={20}
            />
            Epicoders
            <br />
            <small style={{ marginLeft: "20px" }}>2 nuove notifiche</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomeLeftBar;
