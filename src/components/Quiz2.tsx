import React, { useState } from 'react';
import Pagination from './Pagination';
import Question from './Question';
import { AnimatePresence, motion } from 'framer-motion';

type QuizParams = {
    title: string;
    numQuestions: string;
}

const Quiz = ({ title, numQuestions }: QuizParams) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Number(numQuestions) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='overflow-x-hidden'>
            <h1 className="uppercase text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient">
                {title}
            </h1>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="pt-12"
                >
                    <div className='mb-12'>
                        <Question
                            id={currentPage}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
            <Pagination
                numQuestions={Number(numQuestions)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
            />
        </div>
    );
};

export default Quiz;
