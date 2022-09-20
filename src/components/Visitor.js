import React from "react";

import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";
import Banner from "../assets/logo.png";
import "./Styles/Visitor.css";
import VisitorData from "./VisitorDataTable";

export default function Visitor() {
  return (
    <div className="Visitor">
      <Grid container spacing={6}>
        <Grid item={2}>
          <Sidebar />
        </Grid>
        <Grid item={8}>
          <div className="VisitorData">
            <div className="Intro">
              <img className="w-96" src={Banner} alt="Banner" />
              <div className="Intro-txt">
                <h1>Welcome on 2nd national astro carnival visitors page</h1>
                <br />
              </div>
            </div>

            <Grid container>
              <Grid item={4}>
                <div className="VisitorTable">
                  <VisitorData />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
