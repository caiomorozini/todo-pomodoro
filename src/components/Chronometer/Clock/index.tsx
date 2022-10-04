import style from './Clock.module.scss';

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minTen, minUnit] = String(minutes).padStart(2, '0').split('');
  const [secTen, secUnit] = String(seconds).padStart(2, '0').split('');
  return (
    <>
      <span className={style.clockNumber}>{minTen}</span>
      <span className={style.clockNumber}>{minUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secTen}</span>
      <span className={style.clockNumber}>{secUnit}</span>
    </>
  )
}