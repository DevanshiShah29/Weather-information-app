import { useState, useEffect } from "react";
import { ICapitalName, ICapitalWeather } from "../Utility/interface/weather";
import WeatherService from "../services/weather-service";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WeatherInfo = (props: ICapitalName) => {
  const [weatherInfo, setWeatherInfo] = useState<ICapitalWeather>(
    null as unknown as ICapitalWeather
  );
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (props.open) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getWeatherInfo();
  }, [props.capital]);

  const getWeatherInfo = async () => {
    if (props.capital) {
      let response = await WeatherService.getCapitalWeather(props.capital);
      if (response.data) {
        setWeatherInfo(response.data);
        handleOpen();
        return response.data;
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {weatherInfo && (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.capital}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                  alt={weatherInfo.weather[0].main}
                /><br/>
                Temprature: {weatherInfo.main.temp}
                <br />
                Humidity: {weatherInfo.main.humidity}
                <br />
                Weather: {weatherInfo.weather[0].main}
                <br />
                Visiblity{weatherInfo.visibility}
              </div>
            }
          </Typography>
        </Box>
      )}
    </Modal>
  );
};

export default WeatherInfo;
