import React from 'react';

const Dashboard = React.lazy(() => import('../container/dasboard'))
const Organisation = React.lazy(() => import('../container/organisation'))
const CustomerDomain = React.lazy(() => import('../container/domain/customerDomain'))
const ProductDomain = React.lazy(() => import('../container/domain/productDomain'))
const VendorDomain = React.lazy(() => import('../container/domain/vendorDomain'))
const DataSet = React.lazy(() => import('../container/dataSet/dataSet'))
const BusinessRule = React.lazy(() => import('../container/businessRule/businessRule'))



const routes = [
    { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/Organisation', name: 'Organisation', component: Organisation },
    { path: '/Customer', name: 'Customer', component: CustomerDomain },
    { path: '/Product', name: "Product", component: ProductDomain },
    { path: '/Vendor', name: "Vendor", component: VendorDomain },
    { path: '/DataSet', name: "DataSet", component: DataSet },
    { path: '/BusinessRule', name: "BusinessRule", component: BusinessRule }
]

export default routes;