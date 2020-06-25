new Vue({
    el: '#app',
    data: {
      playerLife: 0,
      rivalLife: 20,
      running: false
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.rivalLife === 0 
        }
    },
    methods: {

    },
    watch: {

    }
})