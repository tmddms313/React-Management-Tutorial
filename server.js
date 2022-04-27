const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*고객 정보 불러오는 코드 */

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
