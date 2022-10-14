import { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Kapcsolatok } from './Kapcsolatok';
import { Taskak } from './Taskak';
import { Irodaszerek } from './Irodaszerek';
import { Iskolaszerek } from './Iskolaszerek';
import { MainPage } from './MainPage';
import ScrollToTop from './ScrollToTop';

export function Navigation() {
    const [scroll, setScroll] = useState(false);

    const changeScroll = () => {
        if (window.scrollY > 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", changeScroll);

    return (
        <div className='topPositionSticky newBody'>
          <BrowserRouter>
            <ScrollToTop />
            <nav className="sticky-top backgroundOfHeader ">
              <div className={scroll ? 'hidden' : 'visible'}>
                <div className='text-center text-uppercase'>
                  <NavLink className='title' to={'/'}><h1>Páva Papír</h1></NavLink>
                </div>
              </div>
              <div className="navbar container-sm" style={{ width: "920px" }}>
                <NavLink className="nav-item" to={'/'}><span> <i className="bi bi-house"></i> Főoldal</span></NavLink><span>|</span>
                <NavLink className='nav-item' to={'/Iskolaszerek'}><span> <i className="bi bi-calculator-fill"></i> Iskolaszerek</span></NavLink><span>|</span>
                <NavLink className='nav-item' to={'/Irodaszerek'}><span> <i className="bi bi-pen"></i> Irodaszerek</span></NavLink><span>|</span>
                <NavLink className='nav-item' to={'/Taskak'}><span> <i className="bi bi-wallet2"></i> Táskák/Pénztárcák</span></NavLink><span>|</span>
                
                <NavLink className='nav-item' to={'/Kapcsolatok'}><span> <i className="bi bi-person"></i> Kapcsolatok</span></NavLink>
              </div>
            </nav>
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/Iskolaszerek' element={<Iskolaszerek />}></Route>
              <Route path='/Irodaszerek' element={<Irodaszerek />}></Route>
              <Route path='/Taskak' element={<Taskak />}></Route>
              <Route path='/Kapcsolatok' element={<Kapcsolatok />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      );
}