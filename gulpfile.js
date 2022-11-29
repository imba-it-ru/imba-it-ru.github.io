const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');
const fs = require('fs');

const pug = require('gulp-pug');

const JS_PATH = './src/js/pages/';
const SCSS_PATH = './src/scss/pages/';
const PUG_PATH = './src/pug/pages/';

const JS_PATH_OUT = 'assets/js/';
const SCSS_PATH_OUT = 'assets/css/';
const PUG_PATH_OUT = './';

const entryJs = createJsEntrys(JS_PATH, fs.readdirSync(JS_PATH));
const entryScss = createScssEntrys(SCSS_PATH, fs.readdirSync(SCSS_PATH));
const entryPug = createPugEntrys(PUG_PATH, fs.readdirSync(PUG_PATH));

console.log(entryPug);

function pugCreate() {
	return src(entryPug)
		.pipe(
			pug({
				// Your options in here.
			})
		)
		.pipe(dest(PUG_PATH_OUT));
}

function scssStyle() {
	return src(entryScss)
		.pipe(sass({}).on('error', sass.logError)) // уведомление об ошибках
		.pipe(dest(SCSS_PATH_OUT));
}

function jsCreate() {
	return src(JS_PATH + '*.js')
		.pipe(
			webpack({
				mode: 'development',
				devtool: false,
				entry: entryJs,
				output: {
					filename: '[name].js',
				},
			})
		)
		.pipe(dest(JS_PATH_OUT));
}

exports.js = jsCreate;
exports.sass = scssStyle;
exports.pug = pugCreate;

watch('src/js/*.js', jsCreate);
watch('src/scss/*.scss', scssStyle);
watch('src/pug/*.pug', pugCreate);

exports.default = parallel(scssStyle, jsCreate, pugCreate);
exports.watch = watch(
	['./src/js/**/*.js', './src/scss/**/*.scss', './src/pug/**/*.pug'],
	parallel(jsCreate, scssStyle, pugCreate)
);

function createJsEntrys(path, names) {
	const namesWithoutJs = names.map((name) => name.split('.')[0]);
	const entryes = {};
	namesWithoutJs.forEach((name, index) => {
		entryes[name] = path + names[index];
	});

	return entryes;
}

function createScssEntrys(path, names) {
	return names.map((name) => path + name);
}

function createPugEntrys(path, names) {
	return names.map((name) => path + name);
}
