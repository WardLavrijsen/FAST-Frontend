const styles = {
  main: {
    backgroundColor: "#719303",
  },
};
export default function UserBlock({ username }) {
  return (
    <div style={styles.main}>
      <img alt="profile" />
      <div>
        <h2>{username}</h2>
        <button href="#">display</button>
      </div>
    </div>
  );
}
