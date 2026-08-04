import StatCard from "../components/StatCard";

function Home() {
    return (
        <div>
            <h1 style={{ marginBottom: "20px" }}>
                مرحباً بك في لوحة التحكم
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                <StatCard title="المنتجات" value="6" color="#198754" />
                <StatCard title="العملاء" value="0" color="#0d6efd" />
                <StatCard title="الطلبات" value="0" color="#fd7e14" />
                <StatCard title="المستخدمون" value="1" color="#6f42c1" />
            </div>
        </div>
    );
}

export default Home;