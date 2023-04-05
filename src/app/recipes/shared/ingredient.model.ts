// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }


// alternative way to write above
export class Ingredient{
    constructor(public name: string, public amount: number){}
}