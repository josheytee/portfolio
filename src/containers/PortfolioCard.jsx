import React from 'react';

function PortfolioCard({data,project}) {
    return (
        <section className="portfolio-card">
            <img src={data.img} alt={data.name} />
            <h3><a href={'/project/web/' + project}>{data.name}</a></h3>
            <p>{data.description}</p>
            {data.url ? <a href={data.url}> View Project </a> : <a href={data.repo}> View on Github </a>}
        </section>
    )
}

export default PortfolioCard;