'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XML request

// function getCountries(country){
//     const request = new XMLHttpRequest()
//     request.open('Get',`https://restcountries.com/v3.1/name/${country}
//         `)
        
// request.send()

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.response)
//     console.log(data)
    

//     const language_array = []
//     const country_array = []
//     const currencies_array = []

//     const categories = ['name','languages','currencies']

//     function get_keys(){
//         for(const i of categories){
            
            
//             for(const key of Object.keys(data[i])){

               
//                     if(i==='name'){
//                         country_array.push(key)
//                     }
//                     if(i==='languages'){
//                         language_array.push(key)
//                     }
//                     if(i==='currencies'){
//                         currencies_array.push(key)
//                     }
//             }
//         }
//     }
// get_keys()
//     console.log(language_array)
//     console.log(currencies_array)
//     console.log(country_array)
    
//     const html = 
//         `<article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name[country_array[0]]}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population/10000000).toFixed(1)} billions </p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[language_array[1]?language_array[1]:language_array[0]]}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[currencies_array[0]].name}</p>
//                 </div>
//         </article>`

//         countriesContainer.insertAdjacentHTML('beforeend', html)
        
//         countriesContainer.style.opacity = 1
//     })
// }
// getCountries('pakistan')
// getCountries('spain')
// getCountries('India')






// render error

const render_error = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg)
    // countriesContainer.style.opacity = 1
}





// Render country flag

const language_array = []
const country_array = []
const currencies_array = []


const renderCountry = function(data, className = ''){
    
    const categories = ['name','languages','currencies']
    
    function get_keys(){
        for(const i of categories){
            
            
            for(const key of Object.keys(data[i])){

               
                if(i==='name'){
                        country_array.push(key)
                    }
                    if(i==='languages'){
                        language_array.push(key)
                    }
                    if(i==='currencies'){
                        currencies_array.push(key)
                    }
                }
            }
    }
    get_keys()
    // console.log(language_array)
// console.log(currencies_array)
// console.log(country_array)



const html = 
    `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name[country_array[0]]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/10000000).toFixed(1)} billions </p>
        <p class="country__row"><span>🗣️</span>${data.languages[language_array[1]?language_array[1]:language_array[0]]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[currencies_array[0]].name}</p>
        </div>
            </article>`
            
            countriesContainer.insertAdjacentHTML('beforeend', html)
            
            // countriesContainer.style.opacity = 1
            
            language_array.splice(0)
            country_array.splice(0)
            currencies_array.splice(0)
}
        
        
        // Neighbour country 
        
        // function get_Neighbour_Countries(country){
//     const request = new XMLHttpRequest()
//     request.open('Get',`https://restcountries.com/v3.1/name/${country}`)
    
//     request.send()
    
//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText)
//     console.log(data)
    
//     renderCountry(data)

//     const neighbour = data.borders?.[0];
//     console.log(neighbour)

//     const request2 = new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send()

//     request2.addEventListener('load', function(){
//         const [data2] = JSON.parse(this.responseText)
//         console.log(data2)
//         renderCountry(data2,'neighbour')
//     })
    

    
// })
// }

// get_Neighbour_Countries('india')









// fetch Method and error 

// const XMLrequest = new XMLHttpRequest()
// XMLrequest.open('Get',`https://restcountries.com/v3.1/name/india`)

// XMLrequest.send()
// //console.log(XMLrequest)




// const fetch_request =  function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response)=>{
//         console.log(response)

//         if(!response.ok){
//             throw new Error(`Country not found ${response.status}`)
//         }
//         return response.json()
//     })
//     .then((data)=>{
//         renderCountry(data[0])
//         console.log(data[0])
        
//         // const neighbour = data[0]?.borders[0]
//         neighbour = 'eehdhdk'

//         if(!neighbour) return
        
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log(data[0])
//         return renderCountry(data[0], 'neighbour')    
//     })
//     .catch(err=>{
//          console.error(`${err} !!!!!!!!`)
//          render_error(`something wrong..... ${err.message} , Try again.!`)
//     })
//     .finally(()=>{
//         countriesContainer.style.opacity = 1
//     })
// }




// btn.addEventListener('click', function(){
//     fetch_request('india')
    
// })

// fetch_request('ddfeff')








// Error handling


const get_Json = function(url, errMsg = 'Something is wrong'){
    
    return fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error(`${errMsg}  ${response.status}`)
        }
        return response.json()
    })
}




const fetch_request =  function(country){
    
    get_Json(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then((data)=>{
        renderCountry(data[0])
        console.log(data[0])
        
        const neighbour = data[0]?.borders[0] 
        // neighbour = 'eehdhdk'

        if(!neighbour) throw new Error('No neighbour found')
        
        return get_Json(`https://restcountries.com/v3.1/alpha/${neighbour}`,'Country not found')
    })
    .then((data)=>{
        console.log(data[0])
        return renderCountry(data[0], 'neighbour')    
    })
    .catch(err=>{
         console.error(`${err} !!!!!!!!`)
         render_error(`something wrong..... ${err.message} , Try again.!`)
    })
    .finally(()=>{
        countriesContainer.style.opacity = 1
    })
}




btn.addEventListener('click', function(){
    fetch_request('india')
    
})

// fetch_request('ddfeff')






// // creating promises

// const my_promise = new Promise((resolve, reject)=>{
//     console.log(`Gonna get your result soon`)
    
//     setTimeout(()=>{
//         if(Math.trunc(Math.random()*6)+1 > 3){
//             resolve('I would keep my promise')
//         }
//         else{
//             reject(new Error('Iam not sure about my promise'))
//         }
//     },2000)
// })
// my_promise.then((res)=>{
//     console.log(res)
//     return res
// }).catch((err)=>{
//     console.log(`Error : ${err.message} ..!`)
// })



// Promise.resolve('It is successful').then(res => console.log(res))
// Promise.reject("It got rejected").catch(err => console.log(err))





// const wait = function(seconds){
//     return new Promise(resolve=>{
//         setTimeout(resolve, seconds*1000)
//     })
// }

// wait(1).then(()=>{
//     console.log(`1 second has passed away`)
//     return wait(1)
// })
// .then(()=>{
//     console.log(`2 second has passed away`)
//     return wait(1)
// })
// .then(()=>{
//     console.log(`3 second has passed away`)
//     return wait(1)
// })
// .then(()=>{
//     console.log(`4 second has passed away`)
// })





// // promisifying  geolocation

const getPosition = function(){
    return new Promise((resolve,reject)=>{
    //     navigator.geolocation.getCurrentPosition(position=>resolve(position),
    //     err=> reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}
getPosition().then(pos=>{console.log(pos)})






// Async and Await 

const whereAmI = async function(country){

   try { // geolocation
    const pos = await getPosition()

    const {latitude : lat, longitude : lng} = pos.coords



    
    // Reverse Geocoding
    const resGeo = await fetch(`http://geocode.xyz/${lat},${lng}?geoit=json`)
    const dataGeo = await resGeo.json()
    console.log(dataGeo)
    


    // country
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    const data = await res.json()

    console.log(data[0])
    renderCountry(data[0])
}
catch(err){
    console.log(`😶‍🌫️😶‍🌫️😶‍🌫️${err.message}`)
}
}
whereAmI('India')
console.log('which country ')



// Running promises in Parallel

const get3Countries = async function(c1,c2,c3){
    try{const data = await Promise.all([
        get_Json(`https://restcountries.com/v3.1/name/${c1}`),
        get_Json(`https://restcountries.com/v3.1/name/${c2}`),
        get_Json(`https://restcountries.com/v3.1/name/${c3}`),
    ])
    console.log(data)
    console.log(data.map(d=>d[0].capital).flat())}
    catch(err){
        console.error(err)
    }
}
get3Countries('india','portugal','usa')

