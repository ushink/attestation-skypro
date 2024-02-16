import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { NotFound } from './pages/404/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
};
