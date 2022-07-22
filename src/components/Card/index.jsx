import * as S from '../../style/Global';

export default function Card({title, img, color}){
    return(
        <>
            <S.Card style={{'background-color': color}}>
                <S.CardTitle>{title}</S.CardTitle>
                <S.Image src={img} alt="" />
            </S.Card>
        </>
    );
}