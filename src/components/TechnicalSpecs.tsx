import React from "react";

const TechnicalSpecs = () => {
  const images = [
    "https://cdn.poehali.dev/files/741bcfe2-04d5-4d94-86e2-6870d152429b.jpg",
    "https://cdn.poehali.dev/files/3e849da5-5c82-4ac7-bc4c-201e90b3bfbf.jpg",
    "https://cdn.poehali.dev/files/83f73b18-6fd7-4036-992a-5c5756132f00.jpg",
    "https://cdn.poehali.dev/files/e9a687c9-4168-43d8-8940-fc06aab6ed18.jpg",
  ];

  return (
    <div className="w-full">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Изображение ${index + 1}`}
          className="w-full h-auto block"
        />
      ))}
    </div>
  );
};

export default TechnicalSpecs;
