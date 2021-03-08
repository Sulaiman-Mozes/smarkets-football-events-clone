import React, { useEffect, useState } from "react";
import PopularEvents from "../components/popularEvents";
import EventsTable from "../components/eventsTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, getPopularEvents } from "../store/events/actions";
import { RootState } from "../store/reducers";
import SubHeader from "../components/subHeader";

const Events = () => {
  const [type, setType] = useState("");
  const [sport, setSport] = useState("");

  const { allEvents, popularEvents } = useSelector(
    (store: RootState) => store.events
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents(type ? { type } : {}));
  }, [type, dispatch]);

  useEffect(() => {
    dispatch(getPopularEvents(sport ? `sport/${sport}` : ""));
  }, [sport, dispatch]);

  const onSelectType = (value: string): void => {
    setType(value);
  };

  const onSelectSport = (value: string): void => {
    setSport(value);
  };

  return (
    <main>
      <SubHeader onChangeHandler={onSelectType} />
      <div className="lg:max-w-7xl lg:mx-auto py-6 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse">
        <PopularEvents
          onChangeHandler={onSelectSport}
          popularEvents={popularEvents}
          selectedValue={sport}
        />
        <EventsTable allEvents={allEvents} />
      </div>
    </main>
  );
};

export default Events;
