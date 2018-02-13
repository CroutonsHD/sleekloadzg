/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo_current.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Zealot Gaming";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"a85ba27bd254fd08d80cf6f0be33d37c.jpg",
	"gaming-wallpapers-1920x1080-HD9.jpg",
	"halo-3-odst-03-artwork.jpg",
	"halo-34357-1920x1080.jpg",
	"halo-reach-16162.jpg",
	"T3WAlH.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{ogg: "Halo 2 Anniversary OST - Breaking the Covenant.ogg", name: "Breaking the Covenant"},
	{youtube: "lviYhyN_VKI", name: "Follow in Flight"},
	{youtube: "r_Wz4HVn2l8", name: "Halo Theme"},
	{youtube: "2nDzLtCGoFo", name: "Spirit of Fire"},
	{youtube: "SBjKWKN6jaI", name: "Never Forget"},
	{youtube: "tnEb5Teu5b4", name: "Impart"},
	{youtube: "DNWaJU8nNno", name: "Finish the Fight"},
	{youtube: "phk7di38iv8", name: "Isignificatia"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 20;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Welcome to Zealot Gaming. We hope you enjoy your stay!",
	"Thanks for joining us!",
	"Arbiter: Kill me or release me, parasite. But do not waste my time with talk!",
	"Sgt. Johnson: Now listen up! Back in my day, we didn't have fancy tanks! We had sticks. Two sticks and a rock for the entire platoon! And we had to share the rock! You should consider yourself very lucky marines!",
	"Sgt. Johnson: [mans a machine gun] Oh, I *know* what the ladies like.",
	"SpecOps Leader: You are the Arbiter. The will of the Prophets. But these are my Elites. Their lives matter to me, yours does not.",
	"Marine: Dear Sarge, having a lovely time kicking ass in outer space - wish you were here!",
	"Marine: Heh! I ran out of grenades and accidently threw my lunch.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
