import React, { useState } from "react";
import { getRandomJoke } from "../../services/axiosService";

import {
  Card,
  Stack,
  IconButton,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const AxiosEjercice = () => {
  const [joke, setJoke] = useState(null);
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);

  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  const onCount = (setCounter, counter) => {
    setCounter(counter + 1);
    obtainJoke();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Exercice 19-20-21</h1>

        {joke != null ? (
          <Card
            sx={{
              width: 400,
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "20px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 16 }}>{joke.value}</Typography>
            </CardContent>
            <CardActions style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => onCount(setPositiveCount, positiveCount)}
                >
                  <ThumbUpIcon color="primary" />
                </IconButton>
                {positiveCount}
              </div>
              <Stack>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    onClick={() => onCount(setNegativeCount, negativeCount)}
                  >
                    <ThumbDownIcon color="error" />
                  </IconButton>
                  {negativeCount}
                </div>
              </Stack>
            </CardActions>
          </Card>
        ) : (
          <Card
            sx={{
              width: 400,
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "20px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 16 }}>Generate a new Joke</Typography>{" "}
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={obtainJoke}>
                New Joke
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AxiosEjercice;
