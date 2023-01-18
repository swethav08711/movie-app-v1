import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <div className=" bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row  justify-between">
      <div className=" flex ">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
      className=" cursor-pointer active:brightness-110"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
        width={100}
        height={100}
        alt="icon"
      />
    </div>
  );
}
