function Settings() {
    return (
        <div style={{ padding: "20px", direction: "rtl" }}>
            <h2>⚙️ إعدادات النظام</h2>

            <div
                style={{
                    background: "#fff",
                    padding: "20px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                }}
            >
                <h3>بيانات الشركة</h3>

                <div style={{ marginBottom: "15px" }}>
                    <label>اسم الشركة</label>
                    <br />
                    <input
                        type="text"
                        defaultValue="مصنع حبة نبات"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>رقم الهاتف</label>
                    <br />
                    <input
                        type="text"
                        placeholder="010xxxxxxxx"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>البريد الإلكتروني</label>
                    <br />
                    <input
                        type="email"
                        placeholder="info@habatnabat.com"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>عنوان المصنع</label>
                    <br />
                    <textarea
                        rows="4"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                        }}
                    ></textarea>
                </div>

                <button
                    style={{
                        background: "#198754",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    💾 حفظ الإعدادات
                </button>
            </div>
        </div>
    );
}

export default Settings;