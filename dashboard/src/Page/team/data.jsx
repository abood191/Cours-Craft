import axios from "axios";

let users1 = [];
let users = [];
let user = [];
let show2 = await axios.get("http://127.0.0.1:8000/api/admin/getAllTeachers");

if (show2.data.message === "There are no teachers") {
  users1 = [];
} else {
  users1 = show2.data.filter(filterstudent);
}
function filterstudent(element) {
  return element.is_teacher === 1;
}
console.log(users1, "dsadasdasdddd");


let show = await axios.get("http://127.0.0.1:8000/api/admin/getAllUsers");

users = show.data[0].filter(filteruser);
function filteruser(element) {
  return element.role === "student" || element.role === "admin";
}
console.log(users, "dsadas");
console.log(show.data, "kkk");
user = [...users, ...users1];
console.log(show.data[0], "sad");

export const rows = user.map((row, index) => ({ ...row, id: index + 1 }));
