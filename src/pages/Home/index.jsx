import * as S from '../../style/Global';
import '../../style/style.css';
import Cards from '../../components/Cards';

export default function Home(){
    return(
        <>
            <S.Home>
                <S.Article>
                    <S.Title>Os objetivos do desenvolvimento sustentável</S.Title>
                    <S.Intro>
                        Os Objetivos de Desenvolvimento Sustentável são um apelo global 
                        à ação para acabar com a pobreza, proteger o meio ambiente e o 
                        clima e garantir que as pessoas, em todos os lugares, possam 
                        desfrutar de paz e de prosperidade. Estes são os objetivos para 
                        os quais as Nações Unidas estão contribuindo a fim de que possamos 
                        atingir a Agenda 2030 no Brasil.
                        <br /> <br />
                        O trecho acima pode ser encontrado na versão brasileira do site da
                        ONU, sendo sucedido por uma série de cards que contém 'planos' para 
                        alcançar as metas citadas. Contudo, as aspas não foram 
                        utilizadas por acaso, os tais planos são apenas uma versão mais extensa
                        do resumo encontrado no início do site e quase não abordam sobre 
                        ações reais necessárias para atingir os objetivos apresentados. 
                        O conteúdo me lembra os tempos de ensino fundamental, quando 
                        recebia um tema para dissertar sobre e, por entender pouquíssimo sobre 
                        quase tudo, acabava enchendo linguiça até o número mínimo de linhas.
                        <br /><br />
                        Pois bem! Nesse caso, eu, um humilde estudante de ciência da computação,
                        farei a minha versão dos cards. A mesma contará com o ponto de vista
                        e soluções de um cidadão brasileiro médio que convive diariamente 
                        com vários dos problemas que a versão original tem a pretensão de resolver.
                        <br /><br />
                        Todavia, devo dizer que, diferente do primeiro modelo, o que segue
                        focará em um escopo menor, pois, acredito que o Brasil sendo muito grande, algumas
                        ideias podem não ter o mesmo efeito em determinadas regiões, as quais tenho conhecimento
                        teórico sobre, mas longe de um entendimento real de suas particularidades e 
                        problemas. Enfim, tentarei não sair das fronteiras do meu estado.
                        <br /><br />
                        <span>
                            PS: Por hora, a maioria dos cards está sem conteúdo, entretanto, em breve certamente
                            encontrarei uma solução para todos os problemas enfrentados e dissertarei sobre. 😉
                        </span>
                    </S.Intro>
                </S.Article>
                <Cards />
            </S.Home>
        </>
    );
}