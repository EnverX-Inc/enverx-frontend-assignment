import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { shape, string, func } from "prop-types";

const Filter = ({ filter, setFilter }) => {
  return (
    <Stack direction="row" spacing={2}>
      <FormControl>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={filter.category}
          label="Category"
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"salary"}>Salary</MenuItem>
          <MenuItem value={"groceries"}>Groceries</MenuItem>
          <MenuItem value={"rent"}>Rent</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="search"
        label="search by title"
        value={filter.q}
        onChange={(e) => setFilter({ ...filter, q: e.target.value })}
        variant="outlined"
      />
    </Stack>
  );
};

Filter.propTypes = {
  filter: shape({
    category: string,
    q: string,
  }),
  setFilter: func.isRequired,
};

export default Filter;
