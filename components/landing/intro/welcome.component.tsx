import Image from "next/image";

export default function Welcome() {
  return (
    <div
      id="welcome"
      className="flex flex-wrap gap-xl items-center justify-items-center px-xl sm:px-2xl w-full max-w-[1600px]"
    >
      <video
        className="flex-1 win-w-[100px] max-w-[800px] w-full rounded-lg hover:cursor-pointer"
        width="1280"
        height="720"
        controls
      >
        <source src="/videos/NKL1-home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="flex-1 text-onBackgroundSecondary min-w-[200px] text-sm md:text-xl">
        Unlock the potential of Nickel innovation with us. Our platform
        democratizes opportunities, allowing you to own a share of the future.
        Together, we're breaking down barriers to entry, making it easier for
        you to invest, innovate, and shape a sustainable world. We believe in
        the future of Nickel. By building a comunity where entrepreneurs,
        innovators, scientists, investors, and experts can discuss and share
        ideas, form partnerships, innovate and develop products. As a token
        holder, you get to access and participate in discussions, invest in
        projects, work with other investors, generate wealth and attend our
        exclusive events, conferences, and more. This is a community about
        creating new technologies, benefits, safer environments, and a better
        life.
      </p>
    </div>
  );
}
