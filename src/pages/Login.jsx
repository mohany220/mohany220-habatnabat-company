import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "1234") {
            navigate("/dashboard");
        } else {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة");
        }
    };

    return (
        <div
            style={{
                direction: "rtl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#f4f6f9",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    width: "350px",
                    boxShadow: "0 0 10px rgba(0,0,0,.1)",
                }}
            >
                <h2 style={{ textAlign: "center", color: "#0B5D3F" }}>
                    تسجيل الدخول
                </h2>

                <input
                    type="text"
                    placeholder="اسم المستخدم"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "20px",
                    }}
                />

                <input
                    type="password"
                    placeholder="كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "15px",
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "20px",
                        background: "#0B5D3F",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    دخول
                </button>
            </form>
        </div>
    );
}