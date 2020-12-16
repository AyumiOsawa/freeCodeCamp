// TYPED ARRAYS
//
// https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/typed-arrays

// -----------------------------------
// | Type	Each element size in bytes |
// -----------------------------------
// | Int8Array	                 1   |
// | Uint8Array	                 1   |
// | Uint8ClampedArray	         1   |
// | Int16Array	                 2   |
// | Uint16Array	               2   |
// | Int32Array	                 4   |
// | Uint32Array	               4   |
// | Float32Array	               4   |
// | Float64Array	               8   |
// -----------------------------------

const bytesize = 64; // multiple of 2
const buffer = new ArrayBuffer(bytesize); // create buffer
const i32 = new Int32Array(buffer);

console.log('i32', i32);

console.log('size with length:', i32.length); // should print 64/4
console.log('Array.isArray should fail:', Array.isArray(i32));
console.log('push should not be defined:', i32.push);
console.log('pop should not be defined:', i32.pop);
