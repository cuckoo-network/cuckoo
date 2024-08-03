import axios from "axios";
import { useState } from "react";
import {
  useCreateTextToImage,
  useSetPhotoUploaded,
} from "@/app/portal/art/text-to-image/hooks/use-create-text-to-image";
import { base64ToFile } from "@/app/portal/art/create-post/utils/base64-to-file";
import { CreatedTextToImageHistoryItem } from "@/gql/graphql";

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

export const textToImageSizes: Record<
  string,
  { width: number; height: number }
> = {
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

export const sizeChoices = Object.keys(textToImageSizes);

export function getKeyBySize({
  width,
  height,
}: {
  width: number;
  height: number;
}): string {
  for (const key in textToImageSizes) {
    if (
      textToImageSizes[key].width === width &&
      textToImageSizes[key].height === height
    ) {
      return key;
    }
  }
  return sizeChoices[0];
}

const defaultTxt2ImgRequest: Txt2ImgRequest = {
  prompt: "cyberpunk women, high quality",
  negative_prompt:
    "low-quality, regular quality, text, watermark, signature, moiré pattern, downsampling, aliasing, distorted, blurry, glossy, blur, jpeg artifacts, compression artifacts, poorly drawn, low-resolution, bad, distortion, twisted, excessive, exaggerated pose, exaggerated limbs, grainy, symmetrical, duplicate, error, pattern, beginner, pixelated, fake, hyper, glitch, overexposed, high-contrast, bad-contrast",
  steps: 30,
  batch_size: 1,
  send_images: true,
  save_images: false,
  ...textToImageSizes.sdxlPortrait,
};

export type ICanvasSize = keyof typeof textToImageSizes;

export const useGenerateArt = () => {
  const [ttih, setTtih] = useState<undefined | CreatedTextToImageHistoryItem>(
    undefined,
  );
  const [loading, setLoading] = useState(false);
  const { createTextToImage } = useCreateTextToImage();
  const { setPhotoUploaded } = useSetPhotoUploaded();

  const handleGenerateArt = async (prompt: {
    highPriority: boolean;
    negativePrompt: string;
    prompt: string;
    canvasSize: ICanvasSize;
  }) => {
    setLoading(true);
    try {
      // create art
      const sdRequest: Txt2ImgRequest = {
        ...defaultTxt2ImgRequest,
        negative_prompt: prompt.negativePrompt,
        prompt: prompt.prompt,
        ...textToImageSizes[prompt.canvasSize],
        override_settings: {
          sd_model_checkpoint: "animagineXLV31_v31.safetensors",
          webp_lossless: true,
        },
      };
      const data = await postStabilityTask(sdRequest);
      const base64 = data[0];

      const file = base64ToFile(base64);
      if (!file) {
        throw new Error("cannot encode base64 to file");
      }

      // record history
      const createdTtih = await createTextToImage({
        variables: {
          data: {
            height: sdRequest.height,
            negativePrompt: sdRequest.negative_prompt,
            prompt: sdRequest.prompt,
            samplingSteps: sdRequest.steps,
            width: sdRequest.width,
            photoMedia: [
              {
                ext: "webp",
                height: sdRequest.height,
                sortOrder: 0,
                width: sdRequest.width,
              },
            ],
          },
        },
      });

      const pm = createdTtih.data?.createTextToImage?.photoMedia?.at(0);
      if (!pm) {
        throw new Error("failed to create ttih");
      }
      await axios.put(pm.writeUrl, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      await setPhotoUploaded({
        variables: {
          setPhotoUploadedId: pm.id,
        },
      });
      setTtih(createdTtih.data?.createTextToImage);
    } catch (error) {
      console.error("Error generating art:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    ttih,
    handleGenerateArt,
  };
};

const postStabilityTask = async (
  requestBody: Txt2ImgRequest,
): Promise<string[]> => {
  try {
    const response = await axios.post(
      CUCKOO_API_URL + "/sdapi/v1/txt2img",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Assigned-Workers":
            "0x2E665A4fb314a5d6F1d23fb5bed68a888c829650,0x079dFDf2680eB2001F4C9ce4F9cE192c5F6791C8",
        },
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
