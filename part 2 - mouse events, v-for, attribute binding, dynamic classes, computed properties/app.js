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
                { title: 'FullMetal Alchemist Brotherhood', studio: 'Studio BONES', ongoing: false, imgURL: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png'},
                { title: 'Dragon Ball Z', studio: 'Toei Animation', ongoing: false, imgURL: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpe'},
                { title: 'Jujutsu Kaisen', studio: 'Studio MAPPA', ongoing: true, imgURL: 'https://resized-images.crazylister.com/68747470733a2f2f696d672e6372617a796c69737465722e636f6d2f37393834342f696d616765732f4a756a757473752532302d253230536d616c6c2e6a70673f76657273696f6e49643d62706f315570304a754f37677a497639447a55386e765a47504f793332657771/auto/502.jpg'}
            ],
            urlToBind: "https://www.youtube.com"
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