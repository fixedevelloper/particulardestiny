export default function WhatsAppButton() {
    const phoneNumber = "+237699902946"; // Ton numéro WhatsApp
    const message = "Bonjour, je souhaite vous contacter !"; // Message initial

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber.replace(
            /[^\d]/g,
            ""
        )}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            onClick={handleClick}
            style={{
                position: "fixed",
                bottom: "100px",
                right: "20px",
                zIndex: 1000,
                cursor: "pointer",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <img
                src="/img/icon/whatsapp.svg" // met ton icône WhatsApp
                alt="WhatsApp"
                style={{ width: "35px", height: "35px" }}
            />
        </div>
    );
}