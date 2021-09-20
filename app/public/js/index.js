const app=Vue.createApp({
    data() {
        return{
            "person":{},
            "info":[
                {
                    "name": "Hope",
                    "country":"USA",
                    "birthday":"26 May",
                    "age":"28",
                    "email":"hope@example.com",
                    "phone":"8976578779",
                    "image": 'img/pic.jpeg'
                    
                },
                {
                    "name": "Ann",
                    "country":"India",
                    "birthday":"09 March",
                    "age":"26",
                    "email":"ann@example.com",
                    "phone":"2342342343",
                    "image": 'img/pic.jpeg'
        
                }
            ]
        }
    },
    computed:{
        prettyBirthday(){
            return dayjs(this.person.dob.date).format('D MMM YYYY')
            
        }

    },
    
created(){

    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((responseJson) => {
        console.log(responseJson);   //for debugging

        this.person =responseJson.results[0];
    })

    .catch((err) => {
        console.error(err);
    })

    }
})


// Vue.creteApp(app).mount('#offerApp')