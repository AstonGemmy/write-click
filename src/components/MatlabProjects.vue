<template>
  
  <div class="">

    <div class="uppercase text-white mx-auto text-6xl">
      <i class="fa fa-laptop-code mx-auto lg:mr-4"></i> MATLAB PROJECTS
    </div>

    <div class="grid grid-flow-cols grid-cols-4 gap-y-8 justify-center text-white py-12">

        <div :class="`relative grid grid-flow-rows grid-cols-1 items-stretch overflow-hidden bg-${color}-500 mx-auto lg:mr-4 rounded-lg`">
            <div class="absolute top-0 left-0 px-2 py-1 text-sm rounded-br-xl bg-green-600 text-white">
                Completed
            </div>
            <img src="/images/cover pictures/desktop-in-office.jpg" class="max-h-64 flex items-start p-0 w-full overflow-hidden" alt="Matlab Project One">
            <p class="relative row-span-1 px-4 py-3 text-white">
                This is a simple computer vision project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.
            </p>
            <h3 class="flex items-end uppercase relative row-span-1 px-4 py-3">
                Computer Vision App
            </h3>
        </div>

        <div :class="`relative grid grid-flow-rows grid-cols-1 items-stretch overflow-hidden bg-${color}-500 mx-auto lg:mr-4 rounded-lg`">
            <div class="absolute top-0 left-0 px-2 py-1 text-sm rounded-br-xl bg-red-400 text-white">
                Pending
            </div>
            <img src="/images/cover pictures/desktop-in-office.jpg" class="max-h-64 flex items-start p-0 w-full overflow-hidden" alt="Matlab Project One">
            <p class="relative row-span-1 px-4 py-3 text-white">
                This is a simple computer vision project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.
            </p>
            <h3 class="flex items-end uppercase relative row-span-1 px-4 py-3">
                Computer Vision App
            </h3>
        </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'Matlab Projects',
    props: {
      color: String
    },
    methods: {
      setColor(color) {
        this.$emit('setColor', color)
      }
    },
    created() {
      this.setColor(this.color)
    }
  }
</script>