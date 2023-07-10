import HandsAseet from "./asset/HandsAseet";

export default function SubTItleIcon({ title }) {
  return (
    <div className="flex space-x-2 items-center">
      <HandsAseet />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
