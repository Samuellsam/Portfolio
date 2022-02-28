import { useRouter } from "next/router"
import { useEffect } from "react"

const Custom404Page: React.FunctionComponent<{}> = (props) => {
    const router = useRouter();

    useEffect(() => {
        router.push('/home');   
    })

    return <>Redirect to homepage...</>;
}

export default Custom404Page;