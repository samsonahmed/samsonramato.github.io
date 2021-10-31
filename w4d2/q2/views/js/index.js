(function() {
    $(function() {
        const eightBall = () => {
            return new Promise((resolve, reject) => {
                $.post('/8ball', {
                    data: JSON.stringify({question: $("#question").val(),}),
                    contentType:"application/json",
                }).done(res => {
                    resolve(res.answer);
                })
                .fail(() => reject("request faield"));
            });
        };
        
        const answer = () => {
            if(!$('#question').val()) {
                alert("please enter question")
                return;
            }

            eightBall().then(res => $('#question').val(res).focus())
                        .catch(err => alert(err));
        };

        $("#submit").click((event) => {
            event.preventDefault();
            answer();
        })

        $('#question').bind("enterKey",(e) => {
            answer();
        }).on('focus', function() {
            $(this).select();
        })
    })
})();