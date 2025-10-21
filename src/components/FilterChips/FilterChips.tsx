import React from 'react';
import { Box, Chip } from '@mui/material';

interface FilterChipsProps {
  gradeFilter: string;
  regionFilter: string;
  searchQuery: string;
  onClearGrade: () => void;
  onClearRegion: () => void;
  onClearSearch: () => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  gradeFilter,
  regionFilter,
  searchQuery,
  onClearGrade,
  onClearRegion,
  onClearSearch,
}) => {
  const hasActiveFilters = gradeFilter !== 'all' || regionFilter !== 'all' || searchQuery;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {gradeFilter !== 'all' && (
        <Chip
          label={`Grade: ${gradeFilter}`}
          onDelete={onClearGrade}
          color="primary"
          variant="outlined"
          size="small"
        />
      )}
      {regionFilter !== 'all' && (
        <Chip
          label={`Region: ${regionFilter}`}
          onDelete={onClearRegion}
          color="primary"
          variant="outlined"
          size="small"
        />
      )}
      {searchQuery && (
        <Chip
          label={`Search: "${searchQuery}"`}
          onDelete={onClearSearch}
          color="primary"
          variant="outlined"
          size="small"
        />
      )}
    </Box>
  );
};

export default FilterChips;
