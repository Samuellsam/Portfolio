import { faArrowCircleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { githubData } from "../../interfaces/Portfolio";

const ViewDemoButton: React.FunctionComponent<{
    demoLink?: string
}> = (props) => {
    const renderViewDemoButton = () => {
        if(props.demoLink) {
            return (
                <a href={props.demoLink} className='btn btn-success mx-2 fw-bold border border-light border-3 rounded-pill' target={'_blank'}>
                    <FontAwesomeIcon icon={faArrowUp} className='me-2'></FontAwesomeIcon>View Website
                </a>
            )
        }
        return undefined;
    }

    return (
        <div className="d-flex">
            {renderViewDemoButton()}
        </div>
    )
}

export default ViewDemoButton;