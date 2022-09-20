import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./Styles/VisitorDataTable.css";
import {TextField} from "@mui/material";

export default function VisitorDataTable() {
  const [Visitor, setVisitor] = useState([]);
  const [search, setSearch] = useState("");
  /*table head*/
  const getVisitorData = async () => {
    try {
      const data = await axios.get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      );
      console.log(data.data);
      setVisitor(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVisitorData();
  }, []);
  return (
    <div className="VisitorDataTable shadow-2xl overflow-auto animate__animated animate__fadeInLeft">
      <TableContainer className="p-8" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TextField
              label="Search visitor by name"
              variant="standard"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Visitor.filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.first.toLowerCase().includes(search.toLowerCase())
                //Change this search option phone,email or something if you needed
              ) {
                return item;
              }
            }).map((item) => (
              <TableRow key={item.first}>
                <TableCell component="th" scope="row">
                {item.first}
                </TableCell>
               
                <TableCell align="center">{item.balance}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.address}</TableCell>
                <TableCell>
                  <Button variant="outlined">Edit</Button>
                </TableCell>
                <TableCell>
                  <Button className="dlt-btn" variant="contained">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
