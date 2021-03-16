<template>
    <div>
        <div class="flex justify-center text-white p-4 py-12">
            <a href="tel:2348103561805" :class="`bg-${pageThemeColor}-500 px-4 py-3 border-4 border-white mx-4 rounded-lg`">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fa fa-phone-alt text-2xl"></i>
                </span>
                <div class="mt-2">+2348103561805</div>
            </a>
            <a href="mailto:jideliori@gmail.com" :class="`bg-${pageThemeColor}-500 px-4 py-3 border-4 border-white mx-4 rounded-lg`">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fab fa-whatsapp text-2xl"></i>
                </span>
                <div class="mt-2">+2348103561805</div>
            </a>
            <a href="mailto:jideliori@gmail.com" :class="`bg-${pageThemeColor}-500 px-4 py-3 border-4 border-white mx-4 rounded-lg`">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fa fa-envelope text-2xl"></i>
                </span>
                <div class="mt-2">Jideilori@gmail.com</div>
            </a>
        </div>
        <div class="relative text-center text-xl text-white p-4 py-12">
            <i :class="`fa fa-map-marker-alt bg-${pageThemeColor}-500 text-white p-4 rounded-full w-12 h-12 mr-4`"></i>
            Mayne Avenue, Calabar,
            Cross River State,
            Nigeria
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact Card',
        props: ['page-theme-color']
    }    
</script>