import Link from "next/link"

export default function Reacthook(){
    return(
        <div>
            <ol>
                <li><Link href="/reacthook/usestate">useState</Link></li>
                <li><Link href="/reacthook/useeffect">useEffect</Link></li>
            </ol>
        </div>
    )
}