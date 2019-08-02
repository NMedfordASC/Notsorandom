//Function a
//function getrandint(min, max){
  //  min = Math.ceil(min)
    //max = Math.floor(max)
    //return Math.floor(Math.random() * (max - min) + min);
//}
//console.log(getrandint(0, 10))
//console.log(getrandint(0, 100))
//console.log(getrandint(0, 2))

//Function b
const blah = ["b","l","a","h"]
const abcdefg = ["a","b","c","d","e","f","g"]
const z = ["z"]
function getrandint(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(blah[getrandint(0, blah.length)])
console.log(abcdefg[getrandint(0, abcdefg.length)])
console.log(z[getrandint(0, z.length)])

//Function c
function myguy()
