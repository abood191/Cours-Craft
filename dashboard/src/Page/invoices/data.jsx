import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

// Fetch users and teachers
const fetchUsers = async () => {
  const [usersResponse, teachersResponse] = await Promise.all([
    axios.get("http://127.0.0.1:8000/api/admin/getAllUsers"),
    axios.get("http://127.0.0.1:8000/api/admin/getAllTeachers"),
  ]);

  const students = usersResponse.data[0].filter(
    (user) => user.role === "student"
  );
  const teachers =
    teachersResponse.data.message === "There are no teachers"
      ? []
      : teachersResponse.data.filter((teacher) => teacher.is_teacher === 1);

  return [...students, ...teachers];
};

// Handle Delete
const handleDeleteClick = async (row, setRows) => {
  try {
    if (row.role === "teacher") {
      await axios.put(
        `http://127.0.0.1:8000/api/admin/deleteTeacher/${row.teacher_id}`
      );
      console.log("Teacher deleted", row);
    } else {
      await axios.put(
        `http://127.0.0.1:8000/api/admin/deleteUser/${row.user_id}`
      );
      console.log("Student deleted", row);
    }
    const updatedRows = await fetchUsers();
    setRows(updatedRows);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export const UserTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setRows(data);
    };
    loadUsers();
  }, []);

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
      headerName: "Username",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          sx={{ backgroundColor: "red" }}
          variant="contained"
          size="small"
          onClick={() => handleDeleteClick(params.row, setRows)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const mappedRows = rows.map((row, index) => ({ ...row, id: index + 1 }));

  return { columns, rows: mappedRows };
};
