import { http } from 'msw';
import mockData from './stackline_frontend_assessment_data_2021.json';

export const handlers = [
  // Mock GET request to /product
  http.get('/api/product', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockData) // Return the mock data from the JSON file
    );
  }),
];
