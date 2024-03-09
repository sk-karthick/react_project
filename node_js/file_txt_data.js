const path = require ('path')
const fsPromises = require ('fs').promises

const fileOps = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname,'files','example.txt'), 'Hi First write file')
        console.log('Data file created')
        
    }
    catch{
        console.error(err)
    }
}
fileOps()