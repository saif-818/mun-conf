import { useState } from 'react';
import { add } from 'date-fns';

import Ticker from './timer_assets/Ticker/Ticker';

import style from './Timer.module.scss';
import './Timer.css'
import Stats from './Stats';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = add(new Date(), {
  days: 18,
  hours: 10,
  minutes: 40
});

function Timer() {
  const [tickerVisible, setTickerVisible] = useState(false);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  const toggleText = tickerVisible ? 'Hide': 'Coming Soon';

  return (
    <div className='timer_section'>
        <div className={ style.pageContainer }>
        <h1>Join Our Event</h1>
        <p>Come check out our great event. It will be lots of fun.</p>
        <Stats />
        { tickerEl }
        <button 
            className={ style.toggleButton } 
            onClick={() => setTickerVisible(prev => !prev) }
        >
            { toggleText }
        </button>
        </div> 
    </div> 
  );
}

export default Timer;