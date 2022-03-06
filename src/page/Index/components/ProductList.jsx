import { Link } from 'react-router-dom';
import { getWinterList, getGiftList, getSpringComes } from '../../../data/ProductData';
// import styled from 'styled-components';

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
                            <div>
                                <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={process.env.PUBLIC_URL + `${findList.image}`} alt={findList.name} />
                                <p style={{ color: "black", textAlign: "left", fontFamily: "Noto Sans CJK KR", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "26px" }}>{findList.name}</p>
                                <p style={{ color: "black", textAlign: "left", fontFamily: "Noto Sans CJK KR", fontStyle: "normal", fontWeight: "normal", fontSize: "16px", lineHeight: "21px" }}>{findList.describe}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}