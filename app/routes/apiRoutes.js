
const friends = require("../data/friends");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let newFriend = req.body
    // console.log(newFriend)
    // console.log(friends)
    //compatability logic --  will use a loop to compare the array of values for the new addition to the array of values for each existing record, so a 2D loop? Loop through friends array, then at each index of loop1, we use loop2 to run through each friend's response values, compare to corresponding indexes of new friends responses, and store the absolute value of differences summed as a 'compatability' value. Maybe store that compatability value as in index as a new array that is populated by the first loop as it goes (after second loop builds up that compatability value for the individual). So when the loops are done we will have an array of compatability values with indexes that correspond to the person in the original array that the new person was compared to. We can then use another, seperate 1D array to flip through the compatability scores array and return the index with the lowest value. That best match case from the original friend array can be served up in the modal to the user, or at least saved in a variable to be used for that purpose, before the new friend is added to the total array of friends.
    comparisons = [];
    for (let i = 0; i < friends.length; i++) {
      let differenceScore = 0;
      for (let j = 0; j < newFriend.scores.length; j++) {
        differenceScore += Math.abs(parseInt(newFriend.scores[j]) - friends[i].scores[j])
      }
      comparisons.push(differenceScore);
    };
    console.log(comparisons)

    // let match = { new: newFriend, match: bestMatch }
    res.json(true);
  });
};
