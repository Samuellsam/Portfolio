import { GetServerSideProps } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BackButton from "../../../src/js/components/buttons/BackButton";
import DetailProjectTemplate from "../../../src/js/components/portofolio/DetailProjectTemplate";
import { listIndividualProject, thesisProject } from "../../../src/js/storage/ProjectStorage";

const DetailProject: React.FunctionComponent<{projectId: string}> = (props) => {
    const router = useRouter();

    useEffect(() => {
        // check if project is not in storage
        if(listIndividualProject.find(p => p.id === props.projectId) == null
            && props.projectId !== thesisProject.id) {

            router.push('/portfolio');
        }
    })
    
    return (
        <div>
            <BackButton backPageName="Portfolio Gallery" href="/portfolio"/>
            <br />
            <br />
            <DetailProjectTemplate projectId={props.projectId}/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{projectId: string}> = async (context) => {
    return {
        props : {
            projectId: context.params?.["projectId"] as string
        }
    }
}

export default DetailProject;