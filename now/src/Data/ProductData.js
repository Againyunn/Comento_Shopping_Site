
//winter항목은 id가 100번대
let winterList = [
    {
        id: 101,
        name: "방한장갑",
        price: 5000,
        describe: "얇지만 따뜻한 기능성 장갑!",
        image: "/Imgs/상품사진.png",
        image2: "%now%PUBLIC_URL%Imgs%상품사진.png"
        // image: "C:/github/포트폴리오용/now/now/src/Imgs/상품사진.png"
    },
    {
        id: 102,
        name: "오리오리 패딩",
        price: 200000,
        describe: "순수 오리털 100%의 패딩",
        image: "/Imgs/상품사진.png",
        image2: "%now%PUBLIC_URL%Imgs%상품사진.png"
        // image: "C:/github/포트폴리오용/now/now/src/Imgs/상품사진.png"
    },
    {
        id: 103, 
        name: "기모 맨투맨",
        price: 20000,
        describe: "기모 가득한 맨투맨",
        image: "/Imgs/상품사진.png",
        image2: "%now%PUBLIC_URL%Imgs%상품사진.png"
        // image: "C:/github/포트폴리오용/now/now/src/Imgs/상품사진.png"
    }
];

//gift항목은 id가 200번대
let giftList = [
    {
        id: 201,
        name: "무드등",
        price: 30000,
        describe: "오묘한 불빛 가득 무드등",
        image: "/Imgs/상품사진.png",
        image2: "%now%PUBLIC_URL%Imgs%상품사진.png"
        // image: "C:/github/포트폴리오용/now/now/src/Imgs/상품사진.png"
    },
    {
        id: 202,
        name: "무선 가습기",
        price: 40000,
        describe: "어디든 휴대할 수 있는 미니 가습기",
        image: "/Imgs/상품사진.png",
        image2: "%now%PUBLIC_URL%Imgs%상품사진.png"
        // image: "C:/github/포트폴리오용/now/now/src/Imgs/상품사진.png"
    }
]

export function getWinterList(){
    return winterList;
}

export function getGiftList(){
    return giftList;
}