import React, {useEffect, useState, useRef} from 'react';
import styles from "./index.css";


const Chronometer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval: any = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('May 3 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days: any = Math.floor(distance / (1000 * 60 * 60 *24));
            const hours: any = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
            const minutes: any = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds: any = Math.floor((distance % (1000 * 60 ))/ 1000);

            if(distance < 0){
                //stp our timer
                clearInterval(interval.current);
            }else
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);

        },1000)
    };

    //componentDidMount
    useEffect(() =>{
        startTimer();
        return() =>{
            clearInterval(interval.current);
        }
    })


    return(
        <section className={`${styles.timerContainer}`}>
            <section className={`${styles.timer}`}>
                <div>
                    <span className="mdi mdi-calendar-clock timer-icon"></span>
                </div>
                <div>
                    <section>
                        <p className={`${styles.delineado}`}>{timerDays}</p>
                        <span>Días</span>
                    </section>
                    <span>:</span>
                    <section>
                        <p className={`${styles.delineado}`}>{timerHours}</p>
                        <span>Horas</span>
                    </section>
                    <span>:</span>
                    <section>
                        <p className={`${styles.delineado}`}>{timerMinutes}</p>
                       <span>Minutos</span>
                    </section>
                    <span>:</span>
                    <section>
                        <p className={`${styles.delineado}`}>{timerSeconds}</p>
                        <span>Segundos</span>
                    </section>
                </div>
            </section>
        </section>
    )

}
  
  export default Chronometer;
  