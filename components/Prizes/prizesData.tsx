import { Feature } from "@/types/feature";
import Image from "next/image";

const prizesData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src={`https://down-sg.img.susercontent.com/file/422e27fa6de14241ee41ccd8f2967e8d`}
        alt="prize image"
        height={800}
        width={800}
      />
    ),
    title: "21.45 Inch 1080P FHD Monitor",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src={`https://down-sg.img.susercontent.com/file/044db6455e687132b3c09d48f34f1297`}
        alt="prize image"
        height={800}
        width={800}
      />
    ),
    title: "Bluetooth Speaker",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src={`https://down-sg.img.susercontent.com/file/2ec1e1a8ae9792141f3095e3952444bd`}
        alt="prize image"
        height={800}
        width={800}
      />
    ),
    title: "Wireless Keyboard",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default prizesData;
