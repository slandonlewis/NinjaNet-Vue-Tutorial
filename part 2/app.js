const app = Vue.createApp({
    // data function can store things like variables to be used later
    data() {
        return {
            showText: false,
            showBoxes: false,
            title: 'Changable Text',
            number: 0,
            x: 0,
            y: 0
        }
    },
    // functions
    methods: {
        changeText(textToChangeTo) {
            this.title = textToChangeTo
        },
        toggleShowText() {
            this.showText = !this.showText // change showText to whatever it currently is NOT set to
        },
        toggleShowBoxes() {
            this.showBoxes = !this.showBoxes
        },
        handleEvent(e, data) {
            window.alert(e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
// Mounting our app component to an HTML element 
app.mount('#app')