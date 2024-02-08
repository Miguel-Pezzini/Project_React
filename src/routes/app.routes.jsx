import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { MoviePreview } from '../pages/MoviePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/new' element={<New/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/moviespreview' element={<MoviePreview/>}></Route>
        </Routes>
    )
}