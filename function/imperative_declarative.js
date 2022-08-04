// imperative 명령형 코드
function spaceToHeart(text){
    let result = ""; // 최종결과 보유할 변수
    for(let i=0;i<text.length;i++){
        if(text[i]===" "){
            result += "♡";
        }else{
            result += text[i];
        }
    }
    return result;
}
// declarative 선언형 코드 .replaceAll()
function spaceToHeart(text){
    return text.replaceAll(" ","♡");
}

// imperative 명령형 코드
function removeOdd(items){
    const result = [];
    for(let i=0;i<items.length;i++){
        if(items[i]%2===0){
            result.push(items[i]);
        }
    }
    return result;
}
//// declarative 선언형 코드 .filter()
function checkForOdd(item){
    return item % 2 === 0;
}
function removeOdd(items){
    return items.filter(checkForOdd);
}