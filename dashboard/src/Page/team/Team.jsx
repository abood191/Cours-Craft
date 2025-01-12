import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { rows } from "./data.jsx";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header.jsx";

const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      flex: 0.7,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "username",
      headerName: "username",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "phonenumber",
      headerName: "phonenumber",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "role",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            sx={{
              mx: "auto",
              mt: "10px",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                role === "admin"
                  ? theme.palette.primary.dark
                  : role === "teacher"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {role === "admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {role === "teacher" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {role === "student" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography
              sx={{ fontSize: "13px", color: "#fff", align: "center" }}
            >
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title={"Users"} subTitle={"Managing the Application Members"} />

      <div style={{ height: "80vh" }}>
        {" "}
        {/* 'vh' stands for viewport height */}
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          onRowClick={console.log("a")}
          rows={rows}
          getRowId={(row) => row.user_id}
          columns={columns}
        />
      </div>
    </Box>
  );
};
export default Team;
