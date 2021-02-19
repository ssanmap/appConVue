

import header_nav from './navbar.js'
import footer_n from './footer.js'
import loader from './loader.js'


const primerasDosPag = new Vue({
    el: '#mysApps',
    data:{

        parrafo1:'Lorem ipsum dolor sit amet conseepe atque fugit fuga ut repellendus! Cumque harum eosveritatis officiis at, earum sint unde nam in iste, minima autemrepellendus dolorem a praesentium error quia. Sint unde et sit.Eligendi laudantium nihil impedit ratione nobis. Veniam sunt accusamusnam non quam quos sed hic error, dolores doloribus? Incidunt adreprehenderit nulla tempore. Aliquam sit minima, praesentium laborumnulla obcaecati sapiente, blanditiis, exercitationem expedita dolorescupiditate.'
       ,members: null,
       loadingM: true
    },
    created () {
        this.getData(this.getChamber() || 'senate');
    },
    methods: 
    { getChamber(){
        
         let nombred = window.location.pathname.slice(1);
        const palabra = '.html'       
       let cambio =   nombred.replace(palabra, '');

                // console.log(cambio)
        return cambio;
    },
        async getData(chamber) {
            let url = `https://api.propublica.org/congress/v1/113/${chamber}/members.json`
            const response = await fetch(url, 
                {
                    headers: {
                    "X-API-Key": "G6nLkHppCZDudKhQv2XYj9ppEb2l1LkUfH4OlXTp"
                    }
                }
            )

          
            const responseJson = await response.json();
            const members = await responseJson.results[0].members;
            this.members = await members;
            this.loadingM = false;
            if(response.status === 200){

           
                $(document).ready(function() {
                    $('#senate-data').DataTable();
                    $('#house-data').DataTable();
                  } );
            }
            console.log(members)
        }
    }
    
})



