#! /usr/bin/env node
import inquirer from "inquirer";

let todo: string [] = [];
let condition = true;

// while(condition)
// {
// let todoquestion = await inquirer.prompt(
//     [
//     {
//         name: "firstquestion",
//         type: "input",
//         message: "What would you like to add in your todos?" 
//     },
//     {
//         name: "secondquestion",
//         type: "confirm",
//         message: "Would you like to add More in your todo",
//         default: "true"
//     }
// ]
// );
// todo.push(todoquestion.firstquestion);
// console.log(todo)
// condition = todoquestion.secondquestion
// }


let main = async () => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add task", "Delete task", "Update task", "view Todo-list", "Exit"]
            }
        ]);

        if(option.choice === "Add task"){
             await addTask()
        }
        else if(option.choice === "Delete task"){
            await deletetask()
        }
        else if(option.choice === "Update task") {
            await UpdateTask()
        }
        else if(option.choice === "view Todo-list") {
            await viewtask()
        }
        else if(option.choice === "Exit"){
            condition = false;
        }
    }
}

//function to add new task to the list

let addTask = async () => {
    let newTask = await inquirer.prompt((
        {
            name: "task",
            type: "input",
            message: "Enter you new task : "
        }
    ));

    todo.push(newTask.task);
    console.log(`\n ${newTask.task} task added succesfully in todo list`);

}

//function to view all todo list task

let viewtask = () => {
    console.log("\n Your todo-list: \n");
    todo.forEach((task,index) => {
        console.log(`${index + 1}: ${task}`)
    });
    console.log("\n")
}

//function to delete a task from the list
let deletetask = async () =>{
    await viewtask()
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no, of the task you want to delete : "
        }
    ]);

    let deletetask = todo.splice(taskindex.index- 1, 1);
    console.log(`\n ${deletetask} this task has been deleted succesfully from your todo list\n`);
}

//function to update a task

let UpdateTask = async () => {
    await viewtask()
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no,' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);

    todo[Update_task_index.index - 1] = Update_task_index.new_task
    console.log(`\n Task at index no. ${Update_task_index.index - 1} updated succesfully [for updated list check option: "view Todo-list"] \n`)
}

main();