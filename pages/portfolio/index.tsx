import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import ProjectGalleryGrid from "../../src/js/components/portofolio/ProjectGalleryGrid";
import CodeText from "../../src/js/components/texts/CodeText";
import CustomText from "../../src/js/components/texts/CustomText";
import CodeTextLanguageEnum from "../../src/js/enums/CodeTextLanguageEnum";
import Portfolio from "../../src/js/interfaces/Portfolio";
import { listIndividualProject, thesisProject } from "../../src/js/storage/ProjectStorage";

const Portfolio: React.FunctionComponent<{}> = (props) => {
    const individualDescriptionText = 
        `These are list of projects that I made when free time during the semester break, my internship free time, and my free time.`;
    const thesisDescriptionText = 
        `This is my thesis projects that I made with my 2 friends in college.`;
    
    return (
        <div className="text-center">
            <CodeText language={CodeTextLanguageEnum.C} text="My Portfolio Gallery"></CodeText>
            <a href='https://github.com/Samuellsam/Portfolio' className="btn btn-warning text-dark" target='_blank'><CustomText icon={faArrowAltCircleUp} startIcon={true}>View this my portfolio source code</CustomText></a>
            <br />
            <br />
            <ProjectGalleryGrid title="Thesis Project" description={thesisDescriptionText} projects={[thesisProject]}/>
            <br />
            <ProjectGalleryGrid title="Individual Projects" description={individualDescriptionText} projects={listIndividualProject}/>
        </div>
    )
}

export default Portfolio;