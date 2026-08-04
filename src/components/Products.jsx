export default function Products() {
    const products = [
        {
            name: "ملح نقاء جامبو 1000 كيلو (طن)",
            image: "/factory.jpg",
        },
        {
            name: "ملح نقاء 50 كيلو",
            image: "/factory.jpg",
        },
        {
            name: "ملح نقاء 25 كيلو",
            image: "/factory.jpg",
        },
        {
            name: "ملح نقاء 4 كيلو",
            image: "/factory.jpg",
        },
        {
            name: "ملح نقاء 1 كيلو",
            image: "/factory.jpg",
        },
        {
            name: "ملح نقاء عبوة 700 جرام",
            image: "/factory.jpg",
        },
    ];

    return (
        <section
            style={{
                padding: "80px 8%",
                background: "#fff",
                direction: "rtl",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    color: "#00695c",
                    fontSize: "42px",
                    marginBottom: "50px",
                }}
            >
                منتجاتنا
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {products.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: "330px",
                            borderRadius: "15px",
                            overflow: "hidden",
                            boxShadow: "0 10px 25px rgba(0,0,0,.15)",
                            background: "#fff",
                            transition: ".3s",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                            }}
                        />

                        <div style={{ padding: "20px" }}>
                            <h3
                                style={{
                                    color: "#00695c",
                                    marginBottom: "15px",
                                }}
                            >
                                {item.name}
                            </h3>

                            <p
                                style={{
                                    color: "#666",
                                    lineHeight: "1.8",
                                }}
                            >
                                {item.description}
                            </p>

                            <button
                                style={{
                                    marginTop: "20px",
                                    width: "100%",
                                    padding: "12px",
                                    background: "#b8860b",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "17px",
                                }}
                            >
                                استفسر الآن
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}