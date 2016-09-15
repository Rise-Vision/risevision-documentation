---
layout: user-post
title:  "Displays"
date:   2016-09-15 10:28:00
category: user/
order: 2

---
A Display is a screen that is connected to a [Media Player](#media-player-anchor) (a computer), and that Media Player has [Rise Player](#rise-player-anchor) software installed on it. Rise Player software is uniquely addressed by a [Display ID](#displayID-anchor). All four together (the screen, [Media Player](#media-player-anchor), [Rise Player](#rise-player-anchor) and the [Display ID](#displayID-anchor)) together make a “Display” within Rise Vision.

###How do I add a Display?
You can add a  Display to your Company and then install Rise Player on your [Media Player](#media-player-anchor) using a [Display ID](#displayID-anchor).  You also have the option to install Rise Player, and use a [Claim ID](#claimID-anchor) to add a Display from your [Media Player](#media-player-anchor). Either way works, but the second approach is more commonly used when adding many Displays at the same time.

<style type="text/css">
      .video-box {
        border: 1px solid #e6e6e6;
        background: #FFF;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.13);
      }
</style>

<div class="video-box text-center">
  <img style="width: auto;" src="https://s3.amazonaws.com/Rise-Images/Animations/addadisplay.gif">
</div>

<span id="displayID-anchor"></span>
####To add a Display using Display ID
From [apps.risevision.com](https://apps.risevision.com/) click on the **[+ Add Display]** button and follow the on-screen instructions to set up your Media Player.

<span id="claimID-anchor"></span>
####To add a Display using Claim ID
From [apps.risevision.com](https://apps.risevision.com/), under your Account Settings you will find your Company’s unique [Claim ID](#claimID-anchor). Be sure to make a note of it. From the Rise Player installation screen on your Media Player, choose to install with your [Claim ID](#claimID-anchor). Enter the ID and give your Display a name. It will be automatically added to Rise Vision, under your Company.

<span id="media-player-anchor"></span>
###What is a Media Player?
A Media Player is a dedicated computer that runs Rise Player. It renders your Presentations and Web Pages on your Display and it must have an Internet connection at all times.

###What are the hardware requirements to run Rise Player?
Consider the following when choosing Media Player hardware:

| Hardware Component | Good (I only need to show text and images) | Better (I need to show some video content) | Best (I need to show a lot of videos and dynamic content) |
| ---- | ---- | ---- | ---- |
| Processor | Celeron or equivalent processor | Intel Core i3 or equivalent processor | Intel Core i5 or equivalent processor |
| Memory | 4GB | 6GB + | 8GB + |
| Storage | 32GB | 32GB + | 64GB + |
| Operating System | Windows 10 Professional 32 bit / 64 bit, or Linux Ubuntu 32bit / 64bit | Windows 10 Professional 32 bit / 64 bit, or Linux Ubuntu 32bit / 64bit | Windows 10 Professional 32 bit / 64 bit |
| Examples | [Windows](https://store.risevision.com/product/200/intel-nuc-celeron-windows) and [Linux](https://store.risevision.com/product/203/intel-nuc-celeron-linux) | [Windows](https://store.risevision.com/product/201/intel-nuc-i3-windows) and [Linux](https://store.risevision.com/product/204/intel-nuc-i3-linux) | [Windows](https://store.risevision.com/product/202/intel-nuc-i5-windows) |


###Do you sell preconfigured Media Players?
We have preconfigured [Media Players](#media-player-anchor) available in our Store specifically for use with Rise Vision. All you need to do is turn them on and enter your [Claim ID](#claimID-anchor) or [Display ID](#displayID-anchor).


<div class="col-xs-12 home-pricing home-pricing-2" style="padding-top: 0px; margin-bottom: 20px;">
    <a href="https://store.risevision.com/products/?cat=Media%20Players" target="_blank" style="text-decoration: none;">
    </a>
    <div class="content-box bundle-picture-bg remove-bottom">
        <a href="https://store.risevision.com/products/?cat=Media%20Players" target="_blank" style="text-decoration: none;">
        </a>
        <div class="content-box-body" style="padding:16px 33px">
            <a href="https://store.risevision.com/products/?cat=Media%20Players" target="_blank" style="text-decoration: none;">
            </a>
            <div class="row">
                <a href="https://store.risevision.com/products/?cat=Media%20Players" target="_blank" style="text-decoration: none;">
                </a>
                <div class="col-md-12">
                    <a href="https://store.risevision.com/products/?cat=Media%20Players" target="_blank" style="text-decoration: none;">
                        <h1>MEDIA <br>PLAYERS</h1>
                        <h3 class="add-bottom player-text">We have a variety of preconfigured Media <br>Players for any 
project.</h3>
                    </a><a href="https://store.risevision.com/products/?cat=Media%20Players" class="btn btn-white" target="_blank">View in Store <i class="fa fa-chevron-circle-right icon-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<span id="rise-player-anchor"></span>
###What is Rise Player?
Rise Player is software that runs on your Media Player (a dedicated computer), and it renders your Presentations and Web Pages on your Display.

###What operating systems does Rise Player support?
You can install the Rise Player on any operating system, but we only recommend and support Windows 7 and 10, or Ubuntu 14.04.

Rise Player is available for [Windows 32-bit](http://install-versions.risevision.com/installer-win-32.exe), [Windows 64-bit](http://install-versions.risevision.com/installer-win-64.exe), [Ubuntu 32bit](http://install-versions.risevision.com/installer-lnx-32.sh) and [Ubuntu 64bit](http://install-versions.risevision.com/installer-lnx-64.sh)

###How do I install Rise Player?
Pick your operating system below, download the applicable installer and copy it to the Media Player that you intend to use.

####Windows Installation
Run the Rise Player installer on your dedicated Media Player and follow the on-screen setup instructions.

<a href="http://install-versions.risevision.com/installer-win-32.exe"><button class="btn btn-primary" ng-click="documentationTracker('Player Download')">Download Windows 10 [32-bit]</button></a>
<a href="http://install-versions.risevision.com/installer-win-64.exe"><button class="btn btn-primary" ng-click="documentationTracker('Player Download')">Download Windows 10 [64-bit]</button></a>

####Ubuntu Installation
Open a terminal window, navigate to the directory that contains the Rise Player installer, and run the following commands  (do not run the installer as root or via sudo):

```
chmod +x installer-lnx-32.sh
./installer-lnx-32.sh

OR

chmod +x installer-lnx-64.sh
./installer-lnx-64.sh
```
Once entered, follow the on-screen setup instructions.

<a href="http://install-versions.risevision.com/installer-lnx-32.sh">
    <button class="btn btn-primary" ng-click="documentationTracker('Player Download')">Download Ubuntu 14.04 LTS [32-bit]</button>
</a>
<a href="http://install-versions.risevision.com/installer-lnx-64.sh">
    <button class="btn btn-primary" ng-click="documentationTracker('Player Download')">Download Ubuntu 14.04 LTS [64-bit]</button>
</a>

###How do I stop Rise Player?
Press **[CTRL+SHIFT+Q]** to stop Rise Player at any time.

###Does Rise Player support extended desktop over multiple displays?
Rise Player for Windows does support extended desktop over multiple displays. In order to utilize your extended desktop, you will need to take the following steps:

1. Stop Windows player by pressing **[CTRL+SHIFT+Q]**
2. Navigate to C:\Users\%USERNAME%\AppData\local\rvplayer, open RiseDisplayNetworkII.ini with Notepad.
3. Enter the following in two new lines. *"xxxx"* should be the desired resolution of your desktop.
    - **screenwidth=xxxx**
	- **screenheight=xxxx**
4. Save and close RiseDisplayNetworkII.ini, and restart your Player.

###What if I want to enable pinch to zoom on my player?
Pinch to zoom is disabled by default in Rise Player. You can enable pinch to zoom with the following steps.

1. Stop player by pressing **[CTRL+SHIFT+Q]**
2. In Windows Navigate to C:\Users\%USERNAME%\AppData\local\rvplayer, open RiseDisplayNetworkII.ini **OR** In Ubuntu Navigate to /home/%user%/rvplayer, open RiseDisplayNetworkII.ini
3. Enter the following in a new line
	- **enablepinchtozoom=true**
4. Save and close RiseDisplayNetworkII.ini, and restart your Player.

###What if I have a Firewall / Proxy?
Please note that if you have a Firewall or Proxy, you may need to configure it to allow our service on port 80 (http) and 443 (https) for the following addresses:

- rvashow2.appspot.com
- rvashow.appspot.com
- rvaserver2.appspot.com
- storage-dot-rvaserver2.appspot.com
- store.risevision.com
- commondatastorage.googleapis.com
- googleapis.com
- accounts.google.com
- talkgadget.google.com
- s3.amazonaws.com
- p.jwpcdn.com/6/5/jwpsrv.js (Only necessary if your Presentation includes videos)
- rackcdn.com

And if you are using [Rise Priority Support](https://store.risevision.com/product/14/rise-priority-support) and taking advantage of our remote diagnostic and correction service we will also need port 8041 open for the address connect.risevision.com.

###Can I run Rise Player on a Raspberry PI?
Raspberry Pi installation is a community-supported initiative dubbed "Riseberry". You can find more information on it [here](https://community.risevision.com/rise_vision_inc/topics/community-supported-raspberry-pi-2-instructions-riseberry).

###Can I run Rise Player on Android?
Third parties provide Android Media Players, and they can be found on our Store. A third party Android Player is available from the Google Play Store [here](https://play.google.com/store/apps/details?id=com.myrise.riseplayer&hl=en).

###Rise Player on Chrome OS
**Rise Player on Chrome OS has been released as an [open source project](https://github.com/Rise-Vision/player-chromeapp) to the [community](https://community.risevision.com/rise_vision_inc) and it is no longer directly supported or maintained by Rise Vision at this time.**

If you want to use Rise Vision on Chrome OS we recommend that all Chrome OS devices be registered under Chrome device management as it will allow Rise Player to launch automatically when the device is turned on. We recommend that you restrict your Chrome version to one major release behind the current version to ensure your Displays are not adversely impacted by an update and that you thoroughly test your Displays on the new version prior to upgrading.

From Google Device Management create an Organizational Unit for your Digital Signage Players and configure the settings as per the following:

1. Set **Power Management** to *Do not allow device to sleep/shut down when on sign in screen*
2. Set **Sign-in Screen** to *Never show user names and photos*
3. Configure **Kiosk Apps** by adding the [Rise Player Application](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/ilcmohdkjfcfekfmpdppgoaaemgdmhaa)
 1. Click **Manage Kiosk Applications**
 2. Select **Chrome Web Store**
 3. Search for *ilcmohdkjfcfekfmpdppgoaaemgdmhaa*
4. Configure Kiosk Settings as per the following:
 1. Set **Public Session Kiosk** for *Do not allow Public Session Kiosk*
 2. Configure Rise Player as the **Auto-Launch Kiosk App**
5. Set **Auto Update** to *Allow auto-updates*
6. Set **Restrict Google Chrome version to at most** to *48.**.
7. Set **Randomly scatter auto-updates over** to *None*
8. Set **Auto reboot after updates** to *Disallow auto-reboots*
9. Set **Release Channel** to *Move to Stable Channel*

Once configured, power on your Chromebox, connect it to your network, and at the login screen press Control+Alt+E on your keyboard, and then type in the enrollment email and password associated with your Google account. If an enrollment prompt does not appear, please wipe your Chromebox and repeat this step.

Upon startup you will be prompted to enter the Display ID that was assigned to the Display that was set up in Rise Vision.

To stop Rise Player, power cycle your Chromebox. When the Rise Player application is loading, press the key combination of Control + Alt + S on your keyboard to boot into Chrome OS instead of Rise Player.

###How do I create my own Rise Player?
If you wish to create your own version of Rise Player, or contribute to ours, you can find our open source repositories on GitHub below:

- Player [https://github.com/Rise-Vision/rise-player](https://github.com/Rise-Vision/rise-player)
- Cache [https://github.com/Rise-Vision/rise-cache](https://github.com/Rise-Vision/rise-cache)
- Installer [https://github.com/Rise-Vision/rise-launcher-electron](https://github.com/Rise-Vision/rise-launcher-electron)
- Viewer [https://github.com/Rise-Vision/viewer](https://github.com/Rise-Vision/viewer)

<style>
.home-pricing {
	color: white;
	padding-bottom: 0;
	background: none;
}
.home-pricing .btn{
margin-top:0px;
}

.home-pricing h1 {
  font-weight:800;
  color:#4ab767;
  size:72px;
  padding:0;
  margin:0;
  margin-bottom:5px;
}

.bundle-text {
   font-weight:200;
   color:#222;
   size:36px;
   width:60%;
   padding:0;
   margin:0;
   margin-bottom:10px;
}

.player-text {
   font-weight:200;
   color:#fff;
   size:36px;
   width:55%;
   padding:0;
   margin:0;
   margin-bottom:10px;
}

.media-picture-bg {
background-image:url('https://s3.amazonaws.com/Rise-Images/Experimental/mediaplayerBanner_001.png');
}
.bundle-picture-bg {
background-image:url('https://s3.amazonaws.com/Rise-Images/Experimental/mediaplayerBanner_002.png');
}

.media-picture-bg {
  background-color:#e9ffed;
  background-size: auto 100%;
  background-position: 100% 0 !important;
  background-repeat: no-repeat;
}  

.bundle-picture-bg {
  background-color:#3c3c3c;
  background-size: auto 130%;
  background-position: 89% 41% !important;
  background-repeat: no-repeat;
}  


@media screen and (max-width: 1199px) {
  .media-picture-bg {
      background-position: 90% 0 !important;
  }  
}

@media screen and (max-width: 1199px) {
  .bundle-picture-bg {
      background-position: 93% 46% !important;
  }  
}

@media all and (max-width: 490px) {
  .media-picture-bg {
   background-size: 44%;
   background-position: 96% 53% !important;
  background-color:#e9ffed !important
  }  
}

@media all and ( max-width: 490px ) {
 .bundle-picture-bg {
    background-size: 44%;
   background-position: 96% 53% !important;
    background-color:#3c3c3c !important;
  }
}

div#riseDownloadPlayer a:last-child .btn {
    margin-top: 8px;
}

/*@media (max-width: 992px) {
.ryan-picture-bg {
background-image:none;
background-size:cover;
}
}*/
</style>


