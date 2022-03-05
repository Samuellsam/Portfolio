import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faBackspace, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

const BackButton: React.FunctionComponent<{
    href: string,
    backPageName: string
}> = (props) => {
    const [backBtnClassName, setBackButtonClassName] = useState('px-3 py-2 border border-3 border-light rounded-pill back-btn position-absolute');

    useEffect(() => {
        setBackButtonClassName(backBtnClassName+' back-button-show');
    }, []);

    return (
        <Link href={props.href}>
            <div className="position-relative">
                <div className="d-flex mx-3 clickable">
                    <div className={backBtnClassName}>
                        <FontAwesomeIcon icon={faArrowLeft} className='me-2 my-auto'/>
                            <a className="fw-bold">Back to {props.backPageName}</a>
                    </div>
                </div>
                <br />
            </div>
        </Link>
    )
}

export default BackButton;