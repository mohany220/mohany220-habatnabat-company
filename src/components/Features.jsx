function Features() {
    const features = [
        "جودة عالية مطابقة للمواصفات",
        "مصنع معتمد بأحدث التقنيات",
        "تغليف بأحجام متعددة",
        "توصيل لجميع المحافظات",
        "أسعار تنافسية",
        "خدمة عملاء على مدار الساعة",
    ];

    return (
        <section
            style={{
                padding: "80px 10%",
                background: "#f8f8f8",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    color: "#00695c",
                    marginBottom: "50px",
                    fontSize: "38px",
                }}
            >
                لماذا حبة نبات؟
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "25px",
                }}
            >
                {features.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#fff",
                            padding: "35px",
                            borderRadius: "15px",
                            boxShadow: "0 5px 20px rgba(0,0,0,.1)",
                            transition: ".3s",
                        }}
                    >
                        <h3
                            style={{
                                color: "#b68b2d",
                                marginBottom: "15px",
                            }}
                        >
                            ✔
                        </h3>

                        <p
                            style={{
                                fontSize: "18px",
                                color: "#444",
                            }}
                        >
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );

}



export default Features;