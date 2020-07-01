import React from 'react';
import Portfolio from '../containers/Portfolio';
import Slideshow from '../containers/SlideShow';

function Index() {
  document.title = "@josheytee | Home";

  return (
    <>
      <section className="benefit">
        <div className="container d-flex">
        <section >
          {/* <small>Hi, I am Oluwatobi Agbeja.</small> */}
          <h1>Transform your brand with seamless digital efforts.</h1>
          <p>I help brands, organizations reach more audience and generate feasible revenue via strategic digital presence.</p>
          <div className="cta-box">
            <a href="/portfolio" className="btn btn-cta">Portfolio</a>
            <a href="/#contact" className="btn btn-cta2">Hire Me!</a>
          </div>
        </section>
        <section >
          <img src="/illustration.png" alt="An illustration of people trying to build a web page on a browser"/>
        </section>
        </div>
      </section>
      
      <section className="services">
        <div className="container">
          <a name="services"><h2>Services</h2></a>
          <div className="services-wrapper">
            <section className="service">
              <div className="img-circle">
                <img src="./icons/adaptive-layout.svg" alt="web design"/>
              </div>
              <h3>website Design</h3>
              <small>(UI/UX)</small>
            </section>
            <section className="service">
              <div className="img-circle">
                <img src="./icons/website.svg" alt="web development"/>
              </div>
              <h3>Web Development</h3>
              <small>(Front/Back end)</small>
            </section>
            <section className="service">
              <div className="img-circle">
                <img src="./icons/api.svg"/>
              </div>
              <h3>API</h3>
            </section>
            {/* <section className="service">
              <div className="img-circle">
                <img src="./icons/market.svg"/>
              </div>
              <h3>Digital Marketing</h3>
            </section>               */}
          </div>
        </div>
      </section>

      <Portfolio type="web"/>
      <Portfolio type="ui"/>

      <div className="container">

        <section>
          <h2>Testimonials</h2>
          <Slideshow />
        </section>

        <section className="about">
          <div className=" d-flex">
            <section className="picture">
              <a name="about"> <img src="me.jpg"/></a>
            </section>

            <section>
              <h2 className="title">About Me</h2>
              <p>
              Oluwatobiloba Agbeja is a software engineer born and raise in Ibadan but stays in Ogun State Nigeria.                
              </p>
              <p>
he is a hard working software developer focused on web development with a flair for creating elegant solutions. Passionate about software architecture and design patterns.
                
              </p>
              <p>
He is also a computer science and engineering graduate of Ladoke Akintola University of Technology.
                
              </p>
            </section>
          </div>
        </section>
        
        <section className="contact">
          <a name="contact"><h2>Contact</h2></a>
          <div className="d-flex">
            <section>
              <span className="watermark">Get in Touch</span>
              <div className="phone">Phone: <a href="tel:+2348038110422">+2348038110422</a></div>
              <div className="email"><a href="mailto:tobiagbeja4@gmail.com">Email:tobiagbeja4@gmail.com</a></div>
            </section>
            {/* <div>OR</div> */}
            <section>
              <form method="post" action="https://formspree.io/xqkydond">
                <section className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name"/>
                </section>
                <section className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="_replyto" required/>
                </section>
                <section className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea row="20" name="message"></textarea>
                </section>
                <section> <button type="submit">Send</button></section>
              </form>
            </section>
          </div>
        </section>
      
      </div>
    </>
  );
}

export default Index;
