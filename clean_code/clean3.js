// 심플함이 주 목적. 불필요한 복잡성은 피하라
// 가독성
function getFirst(array, isEven){ // X
    // 배열을 받아서 isEven이 참이면 처음으로 나오는 짝수의 값을,
    // isEven이 거짓이라면 처음으로 나오는 홀수의 값을 return
    return array.find(x => (isEven ? x % 2 === 0 : x % 2 !== 0));
}

function getFirst(array,isEven){ // X
    if(isEven){
        return array.find(X => x % 2 === 0);
    } else{
        return array.find(x => x % 2 !== 0);
    }
}

function getFirstOdd(array){ // O
    return array.find(x => x % 2 !== 0);
}
function getFirstEven(array){
    return array.find(x => x % 2 === 0);
}


//
function updateAndPrint(rawData){ // X
    db.update(rawData);
    printer.print(data);
}

function update(rawData){ // O
    db.update(rawData);
    return data;
}
function print(data){
    printer.print(data);
}


//
class UserOrderService{ // X
    userDb;
    orderDb;
    paymentClient;
    processUserOrder(userId, orderId){
        const user = userDb.select(/* db query */);
        if(!user){
            throw Error('...');
        }
        const order = orderDb.select(/* db query */);
        if(!order){
            throw Error('...');
        }
        paymentClient
        .connect(/* url */)
        .then(/* process payment */)
        .catch(/* retry */);
        orderDb.updateOrder(order, PAID);
    }
}

class UserService{ // O
    userDb;
    getUser(){
        return userDb.select(/* db query */);
    }
}
class OrderService{
    orderDb;
    createOrder(user, product){}
    getOrder(orderId){
        return orderDb.select(/* db query */);
    }
    updateOrder(order){
        orderDb.updateOrder(order, PAID);
    }
}
class PaymentService{
    paymentClient;
    processPayment(orderRequest){
        return paymentClient
        .connect(/* url */)
        .then(/* process payment */)
        .catch(/* retry */);
    }
}


//
class LoginView{ // X
    display(){
        // dispaly view
    }
    onLoginButtonClick(){
        fetch('https://server.com')
        .then(data => data.json())
        .then(data => {
            if(data.token){
                localStorage.setItem('TOKEN',data.token);
                // update UI elements
            } else{
                //
            }
        })
        .catch(error => {
            if(error.statusCode === 500){
                // retry fetch?
            } else if(error.statusCode === 400){
                // handle an error
            }
            // show error message
        });
    }
}

class LoginView{ // O
    constructor(userPresenter){
        this.userPresenter = userPresenter;
    }
    display(){
        // display view
    }
    onLoginButtonClick(){
        this.userPresenter
        .login()
        .then(result => {
            // update text UI element with result.displayMessage
            // update button UI element with result.buttonText
        });
    }
}
class UserPresenter{
    UserService;
    login(){
        this.UserService
        .login()
        .then(result => {
            if(result.success){
                localStorage.setItem('TOKEN',data.token);
                return {
                    displayMessage: result.message,
                    buttonText: 'Go Home',
                };
            } else{
                return {
                    displayMessage: 'Unable to login',
                    buttonText: 'OK',
                };
            }
        })
        .cath(error => {
            // something really went wrong!
        });
    }
}