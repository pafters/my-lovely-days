import moment from "moment/moment";
import 'moment-precise-range-plugin';

import { useEffect, useState } from "react";
import LoveFooter from "../../components/footer/LoveFooter";
import './main.css'


export default function MainScreen() {

    const starts = moment('2023-12-23 21:00:00');
    const [dateNow, updateDateNow] = useState(moment());

    const [diff, updateDiff] = useState(moment.preciseDiff(starts, dateNow, true));

    useEffect(() => {
        const dateUpdater = setTimeout(() => {
            let now = updateDateNow(moment());
            updateDateNow(now);
            updateDiff(moment.preciseDiff(starts, dateNow, true));
        }, 1000);

        return () => {
            clearTimeout(dateUpdater);
        }
    }, [diff]);


    return (
        <div>
            <div>
                <p className="main-message">Времени вместе</p>
                <div>
                    <p className="date date-notice">Лет/Месяцев/Дней</p>
                    <p className="date date-first-row" >{diff.years}/{diff.months}/{diff.days}</p>
                    <p className="date date-second-row" >{diff.hours}:{diff.minutes}:{diff.seconds}</p>
                </div>
            </div>
            <div>
                <LoveFooter />
            </div>

        </div >
    )
}
