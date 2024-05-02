function MyFunc(bar){}
    MyFunc.prototype.bar = bar ; 
    var myFunc = new MyFunc(10);

    // delete myFunc.bar;    
    console.log(myFunc.bar);    

    // delete MyFunc.prototype.bar;
    // console.log(myFunc.bar);