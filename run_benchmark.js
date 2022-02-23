var Benchmark = require('benchmark');
const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);

wasmModule.instance.exports.add

var suite = new Benchmark.Suite;
var wasm_functions = wasmModule.instance.exports

function cube(n) {
    return n * n * n
}

console.log("Running tests for cube")

suite.add('JavaScript', function() {
    cube(1000)
})
.add('WebAssembly', function() {
    wasm_functions.cube(1000)
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();

console.log("Running tests for factorials")

suite = new Benchmark.Suite;

function factorial(num){

    if (num === 0) return 1
    if (num === 1) return 1;

    let fact = num;

    fact = fact * factorial(num-1);
    return fact;
}

// add tests
suite.add('JavaScript', function() {
    factorial(720)
})
    .add('WebAssembly', function() {
        wasm_functions.factorial(720)
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run();

console.log("Running tests for sorting an array")

suite = new Benchmark.Suite;

arr = Array.from({length: 40000}, () => Math.floor(Math.random() * 40000));

function sort_array(arr)
{
    arr.sort()
}

wasmModule.instance.exports.sort_array(arr)

// add tests
suite.add('JavaScript', function() {
    sort_array(arr)
})
    .add('WebAssembly', function() {
        wasm_functions.sort_array(arr)
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run();


