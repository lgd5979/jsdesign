/**
 * 桥接模式
 */

// 桥接模式最常见和实际的应用场合之一是事件监听器回调函数
// 方便测试

addEvent(element, 'click', getBeerById);
function getBeerById(e){
    var id = this.id;
    asyncRequest('GET','beer.uri?id=' + id, function(res){
        console.log('Requested Beer: ' + res.responseText);
    });
}

// 改为

function getBeerById(id, callback){
    asyncRequest('GET','beer.uri?id=' + id, function(res){
        console.log('Requested Beer: ' + res.responseText);
    });
}
addEvent(element, 'click', getBeerByIdBridge);
function getBeerByIdBridge(e){
    getBeerById(this.id, function(beer){
        console.log('Requested Beer: ' + beer);
    });
}