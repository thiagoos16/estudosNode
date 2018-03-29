//console.log(process.argv) //lista todos os parametros informados

function hasParam(param) {
    return process.argv.indexOf(param) != -1
}

if (hasParam('--producao')) {
    console.log('entrou')
} else {
    console.log('nao tem')
}
