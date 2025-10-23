declare module 'chart.js';
declare module 'react-chartjs-2';

// Provide minimal typing for Chart.js animation context used in this project
// Use `unknown` for arbitrary properties to avoid `any` lint errors.
interface ChartAnimationContext {
  dataIndex?: number;
  [key: string]: unknown;
}
