package worker

import (
	"bytes"
	"encoding/base64"
	"github.com/chai2010/webp"
	"image/png"
)

// convertBase64PNGToBase64WebP converts a base64-encoded PNG string to a base64-encoded WebP string
func convertBase64PNGToBase64WebP(base64PNG string) (string, error) {
	// Decode the Base64 string
	pngData, err := base64.StdEncoding.DecodeString(base64PNG)
	if err != nil {
		return "", err
	}

	// Decode the PNG image
	pngImage, err := png.Decode(bytes.NewReader(pngData))
	if err != nil {
		return "", err
	}

	// Create a buffer to hold the WebP data
	var webpBuffer bytes.Buffer

	// Encode the image to WebP format
	if err := webp.Encode(&webpBuffer, pngImage, &webp.Options{Lossless: false, Quality: 100}); err != nil {
		return "", err
	}

	// Encode the WebP data to a Base64 string
	base64WebP := base64.StdEncoding.EncodeToString(webpBuffer.Bytes())

	return base64WebP, nil
}
