import { Link } from "react-router-dom";

export const BlogList = ({ blogs }) => {
  return (
    <div className="flex flex-wrap pb-16">
      {blogs.map((blog) => (
        <div className="w-full md:w-1/2 lg:w-1/3 " key={blog.id}>
          <div className="border-green-900 shadow-2xl  rounded-lg cursor-pointer m-2">
            <Link to={`/blogs/${blog.id}`} className="">
              <div className="bg-white dark:bg-gray-800 p-4 ">
                <p className="text-green-900 dark:text-white text-2xl font-bold mb-2 py-2">
                  {blog.title}
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  {blog.body.length > 150 ? (
                    <>
                      {`${blog.body.substring(0, 150)}...  `}
                      <span className="font-extralight text-sm hover:text-green-900">Read more</span>
                    </>
                  ) : (
                    <>{blog.body}</>
                  )}
                </p>
                <div className="flex flex-wrap justify-starts items-center mt-4">
                  <p className="text-sm text-gray-600 mr-1">Author: </p>
                  <span className="text-sm text-green-900 font-medium">
                    {blog.autor}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
