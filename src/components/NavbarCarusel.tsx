import { Menu } from 'antd';
import {NavList} from "../hooks/paths"

const NavbarCarusel = () => {
  return (
    <div style={{ width: "100%"}}>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        items={NavList}
      />
    </div>
  );
};

export default NavbarCarusel;