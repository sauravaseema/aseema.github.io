//var serverurl = "http://localhost:8080/mhgWeb/api/";

// It is for 182 server default


//var serverurl = "http://182.50.155.50:8080/mhealthgenie/api/";
//var serverurlforgotPassword = "http://182.50.155.50:8080/mhealthgenie/";
//
//var mhgclientServerUrl="http://182.50.155.50:8080/mhgclient/APIs";
//var mhgClientImageBaseUrl="http://182.50.155.50:8080/mhgclient/"; 
//$("#currentServerId").text("Current Server (182)");



  // It is for 192 server  default

//var serverurl = "http://192.169.215.201:8080/mhealthgenie/" + "api/";
//var mhgclientServerUrl="http://192.169.215.201:8080/mhgclient/" + "APIs";
//var mhgClientImageBaseUrl="http://192.169.215.201:8080/mhgclient";    // This is for img folder base url
// $("#currentServerId").text("Current Server (192)");


//For domain name default

serverurl = "http://www.mhealthgenie.com/mhealthgenie/api/";
serverurlforgotPassword = "http://www.mhealthgenie.com/mhealthgenie/";
mhgclientServerUrl="http://www.mhealthgenie.com/mhgclient/" + "APIs";
mhgClientImageBaseUrl="http://www.mhealthgenie.com/mhgclient/";    // This is for img folder base url
$("#logout").trigger("tap");
$("#currentServerId").text("Current Server (192)");


$(function(){
$("#switchTo192Server").click(function()
{
    serverurl = "http://www.mhealthgenie.com/mhealthgenie/api/";
    serverurlforgotPassword = "http://www.mhealthgenie.com/mhealthgenie/";
    mhgclientServerUrl="http://www.mhealthgenie.com/mhgclient/" + "APIs";
    mhgClientImageBaseUrl="http://www.mhealthgenie.com/mhgclient/";    // This is for img folder base url
    $("#logout").trigger("tap");
    $("#currentServerId").text("Current Server (192)");
});

$("#switchTo182Server").click(function()
{
    serverurl = "http://182.50.155.50:8080/mhealthgenie/api/";
    serverurlforgotPassword = "http://182.50.155.50:8080/mhealthgenie/";
    mhgclientServerUrl="http://182.50.155.50:8080/mhgclient/APIs";
    mhgClientImageBaseUrl="http://182.50.155.50:8080/mhgclient/"; 
    $("#logout").trigger("tap");
    $("#currentServerId").text("Current Server (182)");
});
});