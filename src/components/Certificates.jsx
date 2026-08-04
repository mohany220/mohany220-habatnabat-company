function Certificates() {
    const certificates = [
        "ISO 9001",
        "ISO 22000",
        "ISO 45001",
        "HACCP",
    ];

    return (
        <section
            id="certificates"
            style={{
                padding: "80px 10%",
                background: "#f8f8f8",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "38px",
                    color: "#006b3f",
                    marginBottom: "15px",
                }}
            >
                الشهادات
            </h2>

            <p
                style={{
                    color: "#666",
                    marginBottom: "40px",
                    fontSize: "18px",
                }}
            >
                نلتزم بأعلى معايير الجودة والسلامة الغذائية.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                {certificates.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#fff",
                            padding: "35px",
                            borderRadius: "15px",
                            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#006b3f",
                        }}
                    >
                        🏅
                        <br />
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;