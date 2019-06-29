// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let newFriend = req.body
    //compatability logic --  will use a loop to compare the array of values for the new addition to the array of values for each existing record, so a 2D loop? Loop through friends array, then at each index of loop1, we use loop2 to run through each friend's response values, compare to corresponding indexes of new friends responses, and store the absolute value of differences summed as a 'compatability' value. Maybe store that compatability value as in index as a new array that is populated by the first loop as it goes (after second loop builds up that compatability value for the individual). So when the loops are done we will have an array of compatability values with indexes that correspond to the person in the original array that the new person was compared to. We can then use another, seperate 1D array to flip through the compatability scores array and return the index with the lowest value. That best match case from the original friend array can be served up in the modal to the user, or at least saved in a variable to be used for that purpose, before the new friend is added to the total array of friends.


    res.json(true);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 2) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
