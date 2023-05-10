import express from "express"
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import * as dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {nombre:'Melvin', curso:'Node js'});
  })

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html' );
  })

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html' );
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })