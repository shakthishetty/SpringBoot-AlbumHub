// assets
import { QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  QuestionOutlined
};


const albums = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'About',
      title: 'About',
      type: 'item',
      url: '/about',
      icon: icons.QuestionOutlined
    }
  ]
};

export default albums;
