// Block component for displaying images or placeholders

interface BlockProps {
  label?: string;
  className?: string;
  image?: string;
}

export default function Block({ label = "IMG", className = "", image }: BlockProps) {
  if (image) {
    return (
      <div
        className={`aspect-[4/3] w-full bg-neutral-200/60 bg-cover bg-center ${className}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
    );
  }

  return (
    <div className={`aspect-[4/3] w-full bg-neutral-200/60 grid place-items-center ${className}`}>
      <span className="select-none text-4xl font-semibold text-neutral-400">{label}</span>
    </div>
  );
}
