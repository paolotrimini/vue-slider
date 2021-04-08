// Ricreare lo slider visto in jquery, con tecnologia Vue.
// BONUS: aggiungere un timer che permetta di ciclare le immagini
// in automatico (cambio ogni 3sec).

function initVue() {

    new Vue({

        el: '#app',
        data: {
            imgCorr : 0,
            timer: 0,
            imgs : [

                'img/ny.jpg',
                'img/la.jpg',
                'img/tk.jpg',
                'img/rm.jpg'
            ],
        },

        methods: {

            // img precedente
            prevImg: function() {
                this.imgCorr--;
                if(this.imgCorr < 0) {
                    this.imgCorr = this.imgs.length -1;
                }
            },

            // img successiva
            nextImg: function() {
                this.imgCorr++;
                if(this.imgCorr === this.imgs.length) {
                    this.imgCorr = 0;
                }
            }
        },

        // BONUS: autoplay 3 secondi

        mounted: function(){
            setInterval(() => {
                this.nextImg();
            }, 3000);
        }
    });

} // fine initVue

function init() {
    initVue();
}
// $(init);
document.addEventListener('DOMContentLoaded', init);