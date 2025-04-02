
        const apiKey="65022034b6b1ecfad0445fce85a189a2";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata";

        async function checkWeather(){
            const response= await fetch(apiUrl + "&appid="+apiKey);
            const data=await response.json();
            console.log(data);
        }

checkWeather(); 