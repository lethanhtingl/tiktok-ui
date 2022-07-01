import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
