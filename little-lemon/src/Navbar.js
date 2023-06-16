function Navbar() {
    return (
  <nav  className="navbar">
    <div className = 'navbar-container'>
    <ul>
      <li> <a href = "/"> <img src ="Logo.svg" alt ="Little Lemon Logo"></img> </a></li>;
        <li> <a href = "/header"> Header</a></li>;
        <li> <a href = "/main"> Main </a></li>;
        <li> <a href = "/footer"> Footer </a></li>;
    </ul>
    </div>
  </nav>
    );
  }

  export default Navbar; 