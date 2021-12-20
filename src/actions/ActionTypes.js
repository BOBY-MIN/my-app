/* 
 Action 의 종류들을 선언합니다.
 앞에 export 를 붙임으로서, 나중에 이것들을 불러올 때, 
 import * as types from './ActionTypes' 를 할 수 있어요.

여기서 정의한 Action 들을 actions/index.js 와 reducers/index.js 에서
사용하여 Action 객체와 reducer 함수를 처리함.

*/

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';