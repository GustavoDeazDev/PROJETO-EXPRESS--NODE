var express= require ('express');

var app = express();

app.use(express.static('public'));


app.get('/', function(req, res){
    res.send('Hello world!');

});

app.get('/uma_lista', function(req, res){
    res.send('Esse é o conteudo para uma paginacomponente (lista)');
   });

   app.get('/zf*zy', function(req, res){
    res.send('Novo componente acessado a partir de uma rotacustomizada!')
   });
   
   

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('O servido pode ser acessado em http:// %s:%s', host, port)
});