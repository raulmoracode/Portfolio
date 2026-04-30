"use client";

import PageBase from "@/components/custom/Pagebase";
import { MainLinks } from "@/const/config/pages";
import ContactForm from "@/components/custom/ContactForm";

export default function ContactClient() {
  return (
    <PageBase
      title={MainLinks.Contact.title}
      description={MainLinks.Contact.description}
      showThemeToggle={true}
    >
      <div className="grid grid-cols-1 gap-4">
        <ContactForm />
      </div>
    </PageBase>
  );
}
