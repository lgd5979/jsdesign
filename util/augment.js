function augment(receivingClass, givingClass){
//    for(methodName in givingClass.prototype){
//        if(!receivingClass.prototype[methodName]){
//            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
//        }
//    }
    // 改进
    if(arguments[2]){
        for(var i = 2, len = arguments.length; i < len; i++){
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }else{
        for(methodName in givingClass.prototype){
            if(!receivingClass.prototype[methodName]){
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}