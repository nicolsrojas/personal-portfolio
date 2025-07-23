import {IconName} from "@/components/ui/Icon";

const homeData = {
    hero: {
        title: "Hi, I’m Nicols — a full-stack web developer from Peru.",
        subtitle: "I build beautiful websites and smart web apps from the ground up — clean, responsive, and made with love.",
        button: {
            label: "View Projects",
            href: "#projects"
        }
    },
    techStack: {
        title: "My Tech Stack",
        items: [
            {
                label: 'Frontend',
                icon: 'frontend',
                technologies: 'HTML, CSS, JavaScript, TypeScript, React, Next.js'
            },
            {
                label: 'Backend',
                icon: 'backend',
                technologies: 'Node.js, PHP, Laravel, Rest APIs'
            },
            {
                label: 'Databases',
                icon: 'database',
                technologies: 'MySQL, PostgreSQL'
            },
            {
                label: 'CMS & eCommerce',
                icon: 'cms',
                technologies: 'WordPress, WooCommerce, Laravel'
            },
            {
                label: 'SEO & Analytics',
                icon: 'seo',
                technologies: 'Google Tag Manager, Google Analytics, Technical SEO'
            },
            {
                label: 'DevOps & Tools',
                icon: 'devops',
                technologies: 'Git, GitHub, AWS'
            }
        ] as {label: string; icon: IconName; technologies: string;}[]
    },
    projects: {
        title: "Made with Love",
        items: [
            {
                title: "Totem Store",
                description:
                    "An e-commerce platform that includes user authentication, product management, secure payments, and direct AliExpress integration for dropshipping — with product import, inventory sync, and automated order fulfillment.",
                tech: [
                    "WordPress",
                    "PHP",
                    "WooCommerce",
                    "REST APIs",
                    "Git",
                    "GitHub",
                    "SEO",
                    "Google Tag Manager",
                    "Google Analytics",
                ],
                image: "/images/projects/project.jpg", // Replace with actual image path if needed
            },
            {
                title: "Glitch TTS",
                description:
                    "A real-time TTS tool for Twitch and TikTok Live. It blocks swear words — even when users use misspellings or characters that make the TTS sound like banned words — helping streamers avoid platform bans or takedowns.",
                tech: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Express",
                    "Git",
                    "GitHub",
                    "WebSocket",
                    "Socket.io",
                ],
                image: "/images/projects/project.jpg",
            },
            {
                title: "Personal Portfolio",
                description:
                    "A single-page portfolio showcasing my skills, projects and tech stack. Designed with a clean layout and focused on clarity, responsiveness, and performance.",
                tech: [
                        "HTML",
                        "CSS",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "GSAP",
                        "Git",
                        "GitHub"
                    ],
                image: "/images/projects/project.jpg",
            },
        ]
    },
    contact: {
        title: "Let’s Connect",
        subtitle: "If you're working on something cool (or want to), I'd love to hear about it — reach out anytime.",
        fields: {
            name: {
            name: "name",
            placeholder: "Your Name",
            type: "text",
            required: true,
            },
            email: {
            name: "email",
            placeholder: "Your Email",
            type: "email",
            required: true,
            },
            message: {
            name: "message",
            placeholder: "Your Message",
            type: "textarea",
            required: false,
            },
        },
        button: {
            text: "Send Message",
        },
    }
}

export default homeData