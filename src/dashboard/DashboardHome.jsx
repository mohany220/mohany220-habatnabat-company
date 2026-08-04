export default function DashboardHome() {
    const cards = [
        {
            title: "المنتجات",
            value: "6",
            icon: "📦",
            color: "#198754",
        },
        {
            title: "الطلبات",
            value: "12",
            icon: "🛒",
            color: "#0d6efd",
        },
        {
            title: "العملاء",
            value: "48",
            icon: "👥",
            color: "#fd7e14",
        },
        {
            title: "المبيعات",
            value: "850,000 ج",
            icon: "💰",
            color: "#dc3545",
        },
    ];

    return (
        <>
            <h2 style={{ marginBottom: "25px" }}>الرئيسية</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            padding: "25px",
                            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                        }}
                    >
                        <h1>{card.icon}</h1>

                        <h3>{card.title}</h3>

                        <h2 style={{ color: card.color }}>
                            {card.value}
                        </h2>
                    </div>
                ))}
            </div>

            <div
                style={{
                    marginTop: "35px",
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                }}
            >
                <h3>آخر الطلبات</h3>

                <table
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr>
                            <th>رقم الطلب</th>
                            <th>العميل</th>
                            <th>المنتج</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>شركة النور</td>
                            <td>ملح نقاء 50 كيلو</td>
                            <td>جديد</td>
                        </tr>

                        <tr>
                            <td>#1002</td>
                            <td>شركة السلام</td>
                            <td>ملح نقاء طن</td>
                            <td>جارى التنفيذ</td>
                        </tr>

                        <tr>
                            <td>#1003</td>
                            <td>شركة الإيمان</td>
                            <td>ملح نقاء 25 كيلو</td>
                            <td>تم التسليم</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}