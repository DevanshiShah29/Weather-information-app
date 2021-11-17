# Weather information app

This app will show you list of all countries and by searching a specific country you will get the updated list. Once the list is displayed you can click on the `Get the weather` button to see the current weather of the country capital.
These APIs are open and requires registration to use it (with provided API_KEY) in project.

This project utilizes two APIs:
- Countries list API https://restcountries.com/v3.1/
- Weather API https://api.openweathermap.org/data/2.5/

### Visual Insights

- Application opens with a form to enter country name and a button to get the countries matching with the written string. 
- Initially all countries are listed below the form area.
- When form is submitted details of countries as per given string is shown below the form area (Utilizes 1st API)
- When user clicks on the button a modal opens with the weather data of the capital of that particular country. (Utilizes 2nd API)
- API returns many details but as we are interested in specific set of properties, following details are shown:

```
{
  weather: IWeather[];
  visibility: number;
  main: ICapitalTemp;
}
```

## Setup

1. Take a pull from git repo
2. Execute command npm install to add node modules
3. Setup is now ready you can open it in any code editor.

## Run Project
`npm start` Runs the app in frontend.
Open http://localhost:3000 to view it in the browser.

## Plugins

| Plugin | Version | Purpose
| ------ | ------ | ------
| axios | 0.24.0 | For Data Fetching / HTTP requests |
| Material UI | 5.1.0 | For styling Application |
| react-router-dom | 5.2.0 | For navigation / routing in react app |
| react-toastify | 8.1.0 | To display toast in application |
| prettier | 2.3.2 | For consistent prettified code |
