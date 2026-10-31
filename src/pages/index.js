import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import {
  RiArrowRightUpLine, RiDownloadLine, RiGithubFill, RiLinkedinBoxFill, RiMailLine,
  RiMapPin2Line, RiQuillPenLine, RiRobotLine, RiServerLine, RiAwardLine, RiGraduationCapLine,
} from 'react-icons/ri';
import cv from '../assets/files/Software_Engineer_Resume.pdf';

/* ---------- Content (from the 2026 resume) ---------- */

const stats = [
  { value: '6+ yrs', label: 'building at Microsoft' },
  { value: 'Weeks → days', label: 'test-cycle time cut' },
  { value: '~10', label: 'vendor engineers led' },
  { value: '25+', label: 'self-hosted services' },
];

const microsoftRoles = [
  { title: 'Software Engineer II', dates: '2023 – Present' },
  { title: 'Software Engineer', dates: '2020 – 2023' },
  { title: 'Software Engineering Intern', dates: '2019' },
];

const aiWork = [
  {
    title: 'Project-health agent for leadership',
    text: "Reads other teams' backlogs and tells leadership whether projects are on track.",
    tech: ['Agent Framework', 'AI Foundry', 'Azure DevOps MCP', 'Evals'],
  },
  {
    title: 'Vision agent for damage grading',
    text: 'Grades pallet and carton damage from photos and recommends next steps. Owned the prompt workflow, evals and UI.',
    tech: ['Vision models', 'Prompt workflow', 'Evals', 'UI'],
  },
];

const platformWork = [
  <>Designed <b>high-scale .NET / Azure APIs</b> for supply planning, device repair and warranty; helped move workloads to AKS.</>,
  <>Led <b>~10 vendor engineers</b> to ship a test platform that cut test cycles <b>from weeks to days</b>.</>,
  <>Built shared telemetry and resilience libraries that kept services up during downstream outages.</>,
  <>Led a rules engine that automates startup application reviews for Microsoft for Startups.</>,
];

const projects = [
  {
    icon: RiServerLine,
    title: 'Home server',
    href: 'https://github.com/mavsankar/HomeServer',
    linkText: 'github.com/mavsankar/HomeServer',
    text: '25+ self-hosted services with Docker, GitOps CI/CD, monitoring and local LLMs. Built and run with Claude Code.',
    tags: ['Docker', 'GitOps', 'Monitoring', 'Local LLMs'],
  },
  {
    icon: RiQuillPenLine,
    title: 'Blog',
    href: 'https://blog.mavsankar.com',
    linkText: 'blog.mavsankar.com',
    text: "I write about whatever I'm working on and want to share, such as AI agents, Azure OpenAI and a 7-part homelab series.",
    tags: ['AI agents', 'Azure OpenAI', 'Homelab'],
  },
];

const skills = [
  { group: 'AI & Agents', items: ['Azure AI Foundry', 'MCP servers', 'Agent Framework', 'Evals'] },
  { group: 'AI Dev Tools', items: ['Claude Code', 'GitHub Copilot'] },
  { group: 'Languages', items: ['C# / .NET', 'Python', 'JavaScript', 'SQL', 'C++'] },
  { group: 'Cloud & Infra', items: ['Azure', 'AKS / Kubernetes', 'Docker', 'Azure DevOps', 'CI/CD'] },
];

const education = [
  { degree: 'M.Tech, Cyber Security', school: 'BITS Pilani', meta: '2023 – 2024 · CGPA 9.15' },
  { degree: 'B.Tech (Honours)', school: 'IIITDM Kancheepuram', meta: '2016 – 2020 · CGPA 9.24' },
];

const recognition = [
  { title: 'Special Stock Award', meta: 'Microsoft · 2024' },
  { title: 'GATE 2021', meta: 'All India Rank 613' },
  { title: 'ACM-ICPC Regionals', meta: 'Competed 2 years' },
  { title: 'Technical Advisor', meta: 'FSRTI · volunteer' },
];

const publications = [
  {
    title: 'A Robust Machine Learning Framework for Predicting Slag Eye Formation in Industrial Steelmaking Ladles',
    venue: 'Metallurgical and Materials Transactions B',
    year: '2025',
    doi: 'https://doi.org/10.1007/s11663-025-03670-0',
  },
  {
    title: 'Prediction of Adverse Drug Reactions Using Drug Convolutional Neural Networks',
    venue: 'Journal of Bioinformatics and Computational Biology',
    year: '2021',
    doi: 'https://doi.org/10.1142/S0219720020500468',
  },
];

/* ---------- Small building blocks ---------- */

const SectionHeading = ({ index, title, subtitle }) => (
  <div className="mb-8">
    <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
      {index} · {title}
    </p>
    {subtitle && <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">{subtitle}</h2>}
  </div>
);

const Tags = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((t) => <span key={t} className="tag">{t}</span>)}
  </div>
);

const ExtLink = ({ href, children, className = '' }) => (
  <a href={href} target="_blank" rel="noreferrer" className={`group inline-flex items-center gap-0.5 font-medium text-blue-600 hover:underline dark:text-blue-400 ${className}`}>
    {children}
    <RiArrowRightUpLine className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

/* ---------- Page ---------- */

const IndexPage = () => {
  return (
    <>
      {/* Hero */}
      <section id="about" className="relative py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="order-2 md:order-1">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
              <RiMapPin2Line /> Hyderabad, India · Remote
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Hi, I'm Sankar.
            </h1>
            <p className="mt-3 text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
              Software Engineer II · AI Agents &amp; Cloud Backend
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              I've spent 6+ years at Microsoft building high-scale .NET and Azure services. These days I build
              AI agents end to end: tools, MCP integrations, evals and UI. I work AI-first with GitHub Copilot
              and Claude Code.
            </p>
            <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
              Outside work you'll find me tinkering with my homelab, playing chess or watching anime.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={cv} target="_blank" rel="noreferrer" className="btn-primary">
                <RiDownloadLine size={18} /> Resume
              </a>
              <a href="mailto:mavsankar@gmail.com" className="btn-ghost">
                <RiMailLine size={18} /> Get in touch
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a href="https://www.linkedin.com/in/mavsankar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                  <RiLinkedinBoxFill size={24} />
                </a>
                <a href="https://github.com/mavsankar" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                  <RiGithubFill size={24} />
                </a>
                <a href="https://blog.mavsankar.com" target="_blank" rel="noreferrer" aria-label="Blog" className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                  <RiQuillPenLine size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 mx-auto md:order-2">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-full bg-gradient-to-br from-amber-300 to-blue-400 opacity-60 blur-xl" />
              <StaticImage
                src="../images/avatar.png"
                alt="Illustrated portrait of Sankar"
                width={256}
                height={256}
                placeholder="none"
                loading="eager"
                className="h-44 w-44 rounded-full ring-4 ring-white dark:ring-slate-900 sm:h-56 sm:w-56 md:h-64 md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-5 dark:bg-slate-950">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 sm:py-16">
        <SectionHeading index="01" title="Experience" subtitle="Where I've worked" />

        <article className="card">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Microsoft</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">2019 – Present · Hyderabad</p>
          </div>

          <ol className="mt-4 flex flex-wrap gap-2">
            {microsoftRoles.map((r, i) => (
              <li key={r.title} className={`rounded-full px-3 py-1 text-xs font-medium ${i === 0 ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950' : 'border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300'}`}>
                {r.title} <span className="opacity-70">· {r.dates}</span>
              </li>
            ))}
          </ol>

          <h4 className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <RiRobotLine className="text-blue-600 dark:text-blue-400" size={18} /> AI agents
          </h4>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {aiWork.map((w) => (
              <div key={w.title} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                <p className="font-semibold text-slate-900 dark:text-white">{w.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">{w.text}</p>
                <div className="mt-3"><Tags items={w.tech} /></div>
              </div>
            ))}
          </div>

          <h4 className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <RiServerLine className="text-blue-600 dark:text-blue-400" size={18} /> Platform &amp; backend
          </h4>
          <ul className="mt-3 space-y-2.5">
            {platformWork.map((item, i) => (
              <li key={i} className="relative pl-5 leading-7 text-slate-600 dark:text-slate-300 [&_b]:font-semibold [&_b]:text-slate-900 dark:[&_b]:text-white">
                <span aria-hidden="true" className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="card mt-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Datafoundry.ai</h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Research Intern</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">2019 – 2020 · Chennai</p>
          </div>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Built CNN models to predict adverse drug reactions; published in a peer-reviewed journal.
          </p>
        </article>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 sm:py-16">
        <SectionHeading index="02" title="Projects & Writing" subtitle="Things I build and write on the side" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="card card-hover group block">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <p.icon size={22} />
                </span>
                <RiArrowRightUpLine size={20} className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{p.linkText}</p>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{p.text}</p>
              <div className="mt-4"><Tags items={p.tags} /></div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 sm:py-16">
        <SectionHeading index="03" title="Skills" subtitle="Tools I reach for" />
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-100">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & recognition */}
      <section id="education" className="py-12 sm:py-16">
        <SectionHeading index="04" title="Education & Recognition" subtitle="Background" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <RiGraduationCapLine className="text-blue-600 dark:text-blue-400" size={20} /> Education
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-semibold text-slate-900 dark:text-white">{e.degree}</p>
                  <p className="text-slate-600 dark:text-slate-300">{e.school}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{e.meta}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <RiAwardLine className="text-blue-600 dark:text-blue-400" size={20} /> Recognition
            </h3>
            <ul className="space-y-3">
              {recognition.map((r) => (
                <li key={r.title} className="border-l-2 border-blue-600 pl-3 dark:border-blue-400">
                  <p className="font-medium text-slate-900 dark:text-white">{r.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{r.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-12 sm:py-16">
        <SectionHeading index="05" title="Publications" subtitle="Research" />
        <ul className="space-y-4">
          {publications.map((p) => (
            <li key={p.title} className="card flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <span className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">{p.year}</span>
              <div className="flex-1">
                <p className="font-semibold leading-snug text-slate-900 dark:text-white">{p.title}</p>
                <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">{p.venue}</p>
              </div>
              <ExtLink href={p.doi} className="text-sm">DOI</ExtLink>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 px-6 py-12 text-center text-white shadow-lg sm:px-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-white/10" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/10" />
          <p className="font-mono text-xs uppercase tracking-widest text-blue-100">06 · Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let's talk.</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-50">
            Want to chat about AI agents, cloud backends or homelabs? My inbox is open.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:mavsankar@gmail.com" className="btn bg-white text-blue-700 hover:bg-blue-50">
              <RiMailLine size={18} /> mavsankar@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mavsankar" target="_blank" rel="noreferrer" className="btn border border-white/40 text-white hover:bg-white/10">
              <RiLinkedinBoxFill size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export const Head = () => <Seo />

export default IndexPage
