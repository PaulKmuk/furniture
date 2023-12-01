import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { blog } from '../data/data'

const News = () => {

    const { id } = useParams()

    const news = blog.find(el => el.id === parseInt(id))

    let newsUnderImg = news.description.slice(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    // console.log(news);
    // console.log(newsUnderImg);

    return (
        <div>
            <div className='h-[250px] bg-emerald-800'>
                <div className='max-w-[900px] mx-auto flex items-center h-full'>
                    <h1 className='text-3xl md:text-5xl fontHero tracking-wider font-bold text-gray-200 px-10'>Blog</h1>
                </div>
                <div className='bg-gray-200'>
                    <div className='max-w-[900px] mx-auto py-10 px-10 flex flex-col'>
                        <h1 className='text-3xl md:text-5xl fontHero tracking-wider py-10 font-bold'>{news.title}</h1>
                        <p className='text-xl font-semibold indent-10 py-10'>{news.description[0]}</p>
                        <div className='max-w-[900px] mx-auto'>
                            <img className='rounded-3xl' src={news.pathImg}/>
                        </div>
                        {newsUnderImg.map(el => (
                            <p key={el} className='text-xl indent-10 py-10'>{el}</p>
                        ))}
                        <p className='ml-auto'>autor: {news.author}</p>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default News