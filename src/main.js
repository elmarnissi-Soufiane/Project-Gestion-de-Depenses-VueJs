import Vue from 'vue';
import App from './App.vue';

//Vue.config.productionTip = false;

new Vue ({
    // Pour Affficher Le contenu .(createElement) .
    /* Ex : render : function(createElement){
        createElement(App);
    }*/
    render : h => h(App)
}).$mount('#app');