<template>
    <a href="#" @click.prevent="logoutUser" class="absolute bottom-0 w-full left-0 bg-gradient-to-r hover:border-red-400 border-transparent border-l-4 hover:from-red-100 hover:to-transparent hover:text-red-600 text-red-400 py-4 pl-4 xl:pl-16 pr-4 flex items-center transition-all duration-700">
        <span class="flex justify-center items-center mr-8 w-8 h-8 rounded-full shadow">
            <i class="fa fa-power-off"></i>
        </span>
        <span class="">
            Logout
        </span>
    </a>
</template>