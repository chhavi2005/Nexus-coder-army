// comparison operators

    // number to number
    let a1 = 10
    let a2 = 12
    // a1==a2
    console.log(a1==a2) //false
    // a1>a2
    // a1<a2
    // a1>=a2 
    // a1<=a2 
    // a1!=a2

    // number to string
    // automatic type conversion of string to number
    let num = 10
    let str="10"
    console.log(num==str) //true

    // for datatype check we use === it first check datatype then check value also
    console.log(num===str)

// rules for comparison
    // null can only be equal undefined null==undefined
    // null is not equal to undefined type because null-object type and undefined-unedefined type
    // also null and undefined is not equal to any other datatype 

    console.log(null==0) //false bcz null can only be equivalent to undefined
    console.log(null<0) //false
    console.log(null>0) //false
    console.log(null<=0) //true - bcz null can be zero
    console.log(null>=0) //true - bcz null can be zero

    // undefined can also be equal to null
    // undefined when converted to number is NaN

    // NaN == NaN is false
    // bcoz when two strings converted to a number is NaN bcoz both are different NaN

// Logical Operator - &&, ||, !
// bitwise operator - &, |, ^(xor- 1 and 0 is 1, 0 nd 0 & 1 nd 1 is 0 ), ~, <<(bit by bit shifted to left), >>(rightshift)
    // 4&5 each 4 and 5 will be converted to binary and then it will be checked bit by bit 1 and 0 and then we will get answer then it will be converted to decimal
    // for & if both are 1 then we get 1 if | then if one of the bit is 1 we get 1


    console.log(5<<2)
    // 20 multiply 2 power 3
    // 101.0000
    // 101000.0000
    console.log(20>>2)
    // 20 divided by 2 power 2
    // 10100.0000
    // 101.0000

    // console.log(0.1+0.2)
    // displays 0.3000000...4
    // because first the decimal is converted to binary and then it is taken as a approx value bcoz the dec number is not fully converted thats why it is showing a value like this