

const app=Vue.createApp({
    data() {
        return{
            "person":{}
            
        }
    },
    computed:{
        prettyBirthday(){
            return dayjs(this.person.dob.date).format('D MMM YYYY')
            
        }

    },

    methods:{
        

       fetchUserData(){

            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);   //for debugging
                console.log("C")
        
                this.person =responseJson.results[0];
            })
        
            .catch((err) => {
                console.error(err);
            })

        }
            
        },


    // fetchBookData() {
    //     fetch('/api/books/')
    //     .then(response => response.json())
    //     .then((responseJson) => {
    //         console.log(responseJson);
    //         this.books = responseJson;
    //     })
    
    // },
    
created(){
    
    this.fetchUserData();
   
    }
})


// Vue.creteApp(app).mount('#offerApp')