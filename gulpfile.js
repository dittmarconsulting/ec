const fs = require('fs')
const gulp = require('gulp')
const { series } = require('gulp')
const file = require('gulp-file')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const exec = require('child_process').exec

// create the date string
const date = new Date()
const dateStr = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

// clear './src' directory if exist
function deleteAll(cb) {
    return gulp.src([
        './src/*',
        './package-lock.json'
    ])
    .pipe(clean())
    cb()
}

// install all neccessary dependencies
function installDep(cb) {
    exec('npm i --save acorn moment react-native-router-flux react-redux react-timer-mixin redux redux-form redux-saga redux-storage redux-storage-decorator-filter redux-storage-engine-localstorage redux-storage-engine-reactnativeasyncstorage redux-storage-engine-sessionstorage', function (err, stdout, stderr) {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
}

// install all neccessary dev dependencies
function installDevDep(cb) {
    exec('npm i --save-dev metro-react-native-babel-preset @babel/core @babel/runtime babel-eslint babel-jest babel-plugin-syntax-trailing-function-commas babel-plugin-transform-function-bind eslint eslint-plugin-babel eslint-plugin-react eslint-plugin-react-native jest-fetch-mock jest-react-native redux-saga-test-plan redux-devtools-extension', function (err, stdout, stderr) {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
}

// create folder structure
function createFolderStructure(cb) {
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('./src'))
        .pipe(gulp.dest('./src/assets'))
        .pipe(gulp.dest('./src/assets/img'))
        .pipe(gulp.dest('./src/actions'))
        .pipe(gulp.dest('./src/components'))
        .pipe(gulp.dest('./src/reducers'))
        .pipe(gulp.dest('./src/sagas'))
        .pipe(gulp.dest('./src/scenes'))
        .pipe(gulp.dest('./src/utility'))
    cb()
}

// create action files
function createActionFiles(cb) {

    const actionCreatorsContent = fs.readFileSync('./fileTemplates/actionCreators.js', 'utf8')
    const componentActionsContent = fs.readFileSync('./fileTemplates/componentActions.js', 'utf8')

    return gulp.src('*.*', {read: false})
        .pipe(file('index.js', actionCreatorsContent))
        .pipe(gulp.dest('./src/actions/'))

        .pipe(file('componentActions.js', componentActionsContent))
        .pipe(gulp.dest('./src/actions/'))
    cb()
}

// create reducer files
function createReducerFiles(cb) {

    const reducersContent = fs.readFileSync('./fileTemplates/reducers.js', 'utf8')
    const componentReducerContent = fs.readFileSync('./fileTemplates/componentReducer.js', 'utf8')

    return gulp.src('*.*', {read: false})

        .pipe(file('index.js', reducersContent))
        .pipe(gulp.dest('./src/reducers/'))

        .pipe(file('componentReducer.js', componentReducerContent))
        .pipe(gulp.dest('./src/reducers/'))
    cb()
}

// create component files
function createComponentFiles(cb) {

    const RouterWithReduxContent = fs.readFileSync('./fileTemplates/RouterWithRedux.js', 'utf8')

    return gulp.src('*.*', {read: false})

        .pipe(file('RouterWithRedux.js', RouterWithReduxContent))
        .pipe(gulp.dest('./src/components/'))
    cb()
}

// copy example assets
function copyAssets(cb) {
    gulp.src(['./fileTemplates/img/*.*'])
        .pipe(gulp.dest('./src/assets/img/'))
    cb()
}

// create scene file
function createSceneFiles(cb) {

    const SceneContent = fs.readFileSync('./fileTemplates/Splash.js', 'utf8')

    return gulp.src('*.*', {read: false})
        .pipe(file('Splash.js', SceneContent))
        .pipe(gulp.dest('./src/scenes/'))
    cb()
}

// create project files
function createProjectFiles(cb) {

    const entryPointContent = fs.readFileSync('./fileTemplates/entryPoint.js', 'utf8')
    const constantContent = fs.readFileSync('./fileTemplates/constants.js', 'utf8')
    const endpointContent = fs.readFileSync('./fileTemplates/endpoints.js', 'utf8')
    const routerConfigContent = fs.readFileSync('./fileTemplates/routerConfig.js', 'utf8')
    const rootSagaContent = fs.readFileSync('./fileTemplates/rootSaga.js', 'utf8')
    const reduxStoreContent = fs.readFileSync('./fileTemplates/reduxStore.js', 'utf8')
    const configContent = fs.readFileSync('./fileTemplates/config.json', 'utf8')

    return gulp.src('*.*', {read: false})

        .pipe(file('index.js', entryPointContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('constants.js', constantContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('endpoints.js', endpointContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('routerConfig.js', routerConfigContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('rootSaga.js', rootSagaContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('store.js', reduxStoreContent))
        .pipe(gulp.dest('./src/'))

        .pipe(file('config.json', reduxStoreContent))
        .pipe(gulp.dest('./src/'))

    cb()
}

// replace dates
function setDates(cb) {

    gulp.src(['./src/actions/index.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/actions/'))

    gulp.src(['./src/actions/componentActions.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/actions/'))

    gulp.src(['./src/reducers/index.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/reducers/'))

    gulp.src(['./src/reducers/componentReducer.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/reducers/'))

    gulp.src(['./src/components/RouterWithRedux.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/components/'))

    gulp.src(['./src/scenes/Splash.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/scenes/'))

    gulp.src(['./src/index.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    gulp.src(['./src/constants.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    gulp.src(['./src/endpoints.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    gulp.src(['./src/routerConfig.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    gulp.src(['./src/rootSaga.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    gulp.src(['./src/store.js'])
        .pipe(replace('xx/xx/xx', dateStr))
        .pipe(gulp.dest('./src/'))

    cb()
}


exports.installDep = installDep
exports.installDevDep = installDevDep
exports.createFolderStructure = createFolderStructure
exports.createActionFiles = createActionFiles
exports.createReducerFiles = createReducerFiles
exports.createComponentFiles = createComponentFiles
exports.copyAssets = copyAssets
exports.createSceneFiles = createSceneFiles
exports.createProjectFiles = createProjectFiles
exports.setDates = setDates
exports.default = series(
    deleteAll,
    installDep,
    installDevDep,
    createFolderStructure,
    createActionFiles,
    createReducerFiles,
    createComponentFiles,
    copyAssets,
    createSceneFiles,
    createProjectFiles,
    setDates
)
