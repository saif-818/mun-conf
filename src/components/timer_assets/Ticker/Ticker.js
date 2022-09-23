import React from 'react';
import TickerCell from '../TickerCell/TickerCell';
import TickerSeparator from '../TickerSeparator/TickerSeparator';
import useTicker from '../../timer_hooks/UseTicker';

import style from './Ticker.module.scss';

const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className={ style.timeIsUp }>Time is up!!!</div>
    ) : (
        <>
            <TickerCell value={days} label="Days" />
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" />
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" />
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" />
        </>
    );

    return (
        <div className={ style.tickerShell }>
            { tickerContents }           
        </div>              
    );
}
export default Ticker;