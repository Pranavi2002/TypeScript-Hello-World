// console.log('Hello World');

// let age: number = 20;
// if(age < 50)
//     age += 10;
// console.log(age);

// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;
// function render(document) {
//     console.log(document);
// }

// //Arrays
// // let numbers = [];
// let numbers: number[] = [];
// numbers[0] = 1;
// // numbers[1] = '2'
// numbers[1] = 2;
// numbers[2] = 3;
// console.log(numbers.forEach(n => n.valueOf));

// //Tuples
// let user: [number, string] = [1, 'John'];

// //Enums
// // const small = 1;
// // const medium = 2;
// // const large = 3;
// // enum Size { Small = 1, Medium, Large} // Pascal Naming Convention - Starting letter of every word is capital
// // let mySize : Size = Size.Medium; // Camel Naming Convention - Starting letter of first word is small and every other word is capital in a name
// // console.log(mySize);
// const enum Size { Small = 1, Medium, Large}
// let mySize : Size = Size.Medium; 
// console.log(mySize);

// //Functions
// // function calculateTax(income: number, taxYear: number): number{
// //     // let x;
// //     if(taxYear < 2022)
// //         return income * 1.2;
// //     return income * 1.3;
// // }
// // calculateTax(10_000, 2022);
// // function calculateTax(income: number, taxYear: number): number{
// //     // let x;
// //     if((taxYear || 2022) < 2022)
// //         return income * 1.2;
// //     return income * 1.3;
// // }
// // calculateTax(10_000); // as taxyear value is not given, 2022 will be considered 
// // function calculateTax(income: number, taxYear = 2022): number{
// //     // let x;
// //     if(taxYear < 2022)
// //         return income * 1.2;
// //     return income * 1.3;
// // }
// // calculateTax(10_000); // taxyear of 2022 will be considered
// function calculateTax(income: number, taxYear = 2022): number{
//     // let x;
//     if(taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10_000, 2023); // 2023 will overwrite 2022 as value of taxyear

// //Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1, 
//     name: 'John',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };
// // employee.id = 0;

// //Type Aliases
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void

// }
// let employee: Employee = {
//     id: 1, 
//     name: 'John',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

// //Union Types
// function kgToLbs(weight: number | string): number {
//     //Narrowing
//     if(typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }
// kgToLbs(10);
// kgToLbs('10kg');

// //Intersection Types
// type Draggable = {
// drag: () => void
// }
// type Resizable = {
// resize: () => void
// }
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
// drag: () => {},
// resize: () => {}
// }

// //Literal Types , that is exact/ specific values
// type Quantity = 50 | 100
// // let quantity: Quantity = 50
// // let quantity: Quantity = 51
// // let quantity: Quantity = 100
// // let quantity: Quantity = 101
// type Metric = 'cm' | 'inch'
// let metric: Metric = 'feet'

// //Nullable Types
// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!');
// }
// greet(null);
// greet(undefined);

//Optional Chaining
type Customer = {
    // birthday: Date
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}
// let customer = getCustomer(0);
let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
//     console.log(customer.birthday);
//Optional property access operator(?)
// console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
// customers?.[0]

//Optional call 
let log: any = null;
log?.('a');