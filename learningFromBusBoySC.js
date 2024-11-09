// When you send a form - data request(like the example you've shown) and pipe the request (req)
// to a writable stream, only the body content of the request flows through the stream,
// not the headers or other metadata

// =>CR (Carriage Return) is represented by \r and corresponds to ASCII code 13.
// =>LF (Line Feed) is represented by \n and corresponds to ASCII code 10.
// =>CR LF (\r\n) is the standard line-ending sequence used in the HTTP
//  protocol to signal the end of a line.
// =>This sequence is used between header fields, and to mark the end of the
// headers in an HTTP request or response.

// readable stream decides data kaha se generate hoga,means source
// writeable stream decides ki generated data ka kya krna hai or fir kaha
// store krna hai

// In a readable stream, when you use the push() method to add a chunk of data
//  to the internal buffer, the data event is not emitted instantly.Instead,
//  it is emitted in the next turn of the event loop, meaning that it doesn’t
//  interrupt the ongoing function’s execution.The data event waits until the
//  current function (or synchronous block) finishes executing before it emits.

// When a data event callback in a readable stream runs, it takes the chunk of
// data out of the readable stream’s internal buffer and provides it to the callback
