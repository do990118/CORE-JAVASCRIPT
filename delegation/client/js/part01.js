const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

const navigation = getNode('.navigation');
const list = getNodes('.navigation li');
const visualImage = getNode('.visual img');

function handleSlide(e) {
  e.preventDefault();

  // e.target 조회
  // console.log(e.target);

  // li만 수집 (closet)
  const target = e.target.closest('li');
  const list = [...navigation.children];
  const a = e.target.closest('a');
  const index = target.dataset.index;

  // 내가 선택한 li에게 is-active 클래스를 넣어 주기
  if (!target | !a) return;

  // console.log(a.href);
  visualImage.setAttribute('src', './assets/part01/${data[index-1].src}');
  visualImage.setAttribute('alt', data[index - 1].alt);

  console.log(data[index - 1].src);

  list.forEach((li) => {
    li.classList.remove('is-active');
  });

  target.classList.add('is-active');

  // 나를 제외한 모든 li에게 is-active 제거

  // 선택한 li의 n 번째를 찾아서 data 배열의 i 번째에 접근
  // console.log(target.dataset.index);
  target.classList.add('is-active');
  // console.log(data[index-1].alt);
}

navigation.addEventListener('click', handleSlide);
