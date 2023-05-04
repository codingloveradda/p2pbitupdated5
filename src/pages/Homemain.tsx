import Image from "next/image";
import Link from "next/link";

import sayhelloBgIMG from "../../public/images/page_3/sayhelloBG.png";
import { BsArrowRight } from "react-icons/bs";
// import BGImage from "../../public/images/CommonImages/p2pbg.jpg";
import BGImageCrop from "../../public/images/CommonImages/p2pbgCroped.jpg";
import logoIMG from "../../public/images/Page-1/Logo.svg";
import StarNetworkIMG from "../../public/images/Page-1/starNetwrok_croped.png";
import DollerIMG from "../../public/images/Page-1/Doller.svg";
import InfinityIMG from "../../public/images/Page-1/Infinity.svg";
import BGliveIMG from "../../public/images/Page-1/bgsec1.jpg"
import musk from "../../public/images/Page-1/Mask.png";
import Graph from "@/Component/Graph";
import Animation from "@/Component/Animation";
import BottomIMG from "../../public/images/Page-1/UnderBorder/OneB.png";



const Homemain = () => {
    return (
        <div className="posit">
            <div className='br768:h-[550px] br480:h-[350px] br320:h-[300px] br1024:h-[780px] relative flex justify-center items-end'
                style={{ backgroundImage: `url(${BGImageCrop.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", }}>
                <div className="absolute br1660:top-[33%] br1660:left-[43.5%] br1440:top-[25%] br1220:top-[28%] br1220:left-[40.5%] br1024:top-[29%] br1024:left-[38.5%] br768:top-[29%] br768:left-[40%] 
                                    br600:top-[29%] br600:left-[41%] br480:top-[29%] br480:left-[40%] br360:top-[29%] br360:left-[40%] br320:top-[29%] br320:left-[35%] ">
                    <Image src={logoIMG} className="br1660:w-[290px] br1660:h-[290px] br1440:w-[300px] br1440:h-[300px] br1220:w-[260px] br1220:h-[260px] br1024:w-[260px] 
                            br1024:h-[260px] br768:w-[180px] br768:h-[180px] br600:w-[120px] br600:h-[120px] br480:w-[120px] br480:h-[120px] br320:w-[100px] br320:h-[100px]" alt="Logo" />
                </div>
                <div className="mb-8">
                    <h1 className="page_heading br320:text-[8px] br480:text-[10px] br600:text-[12px] br768:text-[16px] br1024:text-[24px]">THE FUTURE OF VIRTUAL CURRENCY</h1>
                </div>
            </div>

            <div className="bg-live_status">
                <div className=" relative "
                    style={{ backgroundImage: `url(${BGliveIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", }}>
                    <div className=" BG-Black ">
                        <div className=" bg-live_status">
                            <div className="bg-live_statu1">
                                <div className="w-[100%] br600:px-[40px] pt-5 br320:h-[auto] br1220:h-[450px] br1220:px-[100px] br320:px-[20px] BG-Black">
                                    <div className="py-4 br768:px-[50px] br1024:px-[100px] br768:mt-8 br1024:mt-16 br1220:mt-[63px] live_status flex br768:justify-between br768:flex-row br320:flex-col">

                                        <div className=" text-center br768:border-none  br320:border-b br1440:px-12 br1220:px-4 br1660:px-16 live_supply live_supply_aftr">
                                            <h1 className="br320:text-sm br1220:text-base br1440:text-[24px] py-4 font-semibold text-white ">P2P BIT</h1>
                                            <p className="pb-1 text-[14px] text-[#EDEFF2]">Primary Token</p>
                                        </div>
                                        <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16 live_supply live_supply_aftr">
                                            <h1 className="br320:text-sm br1220:text-base br1440:text-[24px] text-white py-4 font-semibold">$0.984</h1>
                                            <p className="pb-1 text-[14px] text-[#EDEFF2]">Current Price</p>
                                        </div>
                                        <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16 live_supply live_supply_aftr">
                                            <h1 className="br320:text-sm br1220:text-base br1440:text-[24px] py-4 text-white font-semibold">100 000 00</h1>
                                            <p className="pb-1 text-[14px] text-[#EDEFF2]">Total Supply</p>
                                        </div>
                                        <div className="text-center br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16 live_supply live_supply_aftr">
                                            <h1 className="br320:text-sm br1220:text-base br1440:text-[24px] py-4 text-white font-semibold">39 619 383</h1>
                                            <p className="pb-1 text-[14px] text-[#EDEFF2]">Circulating Supply</p>
                                        </div>
                                        <div className="text-center br1440:px-12 br1220:px-4 br1660:px-16 live_supply">
                                            <h1 className="br320:text-sm br1220:text-base br1440:text-[24px] text-white py-4 font-semibold">$39 003 327</h1>
                                            <p className="text-[14px] text-[#EDEFF2]">Market Cap</p>
                                        </div>


                                    </div>
                                    <div className="flex items-center flex-col">
                                        <p className="br320:mt-8 br1024:mt-16 br1220:mt-24 br768:w-[500px] br320:text-justify br768:text-center text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                        <div className="w-[150px] br320:self-start br768:self-center ">
                                            <Link href="#" className="br320:my-4 br600:my-8 ml-1 text-lg pb-1 hover:border-b hover:duration-700 font-semibold flex items-center btn_hover">View More
                                                <span className="ml-4 arrow_hover">
                                                    <BsArrowRight />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Animation />

            {/* Live Status */}
            <div className="py-8 br320:px-[40px] br1024:px-[100px] br1440:px-[250px] doller_infinity" style={{ backgroundImage: `url(${sayhelloBgIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>

                <div>
                    <Graph />
                </div>

                <div className="br320:py-5 br768:py-8 mt-[-50px]">

                    <div className="text-center br320:mt-12 br768:mt-24 present_value">
                        <h3 className="br320:text-[24px] br768:text-[36px] font-bold p_bit_2 ">P2PBIT Price</h3>
                        <h1 className="future-2 font-black br768:block br320:hidden" >PRESENT VALUE</h1>
                    </div>

                </div>
                <div className="flex br320:items-center br1024:justify-around br1024:mt-24 br320:flex-col br1024:flex-row ">
                    <div className="br320:w-[280px] br320:mt-[40px] br1024:mt-[0px] br768:w-[400px] d_cards br1024:mb-0 br320:mb-8">
                        <div className=" h-[200px] live_price relative">
                            <div className="w-[90px] ">
                                <Image src={InfinityIMG} className="h-[66px]" alt="Infinity Image" />
                            </div>
                            <div className="pl-8 dollor">
                                <h1 className="br320:text-[36px] br768:text-[48px] mb-2 font-bold">40.945</h1>
                                <p className="text-[24px] text-green-500 font-bold">8.93% ↗</p>
                            </div>
                        </div>
                        <div>
                            <Image src={BottomIMG} className="h-[20px] bottom_IMG" alt="Infinity Image" />
                        </div>
                    </div>

                    <div className="br320:w-[280px] br768:w-[400px] d_cards">
                        <div className="h-[200px] br320:mt-4 br768:mt-0 live_price relative">
                            <div className="w-[50px]">
                                <Image src={DollerIMG} alt="Logo" />
                            </div>
                            <div className="dollortwo br320:pl-8 br768:pl-0">
                                <h1 className="br320:text-[36px] br768:text-[48px] mb-2 font-bold">64.678</h1>
                                <p className="text-[24px] text-green-500 font-bold">8.93% ↗</p>
                            </div>
                        </div>
                        <div>
                            <Image src={BottomIMG} className="h-[20px] bottom_IMG" alt="Infinity Image" />
                        </div>
                    </div>
                </div>

                <div className="br320:mt-8 br1024:mt-24 text-center bottom_sec_grap">
                    <p className="mx-[auto]  br320:w-[auto] br768:w-[500px] mb-12">Easily purchase P2PBIT token with your credit/debit card.. Iaculis urna id
                        volutpat lacus laoreet.</p>
                    <div className="br320:mt-6 br1024:my-12">
                        <Link href="#" className="btn_swap br320:py-[8px] br480:py-[14px] br320:px-[30px] font-semibold">Swap</Link>
                    </div>
                </div>
            </div>

            {/* p2p help Community */}
            <div className=" br320:h-[auto] grid br1024:grid-cols-2 br320:grid-cols-1 items-center" >
                <div className="logo_image flex justify-center items-center">
                    <Image src={StarNetworkIMG} alt="ffffff" />
                </div>
                <div className="mx-[auto]">
                    <div className="br768:mx-[50px] br1024:mx-[40px] br320:mx-5 br320:text-center br1024:text-start">
                        <div className="p2p_comnty">
                            <h3 className="br320:text-2xl br768:text-3xl font-bold p_bit  br320:my-[20px] br768:my-[40px]">P2P Help Community</h3>
                            <h1 className="future font-black">JOIN</h1>
                        </div>
                        <div className="br320:mt-6 br1024:mt-24">
                          
                            <p className="my-6 text-[#C7D0DB] br320:w-[auto] br1024:w-[460px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
                                Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam
                                in arcu cursus euismod.
                            </p>
                        </div>
                        <div className="w-[150px]">
                            <Link href="#" className="btn_hover br320:my-4 br600:my-8 text-lg pb-1 font-semibold flex items-center">White Paper <span className="arrow_hover ml-3">
                                <BsArrowRight /></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homemain
