

function response(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
       var res=JSON.parse(this.responseText);
      
        var html_content="";
        for(i=0;i<res.length;i++){
            var out= res[i];
            
           html_content=html_content+"<tr><td><center>"+out.slno+"</center></td> <td><center>"+out.name+"</center></td> <td><center>"+out.quntity+"</center></td> <td><center>"+out.unit+"</center></td> <td><center>"+out.dep+"</center></td> <td><center>"+out.note+"</center></td></tr>";
        }
        document.getElementById("bt").innerHTML="";
    document.getElementById("result_area").innerHTML=html_content;
    document.getElementById("head").innerHTML="SHOPPING LIST";
    document.getElementById("head").style.color="aqua";
    document.getElementById("head").style.backgroundColor="rgba(0, 0, 0, 0.8)";
    document.getElementById("result_area").style.backgroundColor=" rgba(13, 252, 228, 0.651)";
    document.getElementById("result_area").style.color="rgba(0, 0, 0)";
    document.getElementById("result_area").style.fontWeight="bold";
   
}
}
xhttp.open("GET","grocery.json",true);
xhttp.send();

}
