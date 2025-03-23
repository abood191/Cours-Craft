import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header.jsx";
import { fetchCourses, columns } from "./data.jsx";

const Courses = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInitialCourses = async () => {
      const initialCourses = await fetchCourses();
      setRows(initialCourses);
    };

    fetchInitialCourses();
  }, []);

  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header
        title="Show All Courses"
        subTitle="List of courses and delete them"
      />
      <div style={{ height: "80vh" }}>
        {" "}
        {/* 'vh' stands for viewport height */}{" "}
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          getRowId={(row) => row.course_id} // Use course_id as the unique row identifier
          columns={columns(setRows)} // Pass setRows to handle dynamic updates
        />{" "}
      </div>
    </Box>
  );
};

export default Courses;
