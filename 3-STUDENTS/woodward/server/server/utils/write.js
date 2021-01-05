//в этот файл вынесено всё, что записывает данные в json файлы на сервере
const fs = require('fs');

module.exports = async (fileURL, data) => {
    try{
        await fs.writeFile(fileURL,JSON.stringify(data, null, ' '), err => { }) //передаем сюда ссылку на файл корзины и объект корзины
        return true //возвращаем ответ на фронт, что все записно и ОК
    }

    catch{
        return false
    }
}