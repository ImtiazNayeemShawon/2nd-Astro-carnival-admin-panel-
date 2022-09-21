import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";

export default function Admin() {
  return (
    <div className="Admin">
      <Grid container>
        <Grid item={3}>
          <Sidebar />
        </Grid>
        <Grid item={8}>
          
        </Grid>
      </Grid>
    </div>
  );
}
