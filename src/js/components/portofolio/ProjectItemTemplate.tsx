import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Project from "../../interfaces/Portfolio";

const ProjectItemTemplate: React.FunctionComponent<{
    projectData: Project
}> = (props) => {
    return (
        <div className="text-light my-3 shadow-lg light-blue-color rounded-3 position-relative pt-3 h-100">
            <Image placeholder="blur" blurDataURL="/images/LoadingImagePlaceholder.png" className="mx-auto border border-light rounded-3" src={props.projectData.preview.previewImgPath} width={'200px'} height={'200px'} alt='project image'/>
            <h4 className="my-2">
                {props.projectData.title}
            </h4>
            <small className="text-start p-0">
                Created using : {props.projectData.listTech.join(', ')}
            </small>
            <p className="mt-3">{props.projectData.preview.previewDescription}</p>
            <div className="text-center">
                <Link href={`portfolio/detail/${props.projectData.id}`}>
                    <a className="fw-bold text-warning">View more</a>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItemTemplate;