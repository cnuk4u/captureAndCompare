const fsextra = require('fs-extra');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');


let images = ['1a','1b', '2a', '2b', '3', '4a', '4b', '4c'];
for(var i=0; i<images.length; i++) {
	let img1Data = fsextra.readFileSync("screenshots/master"+images[i]+".png");
	let img1 = PNG.sync.read(img1Data);

	let img2Data = fsextra.readFileSync("screenshots/current"+images[i]+".png");
	let img2 =  PNG.sync.read(img2Data);

	let diff = new PNG({width: img1.width, height: img1.height});

	let distortion = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});

	let diffFileName = "screenshots/diff"+images[i]+".png";
	let diffimageData = diff.pack();

	let options = { colorType: 2 };
	let buffer = PNG.sync.write(diffimageData, options);
	fsextra.writeFileSync(diffFileName, buffer);
}