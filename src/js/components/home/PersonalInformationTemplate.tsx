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
    showProfileImg?: boolean,
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
        <div className='d-flex'>
            {props.leftImage != null?
                <div className="col-6 text-center position-relative" style={{height: '350px'}} >
                    <Image layout='fill' objectFit="contain" quality={100} priority={true} src={props.leftImage} alt='' className={'shadow-lg'}/>
                </div> : undefined}
            <div className={getClassName()}>
                <CodeText language={props.codeTextEnum} text={props.subTitle}/>
                {props.header}
                <p>{props.content}</p>
                {props.children}
            </div>
            {props.rightImage != null?
                <div className="col-6 text-center position-relative" style={{height: '350px'}} >
                    <Image layout='fill' objectFit="contain" quality={100} priority={true} src={props.rightImage} alt='' className={'shadow-lg'}/>
                </div> : undefined}
            {props.showProfileImg == true?
                <div className="col-6 text-center position-relative" >
                    <Image width={'300px'} height={'300px'} quality={100} priority={true} src={'/images/Profile.png'} alt=''/>
                </div> : undefined}
        </div>
    );
}

export default PersonalInformationTemplate;