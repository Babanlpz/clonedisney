import GenresList from "./GenresList";
import MovieList from "./MovieList";

function GenreListMovies() {
  return (
    <>
      <div>
        {GenresList.genere.map(
          (item, index) =>
            index <= 4 && (
              <div key={index} className="p-8 px-8 md:px-16">
                <h2
                  className="text-[20px] text-white 
                font-bold"
                >
                  {item.name}
                </h2>
                <MovieList genreId={item.id} indexId={index} />
              </div>
            )
        )}
      </div>
    </>
  );
}

export default GenreListMovies;
