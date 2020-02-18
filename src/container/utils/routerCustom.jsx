import React, { Suspense } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import homeImage from '../../assets/home-solid.svg'


const RouterCustom = ({ link, className, style }) => {
    return (
        <Container fluid className={className} style={style}>
            <Suspense fallback={<div className="animated fadeIn pt-1 text-center">Loading...</div>}>
                {link === null ? (null) :
                    link.map((link, idx) => {
                        if (idx == 0) {
                            const replaced = link.to.replace("/Dashboard", "Home")
                            return link.to ? (
                                <Link to={link.to}>
                                    <img src={homeImage} className="image-home" />
                                    {replaced}
                                </Link>
                            ) : (null)
                        } else {
                            const replaced = link.to.replace("/", ">>")
                            return link.to ? (
                                <Link to={link.to}>

                                    {replaced}
                                </Link>
                            ) : (null)
                        }
                    })}
            </Suspense>
        </Container>
    )
}
export default RouterCustom;