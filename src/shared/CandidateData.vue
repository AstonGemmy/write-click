<template>
    <div class="relative px-4">
        <div v-for="(candidate, key) in candidate" :key="candidate.name" class="flex items-center text-sm relative py-1 px-4">
            <span class="font-bold mr-4"> {{ keyToProperFormat(key) }}:</span>
            <span class=""> {{ candidate }} </span>                            
        </div>
    </div>
</template>

<script>
export default {
    props: ['candidate'],
    methods: {
        keyToProperFormat(key) {
            if (key !== null) {
            key = key.split('_');
            key = key.map(word => { 
                return word[0].toUpperCase() + word.slice(1);
            }).join(" ");
            return key
            }
        },
    }
}
</script>