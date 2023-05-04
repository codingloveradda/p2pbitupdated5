import React from 'react';
import { CgArrowTopRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";



const Table = (props: { table: React.MouseEventHandler<SVGElement> | undefined; }) => {
    return (
        <div className='relative p-8 table_pop_wrapper'>
            <div className='fixed top-0 right-0 left-0 bottom-0 bg-black opacity-90'></div>
            <div className='fixed top-[50%] left-[5%] rounded-[17px] pop-up h-[auto] w-[800px] px-[50px] pb-[70px] bg-[#14181C]'>
                <div className='table_pop'>
                    <h1 className='table_pop_head mb-4'>Staked  </h1>
                    <div className=''>
                        <p className='text-xl'><RxCross2 onClick={props.table} /></p>
                    </div>
                </div>

                <table className="w-[100%] mt-10 text-center">
                    <thead>
                        <tr>
                            <th>Sr#</th>
                            <th>Wellet Address</th>
                            <th>Total Token</th>
                            <th>Persentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td className='table_arrow'>123***bnhd <span><CgArrowTopRight /></span></td>
                            <td>240000 </td>
                            <td>24% </td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total Supply</td>
                            <td>1000000</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default Table