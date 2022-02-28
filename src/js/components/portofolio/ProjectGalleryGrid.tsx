import Project from "../../interfaces/Portfolio";
import ProjectItemTemplate from "./ProjectItemTemplate";

const ProjectGalleryGrid: React.FunctionComponent<{
    projects: Project[],
    title: string,
    description: string
}> = (props) => {
    const generateProjectGrid = () => {
        const projects = props.projects.map(
            (p, idx) => {
                return (
                    <div className="col-3 d-flex" key={idx}>
                        <ProjectItemTemplate projectData={p}/>
                    </div>
                )
            }
        )

        return <div className="row px-3">{projects}</div>;
    }

    return (
        <div>
            <div className="text-start mx-3">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            {generateProjectGrid()}
            <br />
        </div>
    )
}

export default ProjectGalleryGrid;