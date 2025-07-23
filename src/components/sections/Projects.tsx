import React from "react";
import TagList from "../ui/TagList";
import Tag from "../ui/Tag";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
}

interface ProjectsProps {
    title: string;
    items: Project[];
}

const ProjectsSection = ({ title, items }: ProjectsProps) => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="projects__title text-center">{title}</h2>
                <div className="projects__items flex-column">
                    {items.map((project, index) => (
                        <div key={index} className="project-item flex-center column-mobile">
                            <div className="flex-1">
                                <h3 className="project-item__title">{project.title}</h3>
                                <p className="project-item__description">{project.description}</p>
                                <TagList>
                                    {project.tech.map((tech, techIndex) => (
                                        <Tag key={techIndex}>{tech}</Tag>
                                    ))}
                                </TagList>
                            </div>
                            <div className="project-item__image flex-center">
                                <Image src={project.image} alt={project.title} width={800} height={600}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;