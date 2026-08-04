function Sales() {
    const sales = [
        {
            id: 1,
            customer: "شركة النور",
            product: "ملح نقاء 50 كيلو",
            quantity: 100,
            total: "25,000 ج",
            date: "01/08/2026",
        },
        {
            id: 2,
            customer: "شركة السلام",
            product: "ملح نقاء جامبو 1000 كيلو",
            quantity: 5,
            total: "50,000 ج",
            date: "02/08/2026",
        },
        {
            id: 3,
            customer: "شركة الإيمان",
            product: "ملح نقاء 25 كيلو",
            quantity: 200,
            total: "30,000 ج",
            date: "03/08/2026",
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>💰 إدارة المبيعات</h2>

            <button
                style={{
                    margin: "20px 0",
                    padding: "10px 20px",
                    background: "#198754",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                ➕ فاتورة بيع جديدة
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
                        <th style={{ padding: "10px" }}>رقم الفاتورة</th>
                        <th>العميل</th>
                        <th>المنتج</th>
                        <th>الكمية</th>
                        <th>الإجمالي</th>
                        <th>التاريخ</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>

                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td style={{ padding: "10px", textAlign: "center" }}>{sale.id}</td>
                            <td>{sale.customer}</td>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.total}</td>
                            <td>{sale.date}</td>
                            <td>
                                <button>👁 عرض</button>{" "}
                                <button>🖨 طباعة</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Sales;