import { request } from '../_helpers/request';

const getAllBooks = (query) => {
  return request('POST', query);
};

export const bookAssignmentService = {
  getAllBooks,
};
