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
    <div className="mx-4 w-full">
      <h1 className="text-3xl text-green-900">Create blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 font-normal mb-4 py-4"
      >
        <label className="block mt-2">Blog title: </label>
        <input
          className="shadow border-green-900 w-full py-2 px-2 md:w-1/2 font-bold  rounded-md"
          type=""
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label className="block  mt-2">Blog body: </label>
        <textarea
          className="shadow border-green-900 w-full py-2 px-2 md:w-1/2 font-bold rounded-md"
          type=""
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label className="block  mt-2">Blog author: </label>
        <select
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>

        <button className=" block mt-4 bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-64">
          {isLoading === true ? "Adding new blog..." : "Add new blog"}
        </button>
      </form>
    </div>
  );
};
