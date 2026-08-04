function Users() {
    const users = [
        {
            id: 1,
            name: "Mohamed Hany",
            username: "admin",
            role: "مدير النظام",
            status: "نشط",
        },
        {
            id: 2,
            name: "أحمد علي",
            username: "sales",
            role: "موظف مبيعات",
            status: "نشط",
        },
        {
            id: 3,
            name: "محمود حسن",
            username: "store",
            role: "أمين مخزن",
            status: "موقوف",
        },
    ];

    return (
        <div style={{ padding: "20px", direction: "rtl" }}>
            <h2>👤 إدارة المستخدمين</h2>

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
                ➕ إضافة مستخدم
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
                        <th>الاسم</th>
                        <th>اسم المستخدم</th>
                        <th>الصلاحية</th>
                        <th>الحالة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td style={{ textAlign: "center", padding: "10px" }}>
                                {user.id}
                            </td>

                            <td>{user.name}</td>

                            <td>{user.username}</td>

                            <td>{user.role}</td>

                            <td
                                style={{
                                    color: user.status === "نشط" ? "green" : "red",
                                    fontWeight: "bold",
                                }}
                            >
                                {user.status}
                            </td>

                            <td>
                                <button
                                    style={{
                                        marginLeft: "5px",
                                        background: "#ffc107",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    ✏️ تعديل
                                </button>

                                <button
                                    style={{
                                        background: "#dc3545",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    🗑 حذف
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;