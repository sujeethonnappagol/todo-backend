const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));  
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index',{todos: todos});
});

let todos = [];
app.post('/add', (req,res) => {
    let title = req.body.title;
    todos.push(title);
    res.redirect('/');
});

app.get('/about', (req,res) => {
    res.send('about');
});
app.use((req, res) => {
    res.render('404');
});

// app.get('/*', (req,res) => {
//     res.render('404');
// });

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
