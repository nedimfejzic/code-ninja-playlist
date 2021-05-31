import { useParams, useHistory } from "react-router";
import useFetch from "../useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
const history = useHistory();

  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () =>{

    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(()=>{
      history.push("/");
    })
  }


  return (
    <div>
      {isLoading && (
        <div className="font-bold text-green-900 text-3xl">
          Blog is loading...
        </div>
      )}
      {error && <div>{error}</div>}

      {blog && (
        <div className="p-8 shadow-lg ">
          <div className='flex justify-between mb-5'>
            <h1 className="text-3xl text-green-900 font-medium  ">
              {blog.title} - {id}
            </h1>
            <div className="text-sm mt-2 pl-5">Author: <span className="text-sm text-green-900 font-medium">
                {blog.autor}
              </span>
            </div>
          </div>

          <p className='pb-12 pt-2 text-gray-600 font-normal text-base'>{blog.body}</p>


          
<button onClick={handleDelete} type="button" className="mt-6 py-2 px-4  bg-red-900 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-64 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Delete  blog
</button>

        </div>
      )}
    </div>
  );
};
