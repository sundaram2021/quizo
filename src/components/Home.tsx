'use client'

import { useState } from 'react'
import { topics } from '../constants/topics'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'



const Home = () => {
    const [choice, setChoice] = useState('No')
    const [title, setTitle] = useState('')
    const [numQuestions, setNumQuestions] = useState('5')
    const [marksQuestions, setMarksQuestions] = useState('5')
    const [time, setTime] = useState('5')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // router.push('/quiz')
    }

    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='border rounded border-white/0 '>
                <h1 className='text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient'>
                    Schedule a Quiz
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className='mt-14 flex flex-col gap-4 w-[80%] mx-auto'
                >
                    <div className='grid grid-cols-2 gap-x-8 gap-y-6'>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='noOfQuestions'
                                className='uppercase text-xs'
                            >
                                Set of Questions
                            </label>
                            <input
                                type='text'
                                name='noOfQuestions'
                                value={numQuestions}
                                onChange={(e) =>
                                    setNumQuestions(e.target.value)
                                }
                                className='quiz-select py-3 border pl-2'
                            />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label
                                htmlFor='marksQuestions'
                                className='uppercase text-xs'
                            >
                                Marks for each Question
                            </label>
                            <select
                                name='marksQuestions'
                                value={marksQuestions}
                                onChange={(e) =>
                                    setMarksQuestions(e.target.value)
                                }
                                className='quiz-select py-3 border'
                            >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='file'
                                className='uppercase text-xs'
                            >
                                Do you want the result to be in a Drive file?
                            </label>
                            <select
                                name='file'
                                value={choice}
                                onChange={(e) => setChoice(e.target.value)}
                                className='quiz-select py-3 border'
                            >
                                <option value='yes'>Yes</option>
                                <option value='no'>
                                    No
                                </option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='noOfQuestions'
                                className='uppercase text-xs'
                            >
                                Time for each Question
                            </label>
                            <input
                                type='text'
                                name='noOfQuestions'
                                value={time}
                                onChange={(e) =>
                                    setTime(e.target.value)
                                }
                                className='quiz-select py-3 border pl-2 mt-3'
                            />
                        </div>

                        <div className='flex flex-col col-span-2 '>
                            <label
                                htmlFor='title'
                                className='uppercase text-xs'
                            >
                                Title of the Quiz
                            </label>
                            <input
                                type='text'
  
                                placeholder='Enter the title of the quiz...'
                                value={title}
                                onChange={(e) =>
                                  setTitle(e.target.value)
                                }
                                className='quiz-select py-3 border pl-2'
                            />
                        </div>
                    </div>
                    <div className='mx-auto mt-8'>
                        <Link
                            className='q-button'
                            href={{
                                pathname: '/quiz',
                                query: {
                                    choice: choice.toLowerCase(),
                                    title: title.toLowerCase(),
                                    marksQuestions,
                                    numQuestions,
                                    time,
                                },
                            }}
                        >
                            Start Uploading Questions
                        </Link>
                    </div>
                </form>
            </div>

            <a
                className='fixed bottom-0 flex items-center gap-2 pb-2 font-mono text-sm  transition hover:text-emerald-300 sm:m-0'
                href='https://github.com/sundaram2021/quizo'
                target='_blank'
            >
                {/* <FiGithub size={16} className='translate-y-[0px]' /> */}
                <FiGithub size={16} />
                Built with Next.js / Tailwind CSS
            </a>
        </div>
    )
}
export default Home