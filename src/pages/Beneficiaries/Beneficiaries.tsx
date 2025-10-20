import React, { useState, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

import BeneficiaryCard, { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import Loading from '@/components/Loading/Loading';
import { useRecoilValueLoadable } from 'recoil';
import { beneficiariesSelector } from '@/store/beneficiaries';
import { PageContainer, PageSection, PageTitle } from '@/components/styled';

const Beneficiaries: React.FC = () => {
  const listLoadable = useRecoilValueLoadable(beneficiariesSelector);
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data with additional entries for better demonstration
  const demoData: BeneficiaryPreview[] = [
    { id: 'demo-1', initials: 'AR', grade: 6, region: 'Kabul', academicScore: 88 },
    { id: 'demo-2', initials: 'ZM', grade: 8, region: 'Herat', academicScore: 92 },
    { id: 'demo-3', initials: 'SK', grade: 5, region: 'Balkh', academicScore: 80 },
    { id: 'demo-4', initials: 'PK', grade: 7, region: 'Kabul', academicScore: 85 },
    { id: 'demo-5', initials: 'MT', grade: 8, region: 'Kandahar', academicScore: 79 },
    { id: 'demo-6', initials: 'JL', grade: 6, region: 'Herat', academicScore: 94 },
    { id: 'demo-7', initials: 'BZ', grade: 5, region: 'Balkh', academicScore: 82 },
    { id: 'demo-8', initials: 'AB', grade: 9, region: 'Kabul', academicScore: 91 },
  ];

  const data =
    listLoadable.state === 'hasValue' ? (listLoadable.contents as BeneficiaryPreview[]) : demoData;

  // Extract unique regions and grades for filters
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(data.map((b) => b.region))).filter(
      Boolean,
    ) as string[];
    return uniqueRegions.sort();
  }, [data]);

  const grades = useMemo(() => {
    const uniqueGrades = Array.from(new Set(data.map((b) => b.grade))).sort((a, b) => a - b);
    return uniqueGrades;
  }, [data]);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return data.filter((b) => {
      const matchesGrade = gradeFilter === 'all' || b.grade === parseInt(gradeFilter);
      const matchesRegion = regionFilter === 'all' || b.region === regionFilter;
      const matchesSearch =
        !searchQuery ||
        b.initials.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.region && b.region.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesGrade && matchesRegion && matchesSearch;
    });
  }, [data, gradeFilter, regionFilter, searchQuery]);

  if (listLoadable.state === 'loading') {
    return <Loading />;
  }

  return (
    <PageContainer>
      <PageSection>
        <PageTitle variant="h4" component="h1">
          Beneficiaries
        </PageTitle>

        {listLoadable.state === 'hasError' && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            Failed to load beneficiaries from the server — showing demo data.
          </Alert>
        )}

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

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {gradeFilter !== 'all' && (
              <Chip
                label={`Grade: ${gradeFilter}`}
                onDelete={() => setGradeFilter('all')}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
            {regionFilter !== 'all' && (
              <Chip
                label={`Region: ${regionFilter}`}
                onDelete={() => setRegionFilter('all')}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
            {searchQuery && (
              <Chip
                label={`Search: "${searchQuery}"`}
                onDelete={() => setSearchQuery('')}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
          </Box>
        </Paper>

        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">
            Showing {filteredData.length} of {data.length} beneficiaries
          </Typography>
        </Box>

        {filteredData.length === 0 ? (
          <Alert severity="info" sx={{ mt: 2 }}>
            No beneficiaries match the selected filters. Try adjusting your search criteria.
          </Alert>
        ) : (
          <Grid container spacing={2} alignItems="stretch">
            {filteredData.map((b) => (
              <Grid key={b.id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
                <BeneficiaryCard b={b} />
              </Grid>
            ))}
          </Grid>
        )}
      </PageSection>
    </PageContainer>
  );
};

export default Beneficiaries;
