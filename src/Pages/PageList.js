import ConstructionPage from './ConstructionPage/ConstructionPage';
import HomePage from './HomePage/HomePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const pages = [
    {path:"/construction",exact:false,component:ConstructionPage},
    {path:"/",exact:true,component:HomePage},
    {path:"*",exact:false,component:NotFoundPage}
];

export default pages;