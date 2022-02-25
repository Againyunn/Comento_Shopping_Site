import React from 'react';
import { Link } from 'react-router-dom';

//페이지 이동을 위한 컴포넌트(토멘코 쇼핑)
export default function NavTomenco() {

    return (
        <>
            <Link to="/Display/main">
                <button>토멘코 쇼핑</button>
            </Link>
        </>
    )
}
