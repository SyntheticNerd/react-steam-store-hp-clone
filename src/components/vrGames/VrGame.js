import React from 'react'
import { GameBtn, PriceTagSm } from './GameListStyle'

export default function VrGame() {
  return (
    <GameBtn>
        <img src={process.env.PUBLIC_URL + '/images/minecraft_small.png'} alt="" />
        <PriceTagSm>$00.00</PriceTagSm>
    </GameBtn>
  )
}
