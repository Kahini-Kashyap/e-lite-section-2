function checkExam(array1, array2) {
     var marks=0;
  for (var i =0;i<(array1.length);i++){
    if(array1[i] == array2[i]){
      marks+=4;
    }
    else if(array2[i]== ""){
      marks+=0;
    }
    else{
      marks-=1;
    }
  }
  if(marks<0){
    return 0;
  }
  return marks;
}