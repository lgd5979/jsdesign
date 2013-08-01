/**
 * 方法的链式调用
 */

// 调用链的结构

function $(){
    var elements = [];
    for(var i = 0, len = arguments.length; i < len; ++i){
        var element = arguments[i];
        if(typeof element === 'string'){
           element = document.getElementById(element);
        }
        if(arguments.length === 1){
            return element;
        }
        elements.push(element);
    }
    return elements;
}


// 把上面的上面的这个函数改造成一个构造器
(function(){
    function _$(els){
        this.elements = [];
        for(var i = 0, len = els.length; i < len; ++i){
            var element = els[i];
            if(typeof element === 'string'){
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }
    _$.prototype = {
        each:function(fn){
            for(var i = 0, len = this.elements.length; i < len; ++i){
                fn.call(this, this.elements[i]);
            }
        },
        setStyle:function(prop,val){
            this.each(function(el){
                el.style[prop] = val;
            });
            return this;
        },
        show:function(){
            var that = this;
            this.each(function(el){
                that.setStyle('display','block');
            });
            return this;
        },
        addEvent:function(type, fn){
            var add = function(el){
                if(window.addEventListener){
                    el.addEventListener(type, fn,  fn);
                }
                else if(window.attachEvent){
                    el.attachEvent('on'+type, fn);
                }
            };
            this.each(function(el){
                add(el);
            });
            return this;
        }
    }
    window.$ = function(){
        return new _$(arguments);
    }
})();

$(window).addEvent('load',function(){
    $('test1', 'test2')
        .show()
        .setStyle('color','red')
        .addEvent('click',function(e){
            $(this).setStyle('color','green');
        })
});