import {FaShoppingCart} from 'react-icons/fa'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const len = useSelector((state)=>state.cart.length)
  return (
  <div>
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
      <NavLink to='/'>
        <div className='ml-5'>
        <img src={logo} className="h-14" alt="img"/>
        </div>
        
      </NavLink>
      
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <div className='relative'>
            <FaShoppingCart className='text-2xl'/>
            {
              len>0?(<span className='absolute -top-2
              -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid 
              justify-items-center 
              animate-bounce text-white'>{len}</span>):(<span></span>)
            }
          </div>
        </NavLink>
        
      </div>
    </nav>
  </div>);
};

export default Navbar;
