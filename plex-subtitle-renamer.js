const fs = require('fs');
const path = require('path');

const dirMain = process.argv[2];

const renameSubs = () => {
	const readDirMain = fs.readdirSync(dirMain);

	readDirMain.forEach(dir => {

		if (fs.lstatSync(dirMain + '/' + dir).isDirectory()) {

			const files = fs.readdirSync(dirMain + '/' + dir);

			let count = 1;
			for (const file of files) {

				if (file.toLowerCase().includes('english')) {
					const ext = path.extname(file);
					const oldPath = dirMain + '/' + dir + '/' + file;
					const newPath = dirMain.replace('Subs', '') + dir + '.en.0' + count + ext;
					fs.copyFile(oldPath, newPath, err => {
						if (err) console.log(err);
					});
					count++;
				}
			}
		}
	});
};
renameSubs(dirMain);
