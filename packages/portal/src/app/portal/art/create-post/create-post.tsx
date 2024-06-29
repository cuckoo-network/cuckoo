"use client";

import {useEffect, useRef, useState} from "react";

const UploadButton: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number } | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = reader.result as string;
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (selectedImage && imageRef.current) {
      setImageDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight,
      });
    }
  }, [selectedImage]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-400 rounded-lg overflow-hidden`}
      style={{
        height: imageDimensions
          ? `${(imageDimensions.height / imageDimensions.width) * 100}%`
          : '48',
      }}
    >
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="absolute inset-0 w-full h-full object-contain"
          ref={imageRef}
        />
      ) : (
        <>
          <button className="p-2 text-gray-600">Click + to upload photos or videos</button>
          <p className="text-sm text-gray-400">Make sure the content you upload adheres to our rules.</p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};




export function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [isSensitive, setIsSensitive] = useState(false);

  const handleCreatePost = () => {
    // Handle post creation logic
    console.log('Post Created:', { title, description, hashtags, isSensitive });
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2 sm:col-span-1">
          <UploadButton/>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="">
            <label className="block mb-2 text-sm">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 h-32 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm">Add Hashtag</label>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              checked={isSensitive}
              onChange={(e) => setIsSensitive(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm">Sensitive</label>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={handleCreatePost} className="px-4 py-2 bg-pink-500 rounded text-white">Create Post</button>
          </div>
        </div>
      </div>
    </div>
  );

}
