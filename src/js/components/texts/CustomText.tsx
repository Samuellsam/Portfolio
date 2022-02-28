import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomText: React.FunctionComponent<{
    icon: IconDefinition,
    isTitle?: boolean,
    isBold?: boolean,
    startIcon: boolean
}> = (props) => {
    const getClassName = () => {
        let className = 'my-auto';
        
        if(props.isTitle == true) className+=' h4';
        if(props.isBold == true) className+=' fw-bold';

        return className;
    }

    const getIconClassName = () => {
        return 'my-auto mx-2';
    }

    const renderView = () => {
        if(props.startIcon == true) {
            return (
                <p className={getClassName()}>
                    <FontAwesomeIcon icon={props.icon} className={getIconClassName()}/>
                    {props.children}
                </p>
            );
        }

        return (
            <p className={getClassName()}>
                {props.children}
                <FontAwesomeIcon icon={props.icon} className={getIconClassName()}/>
            </p>
        );
    }

    return (
        renderView()
    );
}

export default CustomText;