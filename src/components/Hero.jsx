import factory from "../assets/factory.jpg";

function Hero() {
    return (
        <section
            style={{
                backgroundImage: `url(${factory})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "650px",
                display: "flex",
                alignItems: "center",
                direction: "rtl",
                color: "white",
            }}
        >
            <div
                style={{
                    width: "45%",
                    marginRight: "80px",
                    background: "rgba(0,0,0,.45)",
                    padding: "40px",
                    borderRadius: "15px",
                }}
            >
                <h1
                    style={{
                        fontSize: "64px",
                        color: "white",
                        lineHeight: "1.4",
                        marginBottom: "25px",
                        fontWeight: "bold",
                    }}
                >
                    جودة الطبيعة
                    <br />
                    <span style={{ color: "#c99a2e" }}>
                        في حبة نبات
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        lineHeight: "40px",
                        marginBottom: "30px",
                    }}
                >
                    أعلى معايير الجودة في تصنيع وتعبئة الملح
                    <br />
                    ومنتجات غذائية عالية الجودة.
                </p>

                <button
                    style={{
                        background: "#B68B2D",
                        color: "#fff",
                        border: "none",
                        padding: "15px 35px",
                        borderRadius: "8px",
                        fontSize: "18px",
                        marginLeft: "15px",
                        cursor: "pointer",
                    }}
                >
                    استعرض منتجاتنا
                </button>

                <button
                    style={{
                        background: "#0B5D3F",
                        color: "#fff",
                        border: "none",
                        padding: "15px 35px",
                        borderRadius: "8px",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}
                >
                    تواصل معنا
                </button>
            </div>
        </section>
    );
}

export default Hero;
