import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";
import PartcipantsDataTable from "./ParticipantsDataTable";
import Banner from "../assets/astro.jpg";
import "./Styles/Participants.css";

export default function Participants() {
  return (
    <div className="Participants">
   
      <Grid container spacing={6}>
        <Grid item={3}> <Sidebar /></Grid>
        <Grid item={8}>
          <div className="ParticipantsData">
            <div className="Intro">
              <img className="Astro" src={Banner} alt="Banner" />
            </div>
            <Grid container>
              <Grid item={4}>
                <div className="ParticipantsTable">
                  <PartcipantsDataTable />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
