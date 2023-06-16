const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (request, response) =>{
	response.render('index', {'title':'Website portofolio'});
});

app.get('/about', (request, response) =>{
	response.render('about', {'title':'About Me'});
});

app.get('/project', (request, response) =>{
	response.render('project', {'title':'My Project'});
});
app.get('/contact', (request, response) =>{
	response.render('contact', {'title':'Contact'});
});

app.listen(port, ()=>{
	console.log("Running on http://127.0.0.1:8000");
})