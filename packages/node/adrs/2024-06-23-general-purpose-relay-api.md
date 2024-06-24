# 2024-06-23 General-purpose Relay API

## Status

Accepted

## Context

We currently have the `offerTask` API in JSON-RPC format, as shown below:

```json
// POST /#offerTask
{
  "jsonrpc": "2.0",
  "method": "offerTask",
  "params": [
    {
      "id": "VHn9nAvmHastotANYdJ8kiF6VBR2",
      "payload": {
        "path": "/sdapi/v1/txt2img",
        "body": {
          "prompt": "cyberpunk women, high quality",
          "negativePrompt": "lowquality, regular quality",
          "steps": 20,
          "sendImages": true,
          "saveImages": false,
          "width": 1024,
          "height": 1024
        }
      },
      "coinSymbol": "SD",
      "maxOfferPrice": "1000000000000000000"
    }
  ],
  "id": "1"
}
```

This API is tailored specifically to our custom SD wrapping needs, mapping HTTP method, path, and body within the payload. However, the complete payload format for sd service is actually shown below. 

```json
// POST /sdapi/v1/txt2img
{
  "prompt": "",
  "negative_prompt": "",
  "styles": [
    "string"
  ],
  "seed": -1,
  "subseed": -1,
  "subseed_strength": 0,
  "seed_resize_from_h": -1,
  "seed_resize_from_w": -1,
  "sampler_name": "string",
  "batch_size": 1,
  "n_iter": 1,
  "steps": 50,
  "cfg_scale": 7,
  "width": 512,
  "height": 512,
  "restore_faces": true,
  "tiling": true,
  "do_not_save_samples": false,
  "do_not_save_grid": false,
  "eta": 0,
  "denoising_strength": 0,
  "s_min_uncond": 0,
  "s_churn": 0,
  "s_tmax": 0,
  "s_tmin": 0,
  "s_noise": 0,
  "override_settings": {},
  "override_settings_restore_afterwards": true,
  "refiner_checkpoint": "string",
  "refiner_switch_at": 0,
  "disable_extra_networks": false,
  "comments": {},
  "enable_hr": false,
  "firstphase_width": 0,
  "firstphase_height": 0,
  "hr_scale": 2,
  "hr_upscaler": "string",
  "hr_second_pass_steps": 0,
  "hr_resize_x": 0,
  "hr_resize_y": 0,
  "hr_checkpoint_name": "string",
  "hr_sampler_name": "string",
  "hr_prompt": "",
  "hr_negative_prompt": "",
  "sampler_index": "Euler",
  "script_name": "string",
  "script_args": [],
  "send_images": true,
  "save_images": false,
  "alwayson_scripts": {}
}
```

You can see that some information tends to be lost during mapping.

We need a general-purpose API that can proxy existing APIs of open-source AI models or other HTTP services. Several constraints must be addressed:

- How do we price the payload?
- Should task results be submitted synchronously or asynchronously?

## Decision

1. **Proxy Requests**: The source path `/task/:coinSymbol/*` will automatically map to the payload.
   - Decide whether to wrap the payload in another layer of object or forward it directly.
2. **Metadata Headers**: Use headers for Cuckoo AI's metadata.
3. **Priceable Payload**: Ensure the payload is priceable according to the plugin interface.
4. **Endpoint Management**: Implement a whitelist or blocklist to control which endpoints are exposed to the task poster.

## Consequences

1. **Developer Friendly**: The proxy API will reduce switching costs for existing users of centralized open-source solutions.
2. **Easily Extensible**: This approach will facilitate the support of additional miners in the future.

