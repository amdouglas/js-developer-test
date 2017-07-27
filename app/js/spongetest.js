/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/

jQuery(
		function ( $ ) {
			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new Content( 'app/data/content.json' );
            
            /**
             * Animation after dom elements created
             */
            function animateAccordion () {
                var titleElements = document.getElementsByClassName("accordionTitle");
                var i =0;

                do {
                    titleElements[i].onclick = function(){
                        this.classList.toggle("active");
                        //show and hide the text
                        var textElement = this.nextElementSibling;
                        if (textElement.style.maxHeight) {
                            textElement.style.maxHeight = null;
                            textElement.style.paddingTop = null;
                        } else {
                            textElement.style.maxHeight = textElement.scrollHeight + "px";
                            textElement.style.paddingTop = 15 + "px";
                        }
                    }
                    i++;
                } while (i<titleElements.length);
            };
            
			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);

			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {
                        var templates = resContent.getItem( "templates" );
                        $.each(templates, function (index, template) {
                            resContent.populateTemplates(template.selector, template.name, resContent);
                        });
                        animateAccordion();
					}
			);
		}
);
