import React from 'react';
import { removeUnderScore } from '../utils';

const eventTypes = [
    'american_football_match', 'american_football_outright', 'baseball_match', 'baseball_outright', 'basketball_esports_match', 'basketball_match', 'boxing_match', 'call_of_duty_match', 'cricket_match', 'cricket_outright', 'csgo_match', 'current_affairs', 'cycling', 'darts_match', 'darts_outright', 'dota_2_match', 'football_esports_match', 'football_match', 'football_outright', 'golf_match', 'golf_outright', 'greyhound_racing_race', 'handball_match', 'horse_racing_race', 'ice_hockey_match', 'league_of_legends_match', 'mma_match', 'motorsports_race', 'motorsports_outright', 'politics', 'politics_outright', 'rowing', 'rugby_league_match', 'rugby_league_outright', 'rugby_union_match', 'rugby_union_outright', 'sailing_race', 'sailing_outright', 'snooker_match', 'snooker_outright', 'table_tennis_match', 'table_tennis_outright', 'tennis_match', 'tennis_outright', 'volleyball_match', 'generic', 'top_level_event', 'tv_entertainment'
]

const SubHeader = () => (
    <header className="bg-gray-200 shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 className="text-xl uppercase font-bold text-gray-500">
        Events
      </h1>

      <div className="inset-y-0 right-0 flex items-center justify-between">
        <label htmlFor="currency" className="text-sm uppercase font-bold text-gray-500 mx-4">Type</label>
        <select id="currency" name="currency" className="ring-indigo-300 border-gray-300 h-full py-1 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-md">
            <option value="">All</option>
            {eventTypes.map(eventType => (<option value={eventType} className="capitalize">{removeUnderScore(eventType)}</option>))}
        </select>
        </div>
    </div>
  </header>
)

export default SubHeader;
