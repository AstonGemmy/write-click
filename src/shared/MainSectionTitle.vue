<template>
    <div data-aos="fade-down" data-aos-duration="500" :class="align" class="relative w-full px-4 text-white mx-auto text-2xl lg:text-6xl">
        <Icon data-aos="fade-right" data-aos-delay="450" data-aos-duration="500" v-if="faIcon" :icon="faIcon" />
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