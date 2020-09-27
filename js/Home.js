import movie1 from "../images/movie1.svg";

const Home = function render() {
  return ` <section class="hero featuredMovies has-bullets">
  <div class="container">
    <div class="slide featured">
      <h2 class="featured-title">Peaky Blinders</h2>
      <p class="featured-overview">
        بيكي بلايندرز ‏ هو مسلسل جريمة بريطاني من ابتكار ستيفن نايت، تم عرضه
        لأول مرة على قناة بي بي سي الثانية في 12 سبتمبر 2013. تقع أحداث
        المسلسل في برمنغهام في إنجلترا، ويُركز على عائلة شيلبي الإجرامية في
        أعقاب الحرب العالمية الأولى.
      </p>
      <p class="buttons">
        <a href="details.html" class="button">شاهد الفلم</a>
        <a href="details.html" class="button is-secondary">أقرأ المزيد </a>
      </p>
    </div>
  </div>
  </section>
  <section class="section movies slider is-suggested has-arrows">
  <div class="container"></div>
  <h3 class="section-title">إقتراحنا لك</h3>
  <ul class="movies-grid">
    <li class="movie">
      <a href="details.html">
        <img src="${movie1}" alt="The Maze Runner" />
        <span class="movie-description"
          >The Maze Runner
          <span class="play-icon">
            <i class="fas fa-play-circle"></i>
          </span>
        </span>
      </a>
    </li>
    <li class="movie">
      <a href="#">
        <img src="${movie1}" alt="The Maze Runner" />
        <span class="movie-description"
          >The Maze Runner
          <span class="play-icon">
            <i class="fas fa-play-circle"></i>
          </span>
        </span>
      </a>
    </li>
    <li class="movie">
      <a href="#">
        <img src="${movie1}" alt="The Maze Runner" />
        <span class="movie-description"
          >The Maze Runner
          <span class="play-icon">
            <i class="fas fa-play-circle"></i>
          </span>
        </span>
      </a>
    </li>
    <li class="movie">
      <a href="#">
        <img src="${movie1}" alt="The Maze Runner" />
        <span class="movie-description"
          >The Maze Runner
          <span class="play-icon">
            <i class="fas fa-play-circle"></i>
          </span>
        </span>
      </a>
    </li>
  </ul>
  </section>
  <section class="movies is-trending has-arrows">
  <div class="container">
    <h3 class="section-title">الأكثر مشاهدة</h3>
    <ul class="movies-grid">
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
  </section>
  <section class="movies is-series">
  <div class="container">
    <h3 class="section-title">المسلسلات</h3>
    <ul class="movies-grid">
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
      <li class="movie">
        <a href="#">
          <img src="${movie1}" alt="The Maze Runner" />
          <span class="movie-description"
            >The Maze Runner
            <span class="play-icon">
              <i class="fas fa-play-circle"></i>
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
  </section>`;
}
export default Home;