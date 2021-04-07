// Ricreare lo slider visto in jquery, con tecnologia Vue.
// BONUS: aggiungere un timer che permetta di ciclare le immagini
// in automatico (cambio ogni 3sec).

function initVue() {

    new Vue({

        el: '#app',
        data: {
            img_corr : 0,
            timer: 0,
            imgs : [

                'img/ny.jpg',
                'img/la.jpg',
                'img/tk.jpg',
                'img/rm.jpg'
            ],
        },

        methods: {

            // img successiva
            next() {
                this.img_corr += 1;
                if(this.img_corr == this.imgs.length) {
                    this.img_corr = 0;
                }
            },

            // img precedente
            prev() {
                this.img_corr -= 1;
                if(this.img_corr < 0) {
                    this.img_corr = this.imgs.length -1;
                }
            },

            // BONUS: autoplay 3 secondi
            play() {
                let app = this;
                this.timer = setInterval(function() {
                    app.next();
                }, 3000);}

        },

        // autoplay
        created: function() {
            this.play();
        }

    });


}

function init() {
    initVue();
}
// $(init);
document.addEventListener('DOMContentLoaded', init);