const pushButton = document.getElementById("one")
const popButton = document.getElementById("two")
const toStringButton = document.getElementById("three")
const joinButton = document.getElementById("four")
const concatButton = document.getElementById("five")
const numCheck = document.getElementById("numCheck")
const resetButton = document.getElementById("reset")

let nums = [4, 3, 7, 10]
console.log(nums)

numCheck.addEventListener("click", () => {
    console.log(nums)
})

resetButton.addEventListener("click", () => {
    nums = [4, 3, 7, 10]
    console.clear()
    console.log(nums)
})



pushButton.addEventListener("click", () => {
    push(9)
})
function push(newNum){
    let newArray = []

    for(let i = 0; i < nums.length; i++){
        newArray[i] = nums[i]
    }
    nums[nums.length] = newNum
    console.log(nums)
}



popButton.addEventListener("click", () => {
    pop()
})
function pop(){
    let newArray = []

    for(let i = 0; i < nums.length - 1; i++){
        newArray[i] = nums[i]
    }

    nums = newArray;
    console.log(newArray)
}



toStringButton.addEventListener("click", () => {
    toString()
})
function toString(){
    let newString = ""

    for(let i = 0; i < nums.length; i++){
        if(i === nums.length - 1){
            newString += nums[i]
        }
        else{
            newString += nums[i] + ", "
        }
    }
    console.log(newString)
}



joinButton.addEventListener("click", () => {
    join()
})
function join(){
    let newJoin = ""

    for(let i = 0; i < nums.length; i++){
        if(i === nums.length - 1){
            newJoin += nums[i]
        }
        else{
            newJoin += nums[i] + "/"
        }
    }
    console.log(newJoin)
}



concatButton.addEventListener("click", () => {
    concat([3,5,6])
})
function concat(newArray){
    

    for(let i = 0; i < newArray.length; i++){
        push(newArray[i])
    }
    console.log(nums)
}
