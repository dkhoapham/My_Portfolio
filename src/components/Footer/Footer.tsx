function Footer() {
  return (
    <footer
      style={{
        bottom: 0,
        width: "100%",
        height: "33px",
        display: "flex",
        position: "fixed",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "13px", color: "rgb(var(--nav-txt))" }}>
        &copy; {new Date().getFullYear()} Khoa Pham. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
