import { githubData } from "../../interfaces/Portfolio";

const ViewDemoButton: React.FunctionComponent<{
    demoLink?: string
}> = (props) => {
    const renderViewDemoButton = () => {
        if(props.demoLink) {
            return (
                <a href={props.demoLink} className='btn btn-success mx-2 fw-bold border border-light border-3 rounded-pill' target={'_blank'}>
                    View Website
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