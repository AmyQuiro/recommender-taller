import moment from 'moment';

export class Support {
  async getListLogs(searchCriteria: any): Promise<any> {
    try {
      const path = require('path');
      const fs = require('fs');
      let folderLog = process.env.PATH_LOGS;

      return new Promise((resolve, reject) => {
        return fs.readdir(folderLog, (err, filenames) => {
          if (err) reject(err);
          let listFiles = [];
          filenames.forEach((element, index) => {
            let myFileOptions = fs.statSync(`${folderLog}/${element}`);

            var moment = require('moment-timezone');
            const format1 = 'YYYY-MM-DD HH:mm:ss';
            let dateTime1 = moment(myFileOptions.mtime).format(format1);

            var fileSizeInBytes = myFileOptions.size;
            var fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            listFiles.push({
              name: element,
              date: dateTime1,
              size:
                Math.round((fileSizeInMegabytes + Number.EPSILON) * 100) / 100 +
                ' Mb',
            });
          });
          resolve(listFiles);
        });
      });
    } catch (error) {
      console.log('Support Error :>> ', error);
      let msgError = error.message ?? error;
      throw new Error(msgError);
    }
  }

  async downloadLog(name: any): Promise<any> {
    try {
      let folderLog = process.env.PATH_LOGS;
      const fs = require('fs');
      const contents = fs.readFileSync(`${folderLog}/${name}`, {
        encoding: 'base64',
      });
      console.info('obtenido ' + name);
      return contents;
    } catch (error) {
      console.log('Support Error :>> ', error);
      let msgError = error.message ?? error;
      throw new Error(msgError);
    }
  }


}
