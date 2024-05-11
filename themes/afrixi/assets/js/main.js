// Add event listener to fire when DOM is loaded - equivalent to `$(document).ready()` in jQuery
document.addEventListener( 'DOMContentLoaded', function() {

    // Dropdowns
    var dropdowns = document.querySelectorAll( '.dropdown-trigger' );
    var instances = M.Dropdown.init( dropdowns, {} );

// colasp
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

    //modal 
    var openmodal = document.querySelectorAll('.modal');
    var instances = M.Modal.init( openmodal, {});

    //mobile menu
    var mobilenav = document.querySelectorAll( '.sidenav' );
    var instances = M.Sidenav.init( mobilenav, {} );

    var carouselhero = document.querySelectorAll( '.carouseldesktop' );
    var instances = M.Carousel.init( carouselhero, {} );

    var carouselmobile = document.querySelectorAll( '.carousel-slider' );
    var instance = M.Carousel.init( carouselmobile, {
        fullWidth: true,
        indicators: true
    } );
 // tabs options
    var el = document.querySelectorAll( '.tabs' );
    var instance = M.Tabs.init( el, {}  );





    });


document.addEventListener( 'click', function( e ) {
    if ( ! e.target.matches( '.tab-link' ) ) {
        return;
    }
    e.preventDefault();

    navEl = e.target;
    if ( 'undefined' !== typeof oldNavEl ) {
        oldNavEl.parentNode.classList.remove( 'active' );
    }
    navEl.parentNode.classList.add( 'active' );
    oldNavEl = navEl;

    var attributes = navEl.getAttribute( 'category' );

    var articles = document.querySelectorAll( 'article' );
    [].filter.call( articles, function( el ) {
        el.style.display = 'block';
    } );
    [].filter.call( articles, function( el ) {
        return ! el.classList.contains( attributes );
    } ).forEach( function( el ) {
        el.style.display = 'none';
    } );

}, false );




