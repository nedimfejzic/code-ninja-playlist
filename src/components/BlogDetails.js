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

  const handleDelete = () => {

    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    })
  }


  return (
    <div>
      {isLoading && (
        <div className="font-semibold text-green-900 text-3xl">
          Blog is loading...
        </div>
      )}
      {error && <div>{error}</div>}


      <div className="bg-green-900">
        <div className=" mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="">
                  Blog details       </span>
              </p>
            </div>


          </div>
        </div>
      </div>


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

          <button onClick={handleDelete} className="flex flex-center px-10 py-2 text-red-400 font-bold text-sm transition ease-in duration-200 uppercase rounded-full hover:bg-red-600 hover:text-white border-2 border-red-400 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete blog
</button>

        </div>
      )}
    </div>
  );
};
