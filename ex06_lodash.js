const _ = require('lodash')

const bandas = [{
    nome: 'nigtwish',
    nota: 10
}, {
    nome: 'kamelot',
    nota: 10
}, {
    nome: 'Marylin Manson',
    nota: 6
}]

const media = _.sumBy(bandas, 'nota') / bandas.length
console.log(media)