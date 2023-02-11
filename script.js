let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
   arr.map(details=>{
    if(details.marks>50){
      console.log(details.name);
    }

   })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(details => {
        if ( details.marks> 50) {
          console.log(details.name);
          
        }
      });

  }
  
  function addData() {
    //Write your code here, just console.log
   let obj={id:4,name:"susan",age:"20",marks:45};
   arr.push(obj);
    console.log(arr); 

  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(student => student.marks > 50);
  console.log(arr);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 4, name: "susan", age:"23",marks:67 },
        { id: 5, name: "mike", age:"22",marks:56 },
        { id: 6, name: "lisa", age: "21", marks:90 }
      ];
      let combinedArray = arr.concat(arr2);
      console.log(combinedArray);
  }