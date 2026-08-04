function Inventory() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>📦 إدارة المخزن</h2>

            <hr />

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                }}
            >
                <thead>
                    <tr style={{ background: "#198754", color: "#fff" }}>
                        <th style={{ padding: "10px" }}>المنتج</th>
                        <th style={{ padding: "10px" }}>الكمية</th>
                        <th style={{ padding: "10px" }}>الوحدة</th>
                        <th style={{ padding: "10px" }}>الحالة</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            ملح نقاء جامبو 1000 كيلو
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            250
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            طن
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", color: "green" }}>
                            متوفر
                        </td>
                    </tr>

                    <tr>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            ملح نقاء 50 كيلو
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            120
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            شيكارة
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", color: "green" }}>
                            متوفر
                        </td>
                    </tr>

                    <tr>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            ملح نقاء 25 كيلو
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            80
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            شيكارة
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", color: "orange" }}>
                            كمية قليلة
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Inventory;