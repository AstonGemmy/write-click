<template>
    <div :class="align" class="text-white mx-auto text-6xl">
        <Icon v-if="icon" :icon="icon" /> {{ titleText }}
    </div>
</template>

<script>
    
    import Icon from '../shared/Icon'

    export default {
        name: 'Main Section Title',
        props: ['title-text', 'align', 'icon'],
        components: {
            Icon
        }
    }

</script>