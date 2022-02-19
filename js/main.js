import router from './router.js';
import home from './components/home.js';
import quote from "./components/quote.js";
import todos from "./components/todos.js";



router.register('/', home);
router.register('/home', home);
router.register('/quote', quote);
router.register('/todos', todos);


router.navigate('/');