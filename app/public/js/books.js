const Offer = {

    data() {

        return {

            books : [],
            offerForm: {},
            selectedOffer : null

        }

    },
    

    computed: {},

    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },  
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },

        fetchBooksData() {
            fetch('/api/books/')

            .then( response => response.json() )

            .then( (responseJson) => {

                console.log(responseJson);

                this.books = responseJson;

            })

            .catch( (err) => {

                console.error(err);

            });

        },

        postNewOffer(evt) {
            // this.offerForm.studentId = this.selectedStudent.id;        
            // console.log("Posting:", this.offerForm);
            // // alert("Posting!");
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.offerForm = {};
              });
          }
        //   selectOfferToEdit(o){
        //       this.selectedOffer = o;
        //       this.offerForm= this.selectedOffer;
        //   },
        //   resetOfferForm(){
        //       this.selectedOffer =null;
        //       this.offerForm ={};
        //   }

    },


    created(){

        this.fetchBooksData();

    }

}



Vue.createApp(Offer).mount('#offerApp');

