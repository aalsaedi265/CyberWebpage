import React,{useState, useEffect} from "react"
import News_artciles from "./NewsArtciles"
import searchBar from "./SearchBar"
// import axios from 'axios'

function nighCityNews(){
    const [news, setNews] = useState([])
    const [search, setSeach] =useState('')

    useEffect(() =>{
        fetch('https://newsdata.io/api/1/news?apikey=pub_13209b3d58a784c9500107ac2cd6cb7d9c5df&q=technology ')
        .then( res => res.json())
        .then(data => setNews(data.results) )
    },[]);
    
    // let searchable_articels = news.filter( el => el.title.toLowerCase(). )

    let displayed_Arctiles = news.map(obj=>(
        <News_artciles
        title= {obj.title}
        url = {obj.image_url}
        link ={obj.link}
        description = {obj.description}
        
        />
    ));



    return(
        <>
        <div className="serach_bar">

            
        </div>
        <div className="Center_page_info">

            {displayed_Arctiles}
        </div>
        </>
    )
};

export default nighCityNews

