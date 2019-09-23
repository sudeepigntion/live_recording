# live_recording
live_recording with webrtc - nginx - nodejs - rtmp


This is an example of getting web cam feed and send it to server in binary format using websocket.

This can be used for live streaming, KYC verifications by recording the user video.

Modules that are used:

1) RTMP NGINX MODULE if required for recording and live streaming
2) FFMPEG for restreaming, HLS and other video encoding
3) Socket.io open source library for sending the binary data to server
4) Express Nodejs framework open source library for hosting http server and socket server
5) WebRTC for using browser webcam and recording module. Only few browser supports this module like chrome and mozilla
6) FaceApi library that is built over tensorflow.js, it is used to detect face and then automatically start streaming and when face is not detected stopping the streaming. It is a big api and you can check the document of it in its official git repository.

