//to find the sum of numbers passed to function using arguements array and return the sum
var sum=0;
//function with arguements 
function findSum()
{    
	//printing the number of arguements passed by function in console
	console.log("Number of arguments passed:"+ arguments.length);
	//using for in loop to access and iterate any number of arguements given by function findSum
	for(var i in arguments)
	{   
		//finding the sum by addding all the arguements given by function findSum and storing in 'sum'
		sum+=arguments[i];
		
	}
	//printing the sum result in console output
	console.log(sum);
}
//calling the function findSum with any number of arguements 
findSum(1,2,3,4,5,6,7,8,9,10);
