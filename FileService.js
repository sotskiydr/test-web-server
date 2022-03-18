const uuid = require("uuid")
const path = require("path")
const fs = require("fs")
class FileService {
    saveFiles(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', fileName)
            file.mv(filePath);
            return fileName
        } catch (error) {
            console.log(error.message)
        }

    }
    deleteFiles(name){
        fs.unlink(`static/${name}`, err => {
            if(err) throw err.message;
            console.log('file deleted');
        });
    }
}
module.exports = new FileService;