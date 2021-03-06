const fs = require('fs');

function generateLicense(data, year) {
	if(data.license === "MIT") {
		return `MIT License

Copyright (c) ${year} ${data.name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
	}

	if(data.license === "gpl3") {
		let gpl3 = '';
		fs.readFile('../assets/gpl3-license.txt', 'utf8', (err, data) => {
			if(err) {
				console.error(err);
				return;
			} else {
				gpl3 = data;
			}
		});

		return gpl3;
	}

	if(data.license === "apache") {
		let apache = '';
		fs.readFile('../assets/apache-license.txt', 'utf8', (err, data) => {
			if(err) {
				console.error(err);
				return;
			} else {
				apache = data;
			}
		});

		return apache;
	}
}

module.exports = generateLicense;