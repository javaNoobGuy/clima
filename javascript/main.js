//linha que define function async, ela espera pela resposta da api

async function getWeather(){

    //chamada api usando a bibliotecas axios. a url inclui informacoes de localização(mogi das cruzes) e a unidade de medida (Celcius) e a chave da API (API key)

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#pesquisa').value}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

    //aqui estamos extraindo a temperatura atual;

    const tempCelcius =  response.data.main.temp; 
    console.log(response);
    console.log(tempCelcius);

    document.querySelector('#temperatura').innerHTML = `A temperatura atual é de ${tempCelcius}°C.`

}

getWeather();

const fazessapohaai = () =>{
    getWeather();
}