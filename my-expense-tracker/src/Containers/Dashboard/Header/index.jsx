import { Stack } from "@mui/material";

const Header = () => {
  return (
    <Stack direction="row" padding={"20px"}>
      <Stack direction="column">
        <h1> Red Book </h1>
        <h4 style={{ margin: 0 }}>Manage your expenses like a pro</h4>
      </Stack>
    </Stack>
  );
};

export default Header;
