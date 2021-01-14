simpleArray.length


simpleArray.push("str")
simpleArray.unshift("str")
x = greetings.pop()
x = greetings.shift()


let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
// array.splice(index, howmany, item1, ....., itemX)


let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// first is the index at which to begin extraction, and the second is the index at which to stop extraction
// (extraction will occur up to, but not including the element at this index)
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']


let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists


function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]


delete foods.apples;


users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
function isEveryoneHere(obj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    obj.hasOwnProperty(name)
  );
}
console.log(isEveryoneHere(users));
//true


for (let user in users) {
    console.log(user);
  }
  
// logs:
Alan
Jeff
Sarah
Ryan
function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}
usersObj {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}


function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }
console.log(getArrayOfUsers(usersObj));


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
const reverseString = (str) => str.split("").reverse().join("");
reverseString("hello");


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
//same same but different
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}


function titleCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length;i++){
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].replace(arr[i].charAt(0), (x) => x.toUpperCase());
  }
  arr = arr.join(" ")
  console.log(arr);
  return arr;
}
titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);
  console.log(arr3);
  return arr3;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


function getIndexToIns(arr, num) {
  let result;
  arr.push(num);
  arr.sort(function(a, b) {return a - b});
  return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);


function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let length = arr.length
  for (let i = 0; i < length; i += size){
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);