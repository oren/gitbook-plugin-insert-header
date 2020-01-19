require(['gitbook'], function(gitbook, $) {
  var insertHeader = function() {
    var html =
      '<div style="padding-top: 14px;padding-left: 195px;font-size: large;"> <a href="https://oren.github.io" style="">Home</a> </div>'
    var header = document.querySelector('.book-header')
    header.insertAdjacentHTML('beforeend', html)
  }

  gitbook.events.bind('start', function(e, config) {
    url = config['insert-logo']['url']
    style = config['insert-logo']['style']
  })

  gitbook.events.bind('page.change', function() {
    insertHeader()
  })
})
