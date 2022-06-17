let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
function migratoryBirds(arr) {
    // Write your code here
    let grouped = arr.reduce((prev, curr) =>{
      (prev[curr]) ?prev[curr]+= 1:prev[curr] = 1;
      return prev;
    }{})
    
     let max = 0;
    let maxKey = "";

for(let group in grouped){
  console.log(group)
  if(grouped[group] > max){
    console.log(grouped(group))
    max = grouped[group];
    maxKey= group
  }
}
 parseInt(maxKey)
}

console.log(migratoryBirds(.arr));
