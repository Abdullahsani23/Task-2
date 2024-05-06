var currentDate =new Date()
// console.log(currentDate);
var month=currentDate.getMonth() +1 
var day =currentDate.getDate()
var year = currentDate.getFullYear()
var getDate = month+"-"+day+"-"+year
var getDate2 = month+"/"+day+"/"+year
var getDate3 = day+"-"+month+"-"+year
var getDate4 = day+"/"+month+"/"+year
document.write(getDate,"<br>" ,"<br>");
document.write(getDate2,"<br>","<br>")
document.write(getDate3,"<br>","<br>")
document.write(getDate4,"<br>")