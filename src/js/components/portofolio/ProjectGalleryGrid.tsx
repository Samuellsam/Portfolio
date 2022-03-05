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
                    <div className="col-3 px-2 my-2" key={idx}>
                        <ProjectItemTemplate projectData={p}/>
                    </div>
                )
            }
        )

        return <div className="d-flex flex-row flex-wrap px-3">{projects}</div>;
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