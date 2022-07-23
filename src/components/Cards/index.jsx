import React, { useState } from 'react';
import * as S from '../../style/Global';
import cardsData from '../../CardsData';
import Card from '../Card';

export default function Cards(){
    const [data] = useState(cardsData);

    return(
        <>
            <S.Cards>
                <S.Title>AGENDA 20xx PARA O DESENVOLVIMENTO SUSTENTÁVEL</S.Title>
                <S.CardsWrapper>
                    {data.map((item, index) => (
                        <Card 
                            key={index}
                            title={item.title}
                            img={item.image}
                            color={item.color}
                            link={item.link}
                        />
                    ))}
                </S.CardsWrapper>
            </S.Cards>
        </>
    );
}