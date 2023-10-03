import { profile } from "../profile.ts";

export const Header = () => (
  <header className="flex flex-wrap items-center gap-4 my-2">
    <img
      width={120}
      height={120}
      loading="lazy"
      src="/profile.webp"
      alt="profile picture"
      className="m-auto border-2 rounded-full border-primary print:hidden"
    />
    <div className="flex-1 basis-96">
      <h1 className="text-3xl font-normal">{profile.name}</h1>
      <p className="text-lg text-secondary">{profile.description}</p>
    </div>
  </header>
);
