function convertToRoman(num) {
  	const obj = {
      0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
  };

  //your code here
	let res="";
	for(let key in obj){
		let curr=obj[key];
		let count=Math.floor(num/curr[1]);
		res+=curr[0].repeat(count);
		num=num%curr[1];
	}
	return res;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
