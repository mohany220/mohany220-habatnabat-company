function Reports() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>📊 التقارير</h2>

            <p style={{ marginBottom: "20px" }}>
                اختر التقرير الذي تريد عرضه أو طباعته.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "20px",
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                    }}
                >
                    <h3>📦 تقرير المنتجات</h3>
                    <p>عرض جميع المنتجات والكميات.</p>
                    <button>عرض التقرير</button>
                </div>

                <div
                    style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                    }}
                >
                    <h3>🛒 تقرير الطلبات</h3>
                    <p>عرض جميع طلبات العملاء.</p>
                    <button>عرض التقرير</button>
                </div>

                <div
                    style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                    }}
                >
                    <h3>👥 تقرير العملاء</h3>
                    <p>عرض بيانات العملاء.</p>
                    <button>عرض التقرير</button>
                </div>

                <div
                    style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                    }}
                >
                    <h3>📈 تقرير المخزون</h3>
                    <p>عرض حالة المخزون الحالية.</p>
                    <button>عرض التقرير</button>
                </div>
            </div>
        </div>
    );
}

export default Reports;