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
          <div class=" h-40 w-32 p-4 shadow-2xl">
            <p>Admins</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
