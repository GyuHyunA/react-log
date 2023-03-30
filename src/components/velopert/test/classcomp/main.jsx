import React from "react";

class ClassCompMain extends React.Component {
  state = {
    number: 0,
    color: "red",
  };

  constructor(props) {
    super(props); // 부모 오브젝트의함수를 호출할 때 사용
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.color !== prevState.color) {
      console.log("nextProps", nextProps);
      console.log("prevState", prevState);
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
    return nextState.number % 10 !== 4;
  }

  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default ClassCompMain;
