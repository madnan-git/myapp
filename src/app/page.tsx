import Image from "next/image"
import body from "./image/body.jpg"
import { Card, Card2, Card3 } from "../../component/card"
export default function Home() {
  return (
    <div>
      <h3>Hello Next js</h3>
      <Image
        src={body}
        alt="body"
        width={150}
        height={150}
        loading="lazy"
        className="w-[200px] h-[200px] ml-5 rounded-full"

      />
      <Image
        src={require('./image/doll.jpg')}
        alt="body"
        width={150}
        height={150}
        loading="lazy"
        className="w-[200px] h-[200px] ml-5 rounded-full"
      />
      <Card />
      <Card2 />
      <Card3 />
    </div>
  )
}