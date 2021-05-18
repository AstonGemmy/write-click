<template>
    <div class="grid grid-flow-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 justify-center text-white p-4 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="400" v-for="project in projects" :key="project.id" :class="addThemeBGColor400" class="border-4 border-white relative grid grid-flow-rows grid-cols-1 gap-0 items-stretch overflow-hidden mx-auto md:mr-4 rounded-lg">
            <div :class="[ project.status == 'completed' ? 'bg-green-600' : project.status == 'pending' ? 'bg-red-400' : '' ]" class="absolute top-0 left-0 px-2 py-1 text-sm rounded-br-xl text-white">
                {{ project.status }}
            </div>
            <div class="max-h-64 flex items-start p-0 w-ful overflow-hidden rounded-lg mt-4 mx-4">
                <img :src="project.src" class="overflow-hidden" :alt="project.title" />
            </div>
            <p class="relative row-span-1 px-4 py-3 text-white">
                {{ project.content }}
            </p>
            <h3 class="flex flex-wrap items-end uppercase relative row-span-1 px-4 py-3">
                {{ project.title }}
            </h3>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Project Card',
        props: ['projects', 'page-theme-color'],
        computed: {
            addThemeBGColor400() {
                return this.pageThemeColor ? `bg-${this.pageThemeColor}-900` : ''
            }
        }
    }

</script>