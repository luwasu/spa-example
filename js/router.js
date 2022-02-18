const $main = $('main');
const routes = {};

export default {
	register: function(path, component) {
		routes[path] = component;
	},
	navigate: function(path) {
		if (location.hash !== '#' + path) {
			location.hash = path;
		} else {
			render();
		}
	}
};
function render() {
	const path = location.hash.replace('#', '');
	if (!routes[path]) {
		$main.html('<h2>404 Not Found</h2><p>Sorry, page not found!</p>'); return;
	}
	const component = routes[path];
	const $view = component.render();
	$main.empty().append($view);
	document.title = "SPA - " + component.getTitle();
}
$(window).on('hashchange', render);

