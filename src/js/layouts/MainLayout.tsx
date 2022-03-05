import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { faAddressBook, faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ScrollTopButton from "../components/buttons/ScrollTopButton";
import CustomText from "../components/texts/CustomText";
import { Html } from "next/document";
import ReactParticle from "../components/ReactParticles";

const Footer: React.FunctionComponent<{}> = (props) => {
    return (
        <div className='bg-dark text-white' id='footer'>
            <hr />
            <div className='p-3'>
                <CustomText icon={faPhone} isTitle={true} startIcon={false} isBold={true}>My Contact</CustomText>
                <br />
                <div>
                    <div className="d-flex w-100 justify-content-between">
                        <div className=''>
                            {/* <CustomText icon={faAddressBook} startIcon={true}>+62 85693455467</CustomText> */}
                            <CustomText icon={faEnvelope} startIcon={true}>sagitariussamuel@gmail.com</CustomText>
                            <CustomText icon={faMapMarkerAlt} startIcon={true}>Indonesia, Jakarta</CustomText>
                        </div>
                        <div className='text-end'>
                            <a href='https://github.com/Samuellsam' target='_blank'><CustomText icon={faGithub} startIcon={false}>Github</CustomText></a>
                            <a href='https://gitlab.com/Samuellsam' target='_blank' ><CustomText icon={faGitlab} startIcon={false}>Gitlab</CustomText></a>
                            <a href='https://www.linkedin.com/in/samuelssam/' target='_blank'><CustomText icon={faLinkedin} startIcon={false}>LinkedIn</CustomText></a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <small className='w-100 d-flex justify-content-center'>&copy;2022 All right reserved</small>
            </div>
        </div>
    );
}

const BlankSpace: React.FunctionComponent<{}> = (props) => {
    return (
        <div style={{height: "100px"}}/>
    );
}

const Background: React.FunctionComponent<{
    source: string
}> = (props) => {
    return (
        <div  className='position-absolute w-100' style={{zIndex : -1}}>
            <img src={props.source} alt="" width="100%"/>
        </div>
    )
}

const MainLayout: React.FunctionComponent<{}> = (props) => {
    return (
        <React.Fragment>
            <Head>
                <meta key="meta-charset" charSet="utf-8" />
                <meta key="meta-viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Sam's Portfolio Websites"/>
                <title>{'Samuel.'}</title>
            </Head>
            <ReactParticle/>
            <div className='dark-blue-color text-white'>
                {/* <Background source={'7b6fee91443299.5e3ade69d1289.gif'}/> */}
                <Navbar/>
                <BlankSpace/>
                <div>
                    {props.children}
                </div>
                <Footer/>
                <ScrollTopButton/>
            </div>
        </React.Fragment>
    )
}

export default MainLayout;