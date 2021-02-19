
import header_nav from './navbar.js'
import footer_n from './footer.js'
import loader from './loader.js'


const tercerPag = new Vue({
    el:'#myprecioso',
    data:{
        parrafo1:'Lorem ipsum dolor sit amet conseepe atque fugit fuga ut repellendus! Cumque harum eosveritatis officiis at, earum sint unde nam in iste, minima autemrepellendus dolorem a praesentium error quia. Sint unde et sit.Eligendi laudantium nihil impedit ratione nobis. Veniam sunt accusamusnam non quam quos sed hic error, dolores doloribus? Incidunt adreprehenderit nulla tempore. Aliquam sit minima, praesentium laborumnulla obcaecati sapiente, blanditiis, exercitationem expedita dolorescupiditate.'
        ,members: null,
        loadingM: true,
        estadistica: []
  
    },
    created () {
        this.getData(this.getChamber() || 'senate');
    },
    methods: 
    { getChamber(){
        
         let nombred = window.location.pathname.slice(1);
        const palabra = '.party.html'       
       let cambio =   nombred.replace(palabra, '');

                 console.log(cambio)
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

            let demo = 0;
            let repu = 0;
            let ind = 0;
            let sumarepu = 0;
            let sumademo = 0;
            let sumaind = 0;
            let orden1 = [];
            let orden2 = [];
            let arreglo2 = [];
            let arreglo1 = [];
             let cantidad = 0;
             let miembrosVotosParty = 0;
             let votoD = 0;
            let votoR = 0;
            let votoI = 0;
            let votosDe = 0;
            let votosIn = 0;
            let votosRe = 0;
            let porR = 0;
            let porD = 0;
            let porI = 0;
            
            for (let i = 0; i < members.length; i++) {
                const e = members[i];
                
                miembrosVotosParty = miembrosVotosParty + e.total_votes;
                cantidad = members.length ;
                
               if(e.party == 'R'){
                  repu = repu + 1;
                  sumarepu =    sumarepu + e.votes_with_party_pct ;
                  votoR = votoR + e.total_votes;
               }else if(e.party == 'D'){
                   demo = demo + 1;
                   sumademo = sumademo + e.votes_with_party_pct ;
                   votoD = votoD + e.total_votes;
               }else if(e.party == 'ID'){
                   ind = ind + 1;
                   sumaind = sumaind + e.votes_with_party_pct ;
                   votoI = votoI + e.total_votes;
               }
            
            
            }
            
            let totalRepu  = (sumarepu/ repu); 
                // totalRepu = totalRepu.toFixed(2);
            let totalDemo = (sumademo/ demo); 
                // totalDemo = totalDemo.toFixed(2);
            let totalInd = (sumaind/ ind); 
             totalInd = parseInt(totalInd) || 0;
                // totalInd = totalInd.toFixed(2);
            let totalT = (miembrosVotosParty/ cantidad); 
             totalT = totalT.toFixed(2);
             votosDe = Math.round((votoD * totalDemo) /100);
             votosIn = Math.round((votoI * totalInd) /100);
             votosRe = Math.round((votoR * totalRepu) /100);
             let votosTotales = votosDe + votosIn + votosRe;
             porD = (votosDe * 100) / votosTotales;
             porD = porD.toFixed(2);
             porI = (votosIn * 100) / votosTotales;
             porI = porI.toFixed(2);
             porR = (votosRe * 100) / votosTotales;
             porR = porR.toFixed(2);
            
            //  console.log( totalInd)
             orden1 = members.sort( (a,b) =>  a.missed_votes_pct - b.missed_votes_pct)
             for (let i = 0; i < orden1.length * 0.1; i++) {
                     const e = orden1[i];
                     arreglo1.push(e)
             }
             orden2 = members.sort( (a,b) =>  b.missed_votes_pct - a.missed_votes_pct)
             for (let i = 0; i < orden2.length * 0.1; i++) {
                     const e = orden2[i];
                     arreglo2.push(e)
             }
             console.log(arreglo2)

            this.estadistica.push({
                republicanos:repu,
                democratas:demo,
                independiente:ind,
                totalRepublicanos: totalRepu,
                totalDemocratas:totalDemo,
                totalInd:totalInd,
                cant: cantidad,
                totalt:totalT,
                porcD: porD,
                porcI:porI,
                porcR:porR,
                arreglo1,
                arreglo2
            
            
            });
             return this.estadistica;
    
        }
    }
})
