const app = Vue.createApp({
    // data function can store things like variables to be used later
    data() {
        return {
            showText: true,
            title: 'Changable Text',
            number: 0
        }
    },
    // functions
    methods: {
        changeText(textToChangeTo) {
            this.title = textToChangeTo
        },
        toggleShowText() {
            this.showText = !this.showText // change showText to whatever it currently is NOT set to
        }
    }
})
// Mounting our app component to an HTML element 
app.mount('#app')