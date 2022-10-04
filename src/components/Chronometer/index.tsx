import Button from "../Button";
import Clock from "./Clock";
import style from './Chronometer.module.scss';
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined,
  endTask: () => void
}

export default function Chronometer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  },[selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000)
  }

  return (
    <div className={style.chronometer}>
      <p className={style.title}>Chose a card then start</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Start
      </Button>
    </div>
  )
}