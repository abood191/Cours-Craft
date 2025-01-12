import { Button } from "@mui/material";
import axios from "axios";
let users = [];
const handleDeleteClic = (row) => {
  if (row.role === "teacher"){

  axios.put(`http://127.0.0.1:8000/api/admin/deleteTeacher/${row.teacher_id}`);
  console.log("asdad")

  console.log("teacher deleted", row);
  // Add your custom logic here
}else{ axios.put(`http://127.0.0.1:8000/api/admin/deleteUser/${row.user_id}`)
console.log("ssssssss")}};

export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    flex: 0.7,
    align: "center",
    headerAlign: "center"
  },
 

  {
    field: "username",
    headerName: "username",
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
    headerName: "role",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Delete",
    headerName: "delete",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        sx={{ backgroundColor: "red" }}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleDeleteClic(params.row)}
      >
        Delete
      </Button>
    ),
  },
];
let use = [];
let users1 = [];
let show2 = await axios.get("http://127.0.0.1:8000/api/admin/getAllTeachers");
if (show2.data.message === "There are no teachers") {
  users1 = []
}else{
users1 = show2.data.filter(filterstudent);}
function filterstudent(element) {
  return element.is_teacher === 1;
}
let show = await axios.get("http://127.0.0.1:8000/api/admin/getAllUsers");
users = show.data[0].filter(filteruser);
function filteruser(element) {
  return element.role === "student";
}
use = [...users, ...users1];
console.log(users, "users");
export const rows = use.map((row, index) => ({ ...row, id: index + 1 }));
