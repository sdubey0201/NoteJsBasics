
//note this class has the example of arrow function and ES6 method definition syntax


// const square = function(x){
// return x*x;
// }

// const square = (x) => {
//    return x*x;
// }

// const square = (x) => x*x;

// const event ={
//     name:'Birthday party',
//     printGuestList: function(){
//         console.log('guest list for : ', this.name)
//     }
// }

// Note: this is not resolved in arrow function
// const event = {
//     name:'Birthday party',
//     printGuestList: ()=>{
//         console.log('guest list for : ', this.name)
//     }
// }
//out put is
// guest list for :  undefined

// const event = {
//         name:'Birthday party',
//         printGuestList(){
//             console.log('guest list for : ', this.name)
//         }
//     }

    const event = {
        name:'Birthday party',
        guiesList:['name1','name2','name3'],
        //ES6 method definition syntax
        printGuestList(){
            console.log('guest list for : ', this.name)
            this.guiesList.forEach((guest)=>{
             console.log(guest +'attanding the '+this.name);
            })
        }
    }

event.printGuestList();