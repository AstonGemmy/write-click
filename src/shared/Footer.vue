<template>
  <div class="relative flex items-start h-auto w-full px-4 py-4 text-white justify-between">
    <div class="flex justify-center items-center p-4 uppercase text-xl mx-auto">
      Copyright {{ new Date().getFullYear() }}
    </div>
  </div>    
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>