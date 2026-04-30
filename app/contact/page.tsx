import type { Metadata } from "next";
import ContactClient from "./client";
import { MainLinks } from "@/const/config/pages";

export const metadata: Metadata = {
  title: MainLinks.Contact.href,
  description: MainLinks.Contact.description,
};

export default function ContactPage() {
  return <ContactClient />;
}
