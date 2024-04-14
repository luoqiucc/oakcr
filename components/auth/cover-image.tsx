import Image from 'next/image'

export default function CoverImage({src}: { src: string }) {
    return (
        <Image
            priority
            src={src}
            alt="cover"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2]"/>
    )
}