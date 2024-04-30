package uploader

import (
	"cloud.google.com/go/storage"
	"context"
	"encoding/base64"
	"fmt"
	"log"
)

// Uploader encapsulates Google Cloud Storage client and bucket details.
type Uploader struct {
	client     *storage.Client
	bucketName string
}

// NewUploader creates a new Uploader instance.
func NewUploader(ctx context.Context, bucketName string) (*Uploader, error) {
	client, err := storage.NewClient(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to create storage client: %w", err)
	}

	return &Uploader{
		client:     client,
		bucketName: bucketName,
	}, nil
}

// UploadFile uploads a base64 encoded string as a file to the specified bucket.
func (u *Uploader) UploadFile(ctx context.Context, objectName, fileBase64 string) error {
	// Decode the base64 string
	data, err := base64.StdEncoding.DecodeString(fileBase64)
	if err != nil {
		return fmt.Errorf("failed to decode base64 string: %w", err)
	}

	// Creates a writer for writing the decoded data to the bucket.
	wc := u.client.Bucket(u.bucketName).Object(objectName).NewWriter(ctx)
	if _, err := wc.Write(data); err != nil {
		return fmt.Errorf("failed to write data to bucket: %w", err)
	}
	if err := wc.Close(); err != nil {
		return fmt.Errorf("failed to close bucket writer: %w", err)
	}

	return nil
}

func main() {
	ctx := context.Background()

	// Set your Google Cloud Storage bucket name
	bucketName := "your-bucket-name"

	// Create an Uploader instance
	uploader, err := NewUploader(ctx, bucketName)
	if err != nil {
		log.Fatalf("Failed to create uploader: %v", err)
	}

	// Set the name for the uploaded file and path to the file
	objectName := "your-object-name"
	filePath := "path/to/your/file"

	// Uploads a file to the bucket
	if err := uploader.UploadFile(ctx, objectName, filePath); err != nil {
		log.Fatalf("Failed to upload file: %v", err)
	}

	fmt.Println("File uploaded successfully.")
}
