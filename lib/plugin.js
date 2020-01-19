require(['gitbook', 'jQuery'], function(gitbook, $) {
  var url = ''
  var style = ''
  var insertLogo = function(url, style) {
    $('.book-header').append(
			'<div style="padding-top: 14px;padding-left: 195px;font-size: large;">
				<a href="https://oren.github.io" style="">Home</a>
			</div>'
    )
  }
  gitbook.events.bind('start', function(e, config) {
    url = config['insert-logo']['url']
    style = config['insert-logo']['style']
  })

  gitbook.events.bind('page.change', function() {
    insertLogo(url, style)
  })
})
