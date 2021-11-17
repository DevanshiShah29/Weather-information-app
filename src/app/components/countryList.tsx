import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import countryServices from "../services/fetch-service";
import { ICountry } from "../Utility/interface/country";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const getCountries = async () => {
  try {
    const response = await countryServices.getAllCountry();
    if (response.data && response.data instanceof Array) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const CountryList: React.FC = () => {
  let [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    getCountries().then((t) => {
      if (t) {
        var rows = (t as ICountry[]).map((item: ICountry) =>
          createData(
            item.name.common,
            item.capital && item.capital[0],
            item.population,
            item.latlng && item.latlng[0],
            item.flags.png
          )
        );
        setRows(rows);
      }
    });
  }, []);

  function createData(
    name: string,
    capital: string,
    population: number,
    latlng: number,
    flag: string
  ) {
    return { name, capital, population, latlng, flag };
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Capital</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
            <StyledTableCell align="right">Latlng</StyledTableCell>
            <StyledTableCell align="right">Flag</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.capital}</StyledTableCell>
              <StyledTableCell align="right">{row.population}</StyledTableCell>
              <StyledTableCell align="right">{row.latlng}</StyledTableCell>
              <StyledTableCell align="right">{row.flag}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryList;
