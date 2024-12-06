import Image from "next/image";

interface ImageBoxProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, width = 180, height = 180 }) => {
  return (
    <div
      className="rounded-lg shadow-2xl shadow-md overflow-hidden relative"
      style={{ width, height, padding: 0 }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Image"}
          layout="fill"
          objectFit="cover"
          className="absolute p-0 m-0"
        />
      ) : (
        <div>
          <span className="text-gray-500">No Image</span>
        </div>
      )}
    </div>
  );
};

export default ImageBox;
