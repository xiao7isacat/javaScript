//var num = 10;
//console.log(num);
////alert("我是弹出框");
//document.write("现实在页面中");
//
//var flog = {};
//console.log(typeof user);
//
//var num1 = 1;
//var num2 = 3;
//console.log(num1 * num2);
//
//
//if (num == num1){
//	console.log("false")
//}else{
//	console.log("true")
//}
//
//var result = (num == num2) ? "等于" : "不等于";
//console.log(result);
//
//var testBool = true
//switch (testBool){
//	case true:
//		console.log("switch")
//		break;
//}
//
//for (var i = 1; i <= 100; i++){
//	console.log(i++);
//}
//
//console.log(Date(Date.now()));

var text = document.createElement("p");
var content = document.createTextNode("content");
var id = document.createAttribute("id");
id.value = "test_id"

text.appendChild(content);
text.setAttributeNode(id);

var container = document.getElementById("container");
container.appendChild(text);

