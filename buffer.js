// Buffers store data as bytes.
// Each byte is represented as an integer between 0 and 255(or 0x00 to 0xFF in hexadecimal).
// Buffers can also be converted to strings and other formats as needed

// Buffers have a fixed size.Once you create a Buffer of a specific length,
// it cannot be resized directly.

// This fixed size is useful when managing memory predictably and efficiently for binary data.

// Essential for managing binary streams from files or network connections,
// making it a foundational tool for Node.js’s I / O operations.

// In Node.js, a Buffer is designed to hold binary data as a series of bytes.
// Each byte is stored in a contiguous(side - by - side) chunk of memory,
// similar to arrays in lower - level languages like C.

// When you create a Buffer, you are effectively allocating a fixed-sized block of memory where each "cell" in this block represents one byte.

// Buffers in Node.js are implemented in C++ within the Node.js core,
// and they are allocated in raw memory outside of the V8 heap.
// This makes Buffers very efficient for handling large chunks of binary data,
// especially for network operations, file I / O, and other performance - critical tasks.

// Buffers store raw binary data. Each slot in a Buffer is one byte (8 bits) by design,
// and they are represented as UInt8

// A buffer is a space in memory (typically RAM) that stores binary data.

// In Node.js, we can access these spaces of memory with the built-in Buffer class

//  when you read from a file with fs.readFile(), the data returned to the callback
//  or Promise is a buffer object.

// Additionally, when HTTP requests are made in Node.js, they return data streams that are
//  temporarily stored in an internal buffer when the client cannot process the stream all
//   at once.

// A buffer is a location in memory, where data can be stored.
// A buffer is exactly this - it is nothing more than a place where stuff can be stored.

//---------------------------- Javacsript ------------------------------------------
// A buffer stores raw binary data i.e a sequence of 0s and 1s.
// The simplest unit of a buffer is a byte. A buffer is simple a sequence of bytes.
// To put binary data in a buffer and then get that out of it, we ought to use
//  something called a view.

// The ArrayBuffer interface
// The ArrayBuffer interface is the engine that powers the idea of easy-to-create buffers in JavaScript.
var buffer = new ArrayBuffer(size);
// The size argument is where you specify how much space you want for the buffer, in units of bytes. The default value is 0.

// A view is simply a mechanism to read/write data into/out of a buffer.
// The most basic view interface JavaScript provides at the dispense of developers,
//  to interact with buffers, is DataView.

// A DataView object is made to work with a given ArrayBuffer object.

// To create a DataView object, simply call the DataView() constructor,
//  along with passing it the buffer object whom you want it to operate on.
var view = new DataView(buffer);

// DataView is simply an interface that allows us to put stuff into a buffer and then get stuff out of it.

// DataView is a view interface made so that developers can actually work with ArrayBuffer.

// The DataView interface defines many methods to set and get data out of a buffer.

// Following are all set methods:

// setUint8() - set a byte as an unsigned 8-bit integer.
// setUint16() - set two bytes as an unsigned 16-bit integer.
// setUint32() - set four bytes as an unsigned 32-bit integer.
// setBigUint64() - set eight bytes as an unsigned 64-bit integer.
// setInt8() - set a byte as a signed 8-bit integer.
// setInt16() - set two bytes as a signed 16-bit integer.
// setInt32() - set four bytes as a signed 32-bit integer.
// setBigInt64() - set eight bytes as a signed 64-bit integer.
// setFloat32() - set four bytes as a single-precision floating-point number.
// setFloat64() - set eight bytes as a double-precision floating-point number.
// And following are all the corresponding get methods:

// getUint8() - get a byte as an unsigned 8-bit integer.
// getUint16() - get two bytes as an unsigned 16-bit integer.
// getUint32() - get four bytes as an unsigned 32-bit integer.
// getBigUint64() - get eight bytes as an unsigned 64-bit integer.
// getInt8() - get a byte as a signed 8-bit integer.
// getInt16() - get two bytes as a signed 16-bit integer.
// getInt32() - get four bytes as a signed 32-bit integer.
// getBigInt64() - get eight bytes as a signed 64-bit integer.
// getFloat32() - get four bytes as a single-precision floating-point number.
// getFloat64() - get eight bytes as a double-precision floating-point number

// Out of the formats to store data(i.e numbers) in a buffer,
// the most straightforward format is that of unsigned numbers.

// The unsigned 8 - bit integer format, as the name implies represents an
//  unsigned number that takes up a single byte to be stored.
var buffer = new ArrayBuffer(3);
var view = new DataView(buffer);
view.setUint8(0, 15);
view.setUint8(1, 27);
view.setUint8(2, 199);

view.getUint8(0); // 15
view.getUint8(1); // 27
view.getUint8(2); // 199

var buffer = new ArrayBuffer(4);
var view = new DataView(buffer);
view.setUint16(0, 309);
view.setUint16(2, 2078);
view.getUint16(0); // 309
view.getUint16(2); // 2078

// ---------------------------   TYPED-ARRAY    ---------------------------------
// Typed arrays are array-like objects that can store numbers only of a given type.
// Internally, they are simply syntactic sugar over the DataView interface.
// Typed arrays are essentially a simplified version of views.
var buffer = new ArrayBuffer(4);
var view = new DataView(buffer);

view.setUint16(0, 30);
view.setUint16(2, 60422);
// the above code with the help of typedArray can be written as
var typedArr = new Uint16Array();
typedArr[0] = 30;
typedArr[1] = 60422;

//______________________________________________________________________________________

// Buffer instances are also JavaScript Uint8Array and TypedArray instances
