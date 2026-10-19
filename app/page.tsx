
"use client";

import { useState } from "react";

const PROFILE_PHOTO = "/images/daffa-profile.jpg";
const ABOUT_PHOTO = "/images/about.jpg";
const EXPERIENCE_PHOTO = "/images/experience.jpg";

const projects = [
  {
    number: "01",
    slug: "custom-operating-system",
    category: "Operating Systems · Collaboration",
    title: "Custom Operating System",
    description:
      "A planned collaborative project to explore operating system development and customization with a friend.",
    tags: ["Operating Systems", "System Development", "Collaboration"],
    status: "Planned",
  },
  {
    number: "02",
    slug: "enterprise-network-design",
    category: "Networking · Cisco",
    title: "Enterprise Network Design",
    description:
      "An academic networking project using Cisco Packet Tracer, covering VLAN configuration, IP addressing, routing, and network services.",
    tags: ["Cisco Packet Tracer", "VLAN", "Routing"],
    status: "Academic Project",
  },
  {
    number: "03",
    slug: "personal-portfolio",
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A personal website built to document my background, technical interests, projects, and ongoing learning journey.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "IT Support & Networking",
    skills: [
      "Network Troubleshooting",
      "IP Addressing",
      "VLAN Fundamentals",
      "Cisco Packet Tracer",
      "Hardware Inspection",
      "Software Installation",
      "Printer Troubleshooting",
    ],
  },
  {
    number: "02",
    title: "Development",
    skills: [
      "Java",
      "Python Fundamentals",
      "HTML & CSS",
      "JavaScript Fundamentals",
      "Next.js",
      "TypeScript Fundamentals",
    ],
  },
  {
    number: "03",
    title: "Working Skills",
    skills: [
      "Event Coordination",
      "Team Communication",
      "Task Organization",
      "Problem-Solving",
    ],
  },
];

function PhotoFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative isolate overflow-hidden bg-[#DDD6C6] ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          onError={() => setFailed(true)}
          className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#DDD6C6] p-6 text-center">
          <span className="text-3xl text-[#73784F]">✳</span>
          <p className="text-sm font-medium text-[#292C27]">
            Photo not found
          </p>
          <p className="max-w-xs break-all text-xs leading-5 text-[#68695C]">
            Check that this file exists: {src}
          </p>
        </div>
      )}
    </div>
  );
}

function ProfileAvatar() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#73784F]/30 bg-[#DDD6C6] text-xs font-semibold tracking-wide text-[#73784F]">
      {failed ? (
        <span>DA</span>
      ) : (
        <img
          src={PROFILE_PHOTO}
          alt="Daffa Arkhabista"
          loading="eager"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEE9DE] text-[#292C27] selection:bg-[#73784F] selection:text-[#F3EFE5]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 88px;
        }

        body {
          background: #eee9de;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#292C27]/10 bg-[#EEE9DE]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <ProfileAvatar />
            <span className="text-sm font-semibold tracking-wide">
              Daffa Arkhabista
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#68695C] transition-colors duration-300 hover:text-[#73784F]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#73784F] px-5 py-2.5 text-sm font-medium text-[#F3EFE5] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5F6440] sm:inline-flex"
          >
            Contact me <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#292C27]/15 text-xl transition-colors hover:bg-[#E5DFD2] md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-[#292C27]/10 px-5 py-4 md:hidden">
            {[...navLinks, ["Contact", "#contact"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-[#68695C] transition-colors hover:bg-[#E5DFD2] hover:text-[#292C27]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-32"
      >
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#73784F]" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
                Information Systems Student
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
              Learning,
              <br />
              building, and
              <br />
              <span className="font-serif italic text-[#73784F]">
                finding my way.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#68695C] sm:text-lg">
              Hello, I&apos;m Daffa Arkhabista, an Information Systems
              student at Universitas Mulawarman with an interest in IT
              support, computer networking, and web development.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#73784F] px-6 py-3.5 text-sm font-medium text-[#F3EFE5] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5F6440]"
              >
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#68695C] transition-colors hover:text-[#292C27]"
              >
                Get to know me <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="border-l border-[#292C27]/15 pl-6 lg:mb-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#73784F]">
              Currently
            </p>
            <p className="mt-3 text-lg font-medium">
              Undergraduate Student
            </p>
            <p className="mt-1 text-sm leading-6 text-[#68695C]">
              Universitas Mulawarman
              <br />
              Information Systems · Semester 5
            </p>
            <div className="mt-6 h-px w-full bg-[#292C27]/15" />
            <p className="mt-5 text-sm leading-7 text-[#68695C]">
              Interested in practical technology, continuous learning, and
              solving problems one step at a time.
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 border-t border-[#292C27]/15 pt-5">
          <span className="text-xs uppercase tracking-[0.18em] text-[#73784F]">
            Scroll to explore
          </span>
          <span className="h-px w-12 bg-[#73784F]/60" />
          <span className="text-xs text-[#68695C]">
            About · Experience · Projects
          </span>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="border-y border-[#292C27]/10 bg-[#E5DFD2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <PhotoFrame
              src={ABOUT_PHOTO}
              alt="Daffa Arkhabista — About Me"
              className="aspect-[3/4] w-full"
            />
            <div className="absolute -bottom-5 -right-3 z-20 bg-[#73784F] px-5 py-4 text-[#F3EFE5] sm:-right-5">
              <p className="text-xs uppercase tracking-[0.16em]">
                A work in progress
              </p>
            </div>
          </div>

          <div className="pt-2 lg:py-6">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
              A little about me
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Hello, my name is Daffa.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[#68695C]">
              <p>
                I&apos;m an Information Systems student at Universitas
                Mulawarman. My interest in technology started with computers
                and networking, and it continues to grow as I explore
                software development and information systems.
              </p>
              <p>
                Before university, I studied Computer and Network Engineering
                at SMKN 4 Penajam Paser Utara. That experience gave me an
                introduction to computer hardware, troubleshooting, and
                network fundamentals.
              </p>
              <p>
                I enjoy learning through hands-on practice. I&apos;m currently
                developing my technical skills, working on academic projects,
                and exploring how technology can solve real problems.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#292C27]/15 pt-6">
              <div>
                <p className="text-2xl font-medium tracking-tight">IT</p>
                <p className="mt-1 text-sm text-[#68695C]">
                  Support & Networking
                </p>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight">Web</p>
                <p className="mt-1 text-sm text-[#68695C]">
                  Development Journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
              Where I&apos;ve learned
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Experience
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#68695C]">
            Practical experiences that have helped me understand technology,
            teamwork, and day-to-day problem-solving.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <PhotoFrame
              src={EXPERIENCE_PHOTO}
              alt="Daffa Arkhabista during IT support experience"
              className="aspect-[16/10] w-full"
            />
            <p className="mt-3 text-xs leading-6 text-[#68695C]">
              Hands-on learning through technical tasks and collaboration.
            </p>
          </div>

          <div className="divide-y divide-[#292C27]/15">
            <article className="py-6 first:pt-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#73784F]">
                    IT Support
                  </p>
                  <h3 className="mt-2 text-xl font-medium">PT Petrosa</h3>
                  <p className="mt-1 text-sm text-[#68695C]">
                    Balikpapan, East Kalimantan
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-[#292C27]/15 px-3 py-1.5 text-xs text-[#68695C]">
                  Technical
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#68695C]">
                Gained practical exposure to IT support tasks, including
                network checks, troubleshooting, and assisting with
                day-to-day technical needs.
              </p>
            </article>

            <article className="py-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#73784F]">
                Computer Maintenance
              </p>
              <h3 className="mt-2 text-xl font-medium">
                Computer Repair Shop
              </h3>
              <p className="mt-1 text-sm text-[#68695C]">
                Hardware and software support
              </p>
              <p className="mt-4 text-sm leading-7 text-[#68695C]">
                Gained practical experience with computer and laptop
                troubleshooting, printer issues, hardware inspection, and
                software installation.
              </p>
            </article>

            <article className="py-6">
              <p className="text-xs uppercase tracking-[0.15em] text-[#73784F]">
                Organization
              </p>
              <h3 className="mt-2 text-xl font-medium">
                Event Coordinator · INFORSA 2026
              </h3>
              <p className="mt-1 text-sm text-[#68695C]">
                Information Systems student organization
              </p>
              <p className="mt-4 text-sm leading-7 text-[#68695C]">
                Coordinated event preparation and activities, helped organize
                tasks, and worked with committee members to support event
                execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-[#34372F] text-[#F3EFE5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#C1C5A1]">
              Academic background
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Education
            </h2>
          </div>

          <div className="grid gap-0 md:grid-cols-2 md:gap-12">
            <article className="border-t border-[#F3EFE5]/20 py-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[#C1C5A1]">
                Undergraduate · Current
              </p>
              <h3 className="mt-4 text-2xl font-medium">
                Universitas Mulawarman
              </h3>
              <p className="mt-2 text-sm text-[#D0CDBF]">
                Information Systems
              </p>
              <p className="mt-5 text-sm leading-7 text-[#D0CDBF]">
                Faculty of Engineering
                <br />
                Currently in semester 5.
              </p>
            </article>

            <article className="border-t border-[#F3EFE5]/20 py-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[#C1C5A1]">
                Vocational Education
              </p>
              <h3 className="mt-4 text-2xl font-medium">
                SMKN 4 Penajam Paser Utara
              </h3>
              <p className="mt-2 text-sm text-[#D0CDBF]">
                Computer and Network Engineering
              </p>
              <p className="mt-5 text-sm leading-7 text-[#D0CDBF]">
                Built foundational knowledge of computer hardware,
                networking, and technical troubleshooting.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
              Selected work
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#68695C]">
            Academic work, personal projects, and ideas I&apos;m exploring
            as I continue developing my skills.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`View details for ${project.title}`}
              className="group flex min-h-[370px] flex-col border border-[#292C27]/15 bg-[#F3EFE5] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#73784F]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#73784F] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.16em] text-[#73784F]">
                  PROJECT {project.number}
                </span>
                <span className="text-xl text-[#73784F] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <p className="mt-8 text-xs leading-6 text-[#73784F]">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-medium leading-snug tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-[#68695C]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#292C27]/15 px-3 py-1.5 text-xs text-[#68695C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#292C27]/10 pt-4">
                <span className="text-xs text-[#68695C]">
                  {project.status}
                </span>
                <span className="text-sm font-medium text-[#73784F]">
                  View details →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-[#292C27]/10 bg-[#E5DFD2]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
              Tools & capabilities
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Skills I&apos;m developing
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className="border-t border-[#292C27]/20 pt-5"
              >
                <p className="text-xs tracking-[0.16em] text-[#73784F]">
                  {group.number}
                </p>
                <h3 className="mt-4 text-xl font-medium">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-[#68695C]"
                    >
                      <span className="text-[#73784F]">↗</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
              Have a project in mind?
            </p>
            <h2 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-[-0.05em] sm:text-7xl">
              Let&apos;s connect
              <span className="font-serif italic text-[#73784F]">.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#68695C]">
              I&apos;m open to connecting with people, learning from new
              experiences, and exploring opportunities in technology.
            </p>
          </div>

          <div className="border-t border-[#292C27]/15 pt-6 lg:ml-auto lg:w-full">
            <p className="text-xs uppercase tracking-[0.18em] text-[#73784F]">
              Email
            </p>
            <a
              href="mailto:daffaarkha17@gmail.com"
              className="mt-3 inline-block break-all text-lg font-medium transition-colors hover:text-[#73784F] sm:text-xl"
            >
              daffaarkha17@gmail.com
              <span className="ml-2 text-[#73784F]">↗</span>
            </a>

            <div className="mt-7 border-t border-[#292C27]/15 pt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#73784F]">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/daffaarkhabista"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm transition-colors hover:text-[#73784F]"
              >
                Connect with me <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#292C27]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-[#68695C] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Daffa Arkhabista. All rights reserved.</p>
          <a
            href="#home"
            className="transition-colors hover:text-[#73784F]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
