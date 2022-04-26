import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
