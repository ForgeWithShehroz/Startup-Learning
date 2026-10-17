/* Using checks */
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai`
    }
    return `Making order: ${kind}`
}

 /*
 making a variable optional
 */
function message(msg?: string) {
    if(msg){
        return `Message is ${msg}`
    }
    return `Serving default ${msg}`
}


/*
exaustive checks
 */
function chaiSize(size: "small" | "mdeium" | "large" | number ) {
    if(size==="small"){
        return `Ordering cutting chai`

    }
    if(size==="large"||"medium"){
        return `Ordering Extra Chai`
    }
    return `Ordering #${size} chai`
    
}

/*
 using exacustive checks or gaurds within classes
 */

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class GingerChai{
    serve(){
        return `Serving Ginger Chai`
    }
}

function gettingChai(chai: KulhadChai | GingerChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}



/* Making types separated using type */
type ChaiOrder = {
    type: string
    sugar: number
}

// simple validation checks to check the type of chaiorder
function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}  

//using the validation checks we used to make before
function serveChai(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} with #${item.sugar} number chai`
    }
    return `Serving default ${item} chai`
}


/* Making custom types and then assigning them into one and then using them  */
type MasalaChai = {type: "masala"; aroma: number}
type ElaichiChai = {type: "elaichi"; aroma: number}
type GingerWaliChai = {type: "ginger"; aroma: number}

type Chai = MasalaChai | ElaichiChai | GingerWaliChai

function MakeChai(order: Chai){
    switch(order.type){
        case "ginger":
            return "Serving Ginger Chai"
            break
        case "elaichi":
            return "Serving Elaichi Chai"
            break
        case "masala":
            return "Serving Masla Chai"
            break
    }
}

// Unknown type 

/*

function isStringArray(arr: unknown): arr is string[]{
    return  `it will return string array`
}

*/