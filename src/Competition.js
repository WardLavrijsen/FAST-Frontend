import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useEffect, useState } from "react";

function Competition() {
  const [data, setData] = useState([]);
  const [buttonVisible, setButtonVisible] = useState("block");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/leagues");
        console.log(res);
        setData(res.data.response);

        setButtonVisible("none");
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="main mt-12">
      <button
        style={{
          color: "black",
          backgroundColor: "white",
          display: buttonVisible,
        }}
      >
        Get Leagues
      </button>
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
            href={`/clubs?id=${item.league.id}&name=${item.league.name}&logo=${item.league.logo}`}
          >
            <Card
              key={item.league.id}
              style={{
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
                <img alt="logo" src={item.league.logo}></img>
                <Typography variant="h5" component="div">
                  {item.league.name}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Competition;
