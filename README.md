# QuietPlace
Project Quiet Place for CSE115A

To pick up changes:
  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

Packages:
  npm install react-native-sliding-panes --save
  npm install @react-native-community/slider --save

To fix the packageDebugResources exception, navigate to the QuietPlace directory in cmd, then:
  cd android && gradlew clean
