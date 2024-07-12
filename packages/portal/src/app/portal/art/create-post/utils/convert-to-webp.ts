export function convertBase64PngToWebP(
  base64Png: string,
  quality = 0.8,
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Step 1: Create an Image element and set its source to the base64 PNG
    const img = new Image();
    img.src = base64Png;

    img.onload = () => {
      // Step 2: Create a Canvas and draw the PNG onto it
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0);

      // Step 3: Use toBlob to convert the canvas content to WebP
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"));
            return;
          }
          // Step 4: Read the WebP Blob as a base64 string
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.onerror = () => {
            reject(new Error("Failed to convert blob to base64"));
          };
          reader.readAsDataURL(blob);
        },
        "image/webp",
        quality,
      );
    };

    img.onerror = () => {
      reject(new Error("Failed to load the image"));
    };
  });
}
