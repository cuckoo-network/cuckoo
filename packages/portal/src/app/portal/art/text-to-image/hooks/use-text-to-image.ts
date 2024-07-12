import axios from "axios";

const CUCKOO_API_URL =
  "https://ai-content-moderator-node.cuckoo.network/task/sd";

interface Txt2ImgRequest {
  prompt?: string;
  negative_prompt?: string;
  styles?: string[];
  seed?: number;
  subseed?: number;
  subseed_strength?: number;
  seed_resize_from_h?: number;
  seed_resize_from_w?: number;
  sampler_name?: string;
  batch_size?: number;
  n_iter?: number;
  steps?: number;
  cfg_scale?: number;
  width?: number;
  height?: number;
  restore_faces?: boolean;
  tiling?: boolean;
  do_not_save_samples?: boolean;
  do_not_save_grid?: boolean;
  eta?: number;
  denoising_strength?: number;
  s_min_uncond?: number;
  s_churn?: number;
  s_tmax?: number;
  s_tmin?: number;
  s_noise?: number;
  override_settings?: Record<string, any>;
  override_settings_restore_afterwards?: boolean;
  refiner_checkpoint?: string;
  refiner_switch_at?: number;
  disable_extra_networks?: boolean;
  comments?: Record<string, any>;
  enable_hr?: boolean;
  firstphase_width?: number;
  firstphase_height?: number;
  hr_scale?: number;
  hr_upscaler?: string;
  hr_second_pass_steps?: number;
  hr_resize_x?: number;
  hr_resize_y?: number;
  hr_checkpoint_name?: string;
  hr_sampler_name?: string;
  hr_prompt?: string;
  hr_negative_prompt?: string;
  sampler_index?: string;
  script_name?: string;
  script_args?: any[];
  send_images?: boolean;
  save_images?: boolean;
  alwayson_scripts?: Record<string, any>;
}

const sizes = {
  sdxlPortrait: {
    width: 896,
    height: 1152,
  },
  sdxlSquare: {
    width: 1024,
    height: 1024,
  },
  sdxlLandscape: {
    width: 1152,
    height: 896,
  },
  sdxlPanorama: {
    width: 1216,
    height: 832,
  },
  sdxlVerticalPanorama: {
    width: 832,
    height: 1216,
  },
  sdxlUltraPanorama: {
    width: 1344,
    height: 768,
  },
  sdxlUltraPortrait: {
    width: 768,
    height: 1344,
  },
  sdxlCinematicWide: {
    width: 1536,
    height: 640,
  },
  sdxlExtendedPortrait: {
    width: 640,
    height: 1536,
  },
};

const defaultTxt2ImgRequest: Txt2ImgRequest = {
  prompt: "cyberpunk women, high quality",
  negative_prompt:
    "low-quality, regular quality, text, watermark, signature, moiré pattern, downsampling, aliasing, distorted, blurry, glossy, blur, jpeg artifacts, compression artifacts, poorly drawn, low-resolution, bad, distortion, twisted, excessive, exaggerated pose, exaggerated limbs, grainy, symmetrical, duplicate, error, pattern, beginner, pixelated, fake, hyper, glitch, overexposed, high-contrast, bad-contrast",
  steps: 30,
  batch_size: 1,
  send_images: true,
  save_images: false,
  ...sizes.sdxlPortrait,
};

type Size = keyof typeof sizes;

export const postStabilityTask = async ({
  prompt,
  negative_prompt,
  size = "sdxlPortrait",
}: {
  prompt: string;
  negative_prompt: string;
  size?: Size;
}): Promise<string[]> => {
  const requestBody: Txt2ImgRequest = {
    ...defaultTxt2ImgRequest,
    negative_prompt,
    prompt,
    ...sizes[size],
    override_settings: {
      sd_model_checkpoint: "animagineXLV31_v31.safetensors",
    },
  };

  try {
    const response = await axios.post(
      CUCKOO_API_URL + "/sdapi/v1/txt2img",
      requestBody,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return response.data.images ?? [];
  } catch (error) {
    console.error(
      "Error in postTask:",
      axios.isAxiosError(error) ? error.response?.data : error,
    );
    throw error;
  }
};
