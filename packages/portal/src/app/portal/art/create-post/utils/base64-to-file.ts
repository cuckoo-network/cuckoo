export function base64ToFile(
  base64: string | null | undefined,
  filename: string = "file.webp",
  mimeType: string = "image/webp",
): File | null {
  if (!base64) {
    return null;
  }

  base64 = base64.replace(/^data:image\/webp;base64,/, "");

  // Decode the base64 string
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  // Convert the binary string to a Uint8Array
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the Uint8Array
  const blob = new Blob([bytes], { type: mimeType });

  // Convert the Blob to a File
  return new File([blob], filename, { type: mimeType });
}
