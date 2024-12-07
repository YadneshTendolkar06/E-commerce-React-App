import React from 'react'
import {FeaturedProduct, Footer, HeroSection} from './index'

function Dashboard() {
    return (
        <div className="bg-gray-100 min-h-screen">
        <div className="relative bg-blue-500 text-white py-16">
            <HeroSection />
        </div>
        <section className="container mx-auto my-12">
        <FeaturedProduct />
        </section>
        <footer className="bg-gray-800 text-white py-8">
            <Footer />
        </footer>
    </div>
    )
}

export default Dashboard