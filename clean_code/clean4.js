// 코드를 깨끗하게, 변경이 쉽게, 유지보수가 용이하도록
// 시스템에 불필요한 복잡성을 더하지 않는 내에서
// 확장성 있는 코드를 작성하라
function deleteUser(id, softDelete = false){ // X
    if(softDelete){
        // don't delete from db but only mark as deleted
        return this._softDelete(id);
    }
    return db.removeById(id);
}

function deleteUser(id){ // O
    return db.removeById(id);
}


//
class UserRepo{
    create(user){
        return db.insert(user);
    }
    lsit(filter){
        return db.find({where: filter});
    }
    get(userId){
        return db.find({where: {id: userId}});
    }
    update(id, update){
        const user = db.find(id);
        if(!user){
            return NOT_FOUND;
        }
        return db.updateById(id,{...user, ...update});
    }
    
    // X
    delete(id, soft = true){  
        if(soft){
            // TODO:
            // 1. Update list() and get() to filter out items if deleted === true
            return this._softDelete(id);
        }
        return db.removeById(id);
    }
    _softDelete(id){
        return this.update(id, {delete: true});
    }

    // O->필요하지 않은 기능은 삭제
    delete(id){
        return db.removeById(id);
    }
}