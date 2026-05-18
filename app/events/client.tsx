"use client";

import { staticEvents } from "@/const/page/events";
import PageBase from "@/components/custom/Pagebase";
import { Info } from "@/const/page/info";
import EventCard from "@/components/custom/cards/EventCard";
import ComingSoon from "@/components/custom/ComingSoon";

export default function EventsClient() {
  const now = new Date();
  const upcomingEvents = staticEvents.filter((event) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(23, 59, 59, 999);
    return eventDate >= now;
  });

  return (
    <PageBase
      title={Info.Events.title}
      description={Info.Events.description}
      showThemeToggle={true}
    >
      {upcomingEvents.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              date={event.date}
              meetupUrl={event.meetupUrl}
              lumaUrl={event.lumaUrl}
              eventbriteUrl={event.eventbriteUrl}
              status={event.status}
            />
          ))}
        </div>
      )}
    </PageBase>
  );
}
