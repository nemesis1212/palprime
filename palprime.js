/*this programme is developed to check whether the input no. is palprime or not.And an inputed string is palindrome or not using generics
palprime no=> the no which is palindrome and a prime no;
palindrome=> original string and its reverse are equal.*/
var ps = require("prompt-sync");
var prompt1 = ps();
function numpal(a) {
    var A = a.toString();
    var s = "";
    var len = A.length;
    for (var i = len - 1; i >= 0; i--) {
        s = s + A.charAt(i);
    }
    var numS = Number(s);
    var numA = Number(A);
    if (numA == numS) {
        console.log("".concat(A, " is palindrome...."));
        return 1;
    }
    else {
        console.log("".concat(A, " is not palindrome........."));
        return 0;
    }
}
function strpal(a) {
    var s = "";
    var len = a.length;
    for (var i = len - 1; i >= 0; i--) {
        s = s + a.charAt(i);
    }
    if (s == a) {
        console.log("".concat(a, " is palindrome...."));
    }
    else {
        console.log("".concat(a, " is not palindrome........."));
    }
}
function prime(b) {
    var t = 0;
    for (var i = 1; i < b / 2; i++) {
        if (b % i == 0) {
            t++;
        }
    }
    if (t == 1) {
        console.log("".concat(b, " is a prime number...."));
        return 1;
    }
    else {
        console.log("".concat(b, " is not prime number....."));
        return 0;
    }
}
function Checkpalprime(A) {
    if ((typeof A) == "number") {
        if (numpal(A) == 1 && prime(A) == 1) {
            console.log("".concat(A, " is a palprime number...."));
        }
        else {
            console.log("".concat(A, " is not a palprime number....."));
        }
    }
    else {
        if ((typeof A) == "string") {
            console.log("u have entered a string value i.e.: ".concat(A));
            strpal(A);
        }
    }
}
var fun = /** @class */ (function () {
    function fun() {
        this.a = 0;
        this.as = "";
        this.insert();
    }
    fun.prototype.insert = function () {
        console.log("We want two input values to check palprime number if the value is integer or a string for palindrom string value.");
        console.log("enter 1 for integer value.");
        console.log("enter 2 for string value.");
        var sel = Number(prompt1("Enter your choice:->"));
        switch (sel) {
            case 1:
                {
                    this.a = Number(prompt1("Enter the number to check for palprime no..... "));
                    Checkpalprime(this.a);
                }
                break;
            case 2:
                {
                    this.as = prompt1("Enter the word to check for palindrome word..... ");
                    Checkpalprime(this.as);
                }
                break;
            default: console.log("Wrong choice!");
        }
    };
    return fun;
}());
var Palprime = new fun();
