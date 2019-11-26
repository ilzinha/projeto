const express = require('express');
const app = express ();

app.use(express.urlencoded({ extended: false }));


app.listen(3000, function(){
    console.log('server running on port 3000')
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs')
});