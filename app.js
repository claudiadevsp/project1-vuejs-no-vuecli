new Vue({
    el: '#app',
    data: {
      playerLife: 100,
      rivalLife: 100,
      running: false,
      logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.rivalLife === 0 
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.rivalLife = 100
            this.log = ''
        },
        attack(special) {
            this.hurt('rivalLife', 5, 10, special, 'Player', 'Rival', 'player')
            if(this.rivalLife > 0) {
                this.hurt('playerLife', 7, 12, special, 'Rival', 'Player', 'rival')
            }            
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Rival', 'Player', 'rival')
        },
        hurt(props, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[props] = Math.max(this[props] - hurt , 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player ganhou força de ${heal}`, 'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.running = false
            }
        }
    }
})