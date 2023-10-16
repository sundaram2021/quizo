"use client"
import Quiz2 from '@/components/Quiz2';
import React from 'react';
import { useSearchParams } from 'next/navigation';



export default function Page() {
    const searchParams = useSearchParams();
    console.log(searchParams);
    // const choice = searchParams.get('choice');
    const title = searchParams.get('title');
    // const marksQuestions = searchParams.get('marksQuestions');
    const numQuestions = searchParams.get('numQuestions');
    // const time  = searchParams.get('time');
    

    return (
        <div>
            {/* Pass the retrieved query parameters to the Quiz2 component */}
            <Quiz2
                title={title?.toLowerCase() || ''}
                numQuestions={numQuestions || ''}
            />
        </div>
    );
}
