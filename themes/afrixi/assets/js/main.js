// Add event listener to fire when DOM is loaded - equivalent to `$(document).ready()` in jQuery
document.addEventListener( 'DOMContentLoaded', function() {

    // Dropdowns
    var dropdowns = document.querySelectorAll( '.dropdown-trigger' );
    var instances = M.Dropdown.init( dropdowns, {} );

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

    var el = document.querySelectorAll( '.tabs' );
    var instance = M.Tabs.init( el, {}  );

} );

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




//sound


let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};



  document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
  });
  
  document.querySelector("#play").addEventListener("click", () => {
    speech.text = document.getElementById('manifestation').value;
    window.speechSynthesis.speak(speech);
  });
  
  document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
  });
  
  document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
  });
  
  document.querySelector("#stop").addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });