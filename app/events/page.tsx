import type { Metadata } from "next";
import EventsClient from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Events.href,
  description: MainLinks.Events.description,
};

export default function EventsPage() {
  return <EventsClient />;
}
