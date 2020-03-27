//1
console.log(`"My first debug"`)

//2
var petAge = 12;
var petName = "Sweet";
console.log(`The pet name is ${petName}, it is ${petAge} years old`)

//3
petAge = 13;
console.log(`The pet name is ${petName}, it is ${petAge} years old`)

//4
var nmb = 1
var str = "1"
var bool = true
var arr = [1]
var obj = {"1": 1}
var nUll = null
var undfn = (alert(1))
var funct = function() {alert(1)}
var symb = Symbol("!=")
alert("nmb: " + typeof nmb + ", str: " + typeof str + ", bool: " + typeof bool + ", arr: " + Array.isArray(arr) + ", obj: " + typeof obj + ", nUll: " + typeof nUll + ", undfn: " + typeof undfn + ", funct: " + typeof funct + ", symb: " + typeof symb)

//5
const student = {
    name: "{Ваше имя}",
    surname: "{Ваша фамилия}",
    isActive: true
}
alert (typeof (student.isActive))

//6
var testObj = {
    fruits: ["cherry", "apple", "perry", "plum"],
    numbers: [1, 1, 2, 3, 5, 8],
    students: {
        name: "John",
        surname: "Smith",
        group: 21,
        isActive: true
    }
}

//***1
var numbersArray = [1,2,3,4,5,6,7,8,9,10]
alert (numbersArray[0] + " — "  + numbersArray[numbersArray.length - 1])

alert(`студент: ${student.name} ${student.surname}, сейчас активен: ${student.isActive}`)