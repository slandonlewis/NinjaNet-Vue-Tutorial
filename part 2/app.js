const app = Vue.createApp({
    // data function can store things like variables to be used later
    data() {
        return {
            showText: false,
            showBoxes: false,
            showList: false,
            title: 'Changable Text',
            number: 0,
            x: 0,
            y: 0,
            animeShows: [
                { title: 'FullMetal Alchemist Brotherhood', studio: 'Studio BONES'},
                { title: 'Dragon Ball Z', studio: 'Toei Animation'},
                { title: 'Jujutsu Kaisen', studio: 'Studio MAPPA'}
            ]
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
        toggleShowList() {
            this.showList = !this.showList
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