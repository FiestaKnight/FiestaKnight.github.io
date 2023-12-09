const App = {
    data() {
        return {
            showDiv: true,
            firstName: null,
            lastName: null,
            emailName: null,
            allGood: false,
            clicked: false,
            displayLabels: true,
            max: 5,
            products : [
                {
                    "id": "1",
                    "name": "Chaotixfox",
                    "description": "Birthday gift from a cool as ice fox.",
                    "art": "1",
                    "image_title": "Rox wants you",
                    "image": "img/Chaotixfox(2).png"

                },
                {
                    "id": "2",
                    "name": "herbalmoontea",
                    "description": "ICONic art made by an Imp.",
                    "art": "2",
                    "image_title": "Happy",
                    "image": "img/herbalmoontea.png"

                },
                {
                    "id": "3",
                    "name": "Zeroskyes36",
                    "description": "Jojo reference from a much more capable man than I.",
                    "art": "3",
                    "image_title": "STANDO POWA",
                    "image": "img/zeroskyes36(1 alt put again).png"

                },
                {
                    "id": "4",
                    "name": "Lumikeii",
                    "description": "Carrying the Themperor.",
                    "art": "4",
                    "image_title": "Everyone Loves Remi",
                    "image": "img/LumikeiiART(8)(Alt).png"

                },
                {
                    "id": "5",
                    "name": "TeiahnFrost",
                    "description": "Time for the LB3.",
                    "art": "5",
                    "image_title": "Rox's time to shine",
                    "image": "img/TeiahnFrost.png"

                },
                
            ]

        }
    },
}


Vue.createApp(App).mount('#app')