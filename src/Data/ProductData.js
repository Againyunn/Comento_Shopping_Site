
//winter항목은 id가 100번대
let winterList = [

    {
        id: 101,
        name: "오리오리 패딩",
        price: 70000,
        describe: "순수 오리털 100%의 패딩",
        image: "/Imgs/패딩.png",
        imageDetail: "/Imgs/패딩설명.png"
    },
    {
        id: 102, 
        name: "나이키 기모 맨투맨",
        price: 40000,
        describe: "[New NIKE]신상 기모 가득한 맨투맨",
        image: "/Imgs/맨투맨.png",
        imageDetail: "/Imgs/맨투맨설명.png"
    },
    {
        id: 103,
        name: "엘빈클로 후드티",
        price: 35000,
        describe: "무지 오버핏 기모 후드티로 올 겨울도 따뜻하게!",
        image: "/Imgs/후드티.png",
        imageDetail: "/Imgs/후드티설명.png"
    },
    {
        id: 104,
        name: "방한장갑",
        price: 8000,
        describe: "얇지만 따뜻한 기능성 장갑!",
        image: "/Imgs/방한장갑.png",
        imageDetail: "/Imgs/방한장갑설명.png"
    }
];

//gift항목은 id가 200번대
let giftList = [
    {
        id: 201,
        name: "무드등",
        price: 25000,
        describe: "오묘한 불빛 가득 무드등",
        image: "/Imgs/무드등.png",
        imageDetail: "/Imgs/무드등설명.png"
    },
    {
        id: 202,
        name: "미니언즈 무선 가습기",
        price: 40000,
        describe: "[Iliver x 미니언즈] 어디든 휴대할 수 있는 미니 가습기",
        image: "/Imgs/가습기.png",
        imageDetail: "/Imgs/가습기설명.png"
    }
]

//gift항목은 id가 300번대
let springComes = [
    {
        id: 301,
        name: "무신사 블레이저",
        price: 45000,
        describe: "[무신사] 모던 감성 블레이저",
        image: "/Imgs/블레이저.png",
        imageDetail: "/Imgs/블레이저설명.png"
    },
    {
        id: 302,
        name: "블라우스",
        price: 24000,
        describe: "베이직한 디자인과 다양한 색상의 데일리 긴팔 블라우스",
        image: "/Imgs/블라우스.png",
        imageDetail: "/Imgs/블라우스설명.png"
    },
    {
        id: 303,
        name: "항공점퍼",
        price: 51000,
        describe: "베이직한 디자인의 항공점퍼",
        image: "/Imgs/항공점퍼.png",
        imageDetail: "/Imgs/항공점퍼설명.png"
    },

]

//모든 상품의 리뷰 DB
let Review = [        //id: 상품코드, userName: 사용자 아이디, date: 작성 날짜, memo: 간단 후기, star: 별 개수
    {
        id: 101,
        userName: "상냥한 어피치",
        date: "22.02.22",
        memo: "배송이 빨랐어요.",
        star: 5
    },
    {
        id: 101,
        userName: "다정한 네오",
        date: "22.02.25",
        memo: "완전 따뜻해요!",
        star: 5

    }
]



export function getWinterList(){
    return winterList;
}

export function getGiftList(){
    return giftList;
}

export function getSpringComes(){
    return springComes;
}

export function getReview(){
    return Review;
}