//firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: 'AIzaSyBPHcuYw_OkgMDNZc1ujgqRyNDCgR-W6aE',
  authDomain: 'study-5ab41.firebaseapp.com',
  projectId: 'study-5ab41',
  storageBucket: 'study-5ab41.appspot.com',
  messagingSenderId: '526499238319',
  appId: '1:526499238319:web:59adc34adc35e7346a9f5a',
  measurementId: 'G-V1P39F1GKN',
};

// firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
