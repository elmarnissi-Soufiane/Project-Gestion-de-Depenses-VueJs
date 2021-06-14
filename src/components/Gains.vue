<template>
    <div>
        <h3 class="text-info">Gains</h3>
        <hr>
        <ul class="list-group"  v-for="(gain, index) in gains" :key="index">
            <li class="list-group-item">
                {{ gain.libile }} {{ gain.price }}
                <span class="text-secondary"><i class="fa fa-times float-right" @click="removeGain(gain, index)"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : ['bus', 'data'],
        name : 'Gains',
        data () {
            return {
                gains : []
            }
        },
        methods: {
            addGains() {
                this.gains.push(this.data);
                this.$emit('gainAdd');
            },
            removeGain (gain, index) {
                this.gains.splice(index, 1);
                this.$emit('removeGain', gain);
            }
        },
        // Meni tmenta APp Ta3i Tw9e3 chi haja . 
        mounted () {
            this.bus.$on('addGains', this.addGains);
        }
    }
</script>

<style scoped>
    .fa:hover{
        cursor:pointer;
        color:red;
    }
</style>