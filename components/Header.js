import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <div>
      <div>
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
        width={100}
        height={100}
      />
    </div>
  );
}
