import inquirer from "inquirer";
class Player {
    name;
    fuel = 200;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 30;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 200;
    }
}
class Opponent {
    name;
    fuel = 200;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 30;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: "
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["Skeleton", "Alien", "zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.name);
do {
    if (opponent.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "drink portion", "Run for your life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`$ {p1.name} fuel is $ {p1.fuel}`);
                console.log(`$ {o1.name} fuel is $ {o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you looose, better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`$ {p1.name} fuel is $ {p1.fuel}`);
                console.log(`$ {o1.name} fuel is $ {o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you Win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`You Drink health portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life..") {
            console.log(`You loose, Better up next time`);
            process.exit();
        }
    }
} while (true);
