import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useSearchParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function Games() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://forza-automation-system-for-tickets.fly.dev/api/game/" +
            searchParams.get("leagueid") +
            "/" +
            searchParams.get("clubid")
        );
        setData(res.data);
      } catch (error) {
        console.error("error");
        console.error(error);
      }
    })();
  }, [searchParams]);

  return (
    <div className="main mt-12">
      <h1 className="Title">
        Alle Wedstrijden van {data.length > 0 ? data[0].homename : ""}{" "}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "2rem",
        }}
      >
        {data.map((item) => (
          <div
            key={item.awayid}
            style={{
              backgroudnColor: "white",
              borderRadius: "10px",
              border: "3px solid #BFBFBF",
              display: "flex",
              width: "100%",
              height: "200px",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                height: "55%",
                width: "100%",
                borderBottom: "3px solid #BFBFBF",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  padding: "auto",
                  paddingBottom: "1%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.homelogo}
                  alt={item.homename}
                  style={{ maxWidth: "100%", maxHeight: "70%" }}
                />
                <h2 style={{ fontSize: "0.8rem" }}>{item.homename}</h2>
              </div>
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ maxWidth: "100%" }}>
                  {new Date(item.date).getUTCDate() +
                    "-" +
                    new Date(item.date).getUTCMonth() +
                    "-" +
                    new Date(item.date).getUTCFullYear()}
                </h3>
                <h3 style={{ maxWidth: "100%" }}>
                  {new Date(item.date).getUTCHours() +
                    ":" +
                    new Date(item.date).getUTCMinutes()}
                </h3>
              </div>
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  padding: "auto",
                  paddingBottom: "1%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.awaylogo}
                  alt={item.awayname}
                  style={{ maxWidth: "100%", maxHeight: "70%" }}
                />
                <h2 style={{ fontSize: "0.8rem" }}>{item.awayname}</h2>
              </div>
            </div>
            <div
              style={{
                height: "45%",
                width: "100%",
                borderTop: "3px solid #BFBFBF",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    maxWidth: "100%",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  Champions Travel
                </h3>
                <h3
                  style={{
                    maxWidth: "100%",
                    color: "white",
                    backgroundColor: "#91B100",
                    padding: "0.1rem 0.3rem",
                    borderRadius: "5px",
                  }}
                >
                  €45,32
                </h3>
              </div>
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    maxWidth: "100%",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  Premier Travel
                </h3>
                <h3 style={{ maxWidth: "100%" }}>€57,10</h3>
              </div>
              <div
                style={{
                  width: "33.33%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    maxWidth: "100%",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  FanTravel World
                </h3>
                <h3 style={{ maxWidth: "100%" }}>€93,24</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
