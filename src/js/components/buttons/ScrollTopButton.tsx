import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollTopButton: React.FunctionComponent<{}> = (props) => {
    const onScrollButtonClick = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <p className='position-fixed bottom-0 display-6 text-warning clickable' style={{right : '25px', bottom : '25px'}} onClick={onScrollButtonClick}>
                <FontAwesomeIcon icon={faChevronCircleUp} className='bg-white rounded-circle p-1'/>
            </p>
        </div>
    );
}

export default ScrollTopButton;
