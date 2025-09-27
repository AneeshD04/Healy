import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="text-3xl font-bold text-black mr-2">Healy</h1>
      <Image src="/images/healy-logo.jpeg" alt="Healy Logo" width={50} height={50} />
    </Link>
  )
}
