import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        exact
        activeClassName="lg:py-7 py-2 block text-primary lg:border-b-2 border-primary hover:text-primary uppercase"
        onClick={props.onClick}
        className="lg:py-7 py-2 block lg:border-b-2 border-surface hover:text-onSurface uppercase"
        to={props.to}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
