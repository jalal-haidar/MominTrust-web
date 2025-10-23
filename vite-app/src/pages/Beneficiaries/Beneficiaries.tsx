import React, { useState, useMemo } from 'react';
import Alert from '@mui/material/Alert';

import { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import Loading from '@/components/Loading/Loading';
import { useRecoilValueLoadable } from 'recoil';
import { beneficiariesSelector } from '@/store/beneficiaries';
import { PageContainer, PageSection, PageTitle } from '@/components/styled';
import BeneficiaryFilters from '@/components/BeneficiaryFilters';
import FilterChips from '@/components/FilterChips';
import BeneficiaryGrid from '@/components/BeneficiaryGrid';

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
        <PageTitle variant="h4">Beneficiaries</PageTitle>

        {listLoadable.state === 'hasError' && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            Failed to load beneficiaries from the server — showing demo data.
          </Alert>
        )}

        <BeneficiaryFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          gradeFilter={gradeFilter}
          setGradeFilter={setGradeFilter}
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          grades={grades}
          regions={regions}
        />

        <FilterChips
          gradeFilter={gradeFilter}
          regionFilter={regionFilter}
          searchQuery={searchQuery}
          onClearGrade={() => setGradeFilter('all')}
          onClearRegion={() => setRegionFilter('all')}
          onClearSearch={() => setSearchQuery('')}
        />

        <BeneficiaryGrid beneficiaries={filteredData} totalCount={data.length} />
      </PageSection>
    </PageContainer>
  );
};

export default Beneficiaries;
