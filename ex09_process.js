process.stdout.write('VC curte Metal, mano??')
process.stdin.on('data', function(data) {
    process.stdout.write(`sua resposta foi ${data.toString()}`)
    process.exit()
})