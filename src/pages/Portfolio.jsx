import React, { Component } from 'react';
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
                            {/* <small>Hi, I am Oluwatobi Agbeja.</small> */}
                            <h1>My PORTFOLIO.</h1>
                            <p>Freelancing started for me in 2018 till now has got individuals and businesses increase their brand awareness by give them a well designed web interface.</p>
                            <p>Take a look at my works with technologies ranging from front end using react, vue or jquery and Backend using PHP(laravel)</p>
                        </section>
                        <section >
                            <img src="/illustration.png" alt="An illustration of people trying to build a web page on a browser"/>
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

                                    <section className="portfolio-card">
                                        <img src={data.img} alt={data.name} />
                                        <h4><a href={'/project/' + key + '/' + project}>{data.name}</a></h4>
                                        <p>{data.description}</p>
                                        {data.url ? <a href={data.url}> View Project </a> : <a href={data.repo}> View on Github </a>}
                                    </section>
                                ))
                            ))
                        }
                    </div>

                    <div id="Paris" className="tabcontent">
                        {
                            // Object.entries(data).map(([key, value]) => (
                                Object.entries(data['ui']).map(([project, data]) => (
                                   
                                    <section className="portfolio-card">
                                        <img src={data.img} alt={data.name} />
                                        <h4><a href={'/project/web/' + project}>{data.name}</a></h4>
                                        <p>{data.description}</p>
                                        {data.url ? <a href={data.url}> View Project </a> : <a href={data.repo}> View on Github </a>}
                                    </section>
                                ))
                            // ))
                        }
                    </div>

                    <div id="Tokyo" className="tabcontent">
                        {
                            Object.entries(data['web']).map(([project, data]) => (
                                // console.log(key, value);
                                // console.log( data);

                                <section className="portfolio-card">
                                    <img src={data.img} alt={data.name} />
                                    <h4><a href={'/project/web/' + project}>{data.name}</a></h4>
                                    <p>{data.description}</p>
                                    {data.url ? <a href={data.url}> View Project </a> : <a href={data.repo}> View on Github </a>}
                                </section>
                            ))
                        }
                    </div>
                </section>
            </>
        );
    }
}

export default Portfolio;
