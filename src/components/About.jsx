export default function About() {
    return (
        <section
            style={{
                padding: "80px 10%",
                background: "#f8f8f8",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "50px",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ flex: 1 }}>
                    <h2
                        style={{
                            fontSize: "42px",
                            color: "#00695c",
                            marginBottom: "20px",
                        }}
                    >
                        من نحن
                    </h2>

                    <p
                        style={{
                            fontSize: "20px",
                            lineHeight: "2",
                            color: "#555",
                        }}
                    >
                        مصنع حبة نبات متخصص في تصنيع وتعبئة الملح الغذائي بأعلى
                        معايير الجودة العالمية، ونلتزم بتقديم منتجات غذائية آمنة
                        باستخدام أحدث خطوط الإنتاج، مع الالتزام الكامل بشهادات
                        الجودة العالمية وخدمة عملائنا داخل مصر وخارجها.
                    </p>

                    <br />

                    <ul
                        style={{
                            fontSize: "20px",
                            lineHeight: "2",
                            color: "#444",
                        }}
                    >
                        <li>✔ جودة عالمية</li>
                        <li>✔ شهادات ISO</li>
                        <li>✔ أحدث خطوط الإنتاج</li>
                        <li>✔ تصدير للأسواق المحلية والعالمية</li>
                    </ul>
                </div>

                <div style={{ flex: 1 }}>
                    <img
                        src="/factory.jpg"
                        alt="مصنع حبة نبات"
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,.2)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}