var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 'article-one' : {
    title: 'Article One | Janarthanan Kesavan',
    heading: 'Article One',
    date: 'Feb 12, 2017',
    content: 'This is my first article'
    
},

 'article-two' : {
    title: 'Article Two | Janarthanan Kesavan',
    heading: 'Article Two',
    date: 'Feb 12, 2017',
    content: 'This is my second article'
    
},

 'article-three' : {
    title: 'Article Three | Janarthanan Kesavan',
    heading: 'Article Three',
    date: 'Feb 12, 2017',
    content: 'This is my Three article'
 }  
};



function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = `{
    <html>
<head>
<title>
${title}
</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    
</head>
<body>
    <div class="container">
<div>
<a href="/">Home</a>
</div>
<hr/>
<h3>
${heading}
</h3>
<div>
${date}
</div>
<div>
<p>
${content}

</p>
</div>
</div>
</body>
</html>
    
    
}
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //artcicles[artcileName]=={} content object for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
