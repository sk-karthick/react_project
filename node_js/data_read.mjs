import { readFile } from 'fs';

readFile('./dummy.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

process.on('uncaughtException', err=>{
    console.error(`There was an uncaught Error : ${err}`)
    process.exit(1)
})
