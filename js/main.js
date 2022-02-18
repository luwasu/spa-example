import router from './router.js';
import home from './components/home.js';



router.register('/', home);
router.register('/home', home);


router.navigate('/');