import './Crew.css';
import Navbar from '../Navbar/Navbar';
import data from '../../Data/data.json';
import {useState} from 'react';

function Crew(props) {
    const [index,setIndex]=useState(0);
    return <div className="Crew">
        <section className="crew-top">
            <Navbar active={2} />
        </section>
        <h1 className="crew-title"><span>02</span> MEET YOUR CREW</h1>
        <section className="crew-bottom">
            <div className="crew-left">
                <div className="crew-details">
                    <div>
                        <div className="crew-role">{data.crew[index].role}</div>
                        <div className="crew-name">{data.crew[index].name}</div>
                        <div className="crew-desc">{data.crew[index].bio}</div>
                    </div>
                    <div className="carousel-buttons">
                        <button className={"carousel-button" + (index===0?" active-button":"")} onClick={() => {setIndex(0)}}></button>
                        <button className={"carousel-button" + (index===1?" active-button":"")} onClick={() => {setIndex(1)}}></button>
                        <button className={"carousel-button" + (index===2?" active-button":"")} onClick={() => {setIndex(2)}}></button>
                        <button className={"carousel-button" + (index===3?" active-button":"")} onClick={() => {setIndex(3)}}></button>
                    </div>
                </div>
            </div>
            <div className="crew-right">
                <img className="crew-image" src={data.crew[index].images.webp} alt={data.crew[index].name} />
                <hr className="crew-image-border" />
            </div>
        </section>
    </div>
}

export default Crew;