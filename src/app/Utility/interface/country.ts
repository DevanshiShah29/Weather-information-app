export interface ICountryName {
  common: string;
}

export interface IFlagImage {
  png: string;
}

export interface ICountry {
  name: ICountryName;
  capital: string;
  population: number;
  latlng: number[];
  flags: IFlagImage;
}

export interface IAllCountries {
  all_country: Array<ICountry>;
}
