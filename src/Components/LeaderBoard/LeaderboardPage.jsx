import React, { useState, useEffect } from "react";
import "../../css/leaderboard.css";
import { Link } from "react-router-dom";
import start_btn from "../../Assets/start.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { getLeaderboardData } from "../../services/API";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "transparent"
  },
});

const LeaderboardPage = (props) => {
  const classes = useStyles();
  const name = props.location.state.name
  const score = props.location.state.score
  const level = props.location.state.level
  
  const [topTen, setTopTen] = useState([]);
  const [maxScore, setMaxScore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const [maxLevel, setmaxLevel] = useState(0);

  const fetchItems = () => {
    getLeaderboardData()
      .then((res) => {
        console.log(res.data.data);
        setTopTen(res.data.data["top_ten"]);
        setAvgScore(res.data.data["average_score"]);
        setTotalGames(res.data.data["number_of_games_played"]);
        setMaxScore(res.data.data["top_score"]);
        setmaxLevel(res.data.data["max_level"]);

      })
      .catch((err) => {});
  };
  useEffect(fetchItems, []);

  return (
    <div className="leaderboard-outer">
      <div className="leaderboard-inner">
        <div className="heading">Stats</div>
        <div className="player-data">
          <div className="name">Name: {name}</div>
          <div className="level">Level: {level}</div>
          <div className="score">Score: {score}</div>
          <div className="heading">Leaderboard</div>
          
          <div className = "top-table">
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topTen.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{new Date(row.created_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
          <div className = "leaderboard-stats">
          <div className = "stat-heading">Total Games Played: {totalGames}</div>
          <div className = "stat-heading">Average Score: {avgScore}</div>
          <div className = "stat-heading">Max Level Reached: {maxLevel}</div>
          <div className = "stat-heading">Top Score: {maxScore}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaderboardPage;
