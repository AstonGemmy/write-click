<template>
    <div :class="addThemeBGColor400" class="relative grid grid-flow-rows grid-cols-1 items-stretch overflow-hidden mx-auto lg:mr-4 rounded-lg">
        <div :class="projectStatusBGColor" class="absolute top-0 left-0 px-2 py-1 text-sm rounded-br-xl text-white">
            {{ project.status }}
        </div>
        <img :src="project.src" class="max-h-64 flex items-start p-0 w-full overflow-hidden" :alt="project.title">
        <p class="relative row-span-1 px-4 py-3 text-white">
            {{ project.content }}
        </p>
        <h3 class="flex items-end uppercase relative row-span-1 px-4 py-3">
            AI App
        </h3>
    </div>
</template>

<script>

    export default {
        name: 'Project Card',
        props: ['project', 'page-theme-color'],
        computed: {
            addThemeBGColor400() {
                return this.pageThemeColor ? `bg-${this.pageThemeColor}-400` : ''
            },
            projectStatusBGColor() {
                return this.project.status == 'completed' ? 'bg-green-600' : this.project.status == 'pending' ? 'bg-red-400' : ''
            },
        }
    }

</script>