function Products() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>🧂 إدارة المنتجات</h2>

            <button
                style={{
                    margin: "15px 0",
                    padding: "10px 20px",
                    background: "#198754",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                ➕ إضافة منتج
            </button>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                }}
            >
                <thead style={{ background: "#198754", color: "#fff" }}>
                    <tr>
                        <th style={{ padding: "12px" }}>#</th>
                        <th>اسم المنتج</th>
                        <th>الوزن</th>
                        <th>السعر</th>
                        <th>الحالة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ملح نقاء جامبو</td>
                        <td>1000 كيلو (طن)</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>ملح نقاء</td>
                        <td>50 كيلو</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>ملح نقاء</td>
                        <td>25 كيلو</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>ملح نقاء</td>
                        <td>4 كيلو</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>ملح نقاء</td>
                        <td>1 كيلو</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>ملح نقاء</td>
                        <td>700 جرام</td>
                        <td>---</td>
                        <td style={{ color: "green" }}>متوفر</td>
                        <td>
                            <button>✏️</button>{" "}
                            <button>🗑️</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Products;