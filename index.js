const lastPage = () => {
  const pageNumber = pageCount;
  pagination(pageNumber);
};

const firstPage = () => {
  const pageNumber = 1;
  pagination(pageNumber);
};

const nextPage = () => {
  const pageNumber = currentPage + 1;
  if (pageNumber > pageCount) return;
  pagination(pageNumber);
};

const previousPage = () => {
  const pageNumber = currentPage - 1;
  if (pageNumber < 1) return;
  pagination(pageNumber);
};
