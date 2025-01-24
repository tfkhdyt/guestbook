export function getPaginationMeta(page: number, perPage: number, total: number) {
  const totalPages = Math.ceil(total / perPage);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    total,
    totalPages,
    page,
    perPage,
    hasPreviousPage,
    hasNextPage,
  };
}
