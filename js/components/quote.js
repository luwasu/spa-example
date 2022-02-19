

export default {
    getTitle: function () {
        return "Quote";
    },

    render: function () {
        const $view = $($('#tpl-quote').html());

        $('[data-action=button]', $view).click(e => {
            e.preventDefault();
            getQuote();
        });

        return $view;
    }
};

const quoteElement = '[data-action=quote]';

function getQuote() {
    let QUOTE_URL = 'https://locher.ti.bfh.ch/services/quote?JSON';
    return $.ajax({
        url: QUOTE_URL,
        type: 'GET',
        headers: {
            'accept': 'application/json'
        }
    })
        .then(data => $(quoteElement).text(data.quote + ' -' + data.author))
        .then(data => console.log(' GET request successful'))
        .catch(err => {
            $(quoteElement).text('Sorry looks like something went wrong🥴. Please try again...');
            console.log('Error Code: ' + err.status + ' Text: '+err.responseText);
        });
}

