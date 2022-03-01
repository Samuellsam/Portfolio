import { faArrowCircleDown, faCircle, faDownload, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownloadFileButton: React.FunctionComponent<{
    filePath: string | undefined
}> = (props) => {
    const renderDownloadFileButton = () => {
        if(props.filePath) {
            return (
                <a href={props.filePath} className='btn btn-warning text-white mx-2 fw-bold border border-light border-3 rounded-pill' target={'_blank'}>
                    <FontAwesomeIcon icon={faFileDownload} className='me-2'></FontAwesomeIcon>Download {props.filePath.substring(props.filePath.indexOf(".")+1)}
                </a>
            )
        }

        return undefined;
    }

    return (
        <div className="d-flex">
            {renderDownloadFileButton()}
        </div>
    )
}

export default DownloadFileButton;