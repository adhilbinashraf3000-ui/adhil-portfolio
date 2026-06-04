import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl backdrop-blur md:p-12">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-black" aria-hidden="true">
        <Mail size={24} />
      </div>
      <p className="mx-auto max-w-2xl text-lg leading-8 text-white/75">
        Open to sales, business development, EdTech growth, admissions, campaign execution, and branding-related opportunities.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="mailto:adhilbinashraf3000@gmail.com" className="rounded-full bg-orange-500 px-7 py-3 font-bold text-black transition hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300">Email Me</a>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-white/75"><MapPin size={18} /> Abu Dhabi, UAE</span>
      </div>
    </div>
  );
}
