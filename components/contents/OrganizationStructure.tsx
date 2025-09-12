"use client";

import useOrganisation from "@/hooks/useOrganisation";
import {
  Keyboard,
  Minus,
  MousePointer2,
  Plus,
  RotateCcw,
  Scroll,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContentTitle from "../ContentTitle";

const OrganizationStructure = () => {
  const { organisation, loading, error } = useOrganisation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastTouchPosition, setLastTouchPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.1;
    const newZoom = Math.min(
      Math.max(zoomLevel - e.deltaY * zoomSpeed * 0.01, 0.5),
      3
    );
    setZoomLevel(newZoom);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const moveX = e.movementX;
    const moveY = e.movementY;

    setImagePosition((prev) => ({
      x: prev.x + moveX,
      y: prev.y + moveY,
    }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setLastTouchPosition({ x: touch.clientX, y: touch.clientY });
      setIsDragging(true);
      e.preventDefault();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];

    const moveX = touch.clientX - lastTouchPosition.x;
    const moveY = touch.clientY - lastTouchPosition.y;

    setImagePosition((prev) => ({
      x: prev.x + moveX,
      y: prev.y + moveY,
    }));

    setLastTouchPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white px-[31px] py-[50px] lg:px-[150px] lg:py-[100px]">
      <div className="lg:max-w-[1165px] lg:mx-auto">
        <ContentTitle
          title="Struktur Organisasi FGBMFI Indonesia"
          removeButton
        />
        <p className="text-sm font-normal md:text-xl mt-2.5 mb-5 md:my-[30px] text-justify">
          <em> Full Gospel Business Men&apos;s Fellowship International</em>,
          yang disingkat FGBMFI, memiliki Struktur Organisasi Tingkat Nasional
          dengan Periode 2025-2030.
        </p>

        {loading && <p>Memuat struktur organisasi...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && organisation.length > 0 && (
          <div className="relative">
            <div className="relative border-2 border-primary w-full lg:border-4 md:w-[920px] lg:w-[1140px] py-[20px] lg:py-[40px]">
              <Image
                src={organisation[0].full_image_url}
                alt="Organization Structure"
                width={1140}
                height={0}
                className="w-full h-auto"
              />
            </div>

            <p className="mt-4 md:mt-6 text-sm md:text-base font-medium text-gray-600">
              <span
                onClick={openModal}
                className="text-primary hover:text-primary/60 transition-colors duration-200 cursor-pointer font-semibold"
              >
                Klik Disini
              </span>{" "}
              untuk melihat struktur organisasi dalam tampilan yang lebih besar
            </p>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div
              ref={modalRef}
              className="relative w-full max-w-[95vw] max-h-[95vh] bg-white rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl"
              onWheel={handleWheel}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-300">
                <h3 className="text-sm md:text-lg lg:text-xl font-bold text-primary truncate">
                  Struktur Organisasi FGBMFI Indonesia
                </h3>
                <div className="flex items-center gap-2 md:gap-4">
                  {/* Mobile Zoom Controls */}
                  <div className="flex items-center gap-2 md:hidden">
                    <button
                      onClick={() =>
                        setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
                      }
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-colors hover:cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="h-6 text-xs text-gray-600 bg-gray-100 px-2 rounded-lg min-w-[45px] text-center flex items-center justify-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={() =>
                        setZoomLevel((prev) => Math.min(prev + 0.25, 3))
                      }
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-colors hover:cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={resetZoom}
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 transition-colors hover:cursor-pointer"
                      title="Reset zoom"
                    >
                      <RotateCcw size={10} />
                    </button>
                  </div>
                  {/* Desktop Zoom Controls */}
                  <div className="hidden md:flex items-center gap-2">
                    <span className="h-6 text-xs md:text-sm text-gray-600 bg-gray-100 px-2 rounded-lg min-w-[50px] text-center flex items-center justify-center">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={resetZoom}
                      className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 transition-colors hover:cursor-pointer"
                      title="Reset zoom"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-600 hover:text-black transition-colors p-1 hover:cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div
                className="relative overflow-hidden bg-gray-50"
                style={{
                  width: "100%",
                  height: "calc(100vh - 200px)",
                  maxHeight: "70vh",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                    cursor: isDragging
                      ? "grabbing"
                      : "grab",
                  }}
                >
                  <Image
                    ref={imageRef}
                    src={organisation[0].full_image_url}
                    alt="Organization Structure Detail"
                    width={1140}
                    height={0}
                    className="max-w-none h-auto select-none"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "center center",
                    }}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3 md:p-4 border-t border-gray-300 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs md:text-sm text-gray-600">
                  {/* Mobile Instructions */}
                  <div className="flex flex-col gap-1 text-left sm:hidden">
                    <div className="flex items-center justify-start gap-1">
                      <Plus size={14} />
                      <Minus size={14} />
                      <span>untuk zoom</span>
                    </div>
                    <div className="flex items-center justify-start gap-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10 10L4 4m0 0l6 6m-6-6v6.5a7.5 7.5 0 0 0 15 0v-2" />
                      </svg>
                      <span>Seret untuk menggeser gambar</span>
                    </div>
                  </div>
                  {/* Desktop Instructions */}
                  <div className="hidden sm:flex items-center gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-1">
                      <Scroll size={14} />
                      <span>Scroll untuk zoom</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MousePointer2 size={14} />
                      <span>Drag untuk menggeser</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-center sm:text-right">
                    <Keyboard size={14} />
                    <span>ESC untuk menutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganizationStructure;
