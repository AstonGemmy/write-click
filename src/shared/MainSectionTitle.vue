<template>
    <div :class="align" class="relative w-full text-white mx-auto text-3xl lg:text-6xl">
        <Icon v-if="faIcon" :icon="faIcon" />
        {{ titleText }}
    </div>
</template>

<script>
    
    import Icon from '../shared/Icon'

    export default {
        name: 'Main Section Title',
        props: ['title-text', 'align', 'faIcon'],
        components: {Icon}
    }

</script>