import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
  Typography,
} from '@mui/material';

interface BeneficiaryFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  gradeFilter: string;
  setGradeFilter: (grade: string) => void;
  regionFilter: string;
  setRegionFilter: (region: string) => void;
  grades: number[];
  regions: string[];
}

const BeneficiaryFilters: React.FC<BeneficiaryFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  gradeFilter,
  setGradeFilter,
  regionFilter,
  setRegionFilter,
  grades,
  regions,
}) => {
  return (
    <Paper sx={{ p: 3, mb: 4 }} elevation={1}>
      <Typography variant="h6" gutterBottom>
        Filter Students
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Search by initials or region..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="grade-filter-label">Grade</InputLabel>
          <Select
            labelId="grade-filter-label"
            value={gradeFilter}
            label="Grade"
            onChange={(e) => setGradeFilter(e.target.value)}
          >
            <MenuItem value="all">All Grades</MenuItem>
            {grades.map((grade) => (
              <MenuItem key={grade} value={grade}>
                Grade {grade}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="region-filter-label">Region</InputLabel>
          <Select
            labelId="region-filter-label"
            value={regionFilter}
            label="Region"
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <MenuItem value="all">All Regions</MenuItem>
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default BeneficiaryFilters;
