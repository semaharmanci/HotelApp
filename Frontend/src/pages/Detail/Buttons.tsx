import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: () => deletePlace(id),
    onSuccess: () => {
      toast.info("Hotel akistan kaldirildi.");
      navigate("/");
    },
    onError: () => {
      toast.error("Üzgünüz bir sorun olustu.");
    },
  });
  return (
    <div className="flex justify-between mb-5">
      <Link
        to="/"
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-gray-200 hover:shadow"
      >
        <MdKeyboardArrowLeft />
        Geri
      </Link>
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="flex items-center gap-2 border py-1 px-4 rounded-md transition hover:bg-red-200 hover:shadow disabled:bg-zinc-300"
      >
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
