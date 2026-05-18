import type { Metadata } from "next";
import ContactClient from "./client";
import { Info } from "@/const/page/info";

export const metadata: Metadata = {
  title: Info.Contact.title,
};

export default function ContactPage() {
  return <ContactClient />;
}
