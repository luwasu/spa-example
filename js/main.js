import router from './router.js';
import home from './components/home.js';
import quote from "./components/quote.js";
import todos from "./components/todos.js";
import morse from "./components/morse.js";



router.register('/', home);
router.register('/home', home);
router.register('/quote', quote);
router.register('/todos', todos);
router.register('/morse', morse);


router.navigate('/');