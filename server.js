const express = require('express');
const twitter = require('twit');
const sentiment = require('sentiment');


const config = {
  consumer_key: 'I9w7MibaIvr1CTz5tk5zsapNS',
  consumer_secret: 'dLC73Oi72pReaqE30mVLFGAY19SWQwhOALIPvfIQaCtFTnq79W',
  access_token: '866670466890596355-W0KnESRTp7jVDoS3xyOu1ZKCK1PRI6v',
  access_token_secret: 'gDNn19DjDWHIkUZ3yNoWYTtymqx183SyLg8nGBo0RZf01',
}

const app = express();


const server = app.listen((process.env.PORT || 5000), () => {
    console.log(`Server running at port: 5000`);
});

var searchTerm = 'hello';
let respData = [];
app.get(`/sentiment-analysis/:topic`, (req, res) => {
  const twitterClient =  new twitter(config);
  const Sentiment = new sentiment();
  const topicSearch = req.params;
  //res.send(data.topic);
  searchTerm = topicSearch.topic;
  //console.log(searchTerm);
  twitterClient.get('search/tweets', {q: searchTerm, count: 100}, (err, data, response)=> {
    let analysedData = data.statuses.map(tweet => {
      return {
        text: tweet.text,
        analysis: Sentiment.analyze(tweet.text)
      }
    });

    res.json(analysedData);
  });
});
