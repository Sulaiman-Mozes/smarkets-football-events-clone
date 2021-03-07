import React, { ChangeEvent } from 'react';
import { Event} from '../store/events/types';
import { removeUnderScore } from '../utils/helpers';

interface PopularEventsProps {
  popularEvents: Event[]
  onChangeHandler: (value:string) => void
}


const sports: string[] = ['baseball', 'basketball', 'boxing', 'chess', 'cricket', 'cycling', 'darts', 'football', 'golf', 'handball', 'motorsports', 'rugby', 'snooker', 'tennis', 'volleyball', 'ice-hockey']

const PopularEvents: React.FC<PopularEventsProps> = ({ popularEvents, onChangeHandler }) => {

    return (
        <div className="lg:w-1/4 w-full mx-4 my-6 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <header className="bg-gray-200 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
              <h1 className="text-sm uppercase font-bold text-gray-600">
                Popular events
              </h1>
            </div>
          </header>
          <div className="inset-y-0 right-0">
            <select id="sport" name="sport" onChange={(event: ChangeEvent<HTMLSelectElement>) => {onChangeHandler(event.target.value)}} className="ring-indigo-300 border border-gray-300 w-full h-full py-1 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-md capitalize">
                <option value="">All</option>
                {sports.map(sport => (<option key={sport} value={sport} className="capitalize">{sport}</option>))}
            </select>
        </div>
        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

          {
            popularEvents.map((event) => (
                  <a key={event.id} href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                        {event.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 capitalize">
                      {event.state}
                    </p>
                    <p className="mt-1 text-sm text-gray-700 capitalize">
                      {removeUnderScore(event.type)}
                    </p>
                  </div>
                </a>
                ))
          }

          </div>
      </div>
    )
}

export default PopularEvents;
