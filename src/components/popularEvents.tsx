import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Event } from "../store/events/types";
import { removeUnderScore } from "../utils/helpers";

interface PopularEventsProps {
  popularEvents: { items: Event[]; isLoading: boolean; error: string };
  onChangeHandler: (value: string) => void;
  selectedValue: string;
}

const sports: string[] = [
  "baseball",
  "basketball",
  "boxing",
  "chess",
  "cricket",
  "cycling",
  "darts",
  "football",
  "golf",
  "handball",
  "motorsports",
  "rugby",
  "snooker",
  "tennis",
  "volleyball",
  "ice-hockey",
];

const PopularEvents: React.FC<PopularEventsProps> = ({
  popularEvents: { items, isLoading, error },
  onChangeHandler,
  selectedValue,
}) => {
  if (isLoading) {
    return (
      <div className="lg:w-1/4 w-full mx-4 my-6 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        Loading ...
      </div>
    );
  }
  if (error) {
    return <div>An error occured</div>;
  }
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
        <select
          id="sport"
          name="sport"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            onChangeHandler(event.target.value);
          }}
          className="ring-indigo-300 border border-gray-300 w-full h-full py-1 pl-2 pr-7 bg-transparent text-gray-500 sm:text-sm rounded-md capitalize"
        >
          <option value="">All</option>
          {sports.map((sport) => (
            <option key={sport} value={sport} className="capitalize">
              {selectedValue}
            </option>
          ))}
        </select>
      </div>
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        {items.length > 0 ? (
          items.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

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
            </Link>
          ))
        ) : (
          <div>No popular events available</div>
        )}
      </div>
    </div>
  );
};

export default PopularEvents;
