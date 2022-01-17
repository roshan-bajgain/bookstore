import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className='same'>
        <h1 className='heading'>Book Store CMS</h1>
        <ul>
            <Link to='/'>Books</Link>
            <Link to='/categories'>Categories</Link>
        </ul>
    </nav>
);
export default Nav;