alert("Welcome to the Assignment # 8");
alert("1. Write a ts program to read and print elements of array.");
var testArray = ["Rafay", "Umer", "Talha", "Hanzlah"];
console.log(testArray[0]);
console.log(testArray[1]);
console.log(testArray[2]);
console.log(testArray[3]);
alert("2. Write a ts program to print all negative elements in an array.");
var Negloop = [-3, 7, 4, 3, 5, 8, -6];
for (var index = 0; index < Negloop.length; index++) {
    if (Negloop[index] <= 0) {
        console.log(Negloop[index]);
    }
}
alert("3. Write a ts program to find sum of all array elements. ");
var sumLoop = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
for (var index = 0; index < sumLoop.length; index++) {
    sum += sumLoop[index];
}
console.log("The sum of the numbers of the loop is", sum);
alert("4. Write a ts program to find maximum and minimum element in an array.");
var mainLoop = [9, 1, 8, 3, 6, 2, 7];
var sortArray = mainLoop.sort(function (a, b) { return a - b; });
var miniElement = sortArray[0];
var maxElement = sortArray[6];
console.log("Your maximum number is", maxElement);
console.log("Your minimum number is", miniElement);
alert("5. Write a ts program to find second largest element in an array.");
var elements = [300, 86, 21, 551, 600];
var unsortArr = elements;
var sortedArr = elements.sort(function (a, b) { return a - b; });
var max;
for (var index = 0; index < sortedArr.length - 1; index++) {
    max = sortedArr[index];
    // console.log(max)
}
console.log("The second largest element is ", max);
alert("6. Write a ts program to count total number of even and odd elements in an array.");
var Loop1 = [2, 8, 4, 6, 9, 2, 7, 3, 6];
var evenSum = 0;
var oddSum = 0;
for (var index = 0; index < Loop1.length; index++) {
    if (Loop1[index] % 2 == 0) {
        console.log("Even Numbers:", Loop1[index]);
        evenSum += Loop1[index];
    }
    else {
        console.log("Odd Numbers:", Loop1[index]);
        oddSum += Loop1[index];
    }
}
console.log("Sum of all the even numbers in loop is", evenSum);
console.log("Sum of all the odd numbers in loop is", oddSum);
alert("7. Write a ts program to count total number of negative elements in an array.");
var NegativeArr = [1, -6, 3, -9, 5];
var Negcount = 0;
for (var index = 0; index < NegativeArr.length; index++) {
    if (NegativeArr[index] < 0) {
        Negcount++;
    }
}
console.log("The negative numbers in the array are", Negcount);
alert("8. Write a ts program to copy all elements from an array to another array.");
var firstArr = ["Rafay", "Umer", "Saad", "Haseeb"];
var secondArr = [];
secondArr = firstArr;
console.log("The data copied in array # 2 is", secondArr);
alert("9. Write a ts program to insert an element in an array.");
var numbArr = [1, 3, 4, 6, 5, 4, 6];
numbArr.push(8);
console.log("The updated array after insertion is", numbArr);
alert("10. Write a ts program to delete an element from an array at specified position.");
var orginalArr = [1, 2, 3, 4, 5, 6, 6, 7];
orginalArr.splice(3, 2);
console.log("Array after deleting specific numbers from array is", orginalArr);
alert("15. Write a ts program to merge two array to third array.");
var pehliArr = [1, 2, 3];
var dosriArr = [4, 5, 6];
var finalArr = pehliArr.concat(dosriArr);
console.log("The final array after joining two arrays is", finalArr);
alert("16. Write a ts program to find reverse of an array.");
var sedhiArr = ["Rafay", "Saad", "Haznlah", "Asif"];
var reverseArr;
for (var index = sedhiArr.length - 1; index >= 0; index--) {
    reverseArr = sedhiArr[index];
    console.log(reverseArr);
}
