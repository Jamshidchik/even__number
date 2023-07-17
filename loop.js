let num = +prompt( " Son kiriting: ")
while (isNaN(num) || num==0) {
    num = +prompt( " Son kiriting: ")
}
if (num %2 == 0 ) {
    alert("Siz kiritgan son Juft " + num)
    
}else{
    alert("Siz kiritgan son toq " + num)
}