import { useState, useMemo } from 'react';

/**
 * Custom hook for pagination logic
 */
export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
  siblingCount = 1
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // 5 = first + last + current + 2 dots

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    return [];
  }, [totalPages, siblingCount, currentPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirst = () => {
    setCurrentPage(1);
  };

  const goToLast = () => {
    setCurrentPage(totalPages);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return {
    currentPage,
    totalPages,
    paginationRange,
    goToPage,
    goToNext,
    goToPrevious,
    goToFirst,
    goToLast,
    isFirstPage,
    isLastPage
  };
}

// Helper function to create range of numbers
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}