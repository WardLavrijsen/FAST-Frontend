import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

import axios from "axios";

const styles = {
  //side nav
  nav: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
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
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/competitions");
        setData(res.data);
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, []);

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
            <a href="/competitions" className="text-white">
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
          {data.map((item) => (
            <li key={item.id} className="mb-1">
              <a
                href={"/selectedcompetitions?id=" + item.id}
                className="text-white"
              >
                <img
                  alt="premierleague"
                  src={item.logo}
                  className="inline-block mr-2 w-10"
                />
                {item.name}
              </a>
            </li>
          ))}
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
