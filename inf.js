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

let stateCodes = document.querySelector("#country-state");
stateCodes.addEventListener("change", () => {
    let selectedStateCode = stateCodes.value;
    let selectedState = nigeriaStates.find(state => state.code === selectedStateCode);
    if (selectedState) {
        let stateName = selectedState.name;
        getWeatherDetails(stateName);
    }
});

let getWeatherDetails = (state) => {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + state + ",NG&appid=5a12e624f36ca2b008a225e99dd3034f&units=metric";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let tempValue = document.querySelector("#temp");
            let wicon = document.querySelector("#wicon");
            let place = document.querySelector('#place');
            let humidity = document.querySelector("#humidity");
            let weatherDetail = document.querySelector("#weather-detail");
            let weatherDescription = document.querySelector("#weather-description");

            let iconcode = data.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            wicon.src = iconurl;

            place.textContent = data.name + ", NG";
            tempValue.textContent = data.main.temp + "°C";
            humidity.textContent = "H: " + data.main.humidity + "%";
            weatherDetail.textContent = data.weather[0].main;
            weatherDescription.textContent = data.weather[0].description;
        })
        .catch(error => console.log(error));
};
