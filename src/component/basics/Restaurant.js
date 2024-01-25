import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuAPI.js"
import MenuCard from "./MenuCard"
//menucard is a API created by us
import Navbar from './navbar'
const uniqueList=[
  //...spread operator 1:33
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),
  "All",
];// this section is used to automatically add new category so we create array with pure data
console.log(uniqueList);

const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu);
  //USESTATE (TO GET DATA AND HOLD IT) IS A HOOKS(USE TO MANAGE DATA)
  //many people also use redux inoplace of usesatate
  //always use hooks just after the opening of functional component
  //console.log(menuData);
  
  
  const [menuList,setMenuList]=useState(uniqueList);

  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setMenuData(updatedList);
  };

  return (
    <>
     
      <Navbar filterItem={filterItem} menuList={menuList}/> 
      <MenuCard menuDataa={menuData}/>
    </>
  )
}


//   in above code i.e.   <Navbar filterItem={filterItem} menuList={menuList}/> we have passed prop
//
export default Restaurant
