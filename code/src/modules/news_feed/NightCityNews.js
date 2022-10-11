import React,{useState, useEffect} from "react";
import axios from 'axios'

function nighCityNews(){

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete',
      params: {query: '<REQUIRED>'},
      headers: {
        'X-RapidAPI-Key': 'b27ef0319dmshd9f173a6bfc4399p1e5a8djsn089ae46aa96f',
        'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return(
        <>
        </>
    )
}

export default nighCityNews

