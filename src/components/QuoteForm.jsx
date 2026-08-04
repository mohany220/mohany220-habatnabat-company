export default function QuoteForm() {
    return (
        <section
            style={{
                padding: "80px 20px",
                direction: "rtl",
                textAlign: "center",
                background: "#f8f8f8",
            }}
        >
            <h2>اطلب عرض سعر</h2>

            <form
                style={{
                    maxWidth: "600px",
                    margin: "40px auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <input type="text" placeholder="اسم الشركة" />

                <input type="text" placeholder="اسم المسؤول" />

                <input type="tel" placeholder="رقم الهاتف" />

                <input type="email" placeholder="البريد الإلكتروني" />

                <textarea
                    rows="5"
                    placeholder="اكتب تفاصيل طلبك..."
                ></textarea>

                <button
                    style={{
                        background: "#b8860b",
                        color: "#fff",
                        border: "none",
                        padding: "15px",
                        cursor: "pointer",
                        borderRadius: "8px",
                    }}
                >
                    إرسال الطلب
                </button>
            </form>
        </section>
    );
}