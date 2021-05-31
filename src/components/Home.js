import { Link } from "react-router-dom";
import { BlogList } from "../components/BlogList";
import useFetch from "../useFetch";

export const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="container ">
     <div className='px-4'>
     {error && <div className="text-red-600">{error}</div>}
      {isLoading && (
        <div className="m-5 text-4xl text-green-900">Loading...</div>
      )}
      {blogs !== null ? (
        blogs.length === 0 ? (
          <div>
            <p>Nema blogova... </p>
            <Link className='font-medium text-xl text-green-900 underline' to='/create'>Dodaj novi blog</Link>
          </div>
        ) : (
          <BlogList blogs={blogs} />
        )
      ) : (
        ""
      )}
     </div>
    </div>
  );
};
