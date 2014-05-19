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