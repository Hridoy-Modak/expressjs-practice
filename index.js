// const express = require("express");
// let app = express();
// const EventEmitter = require("events");
// let eventEmitter = new EventEmitter();

// let count = 0;

// eventEmitter.on("visit", () => {
//   count++
//   console.log(`Visitors count ${count} `);
// });

// app.get("/", (req, res) => {
//   res.send("root directory");
//   eventEmitter.emit("visit");
// });

// app.get("/about/:id", (req, res) => {
//   res.send(`Directory is ${req.params.id} `);
//   console.log(req.params.id);
// });

// app.get("/about", (req, res) => {
//   // res.send("About")
//   // console.log(typeof req.query.name);
//   let{ name, id }=req.query;
//   res.send({
//     username:name,
//     userid: id
//   })
// })

// app.use((req,res)=>{
//   res.send("not found")
// })

// app.listen(3000, () => {
//   console.log("http://localhost:3000/ started");
// });

const express = require("express");
let app = express();
let port = 8000;

function middlecheck(req, res, next) {
  console.log("middleware function");
  let result=true;
  if(result){

  }
  res.send("Success");
}

app.get("/", middlecheck, (req, res) => {
  res.send({ msg: "user" });
});

app.listen(port || 5000, () => {
  console.log(" server http://localhost:8000/ started");
});
