`grpc-web` npm package doesn't include unminified code for easier debugging. But you can modify https://github.com/grpc/grpc-web/blob/0ec55aa/packages/grpc-web/scripts/build.js#L39 + `cd packages/grpc-web && yarn` to produce a readable replacement:

[./packages/grpc-web/index.js --compilation_level=SIMPLE --formatting=PRETTY_PRINT --debug.js](./packages/grpc-web/index.js%20--compilation_level=SIMPLE%20--formatting=PRETTY_PRINT%20--debug.js)



<br>
<br>
<br>

---

Other builds:

[./packages/grpc-web/index.js --compilation_level=BUNDLE.js](./packages/grpc-web/index.js%20--compilation_level=BUNDLE.js)  
this is even more readable, but it crashes

[./packages/grpc-web/index.js --compilation_level=ADVANCED_OPTIMIZATIONS.js](./packages/grpc-web/index.js%20--compilation_level=ADVANCED_OPTIMIZATIONS.js)  
to verify it matches the minified file in https://www.npmjs.com/package/grpc-web/v/1.4.2
(https://socket.dev/npm/package/grpc-web/files/1.4.2/index.js)
