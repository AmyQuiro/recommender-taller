export class FileHelper {
  static readFile(path): string {
    const fs = require('fs');
    const file_data = fs.readFileSync(path, {
      encoding: 'utf8',
      flag: 'r',
    });

    return file_data;
  }
}
