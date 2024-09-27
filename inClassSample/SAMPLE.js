let nums = [5, 10, 15, 10]
let sum = 0

addTheNumbers(nums)
function addTheNumbers(nums){
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    console.log(sum)
}