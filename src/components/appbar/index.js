import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";
import Temp from "../../components/temp";
import React, { useState } from "react";
import { products } from "../../data";

export default function Appbar() {
  const theme = useTheme();
  const [temp, settemp] = useState([]);

  const handleChange = (event) => {
    const arr = products
      .filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      .slice(0, 2);
    console.log(arr);
    settemp(arr);
  };
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} handleChange={handleChange} />
      )}

      {temp.map((product) => (
        <Temp temp={product.name} />
      ))}
    </>
  );
}
