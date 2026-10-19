
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "custom-operating-system",
    category: "Operating Systems · Collaboration",
    title: "Custom Operating System",
    description:
      "A planned collaborative project to explore operating system development and customization with a friend.",
    status: "Planned",
    overview:
      "This project is currently in the planning stage. The goal is to learn about operating systems and explore the process of building or customizing an OS as a team.",
    focus: [
      "Explore operating system architecture and fundamentals.",
      "Discuss the project's direction and technical approach with a collaborator.",
      "Define the scope and initial milestones before development begins.",
    ],
    technologies: [
      "Operating Systems",
      "System Development",
      "Collaborative Learning",
    ],
  },
  {
    slug: "enterprise-network-design",
    category: "Networking · Cisco",
    title: "Enterprise Network Design",
    description:
      "An academic networking project using Cisco Packet Tracer.",
    status: "Academic Project",
    overview:
      "An academic project focused on designing an enterprise network and learning how network devices and services work together.",
    focus: [
      "Network segmentation using VLANs.",
      "IP addressing and routing configuration.",
      "Testing network connectivity and network services in Cisco Packet Tracer.",
    ],
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "IP Addressing",
      "Routing",
    ],
  },
  {
    slug: "personal-portfolio",
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A personal website to showcase my background, interests, and projects.",
    status: "In Progress",
    overview:
      "A personal portfolio developed to present my background, technical interests, selected projects, and ongoing learning journey.",
    focus: [
      "Responsive portfolio layout.",
      "Project listings and project detail pages.",
      "Personal information and contact links.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#EEE9DE] text-[#292C27]">
      <header className="border-b border-[#292C27]/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide hover:text-[#73784F]"
          >
            Daffa Arkhabista
          </Link>

          <Link
            href="/#projects"
            className="text-sm text-[#68695C] transition-colors hover:text-[#73784F]"
          >
            ← All projects
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#73784F]">
          {project.category}
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#68695C] sm:text-lg">
          {project.description}
        </p>

        <div className="mt-8 inline-flex rounded-full border border-[#73784F]/40 px-4 py-2 text-sm text-[#73784F]">
          Status: {project.status}
        </div>

        <div className="mt-14 grid gap-12 border-t border-[#292C27]/15 pt-10 md:grid-cols-[1fr_0.7fr]">
          <section>
            <h2 className="text-2xl font-medium">About this project</h2>
            <p className="mt-5 text-sm leading-8 text-[#68695C]">
              {project.overview}
            </p>

            <h2 className="mt-10 text-2xl font-medium">
              Focus and scope
            </h2>

            <ul className="mt-5 space-y-4">
              {project.focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[#68695C]"
                >
                  <span className="mt-0.5 text-[#73784F]">↗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside>
            <div className="border-t border-[#292C27]/15 pt-5">
              <h2 className="text-xl font-medium">
                Technologies and topics
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#292C27]/15 bg-[#F3EFE5] px-3 py-2 text-xs text-[#68695C]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[#292C27]/15 pt-5">
              <p className="text-sm leading-7 text-[#68695C]">
                This page will be updated as the project develops. Its
                current status reflects the progress made so far.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-[#292C27]/15 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#73784F] px-6 py-3.5 text-sm font-medium text-[#F3EFE5] transition-colors hover:bg-[#5F6440]"
          >
            ← Back to projects
          </Link>
        </div>
      </article>

      <footer className="border-t border-[#292C27]/15">
        <div className="mx-auto max-w-5xl px-5 py-6 text-xs text-[#68695C] sm:px-8">
          © 2026 Daffa Arkhabista. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
