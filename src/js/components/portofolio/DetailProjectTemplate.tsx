import { useEffect, useState } from "react";
import Project from "../../interfaces/Portfolio";
import { listIndividualProject, thesisProject } from "../../storage/ProjectStorage";
import DownloadFileButton from "../buttons/DownloadFileButton";
import ViewDemoButton from "../buttons/ViewDemoButton";
import ViewSourceCodeButton from "../buttons/ViewSourceCodeButton";
import CustomSwiper from "../CustomSwiper";

const DetailProjectTemplate: React.FunctionComponent<{
    projectId: string
}> = (props) => {
    const [projectData, setProjectData] = useState<Project>();
    useEffect(() => {
        //search project from individual project
        let project = listIndividualProject.find(p => p.id === props.projectId);

        //if project is not from individual then check with thesis project
        if(!project && props.projectId == thesisProject.id) {
            project = thesisProject;
        }

        setProjectData(project);
    }, [props.projectId]);

    return (
        <div className="text-center">
            <CustomSwiper images={projectData?.listScreenshootImgPath as string[]}/>
            <br />
            <div className="w-75 mx-auto">
                <h1>{projectData?.title}</h1>
                <p className="fw-bold">Created using : {projectData?.listTech.join(', ')}</p>
                <br />
                <div className="w-75 mx-auto">
                    <p>{projectData?.description}</p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <ViewSourceCodeButton repositoryLinks={projectData?.repositoryLink}/>
                        {projectData?.demoLink ? 
                            <ViewDemoButton demoLink={projectData.demoLink}/> : undefined}
                        {projectData?.filePath ? 
                            <DownloadFileButton filePath={projectData.filePath}/> : undefined}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProjectTemplate;