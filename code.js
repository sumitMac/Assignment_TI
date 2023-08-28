// Write a function to remove duplicates from a sorted array. Use any language of your choice.

const ar=[1, 1, 1, 2, 2, 3, 4, 5, 5];

const result=function removeDupli(ar){
    for(let i=0;i<ar.length-1;i++){
        if(ar[i]===ar[i+1]){
            i++;
            break;
        }else{
            return ar[i];
        }
    }
    console.log(result());

}

//Write the following function, that splits passed arr into two arrays, the first containing values smaller than the value and the second array containing values larger than the value.

const arr=[1, 4, 2, 5, 3, 7];
const resultTwo=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        if(ar[i]<=2){
        return ar[i];
        }else{
            return ar[i];
        
        }
    }
}
console.log(resultTwo());

//Write a function mergeSorted which merges two sorted arrays into a sorted array with the time complexity of O(n) and space complexity of O(n).

const ab=[1,3,5];
const ba=[2,4];
let ptr1=0;
let ptr2=0;

const resultThree=(a,b)=>{
    for(;ptr1<ab.length-1;ptr1++){
        for(;ptr2<ba.length-1;ptr2++){
            if(a[ptr1]<b[ptr2]){
                ptr1++;
                return ab[ptr1];
                
            }else{
                ptr2++;
                return ba[ptr2];
                
            }
        }


    }
}
console.log(resultThree().sort((a,b)=>b-a));