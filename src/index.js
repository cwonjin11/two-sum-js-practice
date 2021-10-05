document.addEventListener("DOMContentLoaded", () => {

TwoSumProblem()

})



TwoSumProblem = () => {
    const randomButton = document.getElementById("randomButton")
    randomButton.addEventListener("click", () => {
    const nums = [2, 7, 11, 15]
    console.log(nums, "<== numbers")


    TwoSum = (nums, target) => {
        const len = nums.length
        for (let i = 0; i < len; i++)
        for (let j = i+1; j < len; j++)
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
    };
    
    console.log(TwoSum(nums, 9), "<== Result")
    
})
}

