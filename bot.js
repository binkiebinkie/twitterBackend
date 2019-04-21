const twit = require("twit");
const config = require("./config.js");

const T = new twit(config);

const stream = T.stream("statuses/filter", { track: ["@BabyFuturistic"] });
stream.on("tweet", tweet => {
  console.log("tweet received! ", tweet);
  T.post("statuses/retweet/:id", { id: tweet.id }, (err, data, response) => {
    console.log(err, data, response);
  });
});

T.post(
  "statuses/update",
  { status: "why hello world 👋" },
  (err, data, response) => {
    console.log(err, data, response);
  }
);

// var retweet = function() {
//   var params = {
//     q: '#nodejs, #Nodejs',
//     result_type: 'recent',
//     lang: 'en'
//   }
