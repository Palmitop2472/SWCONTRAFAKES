const Twitter = require('twitter')
// Constante que guarda as funções da lib do Twitter
require('dotenv').config()
// Configuração das variáveis de ambiente

const Tweet = new Twitter({
  consumer_key:         process.env.BOT_CONSUMER_KEY,
  consumer_secret:      process.env.BOT_CONSUMER_SECRET,
  access_token:         process.env.BOT_ACCESS_TOKEN,
  access_token_secret:  process.env.BOT_ACCESS_TOKEN_SECRET,
})
// Constante que armazena uma nova instância autenticada da lib, com as funções.
