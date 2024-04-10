import React from "react";
import { UserEventCard } from "./UserEventCard";

export const UserEventList = ({ userEvents }) => {
  return (
    <div>
      {userEvents.map((event) => (
        <UserEventCard
          key={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
        />
      ))}
    </div>
  );
};
