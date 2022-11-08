import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useSearchParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function Clubs() {
  const [data, setData] = useState([]);
  const [buttonVisible, setButtonVisible] = useState("block");
  const [searchParams, setSearchParams] = useSearchParams();
  const [clubs, setClubs] = useState([]);
  const league = {
    id: searchParams.get("id"),
    name: searchParams.get("name"),
    logo: searchParams.get("logo"),
  };

  const addClub = (club) => {
    if (clubs.find((c) => c.id === club.id)) {
      setClubs(clubs.filter((c) => c.id !== club.id));
    } else {
      setClubs([...clubs, club]);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/clubs/" + searchParams.get("id")
        );
        setData(res.data.response);

        setButtonVisible("none");
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, []);

  const handleAdd = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/game/" + searchParams.get("id"),
        {
          competition: league,
          clubs: clubs,
        }
      );
      console.log(res);
      if (res.status === 200) {
        window.location.href = "/selectedcompetitions?id=" + league.id;
      }
    } catch (error) {
      console.error("error");
      console.error(error);
    }
  };

  return (
    <div className="main mt-12">
      <button
        style={{
          color: "black",
          backgroundColor: "white",
          display: buttonVisible,
        }}
      >
        Get Clubs
      </button>

      <h1 className="Title">Kies de clubs</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data.map((item) => (
          <button
            key={item.team.id}
            onClick={() =>
              addClub({
                id: item.team.id,
                name: item.team.name,
                logo: item.team.logo,
              })
            }
          >
            <Card
              style={{
                backgroundColor: clubs.find((club) => club.id === item.team.id)
                  ? "#ecf0f1"
                  : "white",
                borderRadius: "10px",
                border: "1px solid #000",
              }}
              sx={{ minWidth: 275 }}
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img alt="logo" src={item.team.logo}></img>
                <Typography variant="h5" component="div">
                  {item.team.name}
                </Typography>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
      <div className="button-box">
        <button onClick={handleAdd} className="Button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Clubs;
