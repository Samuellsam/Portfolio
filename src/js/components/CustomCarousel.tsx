import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft, faCaretRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const CarouselButton: React.FunctionComponent<{
    icon: IconProp,
    className?: string,
    onClick: () => void
}> = (props) => {
    return (
        <span className={"rounded-0 h-100 " + props.className}>
            <div className="d-flex h-100">
                <button className="bg-white my-auto p-3 btn h-100" onClick={props.onClick}>
                    <FontAwesomeIcon icon={props.icon} size={'3x'} className='text-dark'/>
                </button>
            </div>
        </span>
    )
}

const CarouselDots: React.FunctionComponent<{
    total: number,
    position: number
}> = (props) => {
    const renderDots = () => {
        const dots: JSX.Element[] = [];
        for(let i=0; i<props.total; i++) {
            let className = 'mx-2 mt-3';
            i == props.position ? className += ' text-dark' : className += ' text-light';
            dots.push(<FontAwesomeIcon icon={faCircle} className={className}></FontAwesomeIcon>);
        }
        return dots;
    }
    return (
        <div>
            {renderDots()}
        </div>
    )
}

const CustomCarousel: React.FunctionComponent<{
    images: string[]
}> = (props) => {
    //temp save position
    const [currPosition, setCurrPosition] = useState(0);
    const [imgPosition, setImagePosition] = useState(0);
    const [imgSrc, setImgSrc] = useState('/images/NoImagePlaceholder.png');

    useEffect(() => {
        setImagePosition(0);
        updateImgSrc(0);
    }, [props.images]);

    const updateImgSrc = (position: number) => {
        if(props.images && props.images.length > 0) {
            setImgSrc(props.images[position] as string);
            setCurrPosition(position);
        }
    }

    const onPrevClick = () => {
        if(imgPosition-1 < 0) updateImgSrc(props.images.length-1);
        else updateImgSrc(imgPosition-1);
    }

    const onNextClick = () => {
        if(imgPosition+1 >= props.images.length) updateImgSrc(0);
        else updateImgSrc(imgPosition+1);
    }

    return (
        <div>
            <div className="bg-secondary py-3">
                <div className="position-relative d-flex bg-dark">
                    <CarouselButton icon={faCaretLeft} className='carousel-left-btn' onClick={() => onPrevClick()}/>
                    <div className="text-center w-75 mx-auto position-relative bg-dark shadow-lg" style={{height: '400px'}}>
                        <div className="position-absolute bg-dark" style={{width: '100%', height: '100%'}}>
                            <Image onLoadingComplete={() => setImagePosition(currPosition)} src={imgSrc} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <CarouselButton icon={faCaretRight} className='carousel-right-btn' onClick={() => onNextClick()}/>
                </div>
                <CarouselDots position={imgPosition} total={props.images ? props.images.length : -1}/>
            </div>
        </div>
    )
}

export default CustomCarousel;