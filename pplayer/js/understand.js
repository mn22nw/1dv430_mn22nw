adapter = new ApiAdapter[ apapterClass ](settings, {
                        onReady: function( e ) {
                            that.startTimer();
                        },
                        onStateChange: function( e ) {
                            if ( e.data === adapter.state.PLAYING ) {
                                $playBtn.hide();
                                $pauseBtn.show();
                                playingTrigger || that.onPlaying();
                                playingTrigger = true;
                            } else {
                                $playBtn.show();
                                $pauseBtn.hide()
                            }
                        }
                    });
                    

 $boundingBox = settings.boundingBox
 
 var  tpls = {
                playpause:
                    '     <div class="button">' +
                    '        <button class="pause"><!-- --></button>' +
                    '        <button class="play"><!-- --></button>' +
                    '    </div>',
                progress:
                    '    <div><div class="progressBar"><div><!-- --></div></div></div>',
                quality:
settings



$quality dropdown för att kunna välja kvalité.