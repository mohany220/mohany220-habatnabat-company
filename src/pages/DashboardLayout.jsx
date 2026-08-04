import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout() {
    return (
        <>
            <Sidebar />

            <div
                style={{
                    marginRight: "260px",
                    background: "#f4f6f9",
                    minHeight: "100vh",
                    direction: "rtl",
                }}
            >
                <Topbar />

                <div style={{ padding: "30px" }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}