"use client";
import { Controller, useForm } from "react-hook-form";
export default function ContactForm() {
  const methods = useForm({
    defaultValues: {
      name: "",
      senderEmail: "",
      message: "",
    },
  });
  const { control, handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 pt-6">
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <input
            className="border border-gray-100 rounded-lg py-2 px-2 outline-none text-white"
            type="text"
            value={field.value}
            onChange={field.onChange}
            placeholder="Nombre"
          />
        )}
      />
      <Controller
        control={control}
        name="senderEmail"
        render={({ field }) => (
          <input
            value={field.value}
            onChange={field.onChange}
            className="border border-gray-100 rounded-lg py-2 px-2 outline-none text-white"
            type="text"
            placeholder="Tu email"
          />
        )}
      />
      <Controller
        control={control}
        name="message"
        render={({ field }) => (
          <textarea
            value={field.value}
            onChange={field.onChange}
            placeholder="Tu mensaje"
            className="border border-gray-100 rounded-lg py-2 px-2 outline-none text-white"
          />
        )}
      />
      <button className="px-4 py-3 rounded-lg min-w-[140px] bg-cyan-500 text-white cursor-pointer font-semibold hover:bg-cyan-600 transition-all duration-200 ">
        Enviar mensaje
      </button>
    </form>
  );
}
