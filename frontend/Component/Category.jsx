import React from 'react'
import {TbPool, TbBeach, TbToolsKitchen } from 'react-icons/tb'
import { GiIsland, GiCampingTent, GiGrandPiano, 
    GiFishingBoat, GiMountainCave, GiForestCamp, GiCastle, GiPaperWindmill, GiTreehouse } from 'react-icons/gi'
import { MdCabin, MdOutlineSurfing, MdSportsGolf, MdDownhillSkiing } from 'react-icons/md';
import { HiOutlineHomeModern } from 'react-icons/hi';
import { SlCup } from 'react-icons/si';

export default function Category() {
    const categories = [
        {
            id: 1,
            icon: (
                <>
                    <TbPool /> 
                </>
            ),
            name: "Pool"
        },
        {
            id: 2,
            icon: (
                <>
                    <TbBeach /> 
                </>
            ),
            name: "Beach"
        },
        {
            id: 3,
            icon: (
                <>
                    <TbToolsKitchen /> 
                </>
            ),
            name: "Kitchen"
        },
        {
            id: 4,
            icon: (
                <>
                    <GiIsland /> 
                </>
            ),
            name: "island"
        },
        {
            id: 5,
            icon: (
                <>
                    <GiCampingTent /> 
                </>
            ),
            name: "Camping"
        },
        {
            id: 6,
            icon: (
                <>
                    <GiGrandPiano /> 
                </>
            ),
            name: "Piano"
        },
        {
            id: 7,
            icon: (
                <>
                    <GiFishingBoat /> 
                </>
            ),
            name: "Houseboats"
        },
        {
            id: 8,
            icon: (
                <>
                    <GiMountainCave /> 
                </>
            ),
            name: "Cave"
        },
        {
            id: 9,
            icon: (
                <>
                    <GiForestCamp /> 
                </>
            ),
            name: "Camping"
        },
        {
            id: 10,
            icon: (
                <>
                    <GiCastle /> 
                </>
            ),
            name: "Castle"
        },
        {
            id: 11,
            icon: (
                <>
                    <GiPaperWindmill /> 
                </>
            ),
            name: "Windmill"
        },
        {
            id: 12,
            icon: (
                <>
                    <GiTreehouse /> 
                </>
            ),
            name: "Treehouse"
        },
        {
            id: 13,
            icon: (
                <>
                    <MdCabin /> 
                </>
            ),
            name: "Cabins"
        },
        {
            id: 14,
            icon: (
                <>
                    <MdOutlineSurfing /> 
                </>
            ),
            name: "Surfing"
        },
        {
            id: 15,
            icon: (
                <>
                    <MdSportsGolf /> 
                </>
            ),
            name: "Golf"
        },
        {
            id: 16,
            icon: (
                <>
                    <MdDownhillSkiing /> 
                </>
            ),
            name: "Ski-in/out"
        },
        {
            id: 17,
            icon: (
                <>
                    <HiOutlineHomeModern /> 
                </>
            ),
            name: "Tiny house"
        },{
            id: 17,
            icon: (
                <>
                    <SlCup /> 
                </>
            ),
            name: "Breakfast"
        }
    ];
  return (
    <div>
        Category
        
    </div>
  )
}
