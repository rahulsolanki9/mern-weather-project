//todo --->  weather api & curent date method print here
const subBnt = document.getElementById("submitBnt");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide =document.querySelector('.middel_layer')


//todo date method 
let curentday = document.getElementById("day");
let today_date = document.getElementById("today_date");

const getcurentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun"
    weekday[1] = "Mon"
    weekday[2] = "Tues"
    weekday[3] = "Wednes"
    weekday[4] = "Thurs"
    weekday[5] = "Fri"
    weekday[6] = "Satur"

    let curenttime = new Date();
    const day = (weekday[curenttime.getDay()]);
    return day;
}

const getcurentTime = () => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Now",
        "Des",
    ];

    // create of all time methods
    var now = new Date();
    var month = months[now.getMonth() + 0];
    var date = now.getDate();
    // var year = now.getFullYear();
    var dates = `${date} ${month} `;
    console.log(dates)  
    return dates;
};
curentday.innerHTML =` ${getcurentDay()} `;
today_date.innerHTML =` ${getcurentTime()} `;


//todo weather api get and data print 
const getinfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value; //! input search value

    if (cityVal === "") {
        city_name.innerText = `Plz write the city name before search`; //! client any value not enter so print this error
        datahide.classList.add('data-hide'); //? weather temp add class

    } else {
        try {
            //!  weather API fatch here
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal},in&appid=c2477f117a4ac7aa909ee9d72fd26e52`;
            let response = await fetch(api);
            const objedata = await response.json();
            const arrdata = [objedata];
            console.log(arrdata);

            //! all data print here
            city_name.innerText = `${cityVal}, ${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            const tempMood = arrdata[0].weather[0].main;
            
            //! condition of weather ( clear, clouds & Rain)
            if (tempMood == "Clear") {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color:#eccc68;"></i>`;
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #f1f2f6;"></i>`;
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color:#a4b0be;></i>`;
            } else {
                temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color:#eccc68;"></i>`;
            }
            datahide.classList.remove('data-hide'); //? weather temp remove class

        } catch (error) {
            city_name.innerText = `Plz enter the city name properly`; //! input value is wrong so print this arror
            datahide.classList.add('data-hide'); //? weather temp add class
        }
    }
};

subBnt.addEventListener("click", getinfo);

