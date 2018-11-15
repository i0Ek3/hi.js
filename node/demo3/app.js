// 
// app.js
// @ianpasm(kno30826@gmail.com)
// 2018-07-31 18:08:31
// 

app.get('/', function (req, res, next) {  
    superagent.get('https://vk.com/').end(function (err, sres) {  
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list.topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
        
        res.send(items);
    });
});

