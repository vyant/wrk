$(function() {
    $("#search_music").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&hl=en&q=" + request.term,
                cache: !0,
                dataType: "jsonp",
                async: !0,
                crossDomain: !0,
                method: "GET",
                headers: {
                    "accept": "application/json",
                },
                success: function(data) {
                    response($.map(data[1], function(value, key) {
                        return {
                            label: value,
                            value: value,
                        }
                    }))
                }
            })
        },
        select: function(event, ui) {
            var query = ui.item.label;
            query = query.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s\s+/g, ' ');
            query = encodeURI(query);
            $(location).attr("href", "https://joox.club/search?q="+ query)
        },
        minLength: 2,
        delay: 100,
    })
})