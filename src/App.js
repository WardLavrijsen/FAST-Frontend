import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [buttonVisible, setButtonVisible] = useState("block");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/leagues");
        console.log(res);
        const randomnumber = Math.floor(Math.random() * 700);
        for (let i = randomnumber; i < randomnumber + 16; i++) {
          setData((prev) => [...prev, res.data.response[i]]);
        }

        setButtonVisible("none");
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="main">
      <header className="App-header">
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
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
