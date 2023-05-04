import Link from "next/link";
import Image from "next/image";
import exchangeIMG from "../../public/images/CommonImages/swap.png";

import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDotsVertical } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import Swap_settings from "@/Component/Swap_settings";
import { CgLoadbarSound } from "react-icons/cg";


const Swap = () => {

    const [isActive, setIsActive] = useState(false);

    const [swap, setSwap] = useState(
        {
            Currency: "",
            Method: "",
        }
    )

    const swapHandler = (e: { target: { name: any; value: any } }) => {
        console.log(e.target.name);
        console.log(e.target.value);

        const { name, value } = e.target;
        setSwap((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }

    return (
        <div className="Page_6 br600:mx-[40px] br1220:mx-[80px] br320:pb-8 br600:pb-24">
            <div className="br320:pt-6 br480:pt-8 br320:pb-2 br600:pt-10 br768:pb-3 br768:pt-12 flex justify-between items-end swap">
                <p className="body_heading br600:ml-0 br320:ml-3 pb-2">Swap</p>
                <div className="flex items-center justify-center connect_wallet br600:mr-0 br320:mr-3">
                    <div className="br320:mr-1 br768:mr-6 relative analytic_hover">
                        <span className="br480:text-[18px] br768:text-[32px]"> <TbDotsVertical /> </span>
                        <div className="absolute top-[65px] right-[-0px] w-[280px] analytic flex items-end  rounded-[15px] py-[20px] px-[30px]">
                            <span className="text-4xl"> <CgLoadbarSound /> </span>
                            <p>View more analytics</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p>Connect Wallet</p>
                        <span className="pl-3 pt-1 arrow_hover">  <BsArrowRight /> </span>
                    </div>
                </div>
            </div>

            <div className="swap_botton br320:mt-12 br480:mt-16 br600:mt-20 br768:mt-[140px] text-center">
                <Link href="#" className="swap_other">Swap to Other </Link>
                <Link href="#" className="Matic_P2P">Swap to Matic P2P </Link>
            </div>

            {/* <!--Swap meter--> */}
            <div className="flex justify-center mb-[50px]">
                <div className="br320:h-[333px] br480:h-[383px] br600:h-[380px] w-[735px] text-center mt-24 swap_meter relative">
                    <div className="gear_hover">
                        <input type="checkbox" className="hidden" id="gear_set" />
                        <label htmlFor="gear_set" onClick={() => setIsActive(!isActive)}>
                            <span className="absolute top-5 right-5 br320:text-[24px] br768:text-[30px] swap_setting">{isActive ? <IoSettingsOutline /> : <div className="setgear"><IoSettingsOutline /></div>}</span>
                        </label>
                        <div className="absolute top-[60px] right-[40px] gear_setting z-[100]">
                            <Swap_settings />
                        </div>
                    </div>
                    <span className="absolute br320:top-[31%] br480:top-[33%] br600:top-[32%]  br320:right-[48%] br480:right-[47.5%] swap_setting exchange">
                        <Image src={exchangeIMG} alt="..." className=" br320:w-[25px] br600:w-[30px]" />
                    </span>
                    <div className="flex justify-center flex-col items-center">
                        <div className="flex br320:w-[auto] br768:w-[600px]">
                            <div className=" br320:w-[auto] br768:w-[400px]">
                                <input type="text"
                                    placeholder="00000"
                                    className="currency_input br320:w-[auto] br768:w-[405px]"
                                    name="Currency"
                                    value={swap.Currency}
                                    onChange={swapHandler}
                                />
                            </div>
                            <div className="Select_currency br320:w-[130px] br480:w-[auto] br768:w-[200px] pt-2">
                                <select className="select_input br320:text-[12px] br480:text-[16px]">
                                    <option value={"selected"}>Select Currency</option>
                                    <option>India</option>
                                    <option>Nepal</option>
                                    <option>US doller</option>
                                    <option>Euro</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex br320:w-[auto] br768:w-[596px] ">
                            <div className="br320:w-[auto] br768:w-[400px]">
                                <input type="text"
                                    placeholder="00000"
                                    className="currency_input br320:w-[auto] br768:w-[405px]"
                                    name="Method"
                                    value={swap.Method}
                                    onChange={swapHandler}
                                />
                            </div>
                            <div className="Select_currency flex br320:w-[auto] br768:w-[200px]">
                                <p className="text-[16px] font-semibold opacity-60 w-[170px]">P2PBIT</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[70px]">
                        <Link href="#" className="btn_swap br320:py-[8px] br480:py-[12px] br320:px-[30px] font-semibold">Swap</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Swap