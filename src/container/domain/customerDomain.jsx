import React, { useState } from 'react';
import RouterCustom from "../utils/routerCustom";
import { Row, Col, Card } from 'reactstrap'

import buttonPlus from '../../assets/button-plus.svg'
import arrowRight from '../../assets/arrow-circle-right-solid.svg'
import ModalCreateData from './modalCreateData';
import BodyDomain from './bodyDomain';

const link_patern = [
    { to: "/Dashboard" },
    { to: "/Organisation" },
    { to: "/Customer" }
]
function CustomerDomain() {
    return (
        <div>
            <RouterCustom link={link_patern} className="text-left" />
            <BodyDomain patern="/Customer"/>
        </div>
    )

}

export default CustomerDomain;