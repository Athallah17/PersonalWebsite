import TiltedCard from "@components/atoms/tilted-card";

export default function ProfileCardDemo() {
  return (
    <div className="relative flex flex-col items-center">

      {/* FIRST CARD */}
      <div className="z-20">
        <TiltedCard
          imageSrc="/pic1.jpeg"
          altText="Me"
          captionText=""
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="360px"
          imageWidth="360px"
          rotateAmplitude={18}
          scaleOnHover={1.3}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>

      {/* SECOND CARD — pulled upward with negative margin */}
      <div className="-mt-40 ml-10 z-10">
        <TiltedCard
          imageSrc="/pic2.jpeg"
          altText="Me"
          captionText=""
          containerHeight="800px"
          containerWidth="800px"
          imageHeight="500px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>
    </div>
  );
}
