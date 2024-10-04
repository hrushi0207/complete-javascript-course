'use strict';


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent

class Workout{
    date = new Date();
    id = (Date.now()+'').slice(-10);
    constructor(Coords,Distance,Duration){
        // this.date = 
        // this.id = 
        this.coords = Coords;       //[lat,lng]
        this.distance = Distance;
        this.duration = Duration
        
    

    }

    _setDescription(){

        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.Description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}` 

        


    }
}

class Running extends Workout{
     type = 'running'
    constructor(Coords,Distance,Duration,Cadence){
            super(Coords,Distance,Duration);
            this.cadence = Cadence
            this.calcPace()
            this._setDescription()
    }

    calcPace(){
        this.pace = this.duration/this.distance
        return this.pace
    }
}
class Cycling extends Workout{
    type = 'cycling'
    constructor(Coords,Distance,Duration,ElevationGain){
            super(Coords,Distance,Duration);
            this.elevationGain = ElevationGain;
            this.calcSpeed()
            this._setDescription()
    }

    calcSpeed(){
        this.speed = this.distance/(this.duration/60)
        return this.speed
    }
}

const run1 = new Running([45,-65], 5.2, 24, 178)
const cycle1 = new Cycling([45, -65], 5.2, 24, 178)

// console.log(run1, cycle1)


class App{
    #map;
    #mapEvent;
    #workouts = []
    constructor(){
        this._getPosition()

        form.addEventListener('submit',this._newWorkout.bind(this))
        
        inputType.addEventListener('change',this._toggleElevationField)
    }

    _getPosition(){
            if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                    alert(`Did not get your current position`)
                })
    }

    
    
    
    _loadMap(position){
           
            const {latitude} = position.coords
            const {longitude} = position.coords
        
        
            // console.log(`https://www.google.com/maps/@${latitude},${longitude},16z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D`)
        
        
            const coords = [latitude,longitude]
        
            
            this.#map = L.map('map').setView(coords, 13);
            
        
            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
        
        
            this.#map.on('click', this._showForm.bind(this))
    }


    _showForm(mapE){
           this.#mapEvent = mapE  
        // console.log(this.#mapEvent)

        // display form
        form.classList.remove('hidden');
        inputDistance.focus()
    }

    _hideform(){
         inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

         form.style.display = 'none'
         form.classList.add('hidden')
        setTimeout(()=> form.style.display = 'grid', 1000)
    }

    _toggleElevationField(){
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e){
        e.preventDefault()

        const validInputs = (...inputs)=>inputs.every(inp=>Number.isFinite(inp))

        const allPositive = (...inputs)=> inputs.every(inp=>inp>0)

        
        // get Data from form
        
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const{lat, lng} = this.#mapEvent.latlng
        let workout;
        

        
        // if workout running, create running object
        
        
        if(type === 'running'){
            const cadence = +inputCadence.value;
            
            // check data is valid
            if(
                !validInputs(distance,duration,cadence) ||
                !allPositive(distance,duration,cadence)
                // !Number.isFinite(distance) || 
                // !Number.isFinite(duration) || 
                // !Number.isFinite(cadence)
            ) 
            return alert('Inputs have to be positive Numbers')
            
            workout = new Running([lat,lng],distance,duration,cadence)
            
        }
        // if workout cycling, create cycling object
        if(type === 'cycling'){
            
            const elevation = +inputElevation.value;
            
            // check data is valid
            if(
                !validInputs(distance,duration,elevation) ||
                !allPositive(distance,duration,elevation)
            // !Number.isFinite(distance) || 
            // !Number.isFinite(duration) || 
            // !Number.isFinite(cadence)
            ) 
            return alert('Inputs have to be positive Numbers')

             workout = new Cycling([lat, lng],distance,duration,elevation)

        }

        // Add new object to workout array

        this.#workouts.push(workout)
        console.log(workout)



        // Render workout on map as marker

        this._renderWorkoutMarker(workout)
        
       
        
        // Render workout on list
        this._renderWorkout(workout)
        
        // Hide form and clear input fields
        this._hideform()
        
    }

    _renderWorkoutMarker(workout){

        L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth : 250,
            minWidth: 100,
            autoClose : false,
            closeOnClick : false,
            className : `${workout.type}-popup`
        }))
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.Description}`)
        .openPopup();
    }
               

    _renderWorkout(workout){
            
        let html = 
            `<li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.Description}</h2>
            <div class="workout__details">
            <span class="workout__icon">${
                workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
            </div>`
        if(workout.type ==='running'){
            html += 
            `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}6</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`
        }

        if(workout.type ==='cycling'){
            html += 
            ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`
        }

        form.insertAdjacentHTML('afterend', html)
    }    
}

const app = new App()






