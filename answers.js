//=====Going Easy =======
for(let i=1; i <= 20; i++){
    console.log(i)
}

//====== Get Even ========

for(let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

//======= Excited Kitten =======

let arr= [ "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i=0; i <= 20; i++){
    if(i % 2 === 0){
        let meow = 0
        console.log(arr[Math.floor(Math.random()*arr.length)])

        }   
     }
//============== Find the median ============

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort()[Math.floor(nums.length/2)])