import React from 'react';
import AcorrdionMain from "../Component/Accordion/AcorrdionMain";
import { CgArrowTopRight } from "react-icons/cg";
import Table from '@/Component/Table';
import { useState } from 'react';


const Token = () => {

    const [showModel, setshowModel] = useState(false);

    const showTable = () => {
        setshowModel(false)
    }

    return (
        <div className="Page_4 br320:mx-[20px] br600:mx-[40px] br1220:mx-[100px] pb-20">
            <h1 className="page4_head">Token Metrics</h1>
            <p className="page_des br320:text-justify br1024:text-center br320:w-[100%] br1024:w-[65%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et doloremagna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada.Ac odio tempor orci
                dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tinciduntornare massa eget egestas purus viverra accumsan in nisl.
            </p>
            <div className=" py-[25px] br768:px-[50px] br1024:px-[110px] mt-24 supply_status flex br768:justify-between br768:flex-row br320:flex-col">
                <div className='supply_wrppper'>
                    <div className="supply text-center br320:pb-2 br768:mb-0 br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                        <h1 className="br1220:text-base br1440:text-xl pb-3 font-semibold">P2P BIT</h1>
                        <p>Primary Token</p>
                    </div>
                </div>
                <div className='supply_wrppper'>
                    <div className="supply text-center br320:mt-2 br768:mt-0 br320:pb-2 br768:pb-0 br768:mb-0 br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                        <h1 className="br1220:text-base br1440:text-xl pb-3 font-semibold">$0.984</h1>
                        <p>Current Price</p>
                    </div>
                </div>
                <div className='supply_wrppper'>
                    <div className="supply text-center br320:mt-2 br768:mt-0 br320:pb-2 br768:mb-0 br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                        <h1 className="br1220:text-base br1440:text-xl pb-3 font-semibold">100 000 00</h1>
                        <p>Total Supply</p>
                    </div>
                </div>
                <div className='supply_wrppper'>
                    <div className="supply text-center br320:mt-2 br768:mt-0 br320:pb-2 br768:mb-0 br768:border-none br320:border-b br1440:px-12 br1220:px-4 br1660:px-16">
                        <h1 className="br1220:text-base br1440:text-xl pb-3 font-semibold">39 619 383</h1>
                        <p>Circulating Supply</p>
                    </div>
                </div>
                <div className="supply text-center br320:mt-2 br768:mt-0 br320:pb-2 br768:mb-0 br1440:px-12 br1220:px-4 br1660:px-16">
                    <h1 className="br1220:text-base br1440:text-xl pb-3 font-semibold">$39 003 327</h1>
                    <p>Market Cap</p>
                </div>
            </div>

            <div className=''>
                <div className="token_table mt-24 br1024:mx-[200px] ">
                    <div className=" br768:p-[50px] ">
                        <table className="w-[100%] text-center ">
                            <thead>
                                <tr>
                                    <th>Sr#</th>
                                    <th>Wellet Type</th>
                                    <th>Total Wellet</th>
                                    <th>Total Token</th>
                                    <th>Persentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className='table_arrow'>Staked <span onClick={() => setshowModel(true)}><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className='table_arrow'>Liquidity Provided <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className='table_arrow'>Matching Rewards <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className='table_arrow'>Founder <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className='table_arrow'>Donation Wellet <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className='table_arrow'>System fund <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className='table_arrow'>Burn <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className='table_arrow'>Community <span><CgArrowTopRight /></span></td>
                                    <td>10 </td>
                                    <td>240000 </td>
                                    <td>24% </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3}>Total Supply</td>
                                    <td>1000000</td>
                                    <td>100%</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className=''>

                        {showModel && <Table table={showTable}/>}
                    </div>
                </div>
            </div>

            <div className="FNQ_wrapper br1440:mx-[250px] br1220:mx-[200px] br1024:mx-[150px] br768:mx-[70px] mt-[140px]">
                <h1 className=" mb-[80px]">FAQs</h1>
                <AcorrdionMain />
            </div>
        </div>



    )
}

export default Token
