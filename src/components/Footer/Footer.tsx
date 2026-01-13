function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "4vh",
        display: "flex",
        marginTop: "auto",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "12px", color: "rgb(var(--nav-txt))" }}>
        &copy; {new Date().getFullYear()} Khoa Pham. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
