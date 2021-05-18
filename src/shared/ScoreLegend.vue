<template>
    <div>
        <!-- Score Legend -->
        <h1 class="sticky -top-4 bg-white flex justify-between items-center mt-4 px-8 md:px-4 xl:px-8 py-4 text-pink-800 font-bold">
            Score Legend
            <i class="far fa-bell text-red-600"></i>
        </h1>
        
        <div class="text-sm px-8 flex gap-2 flex-wrap bg-bue-200">
            <div class="bg-gradient-to-r from-red-300 to-red-100 hover:text-blue-600 text-gray-600 py-1 px-4 flex items-center rounded-full">
                <span class="flex justify-center items-center mr-2 w-4 h-4 rounded-full shadow">
                    <i class="fa w-2 h-2 rounded-full bg-red-500"></i>
                </span>
                <span class="">
                    Fail
                </span>
            </div>
            <div class="bg-gradient-to-r from-yellow-300 to-yellow-100 hover:text-blue-600 text-gray-600 py-1 px-4 flex items-center rounded-full">
                <span class="flex justify-center items-center mr-2 w-4 h-4 rounded-full shadow">
                    <i class="fa w-2 h-2 rounded-full bg-yellow-500"></i>
                </span>
                <span class="">
                    Pass
                </span>
            </div>
            <div class="bg-gradient-to-r from-green-300 to-green-100 hover:text-blue-600 text-gray-600 py-1 px-4 flex items-center rounded-full">
                <span class="flex justify-center items-center mr-2 w-4 h-4 rounded-full shadow">
                    <i class="fa w-2 h-2 rounded-full bg-green-500"></i>
                </span>
                <span class="">
                    Good
                </span>
            </div>
            <div class="bg-gradient-to-r from-blue-300 to-blue-100 hover:text-blue-600 text-gray-600 py-1 px-4 flex items-center rounded-full">
                <span class="flex justify-center items-center mr-2 w-4 h-4 rounded-full shadow">
                    <i class="fa w-2 h-2 rounded-full bg-blue-500"></i>
                </span>
                <span class="">
                    Excellent
                </span>
            </div>              
            <div class="py-2 text-blue-600">
                Where do you belong?
            </div>
        </div>
    </div>            
</template>