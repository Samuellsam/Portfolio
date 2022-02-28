import { useState } from "react"
import TechnicalSkill from "../../interfaces/TechnicalSkill"
import Image from "next/image";

const TechnicalSkillItem: React.FunctionComponent<{
    item: TechnicalSkill
}> = (props) => {
    return (
        <div className="d-flex my-2 flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front text-dark shadow-lg text-center rounded-3 bg-light d-flex">
                    <div className="row m-auto w-75">
                        <Image src={props.item.iconPath} className="border border-2 rounded-1 p-1 bg-light col-2" width={'50px'} height={'50px'} alt='tech skill'/>
                        <p className="fw-bold m-auto col-5">{props.item.name}</p>
                    </div>
                </div>
                <div className="flip-card-back d-flex justify-content-center bg-dark text-light rounded-3 shadow-lg text-center">
                    <small className="my-auto mx-2 fw-bold">{props.item.description}</small>
                </div>
            </div>
        </div>
    )
}

const TechnicalSkillTemplate: React.FunctionComponent<{
    category: string,
    listTechnical: TechnicalSkill[]
}> = (props) => {
    const renderListTechnical = () => {
        const technicals = props.listTechnical.map(
            (t, idx) => {
                return <TechnicalSkillItem item={t} key={idx}/>
            }
        )

        return <div>{technicals}</div>
    }

    return (
        <div className="col-3">
            <h5 className="fw-bold">{props.category}</h5>
            {renderListTechnical()}
        </div>
    )
}

export default TechnicalSkillTemplate;