import { add } from "date-fns";

import Ticker from "./timer_assets/Ticker/Ticker";

import style from "./Timer.module.scss";
import "./Timer.css";
import Stats from "./Stats";

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
var countDownDate = new Date("Apr 30, 2022 10:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const futureDate = add(new Date(), {
  days: days,
  hours: hours,
  minutes: minutes,
  seconds: seconds,
});

function Timer() {
  // const [tickerVisible, setTickerVisible] = useState(true);
  // const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  // const toggleText = tickerVisible ? 'Hide': 'Coming Soon';

  return (
    <div className="timer_section">
      <div className={style.pageContainer}>
        <h1>Join Our Event</h1>
        <p>Come check out our great event. It will be lots of fun.</p>
        <Stats />
        {/* { tickerEl }
        <button 
            className={ style.toggleButton } 
            onClick={() => setTickerVisible(prev => !prev) }
        >
            { toggleText }
        </button> */}
        <div>
          <Ticker futureDate={futureDate} />
        </div>
      </div>
    </div>
  );
}

export default Timer;
