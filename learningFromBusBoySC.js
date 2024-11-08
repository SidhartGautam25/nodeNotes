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
