import React, { useEffect, useState } from 'react';
import './Home.css'
import Product from './Product';
import ImgCom from './ImgCom';
import arrow from './img/arrow_w&d.png'

function Home() {
    const [x, setX] = useState(0)

    const slideLeft = () => {
        const active = document.querySelector('.sliderItem_active')
        console.log(active)
        x === 0 ? setX((-arr.length + 1) * 100) : setX(x + 100)

    }
    const slideRight = (i) => {
        /*   console.log(arr) */
        console.log(x === -arr.length - 2 * 100)
        console.log(x, (-arr.length + 1) * 100)
/*         const active = document.querySelector('.sliderItem_active')
 */        x === (-arr.length + 1) * 100 ? setX(0) : setX(x - 100)

        console.log(i)
    }

    const arr = [
        <ImgCom image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg' />,
        <ImgCom image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg' />,
        <ImgCom image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg' />,
        <ImgCom image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg' />,
        <ImgCom image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' />,]

    return (
        <div className='home'>
            <div className="home__container">
                <div className="home__slider">
                    <div className="home__slider-container">
                        <img onClick={slideLeft} className='home__arrow' src={arrow} alt="" />
                        <img onClick={slideRight} className='home__arrow' src={arrow} alt="" />
                        {arr.map((item, i) => {
                            return (
                                <div style={{ transform: `translate(${x}%)` }}  /* key={index} */ key={i} className="sliderItem">{item}</div>
                            )
                        })}
                    </div>
                </div>

                <div className="home__products">
                    <div className="home__row">
                        {console.log(<Product />)}
                        <Product title='The lean startup' id="4903850" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" amount={1} />
                        <Product id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                            amount={1}
                        />

                    </div>
                    <div className="home__row">
                        <Product id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={199.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                            amount={1}
                        />
                        <Product id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                            amount={1}
                        />
                        <Product id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                            amount={1}

                        />

                    </div>
                    <div className="home__row">
                        <Product id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                            amount={1}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
