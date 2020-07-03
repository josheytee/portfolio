import React, { Component } from "react";
import data from '../data/';
import '../css/modal.css';
import PortfolioCard from './PortfolioCard'
class Portfolio extends Component {

    modal() {
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    componentWillMount() {

    }

    render() {
        let { type } = this.props;
        let count = 0;
        return (
            <section className="portfolio">
                <div className="container">
                    <div className="d-flex">
                        <section className="portfolio-left">
                            <div className="portfolio-pattern">
                                <div className="portfolio-design">
                                    {
                                        type === 'ui' ? "WEB DESIGN" : "WEB DEVELOPMENT"
                                    }
                                </div>
                            </div>

                            <div className="seeall"><img src="/icons/arrow.svg" className="arrow" alt="an animating arrow pointing to see all button" /> <a href="/portfolio">see all</a></div>
                        </section>

                        <section className="portfolio-cards">
                            {
                                // Object.entries(data).map(([key, value]) => (
                                Object.entries(data[type]).map(([project, data]) => {
                                     count++
                                     return (
                                        (count <= 4 ) ?
                                            <PortfolioCard data={data} project={project} /> : ""
                                    )

                                })
                                // ))
                            }

                            {/* <!-- The Modal --> */}
                            {/* <div id="myModal" class="modal">

                                <span class="close">&times;</span>

                                <img class="modal-content" id="img01" />

                                <div id="caption"></div>
                            </div>
                             */}

                        </section>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;