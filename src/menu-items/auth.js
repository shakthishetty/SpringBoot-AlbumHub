// assets
import { LoginOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  LogoutOutlined
};
const isLoginEnabled = localStorage.getItem('token');


const caseLogin = [{
  id: 'logout1',
  title: 'Logout',
  type: 'item',
  url: '/logout',
  icon: icons.LogoutOutlined,
  target: true
}]

const caselogout = [{
        id: 'Login',
        title: 'Login',
        type: 'item',
        url: '/login',
        icon: icons.LoginOutlined,
        target: true,
  },
  {
        id: 'register1',
        title: 'Register',
        type: 'item',
        url: '/register',
        icon: icons.ProfileOutlined,
        target: true,
  }]


const auth = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    isLoginEnabled
    && caseLogin[0],
    !isLoginEnabled
    && caselogout[0],
    !isLoginEnabled
    && caselogout[1]
  ].filter(Boolean) // Remove falsy values (pages with condition false)
};

export default auth;
