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
var l_serverImage = "7ab58e786f73dc8357072c0fa2035dec.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

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
	"awesomeeliteart-99cb59ccf29d40e5afbe1b001241a2f3.jpg",
	"halo_wars_2_trailer__escape_by_daroz-db012er.jpg",
	"halo-wars-2-operation-spearbreaker-dlc-hd-wallpaper-1920x1080.jpg",
	"halo-2-into-the-action.jpg",
	"Halo-1920x1080-wallpaper-27.jpg",
	"halo-wars-02.jpg",
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
        {youtube: "1ZYbU82GVz4", name: "Relaxing Music"},
	{youtube: "hQrkuO0k6qs", name: "Asphalt and Ablution"},
        {youtube: "yWh9l8RSkPk", name: "Difference for Darkness"},
        {youtube: "R2HS-xmHOdI", name: "Unforgotten Memories"},
        {youtube: "PvHPBcVTl8U", name: "Bad Here Day"} 
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 9;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Welcome to Zealot Gaming. We hope you enjoy your stay!",
	"Make friends, check out our forums, and have fun!",
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
