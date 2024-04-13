import inquirer from "inquirer";
//! ==================> No1: Array
/*let fruitChaat = ["Banana", "Apple", "grapes"]*/
// console.log(fruitChaat);
//! =============> push("Melon");this method is use to add iten in list = forExample adding "Melon". pop(); no need to fill this bracket(),this is ude to remove one iten from the list = forExample removing "Melon" that we add by push method. concat([]); this is not use to add one item in the list, infact this is use to add a wahle ERE means this bracket=>[], forExample fruitChaat.concat(["orange", "mango", "KIWI"]); and also change the value of your variable, in my case it chage the value of fruitChaat, So declre it another time by its variable name.
/* fruitChaat = fruitChaat.concat(["orange", "mango", "KIWI"]);
console.log(fruitChaat); */
//! ==================> No2: Loops
/*the syntex of loop is while() {}; it means that when the condition is true (While) loop is working. it is almost like function */
/*let numOfDays = 0;
while (numOfDays <= 30 ) {
  console.log(["Fasting", "Five time praying"]);
  numOfDays++;
} */
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: 'input',
            message: "What you want to add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "are you sure ou want to add more todos?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    console.log(todos);
}
