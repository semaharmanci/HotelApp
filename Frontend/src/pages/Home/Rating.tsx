const Rating = ({
  point,
  expand,
}: {
  point: number;
  expand?: boolean;
}) => {
  const color =
    point >= 4
      ? "bg-green-500"
      : point >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  const text =
    point >= 4.5
      ? "Olaganüstü"
      : point >= 4
      ? "Güzel"
      : point >= 3
      ? "Iyi"
      : point >= 2
      ? "Kötü"
      : "Cok kötü";
  return (
    <p className={ expand? "flex gap-2 items-center" : ""}>
      <span
        className={`${color} p-1 rounded-lg text-white font-bold w-fit`}
      >
        {point}
      </span>
      {expand && <span className="font-semibold text-lg">{text}</span>}
    </p>
  );
};

export default Rating;
