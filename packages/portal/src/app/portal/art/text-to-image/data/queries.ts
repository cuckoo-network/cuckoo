import { gql } from "@apollo/client";

export const mutateCreateText2Image = gql`
  mutation CreateTextToImage($data: TextToImageInput!) {
    createTextToImage(data: $data) {
      id
      model
      modelVersionUuid
      modelUuid
      modelDisplayName
      prompt
      negativePrompt
      state
      deleted
      samplingSteps
      samplingMethod
      width
      height
      cfgScale
      seed
      isRandomSeed
      outputImageUrl
      outputImages {
        id
        url
        width
        height
        origUrl
        nsfw
      }
      message
      seenAt
      priority
      createdAt
      updatedAt
      batchSize
      requestType
      enableHr
      overrideSettings {
        sdVae
        clipSkip
        ensd
      }
    }
  }
`;
