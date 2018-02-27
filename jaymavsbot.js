

var twit = require("twit");
//var config = require("./config");

var T = new twit({
//your API KEYS
});

var myID = "AdiNelakonda"

var stream = T.stream('statuses/filter',{
   follow : //TwitterID of a user
 });

stream.on("tweet", watchForTweet)

// Be notified when he is tweeting Get Tweet ID. status.id
function watchForTweet(userTweet)
{
var replyID = userTweet.id_str//toString();
var whatToSay = "@" + userTweet.user.screen_name + " Good tweet "

if(userTweet.user.screen_name !== myID)
{
  tweet(whatToSay,replyID);
}
var fs= require("fs")
var json = JSON.stringify(jayTweet,null,1)
fs.writeFile("tweet.json" , json)

}
//Respond to his tweet (in_reply_to_status_id).
function tweet (theTweet,tweetID)
{

  var params = {status: theTweet, in_reply_to_status_id: tweetID}
    function callback(err, data, response)
    {
      if (err)
      {
        console.log("something went wrong")
      //  console.log(tweetID)
      }
      else {
        console.log("it worked")
      //  console.log(replied)
      }
    }
    T.post("statuses/update",params,callback)

}
