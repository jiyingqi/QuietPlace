# QuietPlace
Project Quiet Place for CSE115A

### Running Instructions

* To install the app:  
1. Clone the git repository to a desired location.
2. Navigate into the directory and into the QuietPlace folder
3. In terminal run `npm install`
4. In terminal run` react-native bundle --platform android --dev false --entry-file index.js --bundle-output             android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res` 
5. To download the app on your phone or emulator in terminal run `react-native run-android`

* To fix the packageDebugResources exception, navigate to the QuietPlace directory in cmd and enter:  
  `cd android && gradlew clean`
