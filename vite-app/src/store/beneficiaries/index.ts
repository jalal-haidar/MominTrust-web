import { atom, selector } from 'recoil';

export type Beneficiary = {
  id: string;
  initials: string; // privacy-first: only initials
  grade: number;
  region?: string;
  academicScore?: number;
};

const beneficiariesState = atom<Beneficiary[]>({
  key: 'beneficiariesState',
  default: [],
});

const beneficiariesSelector = selector<Beneficiary[]>({
  key: 'beneficiariesSelector',
  get: async ({ get }) => {
    // read cached atom first (so clients can set it for testing)
    const cached = get(beneficiariesState);
    if (cached && cached.length > 0) return cached;

    // Fetch from a presumed backend endpoint. Keep response shape privacy-safe.
    const res = await fetch('/api/beneficiaries');
    if (!res.ok) {
      throw new Error(`Failed to load beneficiaries: ${res.status}`);
    }

    const data = (await res.json()) as Array<Partial<Beneficiary>>;

    // Map to the public-safe Beneficiary shape (only safe fields)
    return data.map((d) => ({
      id: String(d.id ?? ''),
      initials: String(d.initials ?? ''),
      grade: Number(d.grade ?? 0),
      region: d.region,
      academicScore: d.academicScore,
    }));
  },
});

export { beneficiariesState, beneficiariesSelector };
