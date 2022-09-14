import React, { useState } from 'react';
import UitImage from './image/uit-admission19-20.jpg';
import UitElect from './image/uit-electrical.jpg';
import UitStudnet from './image/uit-students.jpg';
import TimeCot from './TimeCot';
import './App.css';
const Home = () => {
    const date = new Date();


    const [dateTime, setDate] = useState(date.toLocaleDateString())
    // setDate(date)
    return (
        <>
            <TimeCot allInOne="Welcome to Website of UIT Burdwan" />
            <hr />
            {/* here we apply image */}
            <div id="coursel">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={UitImage} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Admission</h5>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={UitElect} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>UIT STUDENT</h5>
                                <p>Our Pedagogy thrives on more and more learning.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={UitStudnet} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>UIT INFRASTRUCTURE</h5>
                                <p>State of infrastructure.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;