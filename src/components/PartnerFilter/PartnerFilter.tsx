import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

interface PartnerFilterProps {
  filter: string;
  setFilter: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const PartnerFilter = ({ filter, setFilter, searchQuery, setSearchQuery }: PartnerFilterProps) => {
  return (
    <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="partner-type-label">Partner Type</InputLabel>
        <Select
          labelId="partner-type-label"
          id="partner-type-select"
          value={filter}
          label="Partner Type"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="all">All Partners</MenuItem>
          <MenuItem value="school">Educational Institutions</MenuItem>
          <MenuItem value="bookstore">Educational Supplies</MenuItem>
          <MenuItem value="organization">Supporting Organizations</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Search Partners"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ flexGrow: 1, maxWidth: 500 }}
      />
    </Box>
  );
};

export default PartnerFilter;
