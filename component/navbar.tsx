import Link from "next/link"

export default function Nav(){
    return(
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link href="/reacthook">React hook</Link>
                </li>
                <li>
                    <Link href="/onchange">On change</Link>
                </li>
            </ul>
            <br />
            <br />
            
        </div>
    )
}