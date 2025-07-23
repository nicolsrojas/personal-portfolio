import React from "react";
import Badge from "../ui/Badge";
import {IconName} from "../ui/Icon";

interface techStackProps {
    title: string;
    items: {
        label: string;
        icon: IconName;
        technologies: string;
    }[];
}
const TechStackSection = ({
    title,
    items 
}: techStackProps) => {
    return (
        <section id="techstack" className="techstack flex-center">
            <div className="container">
                <h2 className="tech_stack_title text-center">{title}</h2>
                <div className="techstack__items flex-column">
                    {items.map((item, index) => (
                        <Badge key={index} icon={item.icon}>
                            <div className="techstack__item flex-center column-mobile">
                                <h3 className="techstack__item-label">{item.label}:</h3>
                                <p className="techstack__item-content text-center-mobile">{item.technologies}</p>
                            </div>
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TechStackSection;