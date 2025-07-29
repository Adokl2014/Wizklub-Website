

//check redyness of document DOM
$(document).ready(function(){
console.log("It is time to start the Javascript Program");
//triggersclickeventonClick()of redbutton

$("#blue_button").click(function()
{ 
console.log("changing color blue on led"); 
alert("changing color blue on led");
change_led_color("blue", "1"); });


$("#yellow_button").click(function()
{ 
console.log("changing color yellow on led"); 
alert("changing color yellow on led");
change_led_color("yellow", "1"); });


$("#green_button").click(function()
{ 
console.log("changing color green on led"); 
alert("changing color green on led");
change_led_color("green", "1"); });


$("#red_button").click(function()
{ 
console.log("changing color red on led"); 
alert("changing color red on led");
change_led_color("red", "1"); });


$("#orange_button").click(function()
{ 
console.log("changing color orange on led"); 
alert("changing color orange on led");
change_led_color("orange", "1"); });


$("#pink_button").click(function()
{ 
console.log("changing color pink on led"); 
alert("changing color pink on led");
change_led_color("pink", "1"); });


$("#purple_button").click(function()
{ 
console.log("changing color purple on led"); 
alert("changing color purple on led");
change_led_color("purple", "1"); });


$("#magenta_button").click(function()
{ 
console.log("changing color magenta on led"); 
alert("changing color magenta on led");
change_led_color("magenta", "1"); });


$("#cyan_button").click(function()
{ 
console.log("changing color cyan on led"); 
alert("changing color cyan on led");
change_led_color("cyan", "1"); });


$("#teal_button").click(function()
{ 
console.log("changing color teal on led"); 
alert("changing color teal on led");
change_led_color("teal", "1"); });


$("#brown_button").click(function()
{ 
console.log("changing color brown on led"); 
alert("changing color brown on led");
change_led_color("brown", "1"); });


$("#cream_button").click(function()
{ 
console.log("changing color cream on led"); 
alert("changing color cream on led");
change_led_color("cream", "1"); });


$("#color_changer_off").click(function()
{ 
console.log("turning off led"); 
alert("turning off led");
change_led_color("red", "0"); });
});


function change_led_color(color,power){
var settings = {"url": "https://wizklub.com/api/secured/wiziot-poll-request/",
"method":"POST",
"dataType":"json",
"contentType": "application/json;charset=utf-8",
"headers": {"Api-Access-Key": "Z2Z0azhFQ2h0MnBYOWJoVXhaWk8=", "Api-Secret-Key": "M0VaMjQzSkpPaDlOa3ZianQ5ZDZjR1J4WVRHTTB3YmJYdw==", "Content-Type": "application/json"},
"data":JSON.stringify({"mode": "WRITE", "device_id": "aadam2304sc_IoT_device", "source": "API", "api": "tricolor", "type": "color_power", "color": color, "power": power}), };
console.log(color,power);
$.ajax(settings).done(function(response)
{ 
    console.log(response);
}); }
