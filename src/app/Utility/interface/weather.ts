export interface ICapitalWeather {
  weather: IWeather[];
  visibility: number;
  main: ICapitalTemp;
}

export interface IWeather {
  main: string;
  icon: string;
}

export interface ICapitalTemp {
  temp: number;
  humidity: number;
}

export interface ICapitalName {
  capital: string;
  open: boolean;
}
