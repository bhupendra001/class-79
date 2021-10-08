name_student=[];

function submit()
{

var name_1=document.getElementById("student_1").value;
var name_2=document.getElementById("student_2").value;
var name_3=document.getElementById("student_3").value;
var name_4=document.getElementById("student_4").value;

name_student.push(name_1);
name_student.push(name_2);
name_student.push(name_3);
name_student.push(name_4);

console.log(name_student);
document.getElementById("display").innerHTML=name_student;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{

name_student.sort();
console.log(name_student);
document.getElementById("display").innerHTML=name_student;
}