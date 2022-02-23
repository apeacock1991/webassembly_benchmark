Some quick-and-dirty benchmarks comparing WebAssembly performance to JavaScript. I wanted to benchmark a real-world scenario, where the WebAssembly modules would be called from JavaScript, as is likely the most use case.

To run, simply:
1. `npm install`
2. `npm run asbuild`
3. `npm run webassembly_benchmark`