// Named export = can have as many as you need/want
// Default export = can only have one

const add = (a, b) => a + b 

const name = 'Jacob Harvey'

const square = (x) => x * x

export { add, name, square as default}
