export default function Heading({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <h1 className="py-8 font-neuBold text-3xl">{heading}</h1>
      <div className="w-full">{children}</div>
    </div>
  );
}
