import React from 'react'
import Card from './Card'
import '../styles/card.css'

const Cards = () => {

    const info1 = "What is the most secure crypto wallet of 2023?"
    const info2 = "How to trade crypto tokens from your phone"
    const info3 = "5 great crypto apps you should not be missing out"
    const name1 = "ALEX TURNER"
    const name2 = "JOHN CARTER"
    const name3 = "SOPHIE MOORE"
  return (
    <>
        <div id='Cards' className="cards-container">
            <div className="news">
                <h1>Browse our Latest <span>News</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui porro quas molestiae sint vitae ea. Odio ad voluptatibus unde? Ab.</p>
            </div>
            <div className="cards">
                <Card post="./post1.jpg" profile="./profile1.jpg" info={info1} name={name1}/>
                <Card post="./post2.jpg" profile="./profile2.jpg" info={info2} name={name2}/>
                <Card post="./post3.jpg" profile="./profile3.jpg" info={info3} name={name3}/>
            </div>
        </div>
    </>
  )
}

export default Cards
