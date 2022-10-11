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
  console.log(searchParams.get("id"));

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/clubs/" + searchParams.get("id")
        );
        console.log(res.data.response);
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
        Get Clubs
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridGap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data.map((item) => (
          <Card
            key={item.team.id}
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
              <img alt="logo" src={item.team.logo}></img>
              <Typography variant="h5" component="div">
                {item.team.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
