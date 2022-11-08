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
  return (
    <div style={styles.ErrorPage}>
      <div style={styles.Errorbox}>
        <h1 style={styles.title}>Welkom!</h1>
        <p style={styles.text}>
          Klik links op een competitie, of voeg er een toe.
        </p>
      </div>
    </div>
  );
}
