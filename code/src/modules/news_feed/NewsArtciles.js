import React from "react";

function News_artciles({title, url, link, description}){

    return (
        <div  key={title}>
            <h2><strong>{title}</strong></h2>

        </div>
    )
}
export default News_artciles