import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonAppBar from '../components/Nav/ButtonAppBar';
import '../components/Nav/ButtonAppBar';
import '../components/CircularIndeterminate/CircularIndeterminate';
import CircularIndeterminate from '../components/CircularIndeterminate/CircularIndeterminate';

const ActionAreaCard = lazy(() => import('../components/ActionAreaCard/ActionAreaCard'));
const Hero = lazy(() => import('../components/Hero/Hero'));

const routes = [
    {
        path: '/products',
        name: 'Dashboard',
        exact: true,
        component: <ActionAreaCard />
    },

    {
        path: '/',
        name: 'Dashboard',
        exact: true,
        component: <Hero />
    }
]

const MainLayout = () => {
    return (
        <div>
            <ButtonAppBar />
            <div className='content-container'>
                <Router>
                    <Suspense fallback={<div><CircularIndeterminate /></div>}>
                        <Routes>
                            {routes.map((prop, key) => {
                                return <Route path={prop.path} element={prop.component} key={key} />
                            })}
                        </Routes>
                    </Suspense>
                </Router>
            </div>


        </div>

    )
}
export default MainLayout;