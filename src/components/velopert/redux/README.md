# 리덕스 공부하기
리덕스에 대한 기록

---
## 리덕스
리덕스에 대한 기초를 알아보기

### Reducer
* 변화를 일으키는 함수
* reducer는 store에 들어갈 state와 state를 바꿀 함수를 정의하는 곳
* 기본 적으로 순수함수 코딩을 해야하고, 불변성을 지켜야 함

### Action
* 상태에 어떠한 상태변화가 일어날 떄 액션을 발생한다. 객체로 표현한다
#### type
* 필수적으로 가져야 하는 객체 이면서, 그 외의 값들은 맘대로 변경이 가능하다

### Store
* 한 어플리케이션당 하나의 Store를 만들 수 있다
* 현재의 앱과 리듀서가 들어가 있고 추가적으로 내장 함수가 들어간다

### Dispatch
* 스토어의 내장 함수이며, Action을 실행시키는 매개체 이다
   -dispatch(Action)

### Subscribe
* subscribe함수에 특정함수를 전달해 주면, 액션이 디스패치 되었을때 마다 전달해준 함수가 호출
#### 잘 안씀 - connet함수 또는 useSelect Hook을 사용함




