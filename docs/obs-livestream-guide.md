# Sunday livestream guide: verse captions and YouTube + Facebook together

This covers two things for the media team:

1. Showing Bible verses and name cards on the stream with the Menorah verse overlay.
2. Going live on YouTube and Facebook at the same time from one OBS.

---

## Part 1: Verse captions in OBS

The overlay is two web pages that ship with the church website:

| Page | Address | What it is |
|---|---|---|
| Control panel | https://menorah-faith-chapel.vercel.app/obs/control.html | Where the operator types verses and presses Show / Hide |
| Overlay | https://menorah-faith-chapel.vercel.app/obs/overlay.html | What viewers see. Added to OBS as a Browser source |

The King James Version is built in, so verse lookup needs no outside service.

### Quick setup: import the ready-made OBS files (Windows)

Two files on the website set most of this up for you:

- **Scene collection**: https://menorah-faith-chapel.vercel.app/obs/setup/Menorah-Sunday-scenes.json
  This gives you a *Service* scene with the camera, the church mixer audio and the *Verses* overlay already stacked in the right order.
- **Profile**: https://menorah-faith-chapel.vercel.app/obs/setup/Menorah-Sunday-profile.zip
  It holds a 1080p canvas, 720p 30 fps output, 3000 kbps CBR with 2-second keyframes, 48 kHz audio, and YouTube (RTMPS) with an empty stream key.

1. Download both. Unzip the profile, which gives a folder called `Menorah Sunday`.
2. In OBS: **Profile → Import**, then choose the `Menorah Sunday` folder. Switch to it under **Profile**.
3. **Scene Collection → Import**, choose `Menorah-Sunday-scenes.json`, tick it, click Import, then pick it under **Scene Collection**.
4. Double-click **Camera** and pick your camera. Double-click **Church Mixer** and pick the sound card or USB interface the mixer is plugged into.
5. *Settings → Stream*: paste the YouTube stream key.
6. Add the control panel dock: step 2 under *One-time setup* below.
7. For Facebook as well, install the plugin in Part 2, Option A.

On a Mac, delete the *Camera* and *Church Mixer* sources after importing and add them again with **+ → Video Capture Device** and **+ → Audio Input Capture**.

### One-time setup in OBS (OBS Studio 28 or newer)

If you used the quick setup, you only need step 2 here.


1. **Add the overlay to your scene**
   - In the *Sources* box, click **+** → **Browser**, and name it `Verses`.
   - URL: `https://menorah-faith-chapel.vercel.app/obs/overlay.html`
   - Width `1920`, Height `1080`.
   - Leave *Custom CSS* empty, and leave **Shutdown source when not visible** unticked.
   - Click OK, and make sure `Verses` sits **above** your camera in the source list.
   - Add the same source to every scene where verses should be able to appear (right-click → *Copy*, then *Paste (Reference)* in the other scene).

2. **Dock the control panel inside OBS**
   - Menu **Docks** → **Custom Browser Docks…**
   - Dock Name: `Verses`, URL: `https://menorah-faith-chapel.vercel.app/obs/control.html`
   - Click Apply. A *Verses* panel appears; drag it where it is comfortable, or pop it out onto a second monitor.

   > The control panel must run **inside OBS as a dock** for it to talk to the overlay. Opening control.html in Chrome or Edge will not control the OBS overlay, because they are different browsers.

3. **Set your video canvas to 1920×1080** (*Settings → Video → Base Resolution*). If your canvas is 1280×720, still set the browser source to 1920×1080 and then right-click it → *Transform* → *Fit to screen*.

### Using it on Sunday

- Type a reference in the search box and press **Enter**. Short forms work: `jn 3:16`, `1 cor 13:4-7`, `Ps 23`, `Rom 8 28`, `I John 1:9`.
- Check the preview, then press **SHOW ON STREAM** (or **Enter** when you're not typing in a box).
- **Esc** hides it. **← / →** step to the previous / next verse; while a verse is showing, the next one goes straight to the stream.
- A whole chapter or a long passage becomes one slide per verse. A short passage (up to 4 verses) shows as one slide; untick *Show a short passage as one slide* to step through verse by verse.
- **Service plan**: before the service, type the day's references one per line (get them from the pastor). Each becomes a button, so during the sermon you just click.
- **Name card**: shows a name and title, e.g. *Apostle Isaack Muriungi / Senior Pastor*, or a sermon title. Save the ones you use every week.
- **Look**: switch between a lower-third bar and full screen, put the bar at the top if it covers something, and change the text size.
- **Other translations**:
  - *Type a verse by hand*: paste any translation (for example Swahili) with its reference and show it.
  - *Add a Bible translation*: load a full Bible as a JSON file. Book names in that file also work in the search box, so a Swahili Bible lets the operator type `Yohana 3:16`. Only load a translation the church has permission to display. Most modern translations (including the Swahili Union Version) are copyrighted.

If OBS restarts mid-service, the overlay comes back showing what it was showing.

### Before every service (2 minutes)

- Open OBS, look at the *Verses* dock, and show/hide one verse to confirm it reaches the preview.
- Type the service plan.
- If the dock shows *Could not load the Bible*, check the internet connection, then right-click the dock → *Reload*.

---

## Part 2: Going live on YouTube and Facebook at once

OBS on its own sends one stream to one place. There are two good ways around that.

### Option A (recommended): the free *Multiple RTMP outputs* plugin

The plugin adds extra stream targets to OBS. YouTube uses the normal **Start Streaming** button, and Facebook goes out as a second output.

**Install**

1. Download the plugin from its official GitHub page: <https://github.com/sorayuki/obs-multi-rtmp/releases>. Pick the installer that matches your OBS version and Windows/Mac.
2. Close OBS, run the installer, and open OBS again. A **Multiple output** dock appears (if not: *Docks → Multiple output*).

**Get the stream keys** (do this once; both keys can be reused every week)

- **YouTube**: YouTube Studio → **Create → Go live** → **Stream** tab. Copy the *Stream key* and choose *Reusable stream key*. The channel must be verified, and the first live stream can take up to 24 hours to be enabled.
- **Facebook Page**: go to <https://www.facebook.com/live/producer> → **Go live** → choose the Page → *Streaming software*. Turn on **Use a persistent stream key**, then copy the *Stream key*. The *Server URL* is `rtmps://live-api-s.facebook.com:443/rtmp/`.

> Keep the stream keys private. Anyone with a key can broadcast on the church's channel. If one leaks, reset it on YouTube or Facebook.

**Set up OBS**

1. *Settings → Stream*: Service **YouTube - RTMPS**, then paste the YouTube stream key (or use *Connect Account*).
2. In the **Multiple output** dock, click **Add new target**:
   - Name: `Facebook`
   - Server: `rtmps://live-api-s.facebook.com:443/rtmp/`
   - Key: the Facebook stream key
   - Encoder settings: choose **Share encoder with main output** (or "Use stream encoder"). This encodes the video once and saves a lot of CPU.
3. *Settings → Output* (Output Mode: *Advanced*), Streaming tab:
   - Encoder: hardware if available (**NVIDIA NVENC**, **AMD AMF**, **Intel QuickSync**, or **Apple VT**), otherwise x264 *veryfast*.
   - Rate control **CBR**, Keyframe interval **2 s**.
   - Bitrate: see the table below.
4. *Settings → Video*: Output (scaled) resolution and FPS from the table below.
5. *Settings → Audio*: sample rate 48 kHz. *Output → Audio*: bitrate 128 kbps.

**On Sunday**

1. Click **Start Streaming** (YouTube).
2. In the Multiple output dock, click **Start** on the Facebook target.
3. On Facebook Live Producer, check the preview, set the title, and press **Go live**. Facebook will not publish until you do this, unless you have set it to go live automatically.
4. At the end, click **Stop** on the Facebook target and **Stop Streaming**.

### Option B: a restream service (Restream.io, Castr, and others)

OBS sends one stream to the service and the service forwards it to YouTube and Facebook. This needs **half the upload bandwidth** of Option A, which matters on a weak connection. The catch is cost and limits: Restream's free plan allows 2 channels, but third-party reviews say it adds "Multistreaming with Restream" to the video descriptions. Check the current terms on their pricing page before relying on it.

Setup: create an account, connect the YouTube channel and Facebook Page, copy the Restream server and key into *OBS → Settings → Stream*, and press Start Streaming.

### Which one, and how much internet do you need?

With Option A, the computer **uploads the stream twice**. Run a speed test at the church (fast.com → *Show more info* → *Upload*) during a normal Sunday, when phones are also on the Wi-Fi, and pick a row:

| Upload speed you get | Use | Output resolution / FPS | Video bitrate |
|---|---|---|---|
| 15 Mbps or more | Option A | 1920×1080, 30 fps | 4500 kbps |
| 8–15 Mbps | Option A | 1280×720, 30 fps | 3000 kbps |
| 4–8 Mbps | Option B | 1280×720, 30 fps | 3000 kbps |
| Under 4 Mbps | Option B | 1280×720, 30 fps | 2000 kbps |

Rule of thumb: total stream bitrate (both platforms added together) should stay under **two-thirds** of your measured upload.

Tips:

- **Use a network cable to the router** rather than Wi-Fi, and keep the streaming laptop off the congregation's guest Wi-Fi.
- A 4G/5G router or phone hotspot (Safaricom, Airtel) as a backup is worth having. Test it before you need it.
- In OBS, the bottom status bar shows dropped frames. Red or yellow means lower the bitrate.
- Do a 10-minute test stream midweek, set to *Unlisted* on YouTube and *Only me* on Facebook, before the first real Sunday.
