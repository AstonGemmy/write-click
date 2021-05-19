<template>
    <ul class="p-4">
        <li>
            <label v-for="(option, key) in shuffled_options[index]" :key="option" v-bind:for="option" class="cursor-pointer text-gray-600 p-4 bg-gray-100 my-2 flex items-center rounded-full">
                <span class="mr-4 uppercase">
                    {{ options_keys[key] }}
                </span>
                <input v-bind:id="option" v-bind:value="option" @input="$emit('update:modelValue', $event.target.value)" v-bind:name="payload[index].question" type="radio" class="mr-4 rounded-full border-4 border-blue-500 border-opacity-50 checked:border-opacity-100"> {{ option }}
            </label>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                options_keys: ['a', 'b', 'c', 'd', 'e'],
                shuffled_options: []
            }
        },
        props: ['payload', 'index'],
        emits: ['update:modelValue'],
        methods: {
            shuffle(payload) {
                let currentIndex = payload.length, temporaryValue, randomIndex;
                // While there remains elements to be shuffled...
                while (0 !== currentIndex) {
                    // Pick a remaining element
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1
                    // ...and swap it with the current element.
                    temporaryValue = payload[currentIndex];
                    payload[currentIndex] = payload[randomIndex];
                    payload[randomIndex] = temporaryValue
                }
                return payload;
            },
            arrangeOptions({payload, value}) {
                const index = payload.indexOf(value)
                if (index > -1) {
                    payload.splice(index, 1)
                    payload.push(value)
                }
                return payload;
            },
            // Set selected value as array's last element
            setItemUsingKey({payload, target, key}) {
                payload.forEach(item => {
                    target.push(
                        this.arrangeOptions({
                            payload: this.shuffle(item[key]),
                            value: 'None of the above'
                        })
                    )
                })
            },

        },
        mounted() {
            this.setItemUsingKey({
                payload: this.payload,
                target: this.shuffled_options,
                key: 'options'
            })
        }
    }
</script>