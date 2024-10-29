// let list = [];
async function getData(country) {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c0ff89d75f50428daae192718242809&q=${country}&days=3`);
        let product = await response.json();
        // list = product;
        console.log(product);
        dis_Degree(product);
    } catch (error) {
        console.log("Error");
    }
}

const button = document.getElementById('button');
const locationInput = document.getElementById('location_country');

button.addEventListener('click', ()=> {
    console.log(locationInput.value);
    getData(locationInput.value)
    locationInput.value = "";
});


function dis_Degree(product) {
    var cartouna = "";
    for (let i = 0; i < product.forecast.forecastday.length; i++) {
        const dayData = product.forecast.forecastday[i];
        console.log(dayData);
        console.log(dayData.day.condition.text);
        
        const valentines = new Date(dayData.date);
        
        const day = valentines.getDay();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        console.log(dayNames[day]);
        
        
        const month = valentines.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        console.log(monthNames[month]);
        const date1 = valentines.getDate();
        console.log(date1);
        
        
        cartouna+= `<div class="col-md-4 g-2">
                    <div class="card mb-3 card2" >
                        <div class="card-header d-flex justify-content-between">
                            <div class="day">${dayNames[day]}</div>
                            <div class="month"><span>${date1} </span>${monthNames[month]}</div>
                        </div>
                        <div class="card-body">
                            <div class="info d-flex flex-column justify-content-center align-items-center">
                                <div class="location">${product.location.country}</div>
                                <div class="degree">${dayData.day.avgtemp_c}°C</div>
                                <img src="${dayData.day.condition.icon}" class="w-25" alt="">
                            </div>
                            <div class="clear">
                                ${dayData.day.condition.text}
                            </div>
                            <div class="contain d-flex justify-content-between">
                                <span>
                                    <img src="img/icon-umberella.png" alt="" srcset="">
                                    20%
                                </span>
                                <span>
                                    <img src="img/icon-compass.png" alt="" srcset="">
                                    18km/h
                                </span>
                                <span>
                                    <img src="img/icon-wind.png" alt="" srcset="">
                                    East
                                </span>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("demo").innerHTML = cartouna;
}



