// 변수 선언
let n = 1;
let img_n = document.querySelectorAll('.list-photo > li');
let l_btn = document.querySelectorAll('.fa-angle-left');
let r_btn = document.querySelectorAll('.fa-angle-right');

document.getElementById('img_num').innerHTML=n + '/17';
for(let i=0; i < img_n.length; i++){
  img_n[i].addEventListener('click', function(){
    // console.log(i+1);
    n = i + 1;
    imgChange(n);
  })
}

// 썸네일 이미지 목록(li)태그 클릭시 해당 인덱스 번호 구하여

// 이미지 변경하기 위한 함수로 넘기기
/* 사용자 정의함수 imgChange()
  1. 숫자 변경
  2. 이미지 변경
*/

function imgChange(){
  console.log(n);
  document.getElementById('img_num').innerHTML=n + '/17';
  document.getElementById('main').src = './images01/movie_image' + n + '.jpg';

  for(let j=0; j<img_n.length; j++){
    img_n[j].classList.remove('line');
  }
  img_n[n-1].classList.add('line');
}

// forEach 함수는 배열에서만 사용가능한 메서드
/*
문법
  객체.forEach((매개변수, index)){
    실행할 함수 내용
  }
*/
// 좌, 우 버튼 클릭시 n값을 imgChange 함수에 넘기기
l_btn.forEach((el)=>{
  el.addEventListener('click', function(){
    if(n==1){
      n = 17;
    } else {
      n--;
    }
    imgChange(n);
  });
});

r_btn.forEach((el)=>{
  el.addEventListener('click', ()=>{
    if(n==17){
      n = 1;
    } else{
      n++;
    }
    imgChange(n);
  });
});
