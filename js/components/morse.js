export default {
    getTitle: function () {
        return "Morse";
    },

    render: function () {
        const $view = $($('#tpl-morse').html());

        $('[data-action=button]', $view).click(e => {
            e.preventDefault();
            getTextToMorse(getInputText())
        });

        return $view;
    }
};


function getInputText() {
    console.log('I have arrived 🧐')
    const form = document.forms[0]
    return form.text.value
}

function getTextToMorse(input) {
    let QUOTE_URL = 'https://locher.ti.bfh.ch/services/morse?text=';
    return $.ajax({
        url: QUOTE_URL + input,
        type: 'GET',
    })
        .then(data => {
            $('[data-action=morse]').text('Text to Morse Code: ' + data)
            return data;
        } )
        .then(data => console.log(data))
        .catch(err => {
            $('[data-action=output]').text('Sorry looks like something went wrong🥴. Please try again...');
            console.log('Error Code: ' + err.status + ' Text: ' + err.responseText);
        });
}




