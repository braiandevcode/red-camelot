import { useRef} from 'react';
import { Link } from 'react-router-dom';
import { routes, content, icons} from '../scripts/config.js'
import Loading from './Loading.jsx';
const NavBar = () => {
  const refNav = useRef(null);
  const handleClickOn = (e) => {
    e.preventDefault();
    const NAV_ACTIVE = refNav.current;
    NAV_ACTIVE.classList.remove('hidden');
  }
  const handleClickOff = (e) => {
    const NAV_ACTIVE = refNav.current;
    NAV_ACTIVE.classList.add('hidden');
  }
  const img = "camelot.jpg";
  return (
    <>
      <section className="bg-gray-900 mb-4" id='nav'>
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto pr-2 flex flex-col items-center justify-center">
                  <Link to={"/"}>
                    <div className="w-full p-8">
                      <h1 className="font-extrabold md:text-5xl text-transparent bg-gradient-to-r from-red-900 to-yellow-500 bg-clip-text tracking-tighter mb-3 p-2">Red Camelot</h1>
                      {
                        !img ? <Loading /> :  <img className="img_sm mx-auto rounded-full" src={img} alt="logo" />
                      }
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <ul className="flex items-center lg:flex-row gap-2 sm:justify-center  sm:flex-col mr-8">
                    {
                      routes.map((l, i) => {
                        return (
                          <li className="font-bold text-transparent bg-gradient-to-r from-white to-red-800 bg-clip-text tracking-tight" key={i}>
                            {
                              i === routes.length - 1 ?
                              <Link target="_blank" rel="noopener noreferrer" key={i} to={l}><i className={`${icons[i]} me-2`}></i>{content[i]}</Link> :
                              <Link key={i} to={l}><i className={`${icons[i]} me-2`}></i>{content[i]}</Link>
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="w-auto lg:hidden">
                  <Link to={"#"} onClick={(e) => handleClickOn(e)}>
                    <svg className="navbar-burger text-gray-100" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="56" height="56" rx="28" fill="#1361ba"></rect>
                      <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-16 sm:w-4/6 sm:max-w-xs z-50" ref={refNav}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-80"></div>
          <nav className="relative z-10 px-9 pt-8 bg-gray-900  h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <Link className="inline-block" to="#">
                      <img className='w-full rounded-lg shadow-xl' src={img} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col justify-center py-16 w-full">
                <ul>
                  {
                    routes.map((l, i) => {
                      return (
                        <li className="font-bold text-transparent bg-gradient-to-r from-white to-red-800 bg-clip-text tracking-tight" key={i}>
                          {
                            i === routes.length - 1 ?
                              <Link target="_blank" rel="noopener noreferrer" key={i} to={l}><i className={`${icons[i]} me-2`}></i>{content[i]}</Link> :
                              <Link key={i} to={l}><i className={`${icons[i]} me-2`} onClick={handleClickOff}></i>{content[i]}</Link>
                          }
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="flex sm:hidden flex-col justify-center py-16 w-full">
                <ul>
                  {
                    routes.map((l, i) => {
                      return (<li className="mb-12 text-transparent bg-gradient-to-r from-white to-red-800 bg-clip-text tracking-tight" key={i}>
                        {
                          i === routes.length - 1 ?
                            <Link key={i} className='font-extrabold text-3xl flex justify-center' to={l} target="_blank" rel="noopener noreferrer">{<i key={i} className={icons[i]}></i>}</Link> :
                            <Link key={i} className='font-extrabold text-3xl flex justify-center' to={l} onClick={handleClickOff}>{<i key={i} className={icons[i]}></i>}</Link>
                        }
                      </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}


export default NavBar;