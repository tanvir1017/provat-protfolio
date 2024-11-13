import { useEffect } from "react";

type TVideoPopup = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
};

const VideoPopup = ({ isOpen, setIsOpen, onClose }: TVideoPopup) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setIsOpen]);

  return (
    // Backdrop with blur effect
    <div
      className="fixed inset-0 z-50 bg-white/75 backdrop-blur-sm cursor-pointer "
      onClick={onClose}
    >
      {/* Overlay with slightly reduced opacity for better blur visibility */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex items-center justify-center min-h-screen p-4">
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 bg-[var(--indigo-5)] hover:bg-indigo-600 p-2 rounded-full text-white hover:text-gray-300 transition-colors z-50 block"
          aria-label="Close video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video container */}
        <div className="w-full max-w-4xl mx-auto">
          <video
            src="/video.mp4"
            className="w-full rounded-lg shadow-lg border-2 border-[var(--indigo-5)]"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
