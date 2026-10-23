// we define enums usually for constants like we define restricted and not to be changed values within const we make enums instead of const

enum THEChai {
    MASALA,
    GINGER,
    SUGAR
} // we try to make enums simple by just making them one type like in this we are making just for numbers

const firstProperty = THEChai.GINGER

enum IncrementedAuto{
    NUMBER1 = 100,
    NUM2, // 101 
    NUM3, // 102
} // if we give some value to one variable all the other vars will be grannted an incremented value



enum MakeChai{
    GINGER, 
    MASALA
}
function ServeChai(type: MakeChai){
    return `Serving ${type} Chai`
}

ServeChai(MakeChai.GINGER)

// we can also make the enums as constants as no future change can occur in them
const enum TeaSugar{
    LOW=1, 
    MEDIUM=2,
    HIGH=3
}

const sugars = TeaSugar.MEDIUM


/* Accidently values can be pushed within tuples so avoid the mistakes */
let t: [string, number] = ["Chai", 1]
t.push("StringisNowPushed!")
console.log(t)
// [ 'Chai', 1, 'StrringisNowPushed!' ]
