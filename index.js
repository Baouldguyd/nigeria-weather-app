// let region = Intl.DateTimeFormat().resolvedOptions().timeZone;
// let stateRegion = region.slice(7,region.length)
// let state = stateRegion.toString()

let nigeriaStates = [
    {
        "name": "Abia",
        "code": "AB"
    },
    {
        "name": "Adamawa",
        "code": "AD"
    },
    {
        "name": "Akwa-Ibom",
        "code": "AK"
    },
    {
        "name": "Anambra",
        "code": "AN"
    },
    {
        "name": "Bauchi",
        "code": "BA"
    },
    {
        "name": "Bayelsa",
        "code": "BY"
    },
    {
        "name": "Benue",
        "code": "BE"
    },
    {
        "name": "Borno",
        "code": "BO"
    },
    {
        "name": "Crossriver",
        "code": "CR"
    },
    {
        "name": "Delta",
        "code": "DE"
    },
    {
        "name": "Ebonyi",
        "code": "EB"
    },
    {
        "name": "Edo",
        "code": "ED"
    },
    {
        "name": "Ekiti",
        "code": "EK"
    },
    {
        "name": "Enugu",
        "code": "EN"
    },
    {
        "name": "Abuja",
        "code": "FC"
    },
    {
        "name": "Gombe",
        "code": "GO"
    },
    {
        "name": "Imo",
        "code": "IM"
    },
    {
        "name": "Jigawa",
        "code": "JI"
    },
    {
        "name": "Kaduna",
        "code": "KD"
    },
    {
        "name": "Kano State",
        "code": "KN"
    },
    {
        "name": "Katsina",
        "code": "KT"
    },
    {
        "name": "Kebbi",
        "code": "KE"
    },
    {
        "name": "Kogi",
        "code": "KO"
    },
    {
        "name": "Kwara",
        "code": "KW"
    },
    {
        "name": "Lagos",
        "code": "LA"
    },
    {
        "name": "Nasarawa",
        "code": "NA"
    },
    {
        "name": "Niger",
        "code": "NI"
    },
    {
        "name": "Ogun",
        "code": "OG"
    },
    {
        "name": "Ondo",
        "code": "ON"
    },
    {
        "name": "Osun",
        "code": "OS"
    },
    {
        "name": "Oyo",
        "code": "OY"
    },
    {
        "name": "Plateau",
        "code": "PL"
    },
    {
        "name": "Sokoto",
        "code": "SO"
    },
    {
        "name": "Taraba",
        "code": "TA"
    },
    {
        "name": "Yobe",
        "code": "YO"
    },
    {
        "name": "Zamfara",
        "code": "ZA"
    }
]

let stateCodes = document.querySelector("#state-code")
stateCodes.addEventListener("click", ()=>{
   let stateValue = stateCodes.setAttribute("value", stateCodes.value = nigeriaStates.code);
   
})

let nameOfState = ""



// link.setAttribute('href', 'mailto:' + option.value);






let url = "https://api.openweathermap.org/data/2.5/weather?q=" + "Lagos" + "&appid=5a12e624f36ca2b008a225e99dd3034f&units=metric"


let getLagos = () => {
    fetch(url).then(response=>{
        return response.json()
    }).then(data =>{
        let tempValue = document.querySelector("#temp")
        // var iconcode = data.weather[0].icon;
        console.log(data.main);


        let iconcode = data.weather[0].icon;
        let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        let wicon = document.querySelector("#wicon")
        wicon.src = iconurl

        let place = document.querySelector('#place')
        place.textContent = data.name + ", NG."
        tempValue.textContent = data.main.temp + " c";

        let humidity = document.querySelector("#humidity")
        humidity.textContent =  + data.main.humidity

        let weatherDetail = document.querySelector("#weather-detail")
        weatherDetail.textContent = data.weather[0].main

        let weatherDescription = document.querySelector("#weather-description")
        weatherDescription.textContent = data.weather[0].description
    
    })
}

getLagos()


