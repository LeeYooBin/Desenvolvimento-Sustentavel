import * as S from '../../style/Global';
import { Link } from 'react-router-dom';

export default function Card({title, img, color, link}){
    return(
        <>
            <Link to={link} style={{'text-decoration': 'none'}}>
                <S.Card style={{'background-color': color}}>
                    <S.CardTitle>{title.toUpperCase()}</S.CardTitle>
                    <S.Image src={img} alt="" />
                </S.Card>
            </Link>
        </>
    );
}