import axios from "axios";
import { useState } from "react";
export default function SighnUp() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [phonenumber, setphonenumber] = useState("");
  const [photo_licence, setphoto_licence] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [role, setrole] = useState("");

  async function Submit(e) {
    let flag = false;
    e.preventDefault();
    setAccept(true);
    if (name.length < 1 || Password.length < 8 || Password != PasswordR) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios
          .post("http://127.0.0.1:8000/api/admin/adminRegister", {
            username: name,
            email: email,
            password: Password,
            phonenumber: photo_licence,
            photo_licence: phonenumber, // if teacher requierd
            role: role,
          })
          .then((r) => console.log(r.data));
        if (res.status === 200) {
          //    window.location.pathname = "/";
          //    window.localStorage.setItem("email", email);
        }
      }
    } catch (err) {
      setemailerr(err.response.status);
    }
  }
  return (
    <div className="parent">
      <div className="rejister">
        <form className="sad" onSubmit={Submit} action="">
          <label className="ff" htmlFor="name">
            Name :{" "}
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {name.length < 1 && accept == true && (
            <p className="error">User nmar is requird </p>
          )}
          <label className="ff" htmlFor="email">
            Email :
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          {emailerr === 422 && accept == true && (
            <p className="error"> email has already been taken </p>
          )}

          <label className="ff  " htmlFor="password">
            Passowed :{" "}
          </label>
          <input
            id="password"
            type="text"
            placeholder="password..."
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {Password.length < 8 && accept == true && (
            <p className="error">password must be more than 8 chart</p>
          )}
          <label className="ff" htmlFor="repeatpassword">
            Repeat password :{" "}
          </label>
          <input
            type="password"
            placeholder="Password"
            value={PasswordR}
            onChange={(e) => setPasswordR(e.target.value)}
          ></input>
          {Password != PasswordR && accept == true && (
            <p className="error">password must be the same </p>
          )}
          <div style={{ texbtAlign: "center" }}>
            <button type="submit"> regester </button>
          </div>
        </form>
      </div>
    </div>
  );
}
