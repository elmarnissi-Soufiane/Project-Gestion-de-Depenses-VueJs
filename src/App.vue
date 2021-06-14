
<template>
    <div>
        <div class="container">

            <h3 class="text-danger text-center mt-2">{{name}}</h3>

            <h3 class="text-center mt-2" :class="classObject">{{ montant }}</h3>

            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card-body bg-light">
                        <div class="form-inline">
                            <div class="form-group">
                                <input type="text" v-model='data.libile' placeholder="Libilé" class="form-control m-3" name="" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model='data.price' placeholder="Montant" class="form-control mr-3" name="" value="">
                            </div>
                            <div class="form-group">
                                <button type="" class="btn btn-danger btn-sm mr-1" @click="addGains()">
                                    <i class="fa fa-plus"></i>
                                </button>
                                <button type="" class="btn btn-info btn-sm" @click="addDepense()">
                                    <i class="fa fa-minus-square"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <Gains :bus="bus" :data="data" @gainAdd ="gainAdd" @removeGain="removeGain"></Gains>
                </div>
                <div class="col-md-6">
                    <Depenses :bus="bus" :data="data" @depenseAdd="depenseAdd" @removeDepense="removeDepense"></Depenses>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Gains from './components/Gains.vue';
    import Depenses from './components/Depenses.vue';

    // Pour Faire un bus Qui permet de recupere des donnes et envoyer (comonents  vers un autre) . 
    import Vue from 'vue';

    export default {
        name : 'App',
        data() {
            return {
                bus : new Vue(),
                name : 'Gestion de Depenses',
                data : {
                    libile : '', price : ''
                },
                montant : 0,
                positif : true
            }
        },
        // Pour Dire tu travaille avec componenets .
        components: {
                    Gains,Depenses
        },
        methods: {
            addDepense() {
                if(this.data.libile.length && this.data.price.length){
                    this.bus.$emit("addDepense");
                }
            },
            depenseAdd () {
                this.montant -= parseInt(this.data.price);
                if(this.montant < 0){
                    this.positif = false;
                }
                else{
                    this.positif = true;
                }
                this.data = {};
            },
            removeDepense (dep){
                this.montant += parseInt(dep.price);
                if(this.montant < 0){
                    this.positif = false;
                }
                else{
                    this.positif = true;
                }
            },

            addGains() {
                if(this.data.libile.length && this.data.price.length){
                    this.bus.$emit("addGains");
                }
            },
            gainAdd () {
                this.montant += parseInt(this.data.price);
                if(this.montant > 0){
                    this.positif = true;
                }else{
                    this.positif = false;
                }
                this.data = {};
            },
            removeGain (gain) {
                this.montant -= parseInt(gain.price);
                if(this.montant > 0){
                    this.positif = true;
                }
                else{
                    this.positif = false;
                }
            }
        },
        computed : {
            classObject (){
                return !this.positif ? 'negatif' : 'positif';
            }
        }
    }
</script>

<!-- scoped : ya3eni css li khedame mkhasses fa9ate lhade emplate . -->
<style scoped>
    .positif{
        background-color:green;
        padding: 2px;
        color: bisque;
        border-radius: 5px;
    }
    .negatif{
        background-color: red;
        padding: 2px;
        color: bisque;
        border-radius: 5px;
    }
</style>