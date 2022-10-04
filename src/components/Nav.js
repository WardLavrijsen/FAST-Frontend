import { Icon } from "@iconify/react";
import { useState } from "react";

const styles = {
  //side nav
  nav: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    padding: "2rem",
    backgroundColor: "#91B100",
    width: "15%",
    transition: "all 0.5s ease-in-out",
    fontSize: "1.5rem",
  },
  select: {
    color: "white",
    backgroundColor: "#91B100",
    padding: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#91B100",
    color: "white",
    fontSize: "1.7rem",
    marginTop: "2rem",
    fontWeight: "500",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
};

function Nav() {
  const [year, setYear] = useState(2022);

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <nav className="nav" style={styles.nav}>
      <a href="/">
        <img alt="Forza-Logo" src="images/ForzaLogo.svg" className="mb-8" />
      </a>
      <div className="w-full">
        <ul className="mb-12">
          <li>
            <a href="/ticketpartners" className="text-white">
              <Icon icon="akar-icons:ticket" className="inline-block mr-2" />
              Ticketpartners
            </a>
          </li>
          <li>
            <a href="/competities" className="text-white">
              <Icon
                icon="emojione-monotone:soccer-ball"
                className="inline-block mr-2"
              />
              Competities
            </a>
          </li>
          <li>
            <a href="/exporteren" className="text-white">
              <Icon
                icon="ph:microsoft-excel-logo"
                className="inline-block  mr-2"
              />
              Exporteren
            </a>
          </li>
        </ul>
        <select
          value={year}
          onChange={handleChange}
          style={styles.select}
          className="border-white border-solid border-2 rounded-md mb-4 w-full"
        >
          <option value={2022}>2022/2023</option>
          <option value={2023}>2023/2024</option>
          <option value={2024}>2024/2025</option>
        </select>
        <ul className="">
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="premierleague"
                src="images/premier.svg"
                className="inline-block mr-2"
              />
              Premier League
            </a>
          </li>
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="laliga"
                src="images/liga.svg"
                className="inline-block mr-2"
              />
              La Liga
            </a>
          </li>
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="bundesliga"
                src="images/bundes.svg"
                className="inline-block mr-2"
              />
              BundesLiga
            </a>
          </li>
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="seriea"
                src="images/serieA.svg"
                className="inline-block mr-2"
              />
              Serie A
            </a>
          </li>
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="premiera"
                src="images/premieraliga.svg"
                className="inline-block mr-2"
              />
              Premiera Liga
            </a>
          </li>
          <li className="mb-1">
            <a href="index.html" className="text-white">
              <img
                alt="premiership"
                src="images/premiership.svg"
                className="inline-block mr-2"
              />
              Premiership
            </a>
          </li>
        </ul>
      </div>
      <button
        className=" border-2 border-white border-solid"
        style={styles.button}
      >
        <a href="index.html" className="text-white">
          Uitloggen
        </a>
      </button>
    </nav>
  );
}

export default Nav;
