import movie1 from "../images/movie1.svg";
import movie2 from "../images/movie2.svg";
import movie3 from "../images/movie3.svg";
import movie4 from "../images/movie4.svg";

const Shows = function render() {
	return ` <section class="section filter">
	<div class="container">
		<form>
			<label for="movieType" class="movieTypeLabel">مسلسلات</label>
			<select id="movieType" class="movieTypeSelect">
				<option>نوع الفيلم</option>
				<option>دراما</option>
				<option>أكشن</option>
				<option>الغموض</option>
				<option>كوميديا</option>
			</select>
		</form>
	</div>
	</section>
	<section class="section movies slider has-arrows is-suggested">
	<div class="container">
		<h3 class="section-title">إقتراحتنا لك</h3>
		<ul class="movies-grid">
			<li class="movie">
				<a href="details.html">
					<img src="${movie1}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie2}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie3}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie4}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
		</ul>
	</div>
	</section>
	<section class="section movies slider has-arrows is-trending">
	<div class="container">
		<h3 class="section-title">الأكثر مشاهدة</h3>
		<ul class="movies-grid">
			<li class="movie">
				<a href="details.html">
					<img src="${movie2}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie3}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie4}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie1}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
		</ul>
	</div>
	</section>
	<section class="section movies slider has-arrows is-series">
	<div class="container">
		<h3 class="section-title">أحدث المسلسلات</h3>
		<ul class="movies-grid">
			<li class="movie">
				<a href="#">
					<img src="${movie1}" />
					<span class="movie-description">
						The Maze Runner
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie2}" />
					<span class="movie-description">
						Breaking Bad
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie3}" />
					<span class="movie-description">
						Peaky Blinders
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie4}" />
					<span class="movie-description">
						The Good Doctor
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie1}" />
					<span class="movie-description">
						The Maze Runner
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie2}" />
					<span class="movie-description">
						Breaking Bad
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie3}" />
					<span class="movie-description">
						Peaky Blinders
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#">
					<img src="${movie4}" />
					<span class="movie-description">
						The Good Doctor
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
		</ul>
	</div>
	</section>
	<section class="section movies slider has-arrows is-movies">
	<div class="container">
		<h3 class="section-title">أحدث الأفلام</h3>
		<ul class="movies-grid">
			<li class="movie">
				<a href="details.html">
					<img src="${movie3}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie4}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie1}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie2}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie2}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie3}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie4}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="details.html">
					<img src="${movie1}" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
		</ul>
	</div>
	</section> `;
}

export default Shows;
