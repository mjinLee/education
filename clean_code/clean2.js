// 코드, 기능, 로직 등의 반복을 피하라
function greeting(user){ // X
    return `Hi ${user.firstName} ${user.middleName} ${user.lastName}`;
}
function goodbye(user){
    return `See you next time ${user.firstName}  ${user.lastName}☆`;
}

function greeting(user){ //O
    return `Hi ${user.fullName()}`;
}
function goodbye(user){
    return `See you next time ${user.fullName()}☆`;
}
class User{
    fullName(){
        return `${this.firstName} ${user.middleName} ${this.lastName}`;
    }
}


function validateBody(body){ // O
    if(!body.id){
        throw new Error('Validation failed. The attribute id is missing.');
    }
    if(!body.name){
        throw new Error('Validation failed. The attribute name is missing.');
    }
    if(!body.count){
        throw new Error('Validation failed. The attribute count is missing.');
    }
}

function validateBody(body){ // O(좀 더 간결하게)
    const attributes = ['id','name','count'];
    attributes.forEach(attribute =>{
        if(!body[attribute]){
            throw new Error(
                `Validation failed. The attribute "${attribute}" is missing.`
            );
        }
    });
}