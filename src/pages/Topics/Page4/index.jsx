import * as S from '../../../style/Global';
import { Link } from 'react-router-dom';
import Cards from '../../../components/Cards';

export default function Page4(){
    return(
        <>
            <S.TextArea>
                <h2>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</h2>
                <S.Text>
                    <span>1.1</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur, necessitatibus eum assumenda dolorem sed nam, 
                        nostrum quasi odit laborum sint inventore id earum quibusdam 
                        reprehenderit impedit aut ipsa quidem fugit!
                    <br /><br />
                    <span>1.2</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur, necessitatibus eum assumenda dolorem sed nam, 
                        nostrum quasi odit laborum sint inventore id earum quibusdam 
                        reprehenderit impedit aut ipsa quidem fugit!
                        <br /><br />
                    <span>1.3</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur, necessitatibus eum assumenda dolorem sed nam, 
                        nostrum quasi odit laborum sint inventore id earum quibusdam 
                        reprehenderit impedit aut ipsa quidem fugit!
                        <br /><br />
                    <span>1.4</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur, necessitatibus eum assumenda dolorem sed nam, 
                        nostrum quasi odit laborum sint inventore id earum quibusdam 
                        reprehenderit impedit aut ipsa quidem fugit!
                        <br /><br />
                    <span>1.5</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur, necessitatibus eum assumenda dolorem sed nam, 
                        nostrum quasi odit laborum sint inventore id earum quibusdam 
                        reprehenderit impedit aut ipsa quidem fugit!
                </S.Text>
                <Link style={{color: 'blue', 'text-decoration': 'none'}} to={'/'}>
                    <S.Text>Voltar ao início</S.Text>
                </Link>
            </S.TextArea>
            <Cards />
        </>
    );
}