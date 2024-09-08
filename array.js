// const arr = [1, 2, 3, 4, 5]
// console.log(arr[1]);
// console.log(typeof (arr));

// const arr1 = ["H","e",1,3,"Hello"]
// console.log(arr1[4]);


// const arr2 = new Array(1,7,9,7)
// console.log(arr2[2]);

// arr.push(5);
// arr.push(6);
// arr.pop();
// console.log(arr.length);
// arr.shift()
// console.log(arr);

// console.log(arr.includes(4));
// console.log(arr.includes(10));

// const newArr = arr2.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log(arr2);


// SLICE AND SPLICE

// console.log("A",arr);

// const myArr = arr.slice(0,3)
// console.log(myArr);

// console.log("B",arr);
// const myArr1 = arr.splice(1,3)
// console.log(myArr1);
// console.log("C" , arr);

                                        //array push operation
const hero = ["a","b","c"];
const hero1 = ["e","f","g"]
// console.log(hero.push(hero1));
// console.log(hero);
// console.log(hero[3][0]);

                                        //use of concat
// const h1 = hero.concat(hero1);
// console.log(h1);

                                        //spread operator   
const newV = [...hero, ...hero1]
console.log(newV);

                                //use of flat to make it into  single array 
const newVal = [1, 2, 3, [4, 5, 6], 7, [8, 9], 10]
console.log(newVal.flat(Infinity));


console.log(Array.isArray("Tejash"));
console.log((Array.from("Tejash")));
console.log(Array.from({name:"Tejash"}));


