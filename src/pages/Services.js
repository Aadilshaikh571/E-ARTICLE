import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Our Premium Services</h1>
                <p>We offer a wide range of services tailored to meet your needs.</p>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.-buitfr4q8Ao_ciyi4wd2gHaEK&pid=Api&P=0&h=180" alt="Service 1" />
                    <h2>Web Development</h2>
                    <p>Building responsive, modern, and high-performing websites tailored to your brand.</p>
                </div>
                <div className="service-card">
                    <img src="https://wallpapercave.com/wp/wp3124749.jpg" alt="Service 2" />
                    <h2>SEO Optimization</h2>
                    <p>Enhancing your website's visibility with cutting-edge SEO practices and analytics.</p>
                </div>
                <div className="service-card">
                    <img src="https://wallpapercave.com/wp/wp3124740.jpg" alt="Service 3" />
                    <h2>Graphic Design</h2>
                    <p>Creating stunning visuals and branding to make your business stand out.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
