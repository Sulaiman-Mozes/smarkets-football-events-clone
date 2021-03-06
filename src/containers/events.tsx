import React from 'react';
import PopularEvents from '../components/popularEvents';
import EventsTable from '../components/eventsTable';


const Events = () => {

    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-row-reverse">
                <PopularEvents />
                <EventsTable />
            </div>
        </main>
    )
}

export default Events;
