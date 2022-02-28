import { githubData } from "../../interfaces/Portfolio";

const ViewSourceCodeButton: React.FunctionComponent<{
    repositoryLinks: githubData[] | undefined
}> = (props) => {
    const renderViewSourceCodeButton = () => {
        if(props.repositoryLinks && props.repositoryLinks.length > 0 && new Boolean(process.env["NEXT_PUBLIC_SHOW_REPOSITORY"]) == true) {
            const buttons = props.repositoryLinks.map(g => {
                return (
                    <a href={g.link} className='btn btn-primary mx-2 fw-bold border border-light border-3 rounded-pill' target={'_blank'}>
                        View {g.label}
                    </a>
                )
            });

            return buttons;
        }

        return undefined;
    }

    return (
        <div className="d-flex">
            {renderViewSourceCodeButton()}
        </div>
    )
}

export default ViewSourceCodeButton;