import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    /*위에 사이트는 사이트는 이미지를 랜덤으로 보여주는 사이트 */
    name: "이승은",
    birthday: "000408",
    gender: "여자",
    job: "학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "정아윤",
    birthday: "001108",
    gender: "여자",
    job: "학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "홍송미",
    birthday: "001208",
    gender: "여자",
    job: "학생",
  },
];

/*key는 각 요소 구분 하는 것 => 아이디 값으로 구분 */

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
