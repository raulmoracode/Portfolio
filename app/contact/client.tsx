"use client";

import PageBase from "@/components/custom/PageBase";
import { Info } from "@/const/page/info";
import ContactForm from "@/components/custom/ContactForm";

export default function ContactClient() {
  return (
    <PageBase
      title={Info.Contact.title}
      description={Info.Contact.description}
      showThemeToggle={true}
    >
      <div className="grid grid-cols-1 gap-4">
        <ContactForm />
      </div>
    </PageBase>
  );
}
