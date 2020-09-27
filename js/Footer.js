import logo from "../images/logo.png"

const Footer = function render() {
  return ` <div class="container">
    <section class="footer-nav">
      <a class="navbar-logo grayscale" href="#/">
        <img src="${logo}" class="logo" alt="logo"
      /></a>
      <div class="navbar-menu">
        <ul class="navbar-menu">
          <li>
            <a href="#/" class="navbar-item active">الريئسية</a>
          </li>
          <li>
            <a class="navbar-item" href="#/movies">أفلام</a>
          </li>
          <li>
            <a class="navbar-item" href="#/shows">مسلسلات</a>
          </li>
        </ul>
      </div>
      <a class="navbar-item logout" href="#logout">تسجيل الخروج</a>
    </section>
  </div>`
}

export default Footer;