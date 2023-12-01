import Navigate from "./components/Navigate"
import BgComponent from "./components/BgComponent"
import ShoppingCart from "./components/ShoppingCart"
import Footer from "./components/Footer"

import { Home, Shop, AboutAs, Project, Blog, Contact } from "./sections"

import { Shopping, News } from './pages/index'

import { Routes, Route } from 'react-router-dom'

import { useSelector } from "react-redux"


function App() {
    
    const isOpenShoppingCart = useSelector(state => state.shopping.openShoppingCart)

    return (
        <div className="relative">
            <Navigate />

            <Routes>

                <Route path="/" element={
                    <div>
                        <section id='/' className="bg-emerald-800 w-full">
                            <Home />
                        </section>
                        <section id='o-nas' className="bg-gray-200 w-full">
                            <AboutAs />
                        </section>
                        <section id='sklep' className="bg-gray-100 w-full">
                            <Shop />
                        </section>
                        <section id='projekt' className="bg-gray-200 w-full relative">
                            <div className="absolute top-2 left-2 lg:top-16 lg:left-20">
                                <BgComponent />
                            </div>
                            <Project />
                        </section>
                        <section id='blog' className="bg-gray-100 w-full">
                            <Blog />
                        </section>
                        <section id='kontakt' className="bg-gray-200 w-full">
                            <Contact />
                        </section>
                        <Footer />
                    </div>
                }/>

                <Route path="/shopping" element={<Shopping />}/>
                <Route path="/blog/:id" element={<News />}/>

            </Routes>


            {isOpenShoppingCart && <ShoppingCart />}

        </div>
    )
}

export default App
