/* generics are also templates like interfaces but we can reuse this code of generic */

function wrapInArray<T>(item: T): T[]{
    return [item]
} // <T> defines data type it means like any type but not any it is item: T=dataTypeofItem , :T T[]=will return array of data

wrapInArray("StringData");  // now reusing functions
wrapInArray(23); // reusing generics for reuse 
wrapInArray({})  // we can pass multiple datatypes in function of generics that is called reuseability


/* we can use any variable instead of T */
function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

pair("masala", 29);
pair("masala", {flavour: "Ginger"});


/* generic interfaces */
interface Box<T>{
    content: T;
}

const numberBox: Box<number> = {content: 19};
const numberBox2: Box<string> = {content: "jl"}; 

// when api comes it might be this like code within the usage
interface ApiPromise<T>{
    status: number;
    data: T;
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}