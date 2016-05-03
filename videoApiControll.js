$(document).ready(

	function ()
	{
		//
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

function seekVideo()
{
	gApi.setCurrentTimeStamp(gVideoId, 60,

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