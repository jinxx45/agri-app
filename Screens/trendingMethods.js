import React from 'react'
import { ScrollView, Text } from 'react-native'

import Trendcard from '../Components/TrendingMethodCard'

export default function trendingMethods() {
    return (
        <ScrollView contentContainerStyle={{alignItems:"center",paddingBottom:10}}>


            
<Trendcard 
            title="Block chain"
            headerColor="orange"
            caption="Blockchain's capability of tracking ownership records and tamper-resistance can be used to solve urgent issues such as food fraud, safety recalls, supply chain inefficiency and food traceability in the current food system. Blockchain’s unique decentralized and practices to create a market for premium products with transparency."
             path = {require("../Images/TrendingMethods/blockchain.webp")}
            />

            
            <Trendcard 
            title="Indoor Vertical Farming"
            headerColor="green"
            caption="Indoor vertical farming can increase crop yields, overcome limited land area, and even reduce farming’s impact on the environment by cutting down distance traveled in the supply chain. Indoor vertical farming can be defined as the practice of growing produce stacked one above another in a closed and controlled environment."
             path = {require("../Images/TrendingMethods/vertic.jpg")}
            />
            <Trendcard
            title="Farm Automation"
            headerColor="pink"
            path = {require("../Images/TrendingMethods/automation.png")}
            caption="Farm automation, often associated with “smart farming”, is technology that makes farms more efficient and automates the crop or livestock production cycle. An increasing number of companies are working on robotics innovation to develop drones, autonomous tractors, robotic harvesters, automatic watering, and seeding robots."

            />
            <Trendcard
            title="Livestock Farming Technology"
            headerColor="grey"
            path = {require("../Images/TrendingMethods/livestock.png")}            
            caption="The livestock industry is a sector that is widely overlooked , although it is arguably the most vital. Livestock provides much needed .Livestock management has traditionally been known as running the business of poultry farms, dairy farms, cattle ranches, or other livestock-related agribusinesses."
            />

<Trendcard 
            title="Modern Greenhouses "
            headerColor="violet"
            caption="In recent decades,  used primarily for research and aesthetic purposes  large-scale facilities that compete directly with land-based conventional food production. Combined, the entire global greenhouse market currently produces nearly US $350 billion in vegetables annually, of which U.S. production comprises less than one percent."
             path = {require("../Images/TrendingMethods/greenHouse.png")}
            />

<Trendcard 
            title="Precision Agriculture"
            headerColor="blue"
            caption="Agriculture is undergoing an evolution - technology is becoming an indispensable part of every commercial farm. New precision agriculture companies are developing technologies that allow farmers to maximize yields by controlling every variable of crop farming such as moisture levels, pest stress, soil conditions, and micro-climates."
             path = {require("../Images/TrendingMethods/precision.png")}
            />

        </ScrollView>
    )
}
