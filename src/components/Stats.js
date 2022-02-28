import React from 'react'
import './Stats.css';
const Stats = () => {
  return (
    <div class="stats">
                <div class="stats__item">
                  <p class="stats__num"><span>2</span>days</p>
                  <p class="stats__desc">General &amp; Pro tracks</p>
                </div>
                <div class="stats__item">
                  <p class="stats__num"><span>60+</span>speakers</p>
                  <p class="stats__desc">presenting on advanced topics</p>
                </div>
                <div class="stats__item">
                  <p class="stats__num"><span>20k+</span>devs</p>
                  <p class="stats__desc">tuning in globally</p>
                </div>
    </div>
  )
}

export default Stats;