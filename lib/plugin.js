require(['gitbook', 'jQuery'], function(gitbook, $) {
  // var url = ''
  // var style = ''
  // var insertLogo = function(url, style) {
  // var header = document.querySelectorAll('.book-header');
  // header.appendChild(el);
  //   $('.book-header').append(
  // '<div style="padding-top: 14px;padding-left: 195px;font-size: large;">
  // <a href="https://oren.github.io" style="">Home</a>
  // </div>'
  //   )
  // }
  var insertHeader = function() {
    //var html =
    //'<div style="padding-top: 14px;padding-left: 195px;font-size: large;"> <a href="https://oren.github.io" style="">Home</a> </div>'

    var html = document.createElement('p')
    var node = document.createTextNode('Home')
    html.appendChild(node)
    var header = document.querySelector('.book-header')
    header.appendChild(html)
  }

  gitbook.events.bind('start', function(e, config) {
    url = config['insert-logo']['url']
    style = config['insert-logo']['style']
  })

  gitbook.events.bind('page.change', function() {
    //insertLogo(url, style)
    insertHeader()
  })
})
