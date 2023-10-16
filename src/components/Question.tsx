import React from 'react'

function Question({id}: {id: number}) {
  return (
    <div className=' grid place-items-top'>
        {/* take input of a question and 4 options */}
        <div className='mt-2 flex flex-col gap-4 w-[80%] mx-auto'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                <div className='flex flex-col col-span-2'>
                    <label
                        htmlFor='question'
                        className='uppercase text-xs'
                    >
                        Question {id + 1}
                    </label>
                    <input
                        type='text'
                        name='question'
                        placeholder='Enter your question here'
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div> 
                <div className='flex flex-col'>
                    <label
                        htmlFor='option1'
                        className='uppercase text-xs'
                        
                    >
                        Option 1
                    </label>
                    <input
                        type='text'
                        name='option1'
                        placeholder='enter option 1'
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='option2'
                        className='uppercase text-xs'
                        
                    >
                        Option 2
                    </label>
                    <input
                        type='text'
                        name='option2'
                        placeholder='enter option 2'
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='option3'
                        className='uppercase text-xs'
                        
                    >
                        Option 3
                    </label>
                    <input
                        type='text'
                        name='option3'
                        placeholder='enter option 3'
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='option4'
                        className='uppercase text-xs'
                        
                    >
                        Option 4
                    </label>
                    <input
                        type='text'
                        name='option4'
                        placeholder='enter option 4'
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label
                        htmlFor='option5'
                        className='uppercase text-xs'
                        
                    >
                        Enter the correct option
                    </label>
                    <input
                        type='number'
                        name='option5'
                        min="1" 
                        max="4"
                        // value={numQuestions}
                        // onChange={(e) =>
                        //     setNumQuestions(e.target.value)
                        // }
                        className='quiz-select py-3 border pl-2'
                    />
                </div>
            </div>
        </div>                
    </div>
  )
}

export default Question