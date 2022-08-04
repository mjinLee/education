// 검색이 가능한 이름을 쓴다
setInterval(eatPasta,86400) // X

const SECONDS_IN_A_DAY = 86400; // O
setInterval(eatPasta, SECONDS_IN_A_DAY)

// 함수명은 반드시 동사를 쓴다
function userData(){ // X

}
const data = userData();

function loadUserData(){ // O

}
const userData = loadUserData();

// 함수는 무조건 단 한 가지 액션만 수행한다
function loadUserData(){ // X
    const value = '; ${document.cookie}';
    const parts = value.split('; user.id=');
    if(parts.length === 2){
        const cookie = parts.pop().split(";").shift();
    }
}
const userData = loadUserData();

function getCookie(){ // O
    const value = '; ${document.cookie}';
    const parts = value.split('; user.id=');
    if(parts.length === 2){
        const cookie = parts.pop().split(";").shift();
    }
}
function loadUserData(){
    const cookie = getCookie();
}
const userData = loadUserData();

// 함수는 3개 혹은 그 이하의 인수를 가진다
function makePayment(price, productId, size, quantity, userId){ // X
    
}
makePayment(35, 5, "xl", 2, "pasta")

function makePayment(price, productId, size, quantity, userId){ // O

}
makePayment({
    price: 35,
    productId: 5,
    size: "xl",
    quantity: 2,
    userId: "pasta"
});

// boolean 값을 인수로 함수에 보내는 것을 최대한 방지하도록 한다
function sendMessage(text,isPrivate){ // X
    if(isPrivate){

    }else{

    }
}
sendMessage("hello",false)
sendMessage("this is a secret", true)

function sendPrivateMessage(text){ // O

}
function sendPublicMessage(text){

}
sendPublicMessage("hello")
sendPrivateMessage("this is a secret")

// 짧은 변수명이나 (아무도 이해 못하는)축약어를 쓰는 것을 피한다
allUsers.forEach((u,i)=>{ // X
    sendEmail(u);
    addToCount(i);
});

allUsers.forEach((user,currentNumber)=>{
    sendEmail(user);
    addToCount(currentNumber);
});