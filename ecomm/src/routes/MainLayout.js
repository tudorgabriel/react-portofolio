import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const routes = [
    {
        path: '/',
        name: 'Dashboard',
        exact: true,
        component: lazy(() => import('../components/ActionAreaCard/ActionAreaCard'))
    }]



    //   export default MainLayout;