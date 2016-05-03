<!DOCTYPE html>

<!--Giant Bomb API key: 1ad88f4d213c490d695231da3ce9e9636eebf8ad  -->
<?php include "functions.php"; ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>Giant Bomb Quicklooks for Days!</title>	
		<link href='https://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400,400italic,700,700italic,800' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css">	
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
  </head>
  <body>
		<header>
			<a href="index.html" id="logo">
    		<h1>Giant Bomb Quicklooks for Days!</h1>		
			</a>
		</header>
		<div id="wrapper">
			<section>
				<input type='button' value='Play' onClick='playVideo();'/>
				<input type='button' value='Pause' onClick='pauseVideo();'/>
				<input type='button' value='Resume' onClick='resumeVideo();'/>
				<input type='button' value='Jump 1 minute in' onClick='seekVideo();'/>
				<input type='button' value='Alert when finished' onClick='alertWhenFinished();'/>

				<br/><br/>
				<input type='button' value='Get Timestamp' onClick='getTimestamp();'/>
				Current Timestamp: <span id='timestamp'>0</span>
				
				<button id="ChangeVideo">Change Video</button>
				<iframe data-cbsi-video width="1280" height="720" id="currVideo" src="http://www.giantbomb.com/videos/embed/11137/" frameborder="0" allowfullscreen></iframe>
				<p id="VideoLink"></p>
				</div>
			</section>
			<footer>
				<p>&copy; 2016 PreWar0regon.</p>
			</footer>
		</div>
  </body>
  <script src="http://static.giantbomb.com/js/compiled/public/videoEmbedApi.js" type="text/javascript"></script>
  <script src="app.js" type="text/javascript" charset="utf-8"></script>
  <script src="videoApiControll.js" type="text/javascript" charset="utf-8"></script>
</html>