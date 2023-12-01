import React, { useState } from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import Button from '../components/Button';
import imgChair from '../assets/chairContact.png'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const handleSubmitMessage = (event) => {
        event.preventDefault()
        if(name && text && email) {
            const message = {
                name,
                email,
                text
            }
            alert('Wiadomość została pomyślnie wysłana')
            console.log(message);
            setName('')
            setEmail('')
            setText('')
        } else {
            alert('Wiadomość NIE została wysłana, wypełnij wszystkie pola')
        }
    }

    return (
        <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row-reverse relative py-20'>
            <div className='absolute -top-[200px] md:-top-[150px] lg:right-[120px] sm:right-[60px] right-[30px]'>
                <img src={imgChair} className='md:max-w-[400px] max-w-[300px] drop-shadow-2xl'/>
            </div>
            <div className='flex-1 h-[200px] w-[200px]'>

            </div>
            <div className='flex-1 px-10 pt-[100px] md:pt-10'>
                <div className='flex items-center gap-6 pb-10 pl-6'>
                    <p className='text-4xl'><FaRegEnvelope /></p>
                    <h2 className="fontHero font-bold text-2xl md:text-4xl">Napisz do Nas</h2>
                </div>
                <form onSubmit={(event) => handleSubmitMessage(event)} className='flex flex-col gap-4 text-md sm:text-lg md:text-xl'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='px-6 py-2 rounded-lg md:rounded-3xl' placeholder='Twoje imię'/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='px-6 py-2 rounded-lg md:rounded-3xl' placeholder='Twój adres mailowy'/>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className='px-6 py-4 rounded-lg md:rounded-3xl min-h-[150px]' placeholder='Treść twojej wiadomości ' />
                    <Button type='submit' label='Wyślij'/>
                </form>
            </div>
        </div>
    )
}

export default Contact