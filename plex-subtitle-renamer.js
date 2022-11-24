// node rename.js --/Path/to/dir

const fs = require('fs');
const path = require('path');

const dirMain = process.argv[2];

const readAllFolder = () => {
	const readDirMain = fs.readdirSync(dirMain);

	readDirMain.forEach(dir => {

		if (fs.lstatSync(dirMain + '/' + dir).isDirectory()) {

			const files = fs.readdirSync(dirMain + '/' + dir);

			let count = 1;
			for (const file of files) {

				if (file.toLowerCase().includes('english')) {
					const ext = path.extname(file);
					const oldPath = dirMain + '/' + dir + '/' + file;
					const newPath = dirMain + '/' + dir + '/' + dir + '.en.0' + count + ext;
					fs.rename(oldPath, newPath, err => console.log(err));
					count++;
				}
			}
		}
	});
};
readAllFolder(dirMain);
