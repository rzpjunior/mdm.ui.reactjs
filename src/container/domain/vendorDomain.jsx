import React from 'react';
import RouterCustom from "../utils/routerCustom";
import BodyDomain from './bodyDomain';




const link_patern = [
    { to: "/Dashboard" },
    { to: "/Organisation" },
    { to: "/Vendor" }
]
function vendorDomain() {

    return (
        <div>
             <RouterCustom link={link_patern} className="text-left" />
             <BodyDomain  patern="/Vendor"/>
        </div>
    )

}

export default vendorDomain;