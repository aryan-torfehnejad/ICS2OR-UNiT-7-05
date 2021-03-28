let age=0
let day=0

document.getElementById('button').addEventListener('click',click)
function click(){
  age=document.getElementById('text2').value
  age= parseInt(age)
  day= document.getElementById('text').value 
  if (age<=0) {
  alert ('ERROR AGE MUST BE HIGHER THEN 0')
} else if(age < 18 && day !='Sunday' && day !='Saturday') {
  document.getElementById('answer').innerHTML='Time for School :('
} else if (age>= 18 && day !='Sunday' || day !='Saturday'){ document.getElementById('answer').innerHTML='Time for Work :('
} else {
  document.getElementById('answer').innerHTML='Time to relax for the weekend :)'
}
}