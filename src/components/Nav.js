import { Icon } from "@iconify/react";

const styles = {
  //side nav
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#91B100",
    width: "15%",
    transition: "all 0.5s ease-in-out",
  },
};

function Nav() {
  return (
    <nav className="nav" style={styles.nav}>
      <img alt="Forza-Logo" src="images/ForzaLogo.svg" />
      <ul>
        <li>
          <a href="index.html">
            <Icon icon="akar-icons:ticket" />
            Ticketpartners
          </a>
        </li>
        <li>
          <a href="index.html">Competities</a>
        </li>
        <li>
          <a href="index.html">Exporteren</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
