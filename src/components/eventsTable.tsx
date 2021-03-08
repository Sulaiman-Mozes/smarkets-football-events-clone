import React from "react";
import { Link } from "react-router-dom";
import { Event } from "../store/events/types";
import { removeUnderScore } from "../utils/helpers";

interface EventTableProps {
  allEvents: { items: Event[]; isLoading: boolean; error: string };
}

const EventsTable: React.FC<EventTableProps> = ({
  allEvents: { isLoading, items, error },
}) => {
  if (isLoading)
    return (
      <div className="lg:w-3/4 w-full flex flex-col px-4 py-6">Loading ...</div>
    );
  if (error) return <div>An error occured</div>;
  return (
    <div className="lg:w-3/4 w-full flex flex-col px-4 py-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-scroll">
            <table className="divide-y divide-gray-200 overflow-scroll">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Bet Allowed
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.length > 0 ? (
                  items.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/events/${event.id}`}>
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-4 w-4">
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
                                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {event.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {new Date(event.start_date).toDateString()}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 capitalize">
                          {removeUnderScore(event.type)}
                        </div>
                        <div className="text-sm text-gray-500">
                          Inplay Enabled : {event.inplay_enabled ? "Yes" : "No"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {event.state}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.bet_allowed ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div>No events available</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTable;
