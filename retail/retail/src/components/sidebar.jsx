import React, { useState } from 'react'
import {BiSolidStore } from 'react-icons/bi'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'


export default function Sidebar({onStart}) {



  
  return (
    <>
    <aside id="sidebar" className= " " >
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BiSolidStore  className='icon_header'/> Retail Store
            </div>
            <span className='icon close_icon' o>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <button onClick={()=>onStart('dashboard')} >
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={()=>onStart('bill')}>
                    <BsFillArchiveFill className='icon'/> Billing
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={()=>onStart('Categories')}>
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </button>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={()=>onStart('inventory')}>
                    <BsListCheck className='icon'/> Inventory
                </button>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={()=>onStart('reports')}>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </button>
            </li>
            
        </ul>
    </aside>

    
    </>
  )
}

