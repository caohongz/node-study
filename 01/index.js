const buf1 = Buffer.alloc(10);
console.log("buf1", buf1);
const buf2 = Buffer.from("abc");
console.log("buf2", buf2, buf2.toString());
buf1.write("hello");
console.log(buf1.toString());
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());
