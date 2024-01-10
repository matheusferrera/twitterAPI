const Twitter = require('twitter-lite');



// Insira suas chaves de acesso aqui
const api_key = " " 
const api_key_secret = " " 
const access_token = " " 
const access_token_secret = " " 


const client = new Twitter({    
 api_key,
 api_key_secret,
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

