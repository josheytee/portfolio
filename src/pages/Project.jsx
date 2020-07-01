import React, { Component } from 'react';
import '../css/App.css';
import '../css/tabs.css';
import data from '../data';


class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {}
        };
    }
    componentDidMount() {
        let { match } = this.props;
        let project = data[match.params.category][match.params.name];
        if(project){

            this.setState({
                project
            });
            document.title = "@josheytee | " + project.name;
        }else{
            document.location = '/';
        }

        // console.log(match, data, data[match.params.category][match.params.name]);
    }
    render() {
        let { project } = this.state;

        return (
            <section className="container project">
                <h1>{project.name}</h1>
                <div className="image-wrapper">
                    <img src={project.img} alt={project.name} srcset="" />
                </div>
                <h2>PROJECT SUMMARY</h2>
                <p>
                    <b>Client: </b>
                    <span className="primary-color"> {project.client ? project.client.name : null} </span>
                </p>
                <p>
                    <b>Technology Used: </b>
                    <span className="primary-color">
                        {project.technology}
                    </span>
                </p>
                {
                    project.url ? <p><b>Site Url:</b>  <a href={project.url} className="primary-color"> {project.url} </a></p> : ''
                }
                {
                    project.repo ? <p><b>Github Repo Url:</b>  <a href={project.repo} className="primary-color"> {project.repo} </a> </p> : ''
                }
                <p dangerouslySetInnerHTML={{__html: project.problem}} />
                <div className="info">
                    <h3>I helped with</h3>
                    <ul>
                        
                        {project.helped ? project['helped'].map((key,value) => (
                            <li>
                                {key}
                            </li>
                        )):null}
                    </ul>

                </div>
                {/* <div className="image-wrapper">
                    <img src={project.img} />
                </div>
                <div className="testimony">
                    <blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aliquam provident inventore natus maxime officia quod harum cupiditate magni impedit quo obcaecati perspiciatis dolores facere, molestiae suscipit ad, a voluptas.
                </blockquote>
                    <div>
                        <img src="" alt="" />
                        <div>
                            name
                            title
                    </div>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default Project;
