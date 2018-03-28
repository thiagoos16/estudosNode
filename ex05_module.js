console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.helloMetal = function() {
    console.log('Metal!!!!')
}