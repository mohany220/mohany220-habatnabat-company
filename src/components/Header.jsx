function Header() {
    return (
        <header
            style={{
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,.08)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 40px",
                    direction: "rtl",
                }}
            >
                {/* اللوجو */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="حبة نبات"
                        style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "50%",
                        }}
                    />

                    <div>
                        <h2
                            style={{
                                margin: 0,
                                color: "#0B5D3F",
                            }}
                        >
                            حبة نبات
                        </h2>

                        <small
                            style={{
                                color: "#B68B2D",
                            }}
                        >
                            جودة الطبيعة
                        </small>
                    </div>
                </div>

                {/* القائمة */}
                <nav
                    style={{
                        display: "flex",
                        gap: "30px",
                    }}
                >
                    <a href="#hero">الرئيسية</a>

                    <a href="#about">من نحن</a>

                    <a href="#products">المنتجات</a>

                    <a href="#certificates">شهادات الجودة</a>

                    <a href="#contact">تواصل معنا</a>
                </nav>

                {/* الزر */}
                <button
                    style={{
                        background: "#B68B2D",
                        color: "#fff",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "30px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: ".3s",
                    }}
                >
                    طلب عرض سعر
                </button>
            </div>
        </header>
    );
}

export default Header;