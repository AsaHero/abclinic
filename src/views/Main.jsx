import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/main.css";

function Line(props) {
    return (
        <div className="line">
            <div className="l_service">{props.services}</div>
            <span>............................................................................................................................................................................................................................................................................................................................................................................</span>
            <div className="price">{props.price} сум</div>
            <span className="line_x"></span>
        </div>
        
    )
}

function Main(props) {

    const services = {};

    for (const key in props.services) {      
            const element = props.services[key];
            services[key] = [];
            for (let i = 0; i < element.length; i++) {
                const obj = element[i];
                services[key].push(<Line services={obj["service"]} price={obj["price"]} />)
            }
    }


    return (
        <BrowserRouter>
        <main>
            <div className="sidebar off">
                <div className="sidebar_container">
                    <div className="rightside">
                        {/* <div className={cl.burger+ " " +cl.on} onClick={addClass}>
                            <span className={cl.s_1}></span>
                            <span className={cl.s_2}></span>
                            <span className={cl.s_3}></span>
                        </div> */}
                        <div className="side_nav">
                            <span></span>
                            <div className="block _1 active" id="home"><img src="./img/four-boxes.png" alt="" /></div>
                            <div className="block _2" id="services"><img src="./img/servises.png" alt="" /></div>
                            <div className="block _3" id="staff"><img src="./img/staff.png" alt="" /></div>
                            <div className="block _4" id="info"><img src="./img/info.png" alt="" /></div>
                            <div className="block _5" id="blog"><img src="./img/blog.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="background onthis" id="b_home"><img src="./img/big cab.jpg" alt="" /></div>
                <div className="background" id="b_services"><img src="./img/cutting.jpg" alt="" /></div>
                <div className="social_media">
                    <a href="https://instagram.com"><img className="insta" src="./img/Instagram_logo.png" /></a>   
                    <a href="https://youtube.com"><img className="youtube" src="./img/youtube_logo.png" /></a>
                    <a href="https://telegram.org"><img className="telegram" src="./img/telegram_logo.png" /></a>
                </div>
                <div className="home" id="1">
                    <div className="content">
                        <div className="name" id="name">
                            <div className="title">abclinic.uz</div>
                            <span></span>
                            <div className="subtitle">Создай историю с нами</div>
                        </div>
                        
                        
                    </div>
                    
                    <div className="win_logo"><img src="./img/ablogo.png" alt="" /></div>
                    <span className="arrow"></span>
                    <div className="shadow"></div>
                </div>

                <div className="services" id="2">
                    <div className="shadow"></div>
                    <div className="services_block">
                        <div className="service">
                            <div className="title">
                                Гигиена и профилактика зубов
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>«Check-up»</li>
                                <li>Комплексная гигиена зубов</li>
                                <li>Отбеливание зубов</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="title">
                                Лечение зубов
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>Лечение кариеса</li>
                                <li>Восстановление разрушенных зубов</li>
                            </ul>
                        </div>
                        <div className="service">
                            <div className="title">
                                Хирургические манипуляции
                            </div>
                            <span className="line_x"></span>
                            <ul className="list">
                                <li>Удаление зубов</li>
                                <li>Установка имплантата</li>
                                <li>Иссечение новообразований</li>
                                <li>Пластика десны</li>
                            </ul>                            
                        </div>
                    </div>
                    <div className="priceList_table">
                        <div className="open">Price list</div>
                        <div className="part first">
                            <div className="t_title">Консультация специалистов</div>
                            {services["first"]}
                        </div>
                        <div className="part second">
                            <div className="t_title">Лечение зубов</div>
                            {services["second"]}
                        </div>
                        <div className="part third">
                            <div className="t_title">Профессиональная гигиена</div>
                            {services["third"]}
                        </div>
                        <div className="part fourth">
                            <div className="t_title">Восстановление зубных рядов (Протезирование зубов)</div>
                            {services["fourth"]}
                        </div>
                        <div className="part fifth">
                            <div className="t_title">Хирургическая стоматология</div>
                            {services["fifth"]}
                        </div>
                    </div>
                        
                    
                </div>

                <div className="staff" id="3">

                </div>

                <div className="info" id="4">

                </div>
                
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
        <script src="./slick.min.js"></script>
        <script src="./script.js"></script>
        </BrowserRouter>
    )
}

export default Main;