export function Contact() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <form
        style={{
          width: "100%",
          maxWidth: "32rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          background: "#fff",
          padding: "2rem",
          borderRadius: "0.75rem",
          boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Contact Me
        </h2>
        <input
          type="text"
          placeholder="Name"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />
        <textarea
          placeholder="Message"
          rows={4}
          style={{
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#3b82f6",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            border: "none",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}
