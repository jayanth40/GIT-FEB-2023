console.log("Hello World")
let a= "abc"
console.log(a.charCodeAt(2)-96)
let n=5;
function arr(n){
    if(n==0)return
    console.log(n)
    return arr(n-1)
}
s="aaabbbbcccddd"
queries=[5,9,7,8,12,3]

function weightedUniformStrings(s, queries) {
    // Write your code here
   let map = new Map();
    let ansArr = []
    for(let i=0; i< queries.length;i++){
        ansArr.push("No")
    }
    for(let i=0; i< s.length;i++){
        let query = s.charCodeAt(i)-96;
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
            
            query = query*map.get(s[i])
            if(queries.includes(query)){
                ansArr[queries.indexOf(query)] ="Yes"
            }
        }
        else{
            map.set(s[i],1)
            query = query*map.get(s[i])
            if(queries.includes(query)){
                ansArr[queries.indexOf(query)] ="Yes"
            }
        }
    }
    return ansArr;

}
console.log(weightedUniformStrings(s,queries))



