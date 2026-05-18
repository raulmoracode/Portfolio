import type { Metadata } from "next";
import EventsClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Events.title,
};

export default function EventsPage() {
  return <EventsClient />;
}
