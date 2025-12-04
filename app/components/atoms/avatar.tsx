"use client";

import Image from "next/image";

export function AvatarRounded() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-border shadow-lg">
      <Image
        src="/profile.jpg" // replace with your image later
        alt="Profile"
        fill
        className="object-cover"
      />
    </div>
  );
}
