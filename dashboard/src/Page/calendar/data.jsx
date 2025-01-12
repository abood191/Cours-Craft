import axios from "axios";
import { Button } from "@mui/material";

export const fetchCourses = async () => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/admin/get-courses"
  );
  const viewcourses = response.data.courses;

  // Map the data and add an `id` field based on the index
  return viewcourses.map((course, index) => ({
    ...course,
    id: index + 1, // Sequential ID starting from 1
  }));
};

export const handleDeleteClic = async (row, setRows) => {
  await axios.put(
    `http://127.0.0.1:8000/api/admin/deleteCourseByAdmin/${row.course_id}`
  );
  console.log("Course deleted:", row);

  // Fetch the updated data after deletion
  const updatedCourses = await fetchCourses();
  setRows(updatedCourses);
};

export const columns = (setRows) => [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    flex: 0.7,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "course_type",
    headerName: "Course Type",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "purchases_count",
    headerName: "Register Count",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "course_price",
    headerName: "Course Price",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Delete",
    headerName: "Delete Course",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        sx={{ backgroundColor: "red", color: "black" }}
        variant="contained"
        size="small"
        onClick={() => handleDeleteClic(params.row, setRows)}
      >
        Delete
      </Button>
    ),
  },
];
