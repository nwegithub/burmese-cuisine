import { Box, Stack, Typography } from "@mui/material";
import { logo } from "../utils/contants";
import { Link } from "react-router-dom";
import { SearchForm } from "../components";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{ position: "sticky", top: 0, backgroundColor: "#000" }}
      zIndex={999}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchForm />
    </Stack>
  );
};

export default Navbar;
