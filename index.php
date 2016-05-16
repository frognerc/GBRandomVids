<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Giant Bomb Quicklooks for Days!</title>	
		<link href='https://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400,400italic,700,700italic,800' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css">	
		<link rel="stylesheet" href="css/Styyyle.css">	
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
		<script src="http://static.giantbomb.com/js/compiled/public/videoEmbedApi.js" type="text/javascript"></script>
  </head>
  <body>
		<div id="header">
			<a href="index.html" id="logo">
				<h1>GIANT BOMB RANDOM QUICKLOOK PLAYER</h1>		
			</a>
			<div id="top_bar"></div>
		</div>
		<section>
			<br>
			<h1 id="VideoTitle">Quicklook</h1>
			<iframe data-cbsi-video width="950" height="576" id="currVideo" src="http://www.giantbomb.com/videos/embed/11137/" frameborder="0" allowfullscreen></iframe>
			<br>
			<input id='resumePause' type='image' src='Buttons_0.png' value='Play' onClick='resumeVideo();'/>
			<input id='change' type='image' src='Buttons_1.png' value='Change' onClick='pickRandomQuickLook();'/>
			<br><br><br><br><br>
			<p>&copy; 2016 PreWar0regon.</p>
		</section>
  </body>
  <script src="app.js" type="text/javascript" charset="utf-8"></script>
  <script src="videoApiControll.js" type="text/javascript" charset="utf-8"></script>
</html>