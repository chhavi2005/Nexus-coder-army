// const variable - which says you cant change value later
    // primitive 
        const num = 20;
        num = 10; // it is not allowed bcoz variable and its value is stored in stack
        console.log(num)
    // non primitive 
        const obj = {
            id : 10,
            name : "chhavi"
        }
        obj.id = 11; //it is possible bcoz its value is stored in heap,variable and address to its values in stack
        console.log(obj);
    
        const obj2 = {
            id:30,
            money:10
        }
        obj=obj2
        // it gives error as variable points address of its values so address cant be changed