

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-center bg-black text-white pt-6 pb-6 mt-10">
      Copyright Nashy {year} All rights reserved
    </div>
  );
}
