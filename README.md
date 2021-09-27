## Requirements

- Linux
- Yarn
- Node.js

## Setup

- `yarn install`

## Local Usage, works fine on Ubuntu

`yarn bazelisk run //:server`

```
<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 8e 00 00 01 2a 08 06 00 00 00 02 89 b7 84 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 20 00 ... 12781 more bytes>
```

The buffer is an image of the fully rendered 3d scene.

## Custom base image, does not work

`yarn bazelisk run //:image`

```
[0927/173657.572851:ERROR:gpu_process_host.cc(961)] GPU process exited unexpectedly: exit_code=134
[0927/173657.572877:WARNING:gpu_process_host.cc(1274)] The GPU process has crashed 6 time(s)
[0927/173657.574704:ERROR:gpu_init.cc(441)] Passthrough is not supported, GL is disabled
[0927/173657.576116:WARNING:gpu_process_host.cc(989)] Reinitialized the GPU process after a crash. The reported initialization time was 0 ms
<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 01 8e 00 00 01 2a 08 06 00 00 00 02 89 b7 84 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 04 4b ... 1119 more bytes>
```

The buffer is an empty image.
