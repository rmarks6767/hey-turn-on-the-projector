# 'Hey { smart assistant }, turn on the projector!'
I got frustrated with the way epson designed their web remote, so I decided to make the requests that it wants and expose the endpoints for anyone to use.  Simply, supply the ip address of your locally running epson projector as a command line argument and let this do the rest! This then allows your favorite smart assistant to call the endpoint and control your projector.

## Intalling project
```sh
$ npm install
```

## Running the project
```sh
$ npm start {your epson projector ip address }
$ npm start 192.168.1.5 ( example )
```

## The endpoints

### ```/power``` 
This will negate the current state of the power, whether that be on or off

### ```/volume_up```
This will increase the volume

### ```/volue_down```
This will decrease the volume

### ```/source_search```
This will turn the projector to source search mode

### ```/av_mute```
This will negate the output of the projector ( unmute if called again )

### ```/freeze```
This will freeze the output on the projector ( calling again will unfreeze )

### ```/hdmi_one```
This will change the projector to HDMI 1

### ```/hdmi_two```
This will change the projector to HDMI 2

### ```/computer```
This will change the projector to Computer

### ```/video```
This will change the projector to Video

### ```/usb_display```
This will change the projector to USB Display

### ```/usb```
This will change the projector to USB 

### ```/lan```
This will change the projector to LAN

### ```/ccap```
This will turn on closed captioning

### ```/qrcode```
This will display the qrcode to join using the epson app ( call again to turn off the display of the code )
