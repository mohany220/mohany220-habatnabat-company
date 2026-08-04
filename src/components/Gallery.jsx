function Gallery() {
    const images = [
        "/factory.jpg",
        "/factory.jpg",
        "/factory.jpg",
        "/factory.jpg",
        "/factory.jpg",
        "/factory.jpg",
    ];

    return (
        <section
            style={{
                padding: "80px 10%",
                background: "#ffffff",
                direction: "rtl",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    color: "#00695c",
                    fontSize: "40px",
                    marginBottom: "50px",
                }}
            >
                معرض الصور
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "20px",
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`صورة ${index + 1}`}
                        style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            borderRadius: "15px",
                            boxShadow: "0 5px 20px rgba(0,0,0,.15)",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default Gallery;