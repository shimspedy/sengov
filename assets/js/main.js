// Add event listener to fire when DOM is loaded - equivalent to `$(document).ready()` in jQuery
document.addEventListener('DOMContentLoaded', function () {

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var elems = document.querySelectorAll('.fixed-action-btn');
  
  var instances = M.FloatingActionButton.init(elems);
  
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    opacity: '0.7',
  });


});

document.addEventListener('click', function (e) {
  if (!e.target.matches('.tab-link')) {
    return;
  }
  e.preventDefault();

  navEl = e.target;
  if ('undefined' !== typeof oldNavEl) {
    oldNavEl.parentNode.classList.remove('active');
  }
  navEl.parentNode.classList.add('active');
  oldNavEl = navEl;

  var attributes = navEl.getAttribute('tag');

  var articles = document.querySelectorAll('article');
  [].filter.call(articles, function (el) {
    el.style.display = 'block';
  });
  [].filter.call(articles, function (el) {
    return !el.classList.contains(attributes);
  }).forEach(function (el) {
    el.style.display = 'none';
  });

}, false);



// Navbar Animation
window.onscroll = function changeNav() {
  var scrollPosY = window.pageYOffset | document.body.scrollTop;

  var navBar = document.getElementById('navBar');
  if (70 < scrollPosY && 200 > scrollPosY) {
    navBar.className = 'navbar-stick';
  } else if (200 < scrollPosY) {
    navBar.className = 'navbar-stick show';
  } else if (200 >= scrollPosY) {
    navBar.className = 'navbar';
  }
};
