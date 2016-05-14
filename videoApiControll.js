var gVideoId = 0;
var gApi = 0;
var timer = 0;
var intervalID = 0;

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
								
								console.log(quickLooks[currentVideoIndex].split(',')[1]);
								setTimeout('seekVideo(1)', 1000)
								setTimeout(playVideo, 2000)
								setTimeout(alertWhenFinished, 10000);
								
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

/*
function startTimer(){
	timer += 1000;
	$('#timestamp').text(timer / 1000);
}
*/

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
			pickRandomQuickLook();
		},

		function(error)
		{
			alert('Ooops! ' + error);
		}
	);
}