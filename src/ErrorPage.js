import { useRouteError } from "react-router-dom";

const styles = {
  ErrorPage: {
    display: "flex",
    width: "85%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Errorbox: {
    backgroundColor: "#91B100",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem",
    borderRadius: "1rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "1rem",
  },
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={styles.ErrorPage}>
      <div style={styles.Errorbox}>
        <h1 style={styles.title}>404!</h1>
        <p style={styles.text}>Helaas, deze pagina is niet beschikbaar</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
