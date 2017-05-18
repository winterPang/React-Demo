import utils from 'utils';

let ctrlCb = ($scope) => {
    
    //var a = 3;
    //let a =2;
    class Scope {
        constructor(x, y) {
            this.key = x;
        }

        toString() {
            return '(' + this.name1 + ')';
        }
    }

    //区别
    $scope.name = new Scope('NameTest');
    $scope.$watch('name.key', (value) => {
        console.log(value);
    })

    $scope.name1 = "Name";
    $scope.$watch('name1', (value) => {
            console.log(value);
        })
        //数组结构赋值
    let [head, ...tail] = [1, 2, 3, 4];
    $scope.code = head;
    $scope.tail = tail;
    //error
    // 报错如果等号的右边不是数组
    //（或者严格地说，不是可遍历的结构)
    // let [foo] = 1;
    // let [foo] = false;
    // let [foo] = NaN;
    // let [foo] = undefined;
    // let [foo] = null;
    // let [foo] = {};

    //对象结构赋值
    let { foo, bar, baz } = {
        foo: "aaa",
        bar: "bbb"
    };
    console.log("===============");
    console.log(foo);
    console.log(bar);
    console.log(baz);
    // $scope.foo = foo;
    // $scope.bar = bar;

    let obj = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };

    let { p: [x, { y }] } = obj;
    console.log(x);
    console.log(y);

    var node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };

    var {
        loc: {
            start: { line }
        }
    } = node;
    // console.log(line);
    // console.log(loc);
    // console.log(start);

    //函数结构赋值
    let a = [
        [1, 2],
        [3, 4]
    ].map(([a, b]) => a + b);
    console.log("===============");
    console.log(a);

    //赋值结构提取json数据结构
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);

    //模版字符串
    // 字符串中嵌入变量
    let name = "Bob",
        time = "today";
    let str = `Hello ${name}, how are you ${time}?`;

    function fn() {
        return "Hello World";
    }

    let funcStr = `foo ${fn()} bar`
    console.log("===============");
    console.log(str);

    //数组扩展
    for (let [index, elem] of['a', 'b'].entries()) {
        console.log(index, elem);
    }

    //Symbol
    var mySymbol = Symbol();

    // 第一种写法
    var obj1 = {};
    obj1[mySymbol] = 'Hello!';

    // 第二种写法
    // var a = {
    //     [mySymbol]: 'Hello!'
    // };

    // // 第三种写法
    // var a = {};
    // Object.defineProperty(a, mySymbol, { value: 'Hello!' });

    // 以上写法都得到同样结果
    //a[mySymbol] // "Hello!"

    //SetES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
    const s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }

    let set = new Set();
    let a1 = NaN;
    let b1 = NaN;
    set.add(a1);
    set.add(b1);
    console.log(set) // Set {NaN}

    //es6
    class MyClass {
        constructor() {
            // ...
        }
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter: ' + value);
        }
    }

    let inst = new MyClass();

    inst.prop = 123

    console.log(inst.prop)

    //async

    function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(`========async===
        ======${value}`);
    }

    asyncPrint('hello world', 50);


};

export default ['$scope', ctrlCb];
