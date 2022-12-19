const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51e8a232a7mshb9c170c3fc071aap1e33b8jsn0d2b381018b0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{	
	CityName.innerHTML= city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp.innerHTML = response.temp  
		temp2.innerHTML = response.temp  
		feels_like.innerHTML = response.feels_like  
		humidity.innerHTML = response.humidity  
		humidity2.innerHTML = response.humidity  
		min_temp.innerHTML = response.min_temp  
		max_temp.innerHTML = response.max_temp  
		wind_speed.innerHTML = response.wind_speed  
		wind_speed2.innerHTML = response.wind_speed  
		wind_degrees.innerHTML = response.wind_degrees  
		sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
}
getWeather("Delhi")


submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jammu', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_one.innerHTML = response.temp  
		feels_like_one.innerHTML = response.feels_like  
		humidity_one.innerHTML = response.humidity  
		min_temp_one.innerHTML = response.min_temp  
		max_temp_one.innerHTML = response.max_temp  
		wind_speed_one.innerHTML = response.wind_speed  
		wind_degrees_one.innerHTML = response.wind_degrees  
		sunrise_one.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_one.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));

	
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_two.innerHTML = response.temp  
		feels_like_two.innerHTML = response.feels_like  
		humidity_two.innerHTML = response.humidity  
		min_temp_two.innerHTML = response.min_temp  
		max_temp_two.innerHTML = response.max_temp  
		wind_speed_two.innerHTML = response.wind_speed  
		wind_degrees_two.innerHTML = response.wind_degrees  
		sunrise_two.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_two.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_three.innerHTML = response.temp  
		feels_like_three.innerHTML = response.feels_like  
		humidity_three.innerHTML = response.humidity  
		min_temp_three.innerHTML = response.min_temp  
		max_temp_three.innerHTML = response.max_temp  
		wind_speed_three.innerHTML = response.wind_speed  
		wind_degrees_three.innerHTML = response.wind_degrees  
		sunrise_three.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_three.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_four.innerHTML = response.temp  
		feels_like_four.innerHTML = response.feels_like  
		humidity_four.innerHTML = response.humidity  
		min_temp_four.innerHTML = response.min_temp  
		max_temp_four.innerHTML = response.max_temp  
		wind_speed_four.innerHTML = response.wind_speed  
		wind_degrees_four.innerHTML = response.wind_degrees  
		sunrise_four.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_four.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_five.innerHTML = response.temp  
		feels_like_five.innerHTML = response.feels_like  
		humidity_five.innerHTML = response.humidity  
		min_temp_five.innerHTML = response.min_temp  
		max_temp_five.innerHTML = response.max_temp  
		wind_speed_five.innerHTML = response.wind_speed  
		wind_degrees_five.innerHTML = response.wind_degrees  
		sunrise_five.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_five.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then((response)=> {
		console.log(response)
		temp_six.innerHTML = response.temp  
		feels_like_six.innerHTML = response.feels_like  
		humidity_six.innerHTML = response.humidity  
		min_temp_six.innerHTML = response.min_temp  
		max_temp_six.innerHTML = response.max_temp  
		wind_speed_six.innerHTML = response.wind_speed  
		wind_degrees_six.innerHTML = response.wind_degrees  
		sunrise_six.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString("default")
		sunset_six.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString("default")
	})
	.catch(err => console.error(err));
