document.addEventListener("DOMContentLoaded", () => {

twoSumProblem()

})



twoSumProblem = () => {
    const randomButton = document.getElementById("randomButton")
    const solution = document.getElementById("result")
    randomButton.addEventListener("click", () => {
    const nums = [2, 7, 11, 15]
    console.log(nums, "<== numbers")


    twoSum = (nums, target) => {
        const len = nums.length
        for (let i = 0; i < len; i++)
        for (let j = i+1; j < len; j++)
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
    };
    console.log(twoSum(nums, 9), "<== Result")
    solution.innerHTML = twoSum(nums, 9)
    
    
    
})
}

