const express = require('express');
const Airtable = require('airtable');
require('dotenv').config();
const {API_KEY, BASE1, BASE2} = process.env;
const app = express();
app.use(express.static('public'));
app.use(express.json());
const port = process.env.PORT;
app.listen(port || 3000);

const base1 = new Airtable({apiKey: API_KEY}).base(BASE1);
const base2 = new Airtable({apiKey: API_KEY}).base(BASE2);

app.post('/gccomp', (req, res) => {
   var ToReturn = [];
   base1(req.body.company).select({
      view: 'Grid view'}).eachPage(function(records, next) {
       records.forEach((record) => {
          try{
            ToReturn.push(record.fields.News);
          }
          catch(err){console.error(err)}
      });
      try{
         res.json({news : ToReturn});
         next();
      }
      catch{return;}
   });
});
app.post('/gecomp', (req, res) => {
   var ToReturn = [];
   base2(req.body.company).select({
      view: 'Grid view'}).eachPage(function(records, next) {
       records.forEach((record) => {
          try{
            ToReturn.push(record.fields.News);
          }
          catch(err){console.error(err)}
      });
      try{
         res.json({news : ToReturn});
         next();
      }
      catch{return;}
   });
});
