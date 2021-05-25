export const  Header =  () =>  {
        return ( 
           
<div>
    <nav class="bg-white dark:bg-gray-800">
        <div class="max-w-12xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <div className="uppercase text-2xl font-black text-red-900">
                            Nedim's blog
                        </div>
                    </a>
                    <div class="md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a class="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Home
                            </a>
                            <a class="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                About
                            </a>
                            <a class="text-gray-500  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Gallery
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
               
            </div>
        </div>
    </nav>
</div>

         );
}
 