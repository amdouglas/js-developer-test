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
    
            export class ContentInstance {
                
                constructor (strDataLocation) {
                    this.objContent = {},
                        arrOnReady = [],
                        blReady = false;
                    
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
                }
                
                 /**
				 * Function to populate templates
				 */
                populateTemplates( id, templateName, resContent ) {
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
                onReady( funDoOnReady ) {
					if( blReady ) {
						funDoOnReady.call();
					} else {
						arrOnReady.push( funDoOnReady );
					}
				};
                
                /**
				 * Get an item from the content data
				 */
				getItem( intItem ) {
					return objContent[intItem];
				};
            }
    
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
