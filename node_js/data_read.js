const fs =require ('fs')
const path = require ('path')

fs.readFile(path.join(__dirname,'dummy.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname,'example.txt'), 'Hi First write file', (err) => {
    if (err) throw err;
    console.log('Data inserted');
});

fs.appendFile(path.join(__dirname,'dummy.txt'), 'Hi Dude How are you ?', (err) => {
    if (err) throw err;
    console.log('Data Modified');
});
fs.readFile(path.join(__dirname,'dummy.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
process.on('uncaughtException', err=>{
    console.error(`There was an uncaught Error : ${err}`)
    process.exit(1)
})
