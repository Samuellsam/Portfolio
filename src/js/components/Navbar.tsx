import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NavItem: React.FunctionComponent<{
    displayName: string,
    isALink: boolean,
    onClick?: () => void
}> = (props) => {
    const router = useRouter();
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(props.displayName.toLocaleLowerCase().replaceAll(' ', '-'));
    }, [props.displayName]);

    const getNavLinkClassName = (pathIdentity: string) => {
        let className = 'nav-link mx-5 clickable top-nav-link mb-0'; 
        
        if(router.pathname.includes(pathIdentity)) {
            className += ' fw-bold text-warning top-nav-link-active';
        }

        return className; 
    }

    return (
        <li className="nav-item">
            {props.isALink ? 
                <Link href={`/${url}`}>
                    <p className={getNavLinkClassName(url)} onClick={props.onClick}>{props.displayName}</p>
                </Link>
                :
                <p className={getNavLinkClassName(url)} onClick={props.onClick}>{props.displayName}</p>
            }
        </li>
    );
}

const Navbar: React.FunctionComponent<{}> = (props) => {
    const [fillBackground, setFillBackground] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollDistance)
    }, []);

    const checkScrollDistance = () => {
        window.scrollY > 30 ? setFillBackground(true) : setFillBackground(false);
    }

    const getNavbarClassName = () => {
        let className = 'navbar navbar-expand-lg position-fixed top-0 w-100 shadow-lg';

        if(fillBackground) {
            className += ' bg-white text-dark';
        }
        else {
            className += ' darkest-blue-color';
        }

        return className;
    }

    const onContactClick = () => {
        document.getElementById('footer')?.scrollIntoView();
    }

    return (
        <nav className={getNavbarClassName()} style={{zIndex : 1}}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
                        <NavItem displayName={'Home'} isALink={true}/>
                        <NavItem displayName={'Portfolio'} isALink={true}/>
                        <NavItem displayName={'Contact'} onClick={onContactClick} isALink={false}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;