/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map((student)=>{
    console.log(student)
  })
}

function PrintStudentsbyForEach() {
  arr.forEach((student)=>{
    console.log(student);
  })
}

function addData() {
 const obj={id:4,name:"shiva",age:"21",marks:90}
 arr.push(obj)
 console.log(arr);
}

function removeFailedStudent() {
  arr.filter((student)=>{
    if(student.marks<36){
      arr.pop(student);
    }
  })
  arr.forEach((student)=>{
    console.log(student);
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr=[{id:5,name:"akshat",age:"22",marks:72},
  {id:6,name:"john",age:"24",marks:95},
  {id:7,name:"chris",age:"25",marks:60}]
  const concatArr=arr.concat(newArr);
  arr=concatArr;
  console.log(arr)
}
