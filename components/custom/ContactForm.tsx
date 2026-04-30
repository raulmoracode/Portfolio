"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Mail, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const maxLength = 200;
  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Name must contain any letter.")
      .max(50, "Name must be 50 characters or fewer.")
      .regex(/^[A-Za-z]+$/, "Name must contain only letters."),
    secondname: z
      .string()
      .min(1, "Name must be at least 2 characters.")
      .max(50, "Name must be 50 characters or fewer.")
      .regex(/^[A-Za-z]+$/, "Name must contain only letters."),
    email: z.email("Invalid email address."),
    textarea: z
      .string()
      .min(2, { message: "Message must be at least 2 characters." })
      .max(maxLength, {
        message: `Message must be ${maxLength} characters or fewer.`,
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      secondname: "",
      email: "",
      textarea: "",
    },
  });

  function onReset() {
    form.reset();
    form.clearErrors();
  }
  const defaultStyle =
    "col-span-12 @5xl:col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start";
  const currentValue = form.watch("textarea");
  const remaining = maxLength - currentValue.length;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("http://localhost:5000/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          secondname: values.secondname,
          email: values.email,
          message: values.textarea,
        }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Correo enviado correctamente 🎉");
        onReset();
      } else {
        console.log("Hubo un error al enviar el correo ❌");
      }
    } catch (error) {
      console.log(error);
      console.log("Hubo un error de conexión ❌");
    }
  }

  return (
    <>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        noValidate
        className="space-y-8 @container"
      >
        <FieldGroup className="grid grid-cols-12 gap-4">
          <Controller
            control={form.control}
            name="name"
            render={({ field }) => (
              <Field className={defaultStyle}>
                <FieldLabel className="flex shrink-0">name</FieldLabel>
                <div className="w-full">
                  <div className="relative w-full">
                    <Input
                      key="text-input-1"
                      aria-invalid={!!form.formState.errors.name}
                      placeholder="Enter your name"
                      type="text"
                      id="text-input-1"
                      required
                      disabled={!!form.formState.isSubmitting}
                      {...field}
                    />
                  </div>

                  <FieldError>
                    {form.formState.errors.secondname?.message}
                  </FieldError>
                </div>
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="secondname"
            render={({ field }) => (
              <Field className={defaultStyle}>
                <FieldLabel className="flex shrink-0">last Name</FieldLabel>

                <div className="w-full">
                  <div className="relative w-full">
                    <Input
                      key="text-input-2"
                      aria-invalid={!!form.formState.errors.secondname}
                      placeholder="Enter your last name"
                      type="text"
                      id="text-input-2"
                      required
                      disabled={!!form.formState.isSubmitting}
                      {...field}
                    />
                  </div>

                  <FieldError>
                    {form.formState.errors.secondname?.message}
                  </FieldError>
                </div>
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <Field className={defaultStyle}>
                <FieldLabel className="flex shrink-0">email</FieldLabel>

                <div className="w-full">
                  <div className="relative w-full">
                    <Input
                      aria-invalid={!!form.formState.errors.email}
                      key="email-input-0"
                      placeholder="Enter your email"
                      type="email"
                      id="email-input-0"
                      required
                      disabled={!!form.formState.isSubmitting}
                      {...field}
                    />
                  </div>
                  <FieldError>
                    {form.formState.errors.email?.message}
                  </FieldError>
                </div>
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="textarea"
            render={({ field }) => (
              <Field className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <div className="flex justify-between w-full">
                  <div>
                    <FieldLabel className="flex shrink-0">message</FieldLabel>
                  </div>
                  <div>
                    <FieldLabel className="flex shrink-0 tabular-nums">
                      {currentValue.length} / {remaining}
                    </FieldLabel>
                  </div>
                </div>
                <div className="w-full">
                  <Textarea
                    key="textarea-0"
                    id="textarea-0"
                    placeholder="Write your message here..."
                    className="resize-none"
                    maxLength={maxLength}
                    minLength={1}
                    disabled={!!form.formState.isSubmitting}
                    required
                    {...field}
                  />
                  <FieldError>
                    {form.formState.errors.textarea?.message}
                  </FieldError>{" "}
                </div>
              </Field>
            )}
          />
        </FieldGroup>
      </form>

      <div className="flex justify-between gap-2 w-full">
        <Button
          className="flex-1 cursor-pointer"
          variant="default"
          disabled={!!form.formState.isSubmitting}
          type="button"
          onClick={() => onReset()}
        >
          <X />
          Reset
        </Button>

        <Button
          className="flex-1 cursor-pointer"
          variant="outline"
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
          disabled={!form.formState.isValid}
        >
          {form.formState.isSubmitting ? <Mail /> : <Check />}
          Send
        </Button>
      </div>
    </>
  );
}
