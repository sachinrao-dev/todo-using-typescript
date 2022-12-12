/* eslint-disable @typescript-eslint/no-unused-vars */
const name: string

//arrow function that takes arg string and also return string  
const app = (name: string): string => {
    return "sachin";
}

//normal function take number as arg and no return

function app1(num1:number): void{
}

// define an object 

interface user {
    name: string,
    useId: number,
    complete: boolean,
}

// pass an object as arg to function

function app4(person: user):user{
return{name: "sachin", useId: 23, complete: true}
}

// an other way to define the object in typescript and pss an argument 

function app5(name: string, num:number, complete:boolean):{name: "sachin", num:23, complete: boolean }{
    return{name: "sachin", num:23, complete: true}
}

// an other method to return object

function get():user{
    return{name: "sachin", useId: 23, complete: true}
}

// defining an array type number 
const user:number[] = [1,2,2,2,2,2,2,2]

// defining an array which multiple data type

const userInfo:(number | string)[] = [2, "rahul", 4, "shubham", 4, "rahul"]

// function that return array

function app6():number[]{
    return[2,3,5,6,4]

}

// takes arg object and return  array of object
interface Person {
    name: string,
    num1: number, 
    carModel: number,
    year: boolean
}

function use():Person[]{
    return[{name: "sachin", num1: 2, carModel: 4, year: false}]
}