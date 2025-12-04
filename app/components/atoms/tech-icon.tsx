"use client";

export const TechIcon = ({ name }: { name: string }) => {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${name}`}
      alt={name}
      className="w-6 h-6 sm:w-7 sm:h-7 transition-transform hover:scale-110"
    />
  );
};
