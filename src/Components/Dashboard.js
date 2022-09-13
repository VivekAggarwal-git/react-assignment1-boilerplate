import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Dashboard() {

    const [trending, setTrending] = useState([]);
    const [readlaterdb, setReadlaterdb] = useState([]);


    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=2442caede3c24019b1b70e012932fec9&page=1")
            .then((res) => {
                setTrending(res.data.articles);
            })
    }, []);

    const readLater = (newCard) => {
        axios
            .post("http://localhost:3001/readlater", newCard, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then(function (response) {
                if (response.status === 201) {
                    setReadlaterdb([...readlaterdb, response.data]);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='container' style={{ width: "max", paddingTop: "90px", paddingBottom: "80px" }}>
            <h3 style={{ textAlign: "center" }}>Today's Latest News</h3>
            <div className='row' style={{ width: "max", paddingTop: "8 px" }}>
                {trending.map((news) => (
                    <Card
                        urlToImage={news.urlToImage}
                        title={news.title}
                        author={news.author}
                        description={news.description}
                        url={news.url}
                        readLater={readLater}
                    />
                ))
                }
            </div>
        </div>
    );
};