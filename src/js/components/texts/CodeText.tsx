import { useEffect, useState } from "react";
import CodeTextLanguageEnum from "../../enums/CodeTextLanguageEnum";

const CodeText: React.FunctionComponent<{
    text: string,
    language: CodeTextLanguageEnum
}> = (props) => {
    const [printCommand, setPrintCommand] = useState<string>('');

    useEffect(() => {
        setPrintCommand(assignPrintCommand());
    }, []);

    const assignPrintCommand = () => {
        switch (props.language) {
            case CodeTextLanguageEnum.C:
                return "printf";
            case CodeTextLanguageEnum.Java:
                return "System.out.println";
            case CodeTextLanguageEnum.Javascript:
                return "console.log";
        }
    }

    return (
        <h5>
            <span className='text-info'>
                {printCommand}
                <span className='text-danger'>
                    (
                    <span className='text-warning'>
                        "
                        <span className='fw-bold display-6'>{props.text}</span>
                        "
                    </span>
                    );
                </span>
            </span>
        </h5>
    )
}

export default CodeText;