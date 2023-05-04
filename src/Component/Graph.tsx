import React from 'react';
import Image from 'next/image';
import GraphIMG from "../../public/images/Page-1/graph.png"

const Graph = () => {
    return (
        <div className='br1024:mb-[80px] br320:mb-[80px]'>
            <h1 className='br320:text-[22px] br768:text-[36px] br320:text-center br320:my-5 br768:my-8 font-bold grap_head'>P2P BIT Market Performance</h1>
            <div className='flex justify-center mb-[80px]'>
                <div className='w-[1300px] flex h-[auto]'>
                    <div className='br600:flex br600:flex-col br1024:gap-[18px] br600:gap-[14px] br768:gap-[15px] br1220:gap-[30px] br1440:gap-[18px] br1660:gap-[35px] br480:mr-[10px] br768:mr-[20px] br320:hidden'>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p> 
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                        <div>
                            <p className="br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]" >0.000</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <Image src={GraphIMG} alt='' />
                        </div>
                        <div className='br600:flex justify-between px-[20px] br320:mt-[10px] br768:mt-[20px] br320:hidden'>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>
                            <div>
                                <p className='br1220:text-[18px] br1024:text-[14px] br768:text-[12px] br600:text-[10px]'>mm/dd</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex br320:flex-col br480:flex-row br320:justify-center items-center br480:justify-around br320:my-5 br768:my-8 grap_supply'>
                <div className='br320:text-center br480:text-start mb-5 grap_items'>
                    <h1 className='br320:text-[16px] br768:text-[24px] font-bold'>$0.984</h1>
                    <p className='br320:text-[12px] br768:text-medium'>Current Price</p>
                </div>
                <div className='br320:text-center br480:text-start mb-5 grap_items'>
                    <h1 className='br320:text-[16px] br768:text-[24px] font-bold'>7 953</h1>
                    <p className='br320:text-[12px] br768:text-medium'>Total Transaction</p>
                </div>
                <div className='br320:text-center br480:text-start mb-5 grap_items'>
                    <h1  className='br320:text-[16px] br768:text-[24px] font-bold'>$0.984</h1>
                    <p className='br320:text-[12px] br768:text-medium'>Total Unique Addresses</p>
                </div>
                <div className='br320:text-center br480:text-start mb-5 grap_items'>
                    <h1  className='br320:text-[16px] br768:text-[24px] font-bold'>7 953</h1>
                    <p className='br320:text-[12px] br768:text-medium'>Total Unique Addresses</p>
                </div>
            </div>

        </div>
    );
};

export default Graph;