import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss";

export default function Chronometer() {
    return (
        <div className={style.chronometer}>
            <p className={style.title}> Choose a card and start the chronometer</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
        <Button text="Start"/>
        </div>

    )
}