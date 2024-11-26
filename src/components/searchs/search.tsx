import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="w-full max-w-xl mt-12 relative">
      <Input
        placeholder="Search by NFTs"
        type="text"
        inputMode="search"
        className="h-14 rounded-2xl bg-white placeholder:font-calSans placeholder:font-bold placeholder:text-gray-400 placeholder:pl-7"
      />
      <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
