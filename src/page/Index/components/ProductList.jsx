import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getWinterList, getGiftList, getSpringComes } from '../../../data/ProductData';

//선택한 제품군 목록 불러오는 컴포넌트
export default function ProductList({theme}) {
    const  selectedTheme  = theme;
    let thisProductList = []

    //초기상태
    if (selectedTheme === '') {
        return (<></>)
    }

    //방한용품
    if (selectedTheme === 'winter') {
        thisProductList = getWinterList(); //해당 리스트 담아오기
    }

    //나를 위한 선물
    if (selectedTheme === 'gift') {
        thisProductList = getGiftList();
    }

    //봄은 온다
    if (selectedTheme === 'spring') {
        thisProductList = getSpringComes();
    }

    //테스트
    console.log('thisProductList', thisProductList)

    return (
        <div style={{ textAlign: "center", float: "top", position: "relative", top: "35px" }}>
            <nav style={{
                padding: "1rem", border: "0px"
            }} >
                {thisProductList.map(findList => (
                    <div key={findList.id}>
                        <Link
                            style={{ margin: "1rem", textDecoration: 'none' }}
                            to={`/ProductDetail/${findList.id}`}
                            key={findList.id}
                        >
                            <Content>
                                <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={process.env.PUBLIC_URL + `${findList.image}`} alt={findList.name} />
                                <div className='outer'>
                                    <p className='title'>{findList.name}</p>
                                    <p className='body'>{findList.describe}</p>
                                </div>
                            </Content>
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}


//css
const Content = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    color: black;
    align-items: center;

    div.outer{
        &:hover {
            background-color: #EEEEEE;
            color: black;
          }    
    }

    p.title{
        font-weight: bold;
        font-size: 20px;
        lineHeight: 26px;
        text-align: left;
    }

    p.body{
        font-weight: normal;
        font-size: 16px;
        lineHeight: 21px;
        text-align: left;
    }

`