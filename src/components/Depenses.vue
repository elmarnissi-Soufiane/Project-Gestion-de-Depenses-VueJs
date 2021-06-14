<template>
    <div>
        <h3 class="text-info">Dépenses</h3>
        <hr>
        <ul class="list-group"  v-for="(dep, index) in depense" :key="index">
            <li class="list-group-item">
                {{ dep.libile }} {{ dep.price }}
                <span class="text-secondary"><i class="fa fa-times float-right" @click="removeDepense(dep, index)"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : ['bus', 'data'],
        name : 'Depenses',
        data() {
            return {
                depense : []
            }
        },
        methods: {
            addDepense() {
                this.depense.push(this.data);
                this.$emit('depenseAdd');
            },
            removeDepense (dep, index) {
                this.depense.splice(index, 1);
                this.$emit('removeDepense', dep);
            }
        },
        // Meni tmenta APp Ta3i Tw9e3 chi haja . 
        mounted () {
            this.bus.$on('addDepense', this.addDepense);
        }
    }
</script>

<style scoped>
    .fa:hover{
        cursor:pointer;
        color:red;
    }
</style>