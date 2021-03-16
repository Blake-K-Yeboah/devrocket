---
title: Javascript High Order Array Methods
description: "Learn 4 extremely useful high order array methods in JavaScript."
image: javascript-high-order-array-methods.jpg
author: Blake Yeboah
authorImg: blake.png
authorBio: Blake is a full stack web developer who enjoys programming web applications. He has developed a strong passion for the software development industry over the years and love what I do.
tags: JavaScript Intermediate
writtenDate: 15/03/21
---

## The Methods

<br>

The methods we will cover in this article are **forEach**, **map**, **filter** and **reduce**. They all have their specific use cases and are extremely handy when it comes to handling arrays in JavaScript. Lets get right into it!

<br>

## The forEach() Method

<br>

The forEach array method allows us to easily loop through an array. To utilize this method, you will first need to have an array that contains data. This function works on all arrays whether they consist of numbers, strings or objects. The array used to demonstrate this, shown below, contains various animals.

<br>

```javascript
 const animals = ["Cats", "Dogs", "Lions", "Fish", "Birds", "Bears"]
```

<br>

With the array defined, we can now call the forEach function using .forEach().

<br>

```javascript
 const animals = ["Cats", "Dogs", "Lions", "Fish", "Birds", "Bears"]

 animals.forEach((animal, index) => {
     // Do Anything
     console.log(animal)
 });
```

<br>

This method takes in a function as a parameter that has access to the current iteration's animal and the index. Within the function body, you can do whatever you want. In this case we're just logging the animal to the console. This function has various use cases that make it a useful method that can be used in your next project. Lets move on to the map method.

<br>

## The map() Method

<br>

The map method returns a new array with the returned values of the function called on each element in the array. This might sound confusing however an example will make it much clearer. For the example, we will use an array of numbers from 1–5 and return a new array of their squares. The following code generates the new array with the map() function.

<br>

```javascript
 const numbers = [1, 2, 3, 4, 5]
 const squares = numbers.map(num => num * num) // [1, 4, 9, 16, 25]
```

<br>

The map() method takes in a function that has access to the current value and the value returned from this function is placed in the new array. The method is a useful method that has a variety of use cases that make generating new arrays from old ones extremely easy. For example, in the popular *React* Library, the map function is used to output arrays.

<br>

## The filter() Method

<br>

The next method we'll cover is the filter() method. It returns a new array that only contains values that match a specific condition. As an example we will use an array of numbers 1–10 and return a new array of only even numbers.

<br>

```javascript
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const evenNumbers = numbers.filter(number => number % 2 == 0) // [2, 4, 6, 8, 10]
```

<br>

<blockquote>
    Note: The remainder operator (%) returns the remainder left over when one number is divided by a second. 
</blockquote>

<br>

Similarly to the map() and forEach() methods, it takes in a function that has access to the current value. However it uses a condition shown in the equation as `number % 2 == 0` that a value must meet to be placed in the new array. To sum up, the filter() method iterates over an array, checks if the current value meets a condition and if it does, it will be placed in the new array that is returned from the function.

<br>

## The reduce() Method

<br>

The final method we'll discuss is the reduce() method. As the name suggests, it reduces an array down to a single value. A common use case of the reduce method is a to find the sum of all values in an array. The code below demonstrated this.

<br>

```javascript
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const sum = numbers.reduce((total, num) => total + num) // 55
```

<br>

The reduce() method takes in a function that has access to the total (value returned from reduce method) as well as the current value, equivalent to `num` in this case.

<br>

## What Have You Learned?

<br>

Throughout this article, I've discussed 4 high order array methods that will improve your ability to deal with arrays in JavaScript. I hope you utilize these methods in your future JavaScript applications. They differ in many ways but can all be useful to achieve various goals. 

<br>

Thanks for reading and keep on coding!