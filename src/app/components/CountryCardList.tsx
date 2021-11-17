import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import countryServices from "../services/fetch-service";
import { ICountry } from "../Utility/interface/country";
import WeatherInfo from "./WeatherInfo";
import SearchCountry from "./SearchCountry";

const CountryCardList = () => {
  let [countryList, setCountryList] = useState<ICountry[]>([] as ICountry[]);
  // let [tableRow, setTableRow] = useState<ICountry>(null as unknown as ICountry);
  let [capital, setCapital] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await countryServices.getAllCountry();
      if (response.data && response.data instanceof Array) {
        setCountryList(response.data);
        // response.data.map((country) => {
        //   setTableRow({
        //     name: country.name,
        //     capital: country.capital[0],
        //     population: country.population,
        //     latlng: [country.latlng[0], country.latlng[1]],
        //     flags: country.flags,
        //   });
        // });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCountryByName = async (name: string) => {
    const response = await countryServices.getCountryByName(name);
    if (response.data && response.data instanceof Array) {
      setCountryList(response.data);
    }
  }; 

  return (
    <Container fixed>
      <SearchCountry getCountryByName={getCountryByName} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {countryList.map((item, index) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }} key={index}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.flags.png}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Capital:{item.capital && item.capital[0]}
                      <br />
                      Population: {item.population}
                      <br />
                      Latitude:{item.latlng && item.latlng[0]},Longitude:
                      {item.latlng && item.latlng[1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() =>
                        setCapital(item.capital && item.capital[0])
                      }
                    >
                      Get weather information
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <WeatherInfo capital={capital} open={true} />
    </Container>
  );
};

export default CountryCardList;
