// primitive datatype - immutable(not changeable)
// non primitive datatype - mutable

// primitve example
    // let a= 10;
    // b=a;
    // b=30;
    // console.log(b)
    // console.log(a)
        // a will not be changed if b changes


// non primitive example
    let obj1 = {
        id:20,
        name:"chhavi"
    }
    let obj2 = obj1;
    obj2.id=30;

    console.log(obj1)
    console.log(obj2)
        // obj2 changes are also reflected in obj1

// stack and heap memory in JS:-

    // primitive datatypes(number,string,bigint,bool,undefined,symbol) are stored in stack(ek ke upr ek) memory
        // call by value - the variable and value is stored in stack
        // if we do b = a it creates a new variable b with the same value as a in stack
        // thats why when changing b, only b's value is created not a
        // in JS primitive datatypes it is immutable that means if we change b = 40 so it changes because it create at a new memory location and then it is created newly thats why it is changing we cant change the same variable at that location 

    // non primitive datatypes(array, object, function) are stored in heap(spread kiye hue jaha jgh mili) memory
        // call by reference - variable and the address of the variable(of heap) are stored in stack whereas the keyvalue pairs are stored in heap
        // if we do obj2 = obj1, obj1 address is stored in a new variable obj2 in stack and the value is still in the heap obj1,obj2 both pointing to that address
        // thats why change to obj2 changes obj1 as they are pointing same value so the value will be changed

    // IN JS
        // a variable can change its datatype it is not fixed, so a new memory location is required to override as some time a new datatype can require more memory space than the earlier var space taken

    // heap has majority space, stack has limited small part - thats why array etc can be large size so it cant be stored in stack and when we change a new memory is created again which is not possible and also if a string is very large size then it will also be stored in heap