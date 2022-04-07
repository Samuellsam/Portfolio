interface PreviewProjectInformation {
    previewImgPath: string;
    previewDescription: string;
}

export interface githubData {
    label: string;
    link: string;
}

export interface credentialData {
    username: string;
    password: string;
}

interface Project {
    id: string,
    title: string;
    preview: PreviewProjectInformation;
    description: string;
    listTech: string[];
    listScreenshootImgPath: string[];
    repositoryLink: githubData[];
    demoLink?: string;
    filePath?: string;
    credentials?: credentialData[];
}

export default Project;