import Section from '../components/Section';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import { education, experience, profile, skills } from '../data/cv';

export default function AboutCV() {
  return (
    <Section id="cv" eyebrow="CV / Profile" title="Built through real sales execution.">
      <p className="max-w-3xl text-lg leading-8 text-white/70">{profile.summary}</p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.45fr_0.85fr]">
        <Timeline items={experience} />
        <aside className="space-y-7">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Skills</h3>
            <div className="mt-5"><Skills skills={skills} /></div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Education</h3>
            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <div key={item.course}>
                  <p className="font-bold text-white">{item.course}</p>
                  <p className="text-sm text-white/60">{item.institute}</p>
                  <p className="text-sm font-semibold text-orange-300">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
