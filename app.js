const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

let items = ["List Item 1", "List Item 2", "List Item 3"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    let today = new Date();
    let options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(PORT, function(){
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
});