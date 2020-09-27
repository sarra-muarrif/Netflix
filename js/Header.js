import logo from "../images/logo.png"

const Header = function render() {
  return `
    <div class="container">
      <button class="navbar-burger"><span class="navicon"></span></button>
      <a class="navbar-item navbar-logo" href="#/"
        ><img src="${logo}" class="logo" alt="logo"
      /></a>
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
      <div class="navbar-search">
        <input
          class="search-input"
          type="text"
          name="search"
          placeholder="إبحث عن الفلم"
        />
      </div>
    </div>`;
}

export default Header;