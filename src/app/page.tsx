import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})
export default function Home() {
  return (
    <div className={`${montserrat.variable} grid bg-black w-full h-screen place-items-center`}>
      <h1 className="font-montserrat text-3xl text-red-500"><span className="text-violet-700">tailwind</span>+ <span className="font-bold"> turbopack</span></h1>
    </div>
  );
}
