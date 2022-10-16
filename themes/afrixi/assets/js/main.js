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
onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {


        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
        var flag = false;


        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.getElementById('manifestation').textContent);
                utterance.voice = getVoices()[0];
                utterance.onend = function(){
                    flag = false; playEle.className = pauseEle.className = ''; stopEle.className = 'stopped';
                };
                playEle.className = 'played';
                stopEle.className = '';
                synth.speak(utterance);
            }
             if (paused) { /* unpause/resume narration */
                playEle.className = 'played';
                pauseEle.className = '';
                resume();
            } 
        }

        function onClickPause() {
            if(speaking && !paused){ /* pause narration */
                pauseEle.className = 'paused';
                playEle.className = '';
                pause();
            }
        }

        function onClickStop() {
            if(speaking){ /* stop narration */
                /* for safari */
                stopEle.className = 'stopped';
                playEle.className = pauseEle.className = '';
                flag = false;
                cancel();

            }
        }

    }

    else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}

