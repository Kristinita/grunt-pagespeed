[npm-check] debug
cli.flags {
  update: false,
  u: false,
  updateAll: true,
  y: true,
  global: false,
  g: false,
  skipUnused: false,
  s: false,
  production: false,
  p: false,
  devOnly: false,
  d: false,
  saveExact: false,
  E: false,
  color: false,
  emoji: true,
  spinner: true,
  debug: true,
  dir: 'D:\\SashaForks\\grunt-pagespeed'
}
===============================
[npm-check] debug
cli.input []
===============================
[npm-check] debug
set key spinner to value true
===============================
[npm-check] debug
set key ignore to value undefined
===============================
[npm-check] debug
set key cwdPackageJson to value {
  devDependencies: { grunt: '^1.0.4' },
  dependencies: { psi: '^3.1.0' },
  error: undefined,
  name: 'grunt-pagespeed',
  description: 'Grunt plugin for running Google PageSpeed Insights.',
  homepage: 'https://github.com/jrcryer/grunt-pagespeed',
  author: {
    name: 'James Cryer',
    email: 'chat@jamescryer.com',
    url: 'http://www.jamescryer.com/'
  },
  repository: { type: 'git', url: 'git://github.com/jrcryer/grunt-pagespeed.git' },
  contributors: [],
  version: '2.0.1',
  main: 'Gruntfile.coffee',
  engines: { node: '>=0.8.0' },
  license: 'MIT',
  keywords: [ 'gruntplugin', 'pagespeed', 'insights', 'grunt', 'performance' ]
}
===============================
[npm-check] debug
set key cwd to value D:\SashaForks\grunt-pagespeed
===============================
[?25l[?25h[npm-check] debug
set key unusedDependencies to value []
===============================
[npm-check] debug
set key missingFromPackageJson to value {
  './lib/config': [ 'D:\\SashaForks\\grunt-pagespeed\\tasks\\pagespeed.coffee' ]
}
===============================
[?25l[npm-check] debug
set key packages to value [
  {
    moduleName: 'psi',
    homepage: 'https://github.com/GoogleChromeLabs/psi#readme',
    regError: undefined,
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\psi\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: '4.0.1',
    installed: '3.1.0',
    isInstalled: false,
    notInstalled: true,
    packageWanted: '3.1.0',
    packageJson: '^3.1.0',
    notInPackageJson: undefined,
    devDependency: false,
    usedInScripts: undefined,
    mismatch: false,
    semverValid: '3.1.0',
    easyUpgrade: false,
    bump: 'major',
    unused: false
  },
  {
    moduleName: 'grunt',
    homepage: 'https://gruntjs.com/',
    regError: undefined,
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\grunt\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: '1.3.0',
    installed: '1.3.0',
    isInstalled: false,
    notInstalled: true,
    packageWanted: '1.3.0',
    packageJson: '^1.0.4',
    notInPackageJson: undefined,
    devDependency: true,
    usedInScripts: undefined,
    mismatch: false,
    semverValid: '1.3.0',
    easyUpgrade: true,
    bump: null,
    unused: false
  },
  {
    moduleName: './lib/config',
    homepage: undefined,
    regError: "Registry error Package `./lib/config` doesn't exist",
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\lib\config\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: undefined,
    installed: null,
    isInstalled: false,
    notInstalled: true,
    packageWanted: null,
    packageJson: undefined,
    notInPackageJson: 'Found in: \\tasks\\pagespeed.coffee',
    devDependency: false,
    usedInScripts: undefined,
    mismatch: null,
    semverValid: null,
    easyUpgrade: null,
    bump: null,
    unused: false
  }
]
===============================
[?25h[npm-check] debug
current state {
  update: false,
  updateAll: true,
  global: false,
  cwd: 'D:\\SashaForks\\grunt-pagespeed',
  skipUnused: false,
  ignoreDev: false,
  devOnly: false,
  forceColor: false,
  saveExact: false,
  specials: undefined,
  debug: true,
  emoji: true,
  spinner: true,
  installer: 'npm',
  ignore: undefined,
  globalPackages: {},
  cwdPackageJson: {
    devDependencies: { grunt: '^1.0.4' },
    dependencies: { psi: '^3.1.0' },
    error: undefined,
    name: 'grunt-pagespeed',
    description: 'Grunt plugin for running Google PageSpeed Insights.',
    homepage: 'https://github.com/jrcryer/grunt-pagespeed',
    author: {
      name: 'James Cryer',
      email: 'chat@jamescryer.com',
      url: 'http://www.jamescryer.com/'
    },
    repository: {
      type: 'git',
      url: 'git://github.com/jrcryer/grunt-pagespeed.git'
    },
    contributors: [],
    version: '2.0.1',
    main: 'Gruntfile.coffee',
    engines: { node: '>=0.8.0' },
    license: 'MIT',
    keywords: [ 'gruntplugin', 'pagespeed', 'insights', 'grunt', 'performance' ]
  },
  packages: [
    {
      moduleName: 'psi',
      homepage: 'https://github.com/GoogleChromeLabs/psi#readme',
      regError: undefined,
      pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\psi\package.json
          at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
          at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
          at Array.map (<anonymous>)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
          at Generator.next (<anonymous>)
          at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
      latest: '4.0.1',
      installed: '3.1.0',
      isInstalled: false,
      notInstalled: true,
      packageWanted: '3.1.0',
      packageJson: '^3.1.0',
      notInPackageJson: undefined,
      devDependency: false,
      usedInScripts: undefined,
      mismatch: false,
      semverValid: '3.1.0',
      easyUpgrade: false,
      bump: 'major',
      unused: false
    },
    {
      moduleName: 'grunt',
      homepage: 'https://gruntjs.com/',
      regError: undefined,
      pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\grunt\package.json
          at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
          at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
          at Array.map (<anonymous>)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
          at Generator.next (<anonymous>)
          at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
      latest: '1.3.0',
      installed: '1.3.0',
      isInstalled: false,
      notInstalled: true,
      packageWanted: '1.3.0',
      packageJson: '^1.0.4',
      notInPackageJson: undefined,
      devDependency: true,
      usedInScripts: undefined,
      mismatch: false,
      semverValid: '1.3.0',
      easyUpgrade: true,
      bump: null,
      unused: false
    },
    {
      moduleName: './lib/config',
      homepage: undefined,
      regError: "Registry error Package `./lib/config` doesn't exist",
      pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\lib\config\package.json
          at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
          at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
          at Array.map (<anonymous>)
          at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
          at Generator.next (<anonymous>)
          at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
      latest: undefined,
      installed: null,
      isInstalled: false,
      notInstalled: true,
      packageWanted: null,
      packageJson: undefined,
      notInPackageJson: 'Found in: \\tasks\\pagespeed.coffee',
      devDependency: false,
      usedInScripts: undefined,
      mismatch: null,
      semverValid: null,
      easyUpgrade: null,
      bump: null,
      unused: false
    }
  ],
  unusedDependencies: [],
  missingFromPackageJson: {
    './lib/config': [ 'D:\\SashaForks\\grunt-pagespeed\\tasks\\pagespeed.coffee' ]
  }
}
===============================
packages [
  {
    moduleName: 'psi',
    homepage: 'https://github.com/GoogleChromeLabs/psi#readme',
    regError: undefined,
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\psi\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: '4.0.1',
    installed: '3.1.0',
    isInstalled: false,
    notInstalled: true,
    packageWanted: '3.1.0',
    packageJson: '^3.1.0',
    notInPackageJson: undefined,
    devDependency: false,
    usedInScripts: undefined,
    mismatch: false,
    semverValid: '3.1.0',
    easyUpgrade: false,
    bump: 'major',
    unused: false
  },
  {
    moduleName: 'grunt',
    homepage: 'https://gruntjs.com/',
    regError: undefined,
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\grunt\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: '1.3.0',
    installed: '1.3.0',
    isInstalled: false,
    notInstalled: true,
    packageWanted: '1.3.0',
    packageJson: '^1.0.4',
    notInPackageJson: undefined,
    devDependency: true,
    usedInScripts: undefined,
    mismatch: false,
    semverValid: '1.3.0',
    easyUpgrade: true,
    bump: null,
    unused: false
  },
  {
    moduleName: './lib/config',
    homepage: undefined,
    regError: "Registry error Package `./lib/config` doesn't exist",
    pkgError: Error: A package.json was not found at D:\SashaForks\grunt-pagespeed\lib\config\package.json
        at readPackageJson (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\read-package-json.js:12:21)
        at createPackageSummary (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\create-package-summary.js:18:31)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:32
        at Array.map (<anonymous>)
        at C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\lib\in\index.js:38:14
        at Generator.next (<anonymous>)
        at onFulfilled (C:\Users\SashaChernykh\AppData\Roaming\npm\node_modules\npm-check\node_modules\co\index.js:65:19),
    latest: undefined,
    installed: null,
    isInstalled: false,
    notInstalled: true,
    packageWanted: null,
    packageJson: undefined,
    notInPackageJson: 'Found in: \\tasks\\pagespeed.coffee',
    devDependency: false,
    usedInScripts: undefined,
    mismatch: null,
    semverValid: null,
    easyUpgrade: null,
    bump: null,
    unused: false
  }
]

$ npm install --save psi@4.0.1 ./lib/config@undefined
[?25l[?25hCommand failed: C:\Windows\system32\cmd.exe /s /c "npm "install" "--save" "psi@4.0.1" "./lib/config@undefined""
npm ERR! code ENOLOCAL
npm ERR! Could not install from "lib\config@undefined" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\SashaChernykh\AppData\Roaming\npm-cache\_logs\2020-09-26T10_59_40_119Z-debug.log

[?25h