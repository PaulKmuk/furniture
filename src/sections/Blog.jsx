import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blog } from '../data/data'

const Blog = () => {

    const navigate = useNavigate()

    const clickNews = (id) => {
        navigate(`/blog/${id}`)
    }

    return (
        <div className='max-w-[1400px] mx-auto px-6 sm:px-10 md:px-20 pt-20 pb-[200px]'>
            <h2 className='text-3xl font-bold md:text-5xl fontHero tracking-wider py-10'>Najnowsze artykuły</h2>
            <div className='flex flex-col md:flex-row gap-8 md:gap-10'>
                {blog.map(el => (
                    <div onClick={() => clickNews(el.id)} key={el.id} className='cursor-pointer group hover:bg-gray-200 hover:shadow-xl rounded-3xl'>
                        <div>
                            <img className='rounded-3xl group-hover:scale-105' src={el.pathImg}/>
                        </div>
                        <h3 className='font-bold text-md sm:text-lg md:text-xl p-4'>{el.title}</h3>
                        <p className='px-4 text-right'>autor: {el.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog