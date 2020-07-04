import React, { Component } from 'react';
import PortfolioCard from '../containers/PortfolioCard';
import data from '../data/';
import '../css/App.css';
import '../css/tabs.css';


class Portfolio extends Component {

    openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them 
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    componentDidMount() {
        document.title = "@josheytee | Portfolio";
        document.getElementsByClassName("tabcontent")[0].style.display = "flex";
    }

    render() {
        return (
            <>
                <section className="benefit gradient">
                    <div className="container d-flex">
                        <section className="portfolio" >
                            <h1>My PORTFOLIO.</h1>
                            <p>
                                Ever since 2018, I started out in the freelancing industry by working with different brands, organizations helping to create Top-Notch Web interfaces purposed for brand awareness and increase in revenue generation.
                            </p>
                            <p>
                                Take a look at my works with technologies ranging from front end using react, vue or jquery and Backend using PHP(laravel)
                            </p>
                        </section>
                        <section >
                            <img src="/illustration.png" alt="An illustration of people trying to build a web page on a browser" />
                        </section>
                    </div>
                </section>
                <section className="container">
                    {/* <!-- Tab links --> */}
                    <div className="tab">
                        <button className="tablinks" onClick={(event) => this.openCity(event, 'London')}>All</button>
                        <button className="tablinks" onClick={(event) => this.openCity(event, 'Paris')}>Web design</button>
                        <button className="tablinks" onClick={(event) => this.openCity(event, 'Tokyo')}>web Development</button>
                    </div>

                    {/* <!-- Tab content --> */}
                    <div id="London" className="tabcontent">
                        {
                            Object.entries(data).map(([key, value]) => (
                                Object.entries(value).map(([project, data]) => (
                                    // console.log(key, value);
                                    // console.log( data);

                                    <PortfolioCard data={data} project={project} />

                                ))
                            ))
                        }
                    </div>

                    <div id="Paris" className="tabcontent">
                        {
                            // Object.entries(data).map(([key, value]) => (
                            Object.entries(data['ui']).map(([project, data]) => (

                                <PortfolioCard data={data} project={project} />

                            ))
                            // ))
                        }
                    </div>

                    <div id="Tokyo" className="tabcontent">
                        {
                            Object.entries(data['web']).map(([project, data]) => (
                                // console.log(key, value);
                                // console.log( data);
                                <PortfolioCard data={data} project={project} />

                            ))
                        }
                    </div>
                </section>
            </>
        );
    }
}

export default Portfolio;
