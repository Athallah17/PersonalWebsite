import SocialSection from "@components/organisms/socials";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-8
    bg-linear-to-b
        from-[#577a86] to-[#182c32]     /* LIGHT MODE: soft blues/pastels */
        dark:from-[#1c312d] dark:to-[#0a1210] /* DARK MODE: deep cyberpunk green/black */
        transition-colors duration-300 ">
      <div className="max-w-6xl mx-auto px-4 items-center">
        <h1 className="text-center text-lg">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</h1>
        <SocialSection show={["email", "github", "linkedin","instagram", "resume"]} />
      </div>
    </section>
  );
};
