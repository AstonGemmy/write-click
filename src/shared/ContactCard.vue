<template>
    <div>
        <div class="flex flex-col md:flex-row justify-center text-white p-4 lg:py-12">
            <a data-aos="fade-up" data-aos-duration="300" href="tel:2348151555185" :class="addThemeBGColor600" class="w-full md:w-auto px-4 py-3 border-4 border-white my-4 mx-auto md:mx-2 rounded-lg">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fa fa-phone-alt text-2xl"></i>
                </span>
                <div class="mt-2">+2348151555185</div>
            </a>
            <a data-aos="fade-up" data-aos-duration="350" href="https://api.whatsapp.com/send?phone=2348151555185" :class="addThemeBGColor600" class="w-full md:w-auto px-4 py-3 border-4 border-white my-4 mx-auto md:mx-2 rounded-lg">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fab fa-whatsapp text-2xl"></i>
                </span>
                <div class="mt-2">@jideliori</div>
            </a>
            <a data-aos="fade-up" data-aos-duration="400" href="mailto:jideliori77@gmail.com" :class="addThemeBGColor600" class="w-full md:w-auto px-4 py-3 border-4 border-white my-4 mx-auto md:mx-2 rounded-lg">
                <span class="flex justify-center items-center rounded-full text-white shadow h-12 w-12">
                    <i class="fa fa-envelope text-2xl"></i>
                </span>
                <div class="mt-2">Jideilori77@gmail.com</div>
            </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="450" class="relative text-center lg:text-xl text-white p-4 py-12">
            <span :class="addThemeBGColor600" class="inline-flex justify-center items-center text-white rounded-full w-8 h-8 lg:w-12 lg:h-12 mr-4">
                <i class="fa fa-map-marker-alt"></i>
            </span>
            Cross River State,
            Nigeria
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact Card',
        props: ['page-theme-color'],
        computed: {
            addThemeBGColor600() {
                return `bg-${this.pageThemeColor}-600`
            }
        }
    }    
</script>