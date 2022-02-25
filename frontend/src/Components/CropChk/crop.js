import React from "react";
import { Container, Grid, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import "./styles.css";

export const Crop = () => {
  const [postData, setPostData] = useState({
    nitrogen: 0,
    phos: 0,
    potassium: 0,
    humidity: 0,
    ph: 0,
    rainfall: 0,
  });

  const submitHandle = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, Name: user?.result?.name })
      );
      clear();
    } else {
      dispatch(createPost({ ...postData, Name: user?.result?.name }));
      clear();
    }
    clear();
  };

  return (
    <Paper className="paper">
      <form className="form" onSubmit={submitHandle}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              name="nitrogen"
              variant="outlined"
              label="Nitrogen"
              type={"number"}
              required
              size="small"
              placeholder="123"
            />
          </Grid>

          <Grid item>
            <TextField
              name="phos"
              variant="outlined"
              type={"number"}
              required
              size="small"
              label="Phosphorous"
              placeholder="123"
            />
          </Grid>

          {/* {&nbsp} */}
          <Grid item>
            <TextField
              name="potassium"
              variant="outlined"
              label="Potassium"
              type={"number"}
              required
              size="small"
              placeholder="123"
              onChange={(e) =>
                setPostData({ ...postData, potassium: e.target.value })
              }
            />
            <TextField
              name="temp"
              variant="outlined"
              label="Temperature"
              type={"number"}
              required
              size="small"
              placeholder="123"
            />
            <TextField
              name="humidity"
              variant="outlined"
              label="Humidity"
              type={"number"}
              required
              size="small"
              placeholder="123"
            />
            <TextField
              name="ph"
              variant="outlined"
              label="Ph value"
              type={"number"}
              required
              size="small"
              placeholder="123"
            />
            <TextField
              name="rainfall"
              variant="outlined"
              label="Rainfall"
              type={"number"}
              required
              size="small"
              placeholder="123"
            />
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
