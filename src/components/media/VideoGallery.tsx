interface VideoData {
  src: string;
  name: string;
}

interface VideoGalleryProps {
  galleryData: VideoData[];
}

const VideoGallery = ({ galleryData }: VideoGalleryProps) => {
  return (
    <div className="mt-4 flex w-full justify-center">
      <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryData.map((item, index) => (
          <iframe
            className="aspect-video w-full rounded-lg object-cover"
            allowFullScreen
            key={index}
            src={item.src}
            title={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
