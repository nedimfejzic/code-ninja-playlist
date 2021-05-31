import { Link, NavLink } from "react-router-dom"

export const  Header =  () =>  {
        return ( 
           
<div>
    <nav className="bg-white dark:bg-gray-800">
        <div className="max-w-12xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className="w-full justify-between flex items-center">
                    <Link className="flex-shrink-0" to="/">
                        <div className="uppercase text-2xl font-black text-green-900">
                            Nedim's blog
                        </div>
                    </Link>
                    <div className="md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" activeClassName="is-active" className="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                            <NavLink to="/create" activeClassName="is-active" className="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create</NavLink>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
               
            </div>
        </div>
    </nav>
</div>

         );
}
 