//var
//let
//how to declare variables?
var acno = 101;
var name = "raj";
var amount = 1000;
var isCustomer = true;

//how to print result in javascript?
console.log(acno);
console.log(name);

// document.write(acno);
// document.write(name);

//JSON - javascript object notation
//Light weight file
//loading fast in the device
//{studid:123} pair
//easy to access

var userdata = [];
var productdata = [
  { title: "flower1", desc: "f 1", price: 100 },
  { title: "flower1", desc: "f 1", price: 100 },
  { title: "flower1", desc: "f 1", price: 100 },
  { title: "flower1", desc: "f 1", price: 100 },
  { title: "flower1", desc: "f 1", price: 100 },
];
//how to add/insert item into array ---> Push(item),
//how to remove/get item from array ---> Pop(),
document.getElementById("tbluserdata").style.display = "none";

function AddUser() {
  console.log("calling");
  var fname = document.getElementById("txtfname").value;
  var lname = document.getElementById("txtlname").value;
  var email = document.getElementById("txtemail").value;
  if (fname != "" && lname != "" && email != "")
    userdata.push({ firstname: fname, lastname: lname, email: email });

  console.log(userdata);
  LoadUserData();
}

function LoadUserData() {
  document.getElementById("tbluserdata").style.display = "block";
  var table = "";
  for (let i = 0; i < userdata.length; i++) {
    table =
      table +
      "<tr><td>" +
      userdata[i].firstname +
      "</td><td>" +
      userdata[i].lastname +
      "</td><td>" +
      userdata[i].email +
      "</td></tr>";
  }
  console.log(table);
  document.getElementById("tblbodydata").innerHTML = table;
}
function ShowName() {
  var name = document.getElementById("txtname").value;
  if (name == "") {
    document.getElementById("msg").innerHTML =
      "<div class='alert alert-danger'>Name cannot be empty</div>";
  } else
    document.getElementById("msg").innerHTML =
      "<div class='alert alert-success'>Success</div>";
}


setTimeout(function (){
 alert("walcome")

},5000);

var age=22;

setintervel( function(){
  var date = new Date();
  document.getElementById("displaydate").innertext = date.toLocaleTimeString();
  alert("Welcome")
},1000);


 
var promiseObj = new promise(function(resolve,reject) {
  if (age>18) resolve ("eligible");
  else reject ("Not eligible");
});

promiseObj.then(
 (result) => alert(result), 
 (error) => alert(error)
);



