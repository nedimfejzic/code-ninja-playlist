import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [autor, setAutor] = useState("Mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, autor };

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((data) => {


      console.log("new blog added");
      setIsLoading(false);

      setTitle("");
      setBody("");
      setAutor("Mario");

      history.push('/');

    })

  };

  return (
    <div className="">


      <div class="bg-green-900">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="">
                  Create a new blog          </span>
              </p>
            </div>


          </div>
        </div>
      </div>





      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-800 font-normal mb-4 py-4"
        >
          <label className="block mt-2 text-green-900 font-bold text-sm">Blog title: </label>
          <input
            className="shadow border-gray-300 w-full py-2 px-2 font-bold  rounded-md border"
            type=""
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label className="block  mt-2 text-green-900 font-bold text-sm">Blog body: </label>
          <textarea
            className="shadow border-gray-300 w-full py-2 px-2 font-bold rounded-md  border h-48"
            type=""
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label className="block  mt-2 text-green-900 font-bold text-sm">Blog author: </label>
          <select
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border "
          >
            <option value="Mario">Mario</option>
            <option value="Luigi">Luigi</option>
          </select>

          <button className=" block mt-8 bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full">
            {isLoading === true ? "Adding new blog..." : "Add new blog"}
          </button>
        </form>
      </div>
    </div>
  );
};
