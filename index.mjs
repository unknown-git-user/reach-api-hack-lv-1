import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
console.log("Hello people!");

console.log("Launching!");
const ctcAlice = accAlice.contract(backend);
console.log('Starting stuff up!');

let done = false;
const users = [];
const startBobs = async () => {
    const newBob = async (who) => {
        console.log("Starting a new bob");
        const acc = await stdlib.newTestAccount(startingBalance);
        const ctc = acc.contract(backend, ctcAlice.getInfo());
        users.push(acc.getAddress());
        console.log("Finshed a new bob");
    };
    
    await newBob('Bob1');
    await newBob('Bob2');
    await newBob('Bob3');
    console.log(users);
}

await ctcAlice.p.Alice({
    //alice interact object
    ready: async () => {
        console.log("Alice is ready");
        await startBobs();
    }, 
});

console.log("Goodbye everyone!!");
done = true;
