// ===== Inheritance ======
// 1- Furuits
// class Furuits{
//   name: string
//   color: string
//   constructor(name: string, color: string) {
//     this.name = name
//     this.color = color
//   }
// }
// class fruit extends Furuits{
//   price: number
//   constructor(name:string, color:string,price:number ) {
//     super(name, color)
//     this.price = price
//   }
// }
// let meva: fruit = new fruit("Olma", "kok", 20000)
// console.log(meva);
// 2- Drinks
// class Drinks{
//   name: string
//   country: string
//   price: number
//   constructor(name:string, country:string, price:number) {
//     this.name = name
//     this.country = country
//     this.price = price
//   }
// }
// class gaseous extends Drinks{
//   harmful:boolean
//   constructor(name:string, country:string, price:number, harmful: boolean){
//     super(name, country, price)
//     this.harmful = harmful
//   }
// }
// let drink: gaseous = new gaseous("coca-cola", "Isroil", 12000, false)
// console.log(drink);
//3- Car
// class Car {
//   brand: string;
//   country: string;
//   price: number;
//   constructor(brand: string, country: string, price: number) {
//     this.brand = brand;
//     this.country = country;
//     this.price = price;
//   }
// }
// class Hybrid extends Car{
//   color:string
//   year:number
//   constructor(brand: string, country: string, price: number, color: string, year: number) {
//     super(brand, country, price)
//     this.color = color
//     this.year = year
//   }
// }
// let car: Hybrid = new Hybrid("BMW", 'Germaniya', 70000, "black", 2011)
// console.log(car);
// ===== Encapsulation ======
//1-Teaches
// class Teachers{
//   public fname: string
//   lname: string
//   private password:number
//   age: number
//   constructor(fname: string, lname:string,password: number, age:number){
//     this.fname = fname
//     this.lname = lname
//     this.password = password
//     this.age = age
//   }
// }
// let teacher: Teachers = new Teachers("Araqulov", "Umrzoq", 123243, 21)
// console.log(teacher);
//2-Phone
// class Phone{
//    public name:string
//    brand:string
//   price: number
//   color:string
//   private country:string
//   constructor(name:string, brand:string, price: number, color: string, country:string) {
//     this.name= name
//     this.brand = brand
//     this.price = price
//     this.color = color
//     this.country = country
//   }
// }
// let mobile: Phone = new Phone("Iphone12","Iphone", 50000, "grey", "Amerika")
// console.log(mobile);
//3-Food
// class Food{
//    public name:string
//    price: number
//    private liquid:boolean
//   constructor(name:string, price: number, liquid: boolean) {
//     this.name = name
//     this.price = price
//     this.liquid = liquid
//   }
// }
// let taom: Food = new Food( "Osh", 20000, false)
// console.log(taom);
//==== Polymorphism =====
//1-strAdd
// class strAdd{
//   add(fname:string, lname:string):string
//   add(fname:any, lname:any):any{
//     return fname + lname
//   }
// }
// class fullName extends strAdd{
//   constructor(){
//     super()
//   }
//   add(fname:any, lname:any):any{
//     return fname + lname
//   }
// }
// let adding:fullName = new fullName()
// console.log(adding.add("Ramziddin", "Ergashaliyev"));
//2-misol Kopaytma
// class Kopaytma{
//   add(num1:number, num2:number):number
//   add(num1:any, num2:any):any{
//     return num1 * num2
//   }
// }
// class result extends Kopaytma{
//   constructor(){
//     super()
//   }
//   add(num1:any, num2:any):any{
//     return num1 * num2
//   }
// }
// let adding:result = new result()
// console.log(adding.add(2, 9));
//2-misol Bolish
// class Kopaytma{
//   add(num1:number, num2:number):number
//   add(num1:any, num2:any):any{
//     return num1 / num2
//   }
// }
// class result extends Kopaytma{
//   constructor(){
//     super()
//   }
//   add(num1:any, num2:any):any{
//     return num1 / num2
//   }
// }
// let adding:result = new result()
// console.log(adding.add(18, 9));
// =====  abstraction  =====
//1-misol
var shape = /** @class */ (function () {
    function shape() {
    }
    return shape;
}());
// class Ract extends shape{
//   a:number
//   b:number
//   constructor(son:number, son1:number){
//     super()
//     this.a = son
//     this.b = son1
//   }
//   getArea(): number {
//    return this.a * this.b
//   }
// }
// let react: Ract = new Ract(2, 4)
// console.log(react.getArea());
//2-misol
// class KV extends shape{
//   num:number
//   num1:number
//   constructor(num:number,num1:number){
//     super()
//     this.num = num
//     this.num1 = num1
//   }
//   getArea(): number {
//    return this.num ** this.num1
//   }
// }
// let react: KV = new KV(4, 2)
// console.log(react.getArea());
//3-misol
// abstract class Age{
//   abstract getArea():number
// }
// class Bolish extends Age{
//   myAge:number
//   constructor(son:number){
//     super()
//     this.myAge = son
//   }
//   getArea(): number {
//    let date:number = new Date().getFullYear()
//    return date - this.myAge
//   }
// }
// let react: Bolish = new Bolish(2003)
// console.log(react.getArea());
