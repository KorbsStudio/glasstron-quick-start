# Glasstron Quick Start
![Preview of Glasstron with Acrylic blur](https://i.imgur.com/nJfLRAe.png)

If you want to know more about Glasstron or what it is, go to [Glasstron](https://github.com/AryToNeX/Glasstron)'s official repo.

[![npm](https://img.shields.io/npm/dt/glasstron?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/glasstron)
[![version](https://img.shields.io/npm/v/glasstron?label=version&style=for-the-badge)](https://www.npmjs.com/package/glasstron)
[![indev version](https://img.shields.io/github/package-json/v/arytonex/glasstron?label=indev%20version&style=for-the-badge)](https://github.com/AryToNeX/Glasstron/tree/master)

Support the Glasstron developer:

[![ko-fi](https://img.shields.io/badge/donate-on%20ko--fi-29ABE0?logo=ko-fi&style=for-the-badge&logoColor=FFFFFF)](https://ko-fi.com/K3K3D0E0)
[![patreon](https://img.shields.io/badge/pledge-on%20patreon-FF424D?logo=patreon&style=for-the-badge&logoColor=FFFFFF)](https://patreon.com/arytonex)
[![paypal](https://img.shields.io/badge/donate-on%20paypal-0079CD?logo=paypal&style=for-the-badge)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y7ZAFZ2H56FD4)

## Requirements
As far as I'm aware, these are the following requirements for Glasstron.
 - [NodeJS](https://nodejs.org/en/) v14.16.0 or up
 - [Python](https://www.python.org/) v3.6 or up
 - g++ (on Linux)
 - [Visual C++ Redistributable](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0) (on Windows)
 - [Visual Studio Community 2015](https://visualstudio.microsoft.com/) (on Windows)
    - Install Development with C++
 
## Building
As with any Electron application:
```
npm i
```

To start the application:
```
npm start
```

## Questions and Answers
### How to set opacity
There are no options from Glasstron to set this, this is pure CSS, as mentioned [here](https://github.com/AryToNeX/Glasstron/issues/27).

You can simply just [adjust the opacity of your background color](https://github.com/AryToNeX/Glasstron/issues/27#:~:text=you%20can%20already%20increase%20or%20decrease%20the%20opacity%20by%20increasing%20or%20decreasing%20the%20alpha%20value%20of%20the%20background%20color%20of%20whatever%20app%20you%27re%20using.%20It%20is%20pure%20CSS%2C%20and%20there%27s%20no%20need%20to%20implement%20anything%20on%20Glasstron%27s%20side.) you have set for your app's background.

## Troubleshooting
### Python not detected (Windows)
If you're getting an error like [this](https://cdn.discordapp.com/attachments/829662493533667339/847303728431497236/unknown.png), you'll need to tell Node where your install path of Python is.

As an example, if your install of Python is located at the root of your C:\ drive(like it should be), then you would do the following:
```
npm install --python="C:\Python\python.exe"
```
Pointing to the `.exe` file is necessary.

### There is mouse latency on Windows
 - [Issue #59](https://github.com/AryToNeX/Glasstron/issues/59) on Glasstron
 - This was once an issue with the Vibrancy extension for Visual Studio Code, you can look at [Issue #5](https://github.com/EYHN/vscode-vibrancy/issues/5) if you're interested.

This is not caused by Glasstron, but according to Arytonex it's ["on the Windows side of composition"](https://github.com/AryToNeX/Glasstron/issues/59#:~:text=on%20the%20Windows%20side%20of%20composition)
