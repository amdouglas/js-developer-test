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
 JSON parser and event handler
 =====================================================
*/

(function( window, $ ) {
			var ContentInstance = function( strDataLocation ) {
				var objContent = {},
						arrOnReady = [],
						blReady = false;

				/**
				 * Get the JSON file
				 */
				$.getJSON( strDataLocation,
						function( objResponse ) {
							objContent = objResponse;
							blReady = true;

							/**
							 * Execute all the ready functions once loaded
							 */
							$.each( arrOnReady,
									function( intIndex, funDoOnReady ) {
										funDoOnReady.call();
									}
							);
						}
				);
                
                /**
				 * Function to populate templates
				 */
                this.populateTemplates = function (id, templateName, resContent) {
                    try {
                        var strSource = $( id + '-template' ).html(),
                            resTemplate = Handlebars.compile( strSource ),
                            strHTML = resTemplate( resContent.getItem( templateName ) );
                        $( id ).append( strHTML );
                    } catch(e) {
                        console.log('The ID: ' + id + ' is not valid: ' + e);
                    }
                };

				/**
				 * Register a function to execute once loaded
				 */
				this.onReady = function( funDoOnReady ) {
					if( blReady ) {
						funDoOnReady.call();
					} else {
						arrOnReady.push( funDoOnReady );
					}
				};

				/**
				 * Get an item from the content data
				 */
				this.getItem = function( intItem ) {
					return objContent[intItem];
				};

				return this;
			};

			/**
			 * Add the ContentInstance method to the global scope
			 */
			window.Content = ContentInstance;
		})( window, jQuery );

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░
░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░
░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░
░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░
░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░
░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░
░░░█░░█▄▄░░░█░░░▀▄░░░░░▐░█░░░
░░▐▌░░█▀▀░░▄▀░░░░░▀▄▄▄▄▀░░█░░
░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░
░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░
░░▐▌░░░░░░░░░░░░░░░▄░░░░░░▐▌░
░░▐▌░░░░░░░░░▄░░░░░█░░░░░░▐▌░
░░░█░░░░░░░░░▀█▄░░▄█░░░░░░▐▌░
░░░▐▌░░░░░░░░░░▀▀▀▀░░░░░░░▐▌░
░░░░█░░░░░░░░░░░░░░░░░░░░░█░░
░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░
░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    
 */
