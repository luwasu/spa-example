export default {
    getTitle: function () {
        return "Todos";
    },

    render: function () {
        const $view = $($('#tpl-todos').html());
        getTodos()
            .then(todos => {
                todos.forEach(todo =>
                    $('ul', $view).append(`<li>${todo.id} <b>${todo.title}</b> ${todo.dueDate}</li>`))
            }).catch(jqXHR => {
            console.log("ERROR: ", jqXHR);
        });


        return $view;
    }
};


const authHeader = 'Basic ' + btoa('Alice:Bob97')
const BASE_URL = 'https://locher.ti.bfh.ch/todo/api/';

function getTodos() {
    return $.ajax({
        url: BASE_URL + 'todos',
        type: 'GET',
        headers: {
            'Authorization': authHeader,
            'Accept': 'application/json'
        }
    })

}