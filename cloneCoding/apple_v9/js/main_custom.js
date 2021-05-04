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

    //현재 스크롤한 수치 가져옴 : window.pageYoffset 대신 쓸 변수
    let yOffset = 0;
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 총합
    let currentScene = 0; // 현재 활성화된(브라우저 안에 들어와 있는) 씬(scroll-section)

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

    function scrollLoop(){
        
        // 각 섹션의 첫부분이 브라우저의 높이보다 높아지면 다음섹션의 애니메이션이 시작됨

        //내가 활성화시킬 scene의 번호를 결정하기 전에
        // prev스크롤하이트의 모든 씬의 스크롤 하이트를 더해서 확인
        for(let i=0; i<sceneInfo.length; i++){
            prevScrollHeight=0;
            // prevScrollHeight = prevScrollHeight+sceneInfo[i].scrollHeight;
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        console.log(prevScrollHeight);
        //처음 스크롤 했을 때는 예상수치가 나옴 : 3770*4(section개수)
        //그런데 스크롤을 멈췄을때 기하급수적으로 수가 늘어나있음 : 스크롤 할 때마다 해당 값들이 초기화가 되지 않기 때문
        // 내가 콘솔에서 본 값들은 누적값이다
        //변수를 일단 0으로 설정하는 이유가 초기화였음
    }

    window.addEventListener("resize",setLayout); //크기가 줄어들 때 setLayout이 같이 실행되도록

    window.addEventListener("scroll",()=>{
        //스크롤하면 기본적으로 실행되는 함수
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    setLayout();

})();


