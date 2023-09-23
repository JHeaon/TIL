// map()함수는 어떤 배열에 있는 모든 요소들의 값을 변경해서 만든 새로운 배열을 써야 할 때 유용하다. 
// 일반적으로 function()을 이용하여 처리하는 방법과 화살표 함수를 사용하는 방법 2가지가 있다. 

const array1 = [1, 2, 3, 4, 5, 6, 7, 8]
const map1 = array1.map(x => x * 2)

console.log(map1)


const map2 = array1.map(function(element){
    return element * 3;
})
console.log(map2)