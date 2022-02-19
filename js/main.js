import router from './router.js';
import home from './components/home.js';
import quote from "./components/quote.js";



router.register('/', home);
router.register('/home', home);
router.register('/quote', quote);


router.navigate('/');