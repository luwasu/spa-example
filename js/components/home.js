

export default {
    getTitle: function () {
        return "Home";
    },

    render: function () {
        const $view = $($('#tpl-home').html());

        $('[data-action=button]', $view).click(e => {
            e.preventDefault();
            getJoke();
        });
        return $view;
   }
};


function getJoke() {
    let JOKE_URL = 'https://api.chucknorris.io/jokes/random';
    return $.ajax({
        url: JOKE_URL,
        type: 'GET',
        headers: {
            'accept': 'application/json'
        }
    })
        .then(data => $('[data-action=joke]').text(data.value))
        .then(data => console.log('GET request successful'))
        .catch(err => {
            $('#joke').text('Sorry looks like something went wrong🥴. Please try again...');
            console.log('Error Code: ' + err.status + ' ' + JSON.parse(err.responseText).message)
        });
}





