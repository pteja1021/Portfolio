export function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.875rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Teja. All rights reserved.</p>
    </footer>
  );
}
