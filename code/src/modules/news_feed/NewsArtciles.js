import React from "react";

function News_artciles({title, url, link, description}){
    if(!url){
        
    }

    
    return (
        <div className="each_article" key={title}>
            <a style={{}} href={link}> <h2><strong>{title}</strong></h2> </a> 

            <a href={link}>
                <img src={url} />
            </a>
            {/* <p>{description}</p> */}

        </div>
    )
}
export default News_artciles