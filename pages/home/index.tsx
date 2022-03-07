import React, { useEffect } from "react";
import moment from "moment";
import CodeTextLanguageEnum from "../../src/js/enums/CodeTextLanguageEnum";
import { faArrowRight, faCircle, faCode, faDotCircle, faFutbol, faGamepad, faGripLinesVertical, faGuitar, faMap, faPalette } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Journey from "../../src/js/interfaces/Journey";
import InformationTemplate from "../../src/js/components/home/PersonalInformationTemplate";
import Typed from "typed.js";
import CustomText from "../../src/js/components/texts/CustomText";
import PersonalInformationTemplate from "../../src/js/components/home/PersonalInformationTemplate";
import TechnicalSkillTemplate from "../../src/js/components/home/TechnicalSkillTemplate";
import { listProgrammingLanguage, listDatabase, listFramework } from "../../src/js/storage/TechSkillStorage";

const PersonalInformation: React.FunctionComponent<{}> = (props) => {
    /**
     * UseEffect to run typed js animation at first render
     */
    useEffect(()=> {
        runTypeJSAnimation();
    }, []);

    /**
     * Method for run type js animation on Personal Information Section
     */
    const runTypeJSAnimation = () => {
        new Typed('#who_am_i_typed', {
            strings: ['DEVELOPER'],
            typeSpeed: 180,
            loop: true,
            backSpeed: 60
        });
    }

    /**
     * Method for calculate current age
     * @returns calculated age
     */
    const getMyBirthday = () => {
        let currentIdnTime = moment(new Date()).utcOffset('+07:00');
        let myBirthday = moment("2000-12-21").utcOffset('+07:00');

        return parseInt(moment.duration(currentIdnTime.diff(myBirthday)).asYears().toString());
    }

    /**
     * Personal Information Text
     */
    let personalInformationContent = 
    `
        I am ${getMyBirthday()} years old now.
        I was born in Jakarta and I love to code.
        I've build some website and android app for many different purpose.
        Either to learn new programming language or framework, helping people, or just to fulfill my hobbies.
    `;
    // I have just graduated from university on 2022, majoring in Computer Science.

    return (
        <div className='ms-5'>
            <InformationTemplate showProfileImg={true} content={personalInformationContent} placeEnd={false} subTitle={"Who Am I?"} codeTextEnum={CodeTextLanguageEnum.C}
                header={
                    <h1 className='fw-bold'>
                        I'M SAMUEL, A <span id='who_am_i_typed' className='text-success'/>
                    </h1>
                }/>
            <Link href='/portfolio'>
                <a id='portfolio-btn' className='bg-danger py-2 px-4 text-white clickable fw-bold shadow-lg'>
                    View My Portfolio
                    <FontAwesomeIcon icon={faArrowRight} className='ms-4' />    
                </a>
            </Link>
        </div>
    )
}

const MyHobbies: React.FunctionComponent<{}> = (props) => {
    let myHobbiesContent = 
    `
        Besides of code, I am also have another hobbies.
    `;

    return (
        <div className='me-5'>
            <InformationTemplate leftImage='/images/Work from home.png' content={myHobbiesContent} placeEnd={true} subTitle={"My Hobbies"} codeTextEnum={CodeTextLanguageEnum.Java}>
                <div className='row'>
                    <div className="ms-auto">
                        <div className='row'>
                            <div className='col-3'>
                                <h5><CustomText icon={faCode} startIcon={true}>Coding</CustomText></h5>
                                <h5><CustomText icon={faGuitar} startIcon={true}>Guitar</CustomText></h5>
                                <h5><CustomText icon={faFutbol} startIcon={true}>Soccer</CustomText></h5>
                            </div>
                            <div className='col-3'>
                                <h5><CustomText icon={faPalette} startIcon={true}>Drawing</CustomText></h5>
                                <h5><CustomText icon={faMap} startIcon={true}>Origami</CustomText></h5>
                                <h5><CustomText icon={faGamepad} startIcon={true}>Gaming</CustomText></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </InformationTemplate>
        </div>
    )
}

const MyJourney: React.FunctionComponent<{}> = (props) => {
    const journeyList: Journey[] = [
        {
            education: 'Accelist Technology',
            startYear: '2021',
            endYear: '2022',
            description: ''
        },
        {
            education: 'Bina Nusantara University (Majoring in Computer Science)',
            startYear: '2018',
            endYear: '2022',
            description: ''
        },
        {
            education: 'SMA Tarsisius 2 Jakarta',
            startYear: '2015',
            endYear: '2018',
            description: ''
        },
        {
            education: 'SMP Tarakanita 3 Jakarta',
            startYear: '2012',
            endYear: '2015',
            description: ''
        },
        {
            education: 'SD Tarakanita 3 Jakarta',
            startYear: '2006',
            endYear: '2012',
            description: ''
        },
        {
            education: 'TK Budi Mulia',
            startYear: '2004',
            endYear: '2006',
            description: ''
        }
    ];

    let MyJourneyContent = 
    `
        My journey started since I get my first formal education on 2004 until the last education in university and experience in company on 2022.
    `;

    const generateJourney = () => {
        const journeyData = journeyList.map(
            (j, idx) => {
                return (
                    <div key={idx}>
                        <p className='fw-bold m-0'>
                            <span className='me-2'><FontAwesomeIcon icon={idx == 0 ? faCircle : faCircle}/></span>
                            {`${j.startYear} - ${j.endYear}`}
                            <span className='fw-normal ms-4'>{j.education}</span>
                        </p>
                        {idx != journeyList.length-1 ? 
                                <span className='ms-1'><FontAwesomeIcon icon={faGripLinesVertical}/></span>
                            : undefined}
                    </div>
                );
            }
        );

        return <div>{journeyData}</div>;
    }

    return (
        <div className='ms-5'>
            <InformationTemplate codeTextEnum={CodeTextLanguageEnum.Javascript} content={MyJourneyContent} placeEnd={false} subTitle={'My Journey'} rightImage={'/images/Trekking.png'}>
                {generateJourney()}
            </InformationTemplate>
        </div>
    )
}

const MyTechnicalSkills: React.FunctionComponent<{}> = (props) => {
    let myTechnicalSkillsContent = 
    `
        I divide my technicals skill into 3 different parts. 
        They are programming languages, databases, and frameworks.
    `;

    return (
        <div>
            <div className="ms-5">
               <PersonalInformationTemplate codeTextEnum={CodeTextLanguageEnum.C} content={myTechnicalSkillsContent} placeEnd={false} subTitle={'My Technical Skills'}/>
            </div>
            <div className="d-flex text-center">
                <TechnicalSkillTemplate category="Programming Language" listTechnical={listProgrammingLanguage}/>
                <TechnicalSkillTemplate category="Database" listTechnical={listDatabase}/>
                <TechnicalSkillTemplate category="Framework" listTechnical={listFramework}/>
            </div>
        </div>
    )
}

const Home: React.FunctionComponent<{}> = (props) => {
    return (
        <div>
            <PersonalInformation/>
            <br />
            <hr />
            <MyHobbies/>
            <br />
            <hr />
            <MyJourney/>
            <br />
            <hr />
            <MyTechnicalSkills/>
            <br />
        </div>
    )
}

export default Home;