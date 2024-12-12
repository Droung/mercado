import Link from "next/link";
import Image from "next/image";

interface ImageBoxProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string; // Prop para el enlace
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, width = 180, height = 180, href }) => {
  const content = (
    <div
      className="rounded-lg shadow-2xl shadow-md overflow-hidden relative cursor-pointer"
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
        <div className="flex items-center justify-center h-full bg-gray-200">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href}>
      <a>{content}</a>
    </Link>
  ) : (
    content
  );
};

export default ImageBox;
