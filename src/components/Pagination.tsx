"use client"

import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

type PaginationProps = {
    numQuestions: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    onPrevPage: () => void;
    onNextPage: () => void;
}

const Pagination = ({ numQuestions, currentPage, setCurrentPage, onPrevPage, onNextPage }: PaginationProps) => {
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numQuestions - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center ">
      <button
        onClick={handlePrevPage}
        className="px-4 py-2 mr-4 bg-emerald-500 text-white rounded-md"
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        disabled={currentPage === numQuestions - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
