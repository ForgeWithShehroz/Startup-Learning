// there are two types of ts which are following 
// 1. Inference; we don't specify type or tell ts manually which type of it is as ts will automatically detect

let text = "This is a text"

let cups = Math.random() > 0.5 ? 10 : '7'

// as we can assign only one type in ts like we can assign string to string but not to a number like that
let fruit = "mangoes";
// fruit = 2 it is not possible after giving a variable a value


// 2. Annotation; When we specify type or tell ts manually which type of it is

let teaFlavour: string = "Ginger"  // nut we don't need to define it manually as ts will automatically understand it as a string

let apiResquestStatus: "pending" | "success" | "error"