import React from "react";
import CodeTextLanguageEnum from "../../enums/CodeTextLanguageEnum";
import CodeText from "../texts/CodeText";
import Image from "next/image";

const PersonalInformationTemplate: React.FunctionComponent<{
    placeEnd: boolean,
    subTitle: string,
    content: string,
    codeTextEnum: CodeTextLanguageEnum,
    leftImage?: string,
    rightImage?: string,
    header?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
}> = (props) => {

    /**
     * Method for get className, included settings to align text 
     * @returns 
     */
    const getClassName = () => {
        let className = 'col-6 my-auto';

        if(props.placeEnd == true) {
            className += ' ms-auto';
        }
        else {
            className += ' me-auto';
        }

        return className;
    }

    return (
        <div className='row'>
            {props.leftImage != null?
                <div className="col-6 text-center">
                    <Image width={'530%'} height={'400%'} src={props.leftImage} alt='' className={'shadow-lg'}/>
                </div> : undefined}
            <div className={getClassName()}>
                <CodeText language={props.codeTextEnum} text={props.subTitle}/>
                {props.header}
                <p>{props.content}</p>
                {props.children}
            </div>
            {props.rightImage != null?
                <div className="col-6 text-center">
                    <Image width={'530%'} height={'400%'} src={props.rightImage} alt='' className={'shadow-lg'}/>
                </div> : undefined}
        </div>
    );
}

export default PersonalInformationTemplate;