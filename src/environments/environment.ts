// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  firebase: {
    projectId: 'ict-summit-f31ee',
    appId: '1:831297288574:web:b405c2ce9103947e85db2f',
    storageBucket: 'ict-summit-f31ee.appspot.com',
    apiKey: 'AIzaSyBSv_M7kbUiOTb6XGOXASjM5IESTpF0m8I',
    authDomain: 'ict-summit-f31ee.firebaseapp.com',
    messagingSenderId: '831297288574',
    measurementId: 'G-1PYG6DE02B',
  },
  production: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
