function Header({ navigate }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("home")}>
        L's Engine
      </div>

      <nav>
        <span onClick={() => navigate("home")}>Home</span>
        <span onClick={() => navigate("logic")}>Logic</span>
        <span onClick={() => navigate("about")}>About</span>
      </nav>
    </header>
  );
}

export default Header;