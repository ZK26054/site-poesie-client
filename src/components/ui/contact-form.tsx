import { contactInfo } from "@/lib/mock-data";

export function ContactForm() {
  return (
    <form className="grid gap-5 border border-[#322a24] bg-[#15110f] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-[#d8cdbc]">
          Nom
          <input
            className="h-12 border border-[#3d332b] bg-[#0d0b0a] px-4 text-[#fff8ea] outline-none focus:border-[#c7a46c]"
            name="name"
            placeholder="Votre nom"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm text-[#d8cdbc]">
          Email
          <input
            className="h-12 border border-[#3d332b] bg-[#0d0b0a] px-4 text-[#fff8ea] outline-none focus:border-[#c7a46c]"
            name="email"
            placeholder="vous@example.com"
            type="email"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-[#d8cdbc]">
        Sujet
        <select
          className="h-12 border border-[#3d332b] bg-[#0d0b0a] px-4 text-[#fff8ea] outline-none focus:border-[#c7a46c]"
          name="reason"
        >
          {contactInfo.reasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-[#d8cdbc]">
        Message
        <textarea
          className="min-h-40 border border-[#3d332b] bg-[#0d0b0a] p-4 text-[#fff8ea] outline-none focus:border-[#c7a46c]"
          name="message"
          placeholder="Quelques lignes sur votre invitation ou votre projet."
        />
      </label>
      <button
        className="h-12 border border-[#c7a46c] bg-[#c7a46c] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#120f0d]"
        type="button"
      >
        Message pret pour le prochain sprint
      </button>
      <p className="text-xs leading-6 text-[#8f806f]">
        Formulaire non connecte: aucun message n&apos;est envoye pour le moment.
      </p>
    </form>
  );
}
