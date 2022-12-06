import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useSearchParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function SelectedCompetitions() {
  const [data, setData] = useState([]);
  const [buttonVisible, setButtonVisible] = useState("block");
  const [searchParams] = useSearchParams();
  const [clubs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://forza-automation-system-for-tickets.fly.dev/api/competitions/" +
            searchParams.get("id")
        );
        console.log(res);
        setData(res.data);

        setButtonVisible("none");
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, [searchParams]);

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
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data.map((item) => (
          <a
            href={`/games?clubid=${item.id}&leagueid=${searchParams.get("id")}`}
          >
            <Card
              key={item.id}
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
                <img alt="logo" src={item.logo}></img>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
        <a href={"/clubs?id=" + searchParams.get("id")}>
          <Card
            style={{
              backgroundColor: "white",
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
              <Typography variant="h1" component="div">
                +
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
}

export default SelectedCompetitions;
