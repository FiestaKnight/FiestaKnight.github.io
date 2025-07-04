const App = {
    data() {
        return {

            checkBox: false,
            clicked: false,

            emailData:{
                first: "",
                last: "",
                email: "",
                comment: "",
                phone: ""
            }

        }
    },
}


Vue.createApp(App).mount('#app')