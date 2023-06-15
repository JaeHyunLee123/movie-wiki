import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, IAPIResponse } from "../api";

const Home = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["moives", "nowPlaying"],
    getNowPlaying
  );

  console.log(data);

  return (
    <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}>
      <ul>
        {data?.results?.map((movie) => (
          <li key={`${movie.id}`}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
