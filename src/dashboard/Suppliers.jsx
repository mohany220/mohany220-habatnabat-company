function Suppliers() {
    const suppliers = [
        {
            id: 1,
            name: "شركة النور للتوريدات",
            phone: "01012345678",
            address: "القاهرة",
            status: "نشط",
        },
        {
            id: 2,
            name: "شركة السلام",
            phone: "01098765432",
            address: "الإسكندرية",
            status: "نشط",
        },
        {
            id: 3,
            name: "شركة المستقبل",
            phone: "01122334455",
            address: "الجيزة",
            status: "موقوف",
        },
    ];

    return (
        <div style={{ padding: "20px", direction: "rtl" }}>
            <h2>🚚 إدارة الموردين</h2>

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
                ➕ إضافة مورد
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
                        <th style={{ padding: "10px" }}>الكود</th>
                        <th>اسم المورد</th>
                        <th>رقم الهاتف</th>
                        <th>العنوان</th>
                        <th>الحالة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>

                <tbody>
                    {suppliers.map((supplier) => (
                        <tr key={supplier.id}>
                            <td style={{ textAlign: "center", padding: "10px" }}>
                                {supplier.id}
                            </td>
                            <td>{supplier.name}</td>
                            <td>{supplier.phone}</td>
                            <td>{supplier.address}</td>
                            <td
                                style={{
                                    color:
                                        supplier.status === "نشط"
                                            ? "green"
                                            : "red",
                                    fontWeight: "bold",
                                }}
                            >
                                {supplier.status}
                            </td>
                            <td>
                                <button>✏️ تعديل</button>{" "}
                                <button>🗑️ حذف</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Suppliers;