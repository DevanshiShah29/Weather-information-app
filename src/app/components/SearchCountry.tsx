import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchCountry = (props: any) => {
  const [searchText, setSearchText] = useState("");
  const [enable, setEnable] = useState(true);
  const handleOnChange = (e: any) => {
    setSearchText(e.target.value);
    if (e.target.value !== "") {
      setEnable(false);
    } else {
      setEnable(true);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.getCountryByName(searchText);
  };

  return (
    <form>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1,  width: '100%',
            maxWidth: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Country name"
          variant="outlined"
          size="small"
          onChange={(e) => handleOnChange(e)}
        />
        <Button
          variant="outlined"
          disabled={enable}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default SearchCountry;
