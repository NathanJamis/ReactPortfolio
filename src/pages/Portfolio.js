import React from 'react';
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import Footer from "../components/Footer";
import projects from "../utils/projects";

function Portfolio() {
    return (
        <div>
            <Header />
            <Container>
                {projects.map((project, index) => {
                    return <PortfolioCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        website={project.website}
                        github={project.github}
                    />
                })
                }
            </Container>
            <Footer />
        </div>
    )
}

export default Portfolio;