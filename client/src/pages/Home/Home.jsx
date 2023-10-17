import React from 'react'
import "./Home.css"
import Navbar from '../../componsnts/navbar/Navbar'
import Header from '../../componsnts/header/Header'
import Feautered from '../../componsnts/feautered/Feautered'
import PropertyList from '../../componsnts/propertyList/PropertyList'
import FeaturedProperties from '../../componsnts/featuredProperties/FeaturedProperties'
import MailList from '../../componsnts/mailList/MailList'
import Footer from '../../componsnts/footer/Footer'
function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Feautered />
                <h1 className="homeTitle">Browse by prperty type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guest love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home
