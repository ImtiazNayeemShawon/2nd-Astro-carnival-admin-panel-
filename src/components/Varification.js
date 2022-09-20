import React from "react";
import Sidebar from "./Sidebar";
import { Grid, Button } from "@mui/material";
import "./Styles/Verification.css";
import axios from "axios";
import { useEffect, useState } from "react";
import QR from "./Qr";

export default function Verification() {
  const [Data, setData] = useState([]);
  const GetData = async () => {
    try {
      const data = await axios.get("https://random-data-api.com/api/v2/users");
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="Verification">
      <Grid container>
        <Grid item={0}>
          <Sidebar />
        </Grid>
        <Grid item={12}>
          <Grid container spacing={3}>
            <Grid item={6}>
              <div className="Data_field animate__animated animate__backInUp shadow-lg shadow-indigo-500/50">
                <label>Name</label> <br />
                <Button variant="outlined">{Data.first_name}</Button>
                <br />
                <label>Phone</label> <br />
                <Button variant="outlined">{Data.phone_number}</Button>
                <br />
                <label>Category</label> <br />
                <Button variant="outlined">{Data.key_skill}</Button>
                <br />
                <label>Email</label> <br />
                <Button variant="outlined">{Data.email}</Button>
                <br />
                <label>Status</label> <br />
                <Button variant="outlined">{Data.status}</Button>
                <br />
              </div>
            </Grid>
            <Grid item={6}>
              <div className="Scanner animate__animated animate__backInUp shadow-lg shadow-indigo-500/50">
                <QR />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
