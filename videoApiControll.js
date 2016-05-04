var gVideoId = 0;
var gApi = 0;
var timer = 0;
var stop_timer = 0;

$(document).ready(

	function ()
	{
	
		$('iframe[data-cbsi-video]').each(

			function(i,e)
			{
				e.addEventListener('load',

					function()
					{
						var api = new CBSiVideoEmbedApi();
						$.data(this, 'cbsi-embed-api', api);

						api.init(this,

							function(result)
							{
								// The code is here is a hack, you need to make better...
								if(i == 0){
									gVideoId = result[0].id;
									gApi = $.data(document.getElementById('currVideo'), 'cbsi-embed-api');
								}
								
								//stop_timer = 1;
								timer = 0;
								//$('#timestamp').text(timer);
								startTimer();
								//seekVideo(timer / 1000);
								playVideo();
								
							},

							function(error)
							{
								alert('Oops! API returned error ' + error);
							}
						);
					}
				);
			}
		);
	}
);

function startTimer(){
	if(stop_timer == 0){
		timer += 1000;
		$('#timestamp').text(timer / 1000);
		setTimeout(startTimer,1000);
	}
}

function playVideo()
{
	gApi.play(gVideoId,

		function()
		{
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}

function pauseVideo()
{
	gApi.pause(gVideoId,

		function()
		{
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}

function resumeVideo()
{
	gApi.resume(gVideoId,

		function()
		{
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}

function seekVideo(timeStamp)
{
	gApi.setCurrentTimeStamp(gVideoId, timeStamp,

		function()
		{
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}

function getTimestamp()
{
	gApi.getCurrentTimeStamp(gVideoId,

		function(timeStamp)
		{
			$('#timestamp').text(timeStamp); // yah yah, selector reuse. this is a crappy sample, edgework sucks...
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}


function alertWhenFinished()
{
	gApi.ended(gVideoId, true,

		function()
		{
			alert('its over!');
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}