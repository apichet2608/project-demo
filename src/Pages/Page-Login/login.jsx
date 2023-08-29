import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Loginpic from "../../../public/fujikura--600.png";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await fetch(
            "http://10.17.77.111:3003/protected-route/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            setTokenValid(true);
            console.log(data);
            navigate("/page/project-task");
          } else {
            setTokenValid(false);
            console.log(data);
            navigate("/page/Login");
          }
        } else {
          setTokenValid(false);
          navigate("/page/Login");
          console.log("/page/Login");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการตรวจสอบโทเค็น:", error);
        setTokenValid(false);
      }
    };
    checkTokenValidity();
  }, []);

  useEffect(() => {
    // ...existing code...

    // Clear message after 3 seconds
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://10.17.77.111:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        localStorage.setItem("token", data.token);
        console.log(data.token);
        navigate("/page/project-task", { state: { userData: data.user } });
      } else {
        setMessage(data.message || "An error occurred while logging in");
      }
    } catch (error) {
      console.error("Failed to connect:", error);
      setMessage("Failed to connect to the server");
    }
  };

  const handleRegister = () => {
    navigate("/page/Register");
  };
  const handledept = () => {
    navigate("/page/Register/dept");
  };
  return (
    <>
      {/* Display company logo */}
      <div>
        <img src={Loginpic} className="image-size" />
      </div>
      {/* Display the form */}
      {/* แสดงฟอร์ม */}
      <form onSubmit={handleLogin} className="form-container">
        <h1>Smart Factory Login</h1>
        {/* ช่องใส่ชื่อผู้ใช้ */}
        <label className="form-label">Username:</label>
        <input
          type="text"
          name="username"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          className="form-input"
        />
        {/* ช่องใส่รหัสผ่าน */}
        <label className="form-label">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        {/* ปุ่มเข้าสู่ระบบ */}
        <button type="onSubmit" className="form-button">
          Login
        </button>
        {/* ปุ่มลงทะเบียน */}
        <button type="button" className="form-button" onClick={handleRegister}>
          Register
        </button>
        <button type="button" className="form-button" onClick={handledept}>
          + Dept
        </button>
        {message && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{message}</strong>
          </Alert>
        )}
      </form>
    </>
  );
}

export default Login;
