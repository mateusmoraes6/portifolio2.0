import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "CSS", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "TypeScript"],
  },
  {
    category: "Banco de Dados",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "Ferramentas & Outros",
    skills: ["Git", "GitHub", "GitHub Desktop", "VS Code", "Insomnia", "Zod", "Axios", "IA"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
