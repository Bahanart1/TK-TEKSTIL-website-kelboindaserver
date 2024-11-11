import Link from "next/link";

function Index() {
    return (
        <div className="bg-black mt-0 py-2">
            <div className="site-4xl-container mx-auto">
                <div className="flex flex-col md:mr-12 md:flex-row items-center justify-center md:justify-start">
                    {/* Logo bölümü */}
                    <div className="mb-2 md:mb-0">
                        <Link href="/">
                            <p className="navItem text-white text-lg font-bold cursor-pointer">LOGO</p>
                        </Link>
                    </div>

                    {/* navbar bölümü*/}
                    <div className="flex flex-col md:flex-row items-center jus text-white space-y-2 md:space-y-0 md:space-x-8 md:font-serif">
                        <Link href="/">
                            <p className="navItem cursor-pointer md:text-neutral-300">Home</p>
                        </Link>
                        <Link href="/howWeProduce">
                            <p className="navItem cursor-pointer">How We Produce</p>
                        </Link>
                        <Link href="/manufacturing">
                            <p className="navItem cursor-pointer">Manufacturing</p>
                        </Link>
                        <Link href="/about">
                            <p className="navItem cursor-pointer">About Us</p>
                        </Link>
                        <Link href="/office">
                            <p className="navItem cursor-pointer">Office View</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
