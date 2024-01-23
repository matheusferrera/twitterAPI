const Twitter = require('twitter-lite');


//TESTANDO GLITCH
// Insira suas chaves de acesso aqui
const api_key = "ChjC6gORvV6BKqk9X0TVZvd9a" 
const api_key_secret = "HSrtPQLHHXdzbXHYniYuU96HYugBu7pangbz6LvKPuoi8aYRbH" 
const access_token = "1651597515827945476-AlLOzQtVoler20eNG4Z9dSZwZ03Wng" 
const access_token_secret = "gdgq42Jn8EpLPYAlPtIBySV1dFNg6X36MBuU7AU8Spb81" 


const client = new Twitter({    
   consumer_key: api_key,
   consumer_secret: api_key_secret,
   access_token_key: access_token,
   access_token_secret,
});


client.get('account/verify_credentials')
 .then(response => {
    console.log('RESPOSTA COMPLETA -> ', response)
    console.log('Nome de usuário:', response.screen_name);
    console.log('Seguidores:', response.followers_count);
 })
 .catch(error => {
    console.error('Erro ao obter informações do usuário:', error);
 });

