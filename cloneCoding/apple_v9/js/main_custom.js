// apple-v9 javascript
// console.log("a");


// 모든 애니메이션에 대한 정보를 배열에 담는다 : 함수를 하나 만들어서 호출(즉시 호출함수)
// ()=>{} 이게 호출해야할 함수 
// function(){}
// ()=>{} 를 괄호에 넣어서 즉시호출할 수 있는 함수를 만든다
// (function(){})(); 이것과 같음 형태만 다름

(()=>{
    // 함수를 따로 만든 이유는 전역변수의 충돌을 피하기 위해서 사용
        // js에서 전역변수 사용은 바람직하지 못함 : const를 쓰더라도 ㅇㅇ

        // 1번째로 알아야할 정보 : 스크롤양 ->스크롤 구간에 따라 달라진다 == 스크롤양에 따라 달라진다

    const sceneInfo = [
        {   //0
            type:'sticky', //type을 정해주는 이유 : scroll될 때 무빙이 다르기 때문
            heightNum:5,// 어느 디바이스에서 열 지 모르기 때문에 '해당 디바이스의 브라우저의 몇배' 로 설정 -> 고정값 불가
            // heightNum을 이용해서 scrollHeight 세팅한다
            scrollHeight:0,
            objs:{
                //html 객체 모아두는 용도
                // html에 있는 객체를 받아와야 각 container의 height에 scrollHeight 적용 가능
                container :document.querySelector("#scroll-section-0")
            }
        },

        {   //1
            type:'normal',
            heightNum:5,
            scrollHeight:0,
            objs:{
                container :document.querySelector("#scroll-section-1")
            }
        },

        {   //2
            type:'sticky',
            heightNum:5,
            scrollHeight:0,
            objs:{
                container :document.querySelector("#scroll-section-2")
            }
        },

        {   //3
            type:'sticky',
            heightNum:5,
            scrollHeight:0,
            objs:{
                container :document.querySelector("#scroll-section-3")
            }
        }
    ];

    function setLayout(){
        // heightNum을 이용해서 scrollHeight 세팅한다
        for(let i=0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            // window.innerHeight : 디바이스의 브라우저 높이 : window생략가능
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
            // `${}` 탬플릿 문자열 - 기본적으로는 문자열만 가능하지만 달러중괄호 내부에는 변수를 사용할 수 있다
        }
        console.log(sceneInfo);
    }
    setLayout();

})();


