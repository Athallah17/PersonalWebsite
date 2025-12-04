import Image from "next/image";
import { Card, CardHeader, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
};

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="w-full max-w-xl bg-card text-card-foreground shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <CardHeader className="p-0 relative w-full h-56 overflow-hidden">
            <div className="relative w-full h-full">
            <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-center"
            />
            </div>
            </CardHeader>


            <CardContent className="p-6 space-y-4">
            <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
            {project.description}
            </p>
            </div>


            <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t, i) => (
            <Badge key={i} variant="secondary" className="px-3 py-1 text-xs rounded-lg">
            {t}
            </Badge>
            ))}
            </div>


            <div className="flex gap-3 pt-2">
            {project.github && (
            <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener">
            <FaGithub className="w-4 h-4 mr-2" /> GitHub
            </a>
            </Button>
            )}


            {project.live && (
            <Button size="sm" asChild>
            <a href={project.live} target="_blank" rel="noopener">
            <ExternalLink className="w-4 h-4 mr-2" /> Live
            </a>
            </Button>
            )}
            </div>
            </CardContent>
        </Card>
    );
}