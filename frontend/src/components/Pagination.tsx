import { IconDots } from "@tabler/icons-react";
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`py-2 px-4 mx-1 border rounded ${
              currentPage === i
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-200 font-semibold"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`py-2 px-4 mx-1 rounded ${
            currentPage === 1
              ? "bg-orange-500 text-white border "
              : "hover:bg-gray-200 font-semibold"
          }`}
        >
          1
        </button>
      );

      if (currentPage > 4) {
        pages.push(
          <span key="dots-start" className="flex items-end">
            <IconDots size={16} />
          </span>
        );
      }

      const startPage = Math.max(2, Math.min(currentPage - 1, totalPages - 4));
      const endPage = Math.min(totalPages - 1, Math.max(currentPage + 1, 4));

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`py-2 px-4 mx-1 rounded ${
              currentPage === i
                ? "bg-orange-500 text-white border "
                : "hover:bg-gray-200 font-semibold"
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 3) {
        pages.push(
          <span key="dots-end" className="flex items-end">
            <IconDots size={16} />
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`py-2 px-4 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-orange-500 text-white border "
              : "hover:bg-gray-200 font-semibold"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return <div className="flex justify-center mt-4">{renderPageNumbers()}</div>;
};

export default Pagination;
