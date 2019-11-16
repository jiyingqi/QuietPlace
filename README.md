# QuietPlace
Project Quiet Place for CSE115A

### Running Instructions

* To pick up changes:  
`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

* To fix the packageDebugResources exception, navigate to the QuietPlace directory in cmd and enter:  
  `cd android && gradlew clean`
