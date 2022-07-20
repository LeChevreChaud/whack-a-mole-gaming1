import React, { useEffect } from "react";
import { Button } from "../../components/button/Button";
import Typography from "@mui/material/Typography";
import { List } from "../../components/list/List";
import { selectScore, startGameAsync } from "../game/GameSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPlayerName } from "../player/PlayerSlice";
import "./Leaderboard.scss";
import {
  addPlayerToLeaderboardAsync,
  selectLeaderboard,
} from "./LeaderboardSlice";
import { Player } from "../player/Player.models";

export const Leaderboard = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore);
  const name = useAppSelector(selectPlayerName);
  const players = useAppSelector(selectLeaderboard);

  useEffect(() => {
    if (name && score) {
      const currentPlayer: Player = {
        name: name,
        score: score,
      };
      dispatch(addPlayerToLeaderboardAsync(currentPlayer));
    }
  }, [name, score]);

  const onRestart = () => {
    dispatch(startGameAsync());
  };
  return (
    <div className="wam-leaderboard-container">
      <Typography variant="h4">Leaderboard</Typography>
      <Typography variant="h6">Your score : {score}</Typography>
      <List
        items={
          players && players.length > 9
            ? players.map((x) => ({
                primaryText: x.name,
                secondaryText: x.score.toString(),
              }))
            : []
        }
      />
      <Button label="ReStart" onClick={onRestart} />
    </div>
  );
};
