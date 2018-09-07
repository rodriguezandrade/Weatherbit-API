var http= require('http');
var url='https://api.weatherbit.io/v2.0/forecast/daily?key=3dd1694285a347d4ac8c5c20608f68de&postal_code=85000&country=MX';
var server=http.createServer(function(request,response){

response.write('hi');
response.end();
});.listen(8081);
