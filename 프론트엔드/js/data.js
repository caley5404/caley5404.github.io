/*
 mouse,0
 cow,1
 tiger,2
 rabbit,3
 dragon,4
 snake,5
 horse,6
 sheep,7
 monkey,8
 chick,9
 dog,10
 pig,11
*/

/*
  type에 따라 결과값이 달라짐.
  십이간지 대신 솜사탕들을 넣으면 될 것.
*/

const qnaList = [
  {
    q: '1. 약속이 있던 날, 친구가 갑자기 못 오겠다고 하면 나는?',
    a: [
      { answer: 'a. 아쉬우니까 다른 친구 불러서 논다 ', type: [1, 2, 4, 9] },
      { answer: 'b. 알았다고 한 후 집으로 신나게 달려간다', type: [0, 3, 6, 5, 10, 8] },
      { answer: 'c. 혼자라도 나가서 나만의 시간을 즐긴다', type: [7, 11 ] },
    ]
  },
  {
    q: '2. 친구랑 놀다가 친구가 자기 친구도 같이 부르자고 한다. 나는?',
    a: [
      { answer: 'a. 오? 좋은데? 당장 불러!', type: [0, 3, 2, 8] },
      { answer: 'b. 난 걔랑 별로 안 친한데... 라며 거절한다', type: [1, 6, 5, 10] },
      { answer: 'c. 뭐... 불러도 되긴 하는데 난 좀 거리 두고 있을래', type: [7, 4, 9, 11] },
    ]
  },
  {
    q: '3. 처음 본 친구와 단둘이 밥을 먹게 됐다. 이때 나는?',
    a: [
      { answer: 'a. 너무 어색해서 빨리 먹고 자리를 피한다', type: [1, 3, 2, 10, 8] },
      { answer: 'b. 어색하지만 적당히 대화하며 분위기를 맞춘다', type: [7, 9, 11] },
      { answer: 'c. 친구 생겼다! 계속 얘기하면서 친해진다', type: [0, 6, 5, 4] }
    ]
  },
  {
    q: '4. 새 학기, 반에 아는 사람이 하나도 없다면? ',
    a: [
      { answer: 'a. 눈에 보이는 친구마다 말 걸며 친해진다 ', type: [1, 2, 4 ] },
      { answer: 'b. 누가 말 걸어주길 기다린다 ', type: [7, 10, 8, 9, 11 ] },
      { answer: 'c. 그냥 혼자 지내도 괜찮다 생각한다 ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    q: '5. 오랜만에 혼자 있는 시간! 무엇을 하나요?',
    a: [
      { answer: 'a. 활동적인 취미나 게임을 한다 ', type: [1, 7, 10, 4, 9 ] },
      { answer: 'b. 누워서 상상하거나 책을 본다 ', type: [0, 3, 6, 11]},
      { answer: 'c. 청소하거나 계획 정리 등 생산적인 걸 한다 ', type: [2, 5, 8] },
    ]
  },

  {
    q: '6. 강의나 회의에서 나는 정보를 어떻게 기억하나? ',
    a: [
      { answer: 'a. 구체적인 사실이나 예시를 잘 기억한다 ', type: [4, 9, 11 ] },
      { answer: 'b. 주요 개념이나 흐름을 기억한다', type: [0, 3, 6, 10 ] },
      { answer: 'c. 감정이나 분위기로 기억이 남는다 ', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    q: '7. 친구가 고민을 털어놓는다. 나는?',
    a: [
      { answer: 'a. 해결책을 논리적으로 제시한다 ', type: [1, 7, 11 ] },
      { answer: 'b. 허허... 일단 들어주고 공감한다 ', type: [2, 4, 9 ] },
      { answer: 'c. 예시나 비유로 설명하며 조언한다 ', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 중요한 결정을 내려야 한다면? ',
    a: [
      { answer: 'a. 명확한 근거와 논리를 기준으로 결정한다 ', type: [0, 4, 9 ] },
      { answer: 'b. 타인의 감정과 관계를 고려해 결정한다 ', type: [3, 2, 6, 5, 10, 8 ] },
      { answer: 'c. 내 직감을 믿고 결정한다 ', type: [1, 7, 11 ] },
    ]
  },
  {
    q: '9. 새로운 사람을 만났을 때 먼저 보는 건? ',
    a: [
      { answer: 'a. 외모나 행동 등 구체적인 특징 ', type: [7, 0, 5, 9 ] },
      { answer: 'b. 전체적인 분위기나 인상 ', type: [1, 3, 6, 11 ] },
      { answer: 'c. 대화 내용과 말투 ', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 작업할 때 선호하는 방식은? ',
    a: [
      { answer: 'a. 한 번에 하나씩 차근차근 ', type: [4, 9, 11] },
      { answer: 'b. 동시에 여러 작업을 넘나들며 ', type: [0, 2, 6, 5 ] },
      { answer: 'c. 즉흥적으로 상황에 맞춰 유동적으로 ', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. 중요한 일이 갑자기 변경되면? ',
    a: [
      { answer: 'a. 스트레스를 받으며 계획을 다시 짠다 ', type: [1, 4, 9, 11 ] },
      { answer: 'b. 괜찮다고 생각하고 유연하게 대처한다 ', type: [7, 0, 3, 6, 10] },
      { answer: 'c. 예상은 못 했지만 즉흥적으로 해결한다 ', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 나의 정리 습관은 어떤가요? ',
    a: [
      { answer: 'a. 계획표나 리스트로 체계적으로 관리 ', type: [3, 6, 4, 9 ] },
      { answer: 'b. 머릿속으로만 정리하며 유동적으로 ', type: [0, 2, 5, 10, 8] },
      { answer: 'c. 대충 쌓아두지만 필요할 때는 꺼낸다 ', type: [1, 7, 11] },
    ]
  }
]

const infoList = [
  {
    name: '<오리> (ENFP)',
    desc: '오리는 언제나 활기차고 긍정적인 에너지를 뿜어내! 주변 사람들을 웃게 만드는 장난꾸러기야. 새로운 경험을 즐기며 호기심이 많지! 그리고 친구들과 어울리는 걸 좋아하고 외로움을 잘 타. 상상력이 풍부해서 엉뚱한 아이디어도 자주 낸다고! 말하는 걸 좋아하고 감정 표현에도 솔직해. 함께 있으면 지루할 틈이 없을 거야!'
  },
  {
    name: '<곰> (ISFJ)',
    desc: '곰은 언제나 조용히 곁을 지켜주는 듬직해. 남을 먼저 생각하고 배려하는 마음이 커! 겉으로는 무뚝뚝해 보여도 속은 아주 따뜻하다구. 믿음직해서 친구들의 고민도 잘 들어주지. 변화를 싫어하고 익숙한게 좋아! 성실하고 책임감이 강해 맡은 일은 꼭 해낼 수 있어. 포근한 안정감을 주지! '
  },
  {
    name: '<토끼> (ESFP)',
    desc: '토끼는 사람들 사이에서 분위기를 띄워! 항상 활달하고 에너지가 넘치지 새로운 걸 시도하는 걸 두려워하지 않아! 눈에 띄는 걸 엄청 좋아해 센스 있는 말솜씨로 인기가 많지 주변 사람들이 많고 혼자있는건 싫어! 모임의 분위기메이커야!'
  },
  {
    name: '<돌고래> (INFJ)',
    desc: '돌고래는 조용하지만 눈빛 하나로 마음을 전하는 섬세한 친구야! 겉으론 차분해 보여도 속은 따뜻하고 깊은 감정을 품고 있지. 주변 사람의 감정에 공감 잘하고, 작고 사소한 것도 절대 그냥 넘기지 않아! 누군가 힘들어 보이면 조용히 다가가서 따뜻한 위로를 건네지. 상상력이 풍부해서 혼자만의 세상도 멋지게 그려나가! 말없이 팀을 이끄는 포근한 힘이 있어. '
  },
  {
    name: '<다람쥐> (ENFJ)',
    desc: '다람쥐는 부지런하고 따뜻한 마음을 가진 리더야! 주변 사람들 하나하나를 세심하게 챙기고, 다 같이 잘 어울릴 수 있도록 분위기를 이끌지. 말도 잘하고 공감도 깊어서, 함께 있으면 마음이 편해지고 힘이 나!'
  },
  {
    name: '<여우> (ENTP)',
    desc: '여우는 특이한 생각과 아무도 상상하지 못한 창의적인 생각을 하지! 말도 잘하고 센스도 있어! 새로운 것을 배우고 시도하는 걸 좋아해! 사람들과 이런저런 의견을 나누는게 좋아! 나는 외향인 중에 외향인이지! 창의적이고 자유로운 사고를 가졌어! 사람들은 나를 창의력 자판기 라고 불러!'
  },
  {
    name: '<햄스터> (ISFP)',
    desc: '햄스터는 조용하지만 마음이 아주 따뜻한 친구야. 작은 것에 감동하고, 혼자만의 평화로운 시간을 소중히 여겨. 겉으론 수줍어 보여도 가까워지면 다정하고 귀여운 매력이 가득하지! 말보다 행동으로 마음을 표현하고, 예쁜 것들을 좋아해 감각도 섬세해. 자연스럽게 주변 사람들에게 편안함을 주는 감성형 힐러야!'
  },
  {
    name: '<강아지> (ESFJ)',
    desc: '강아지는 누구에게나 환영받는 존재야. 나보다는 주변 사람들을 챙기는걸 좋아하지! 사교성이 뛰어나서 누구와도 잘 어울려! 다른사람의 기분을 쉽게 눈치 챌 수 있지! 도움을 주는 걸 좋아하고 신뢰를 중요하게 여겨. 늘 웃는 얼굴로 주변 분위기를 좋게 만들지! 강아지 처럼 함께 있으면 마음이 편안해지는 존재야!'
  },
  {
    name: '<고양이> (ISTP)',
    desc: '고양이는 쿨하고 독립적인 성격이야. 한번쯤은 자기자신을 위한 시간을 중요하게 여기지! 감정 표현이 서투르지만 마음은 따뜻해..! 현실적인 사고를 가지고 있어. 상황대처 능력이 좋아! 내 감정을 확실하게 드러낼 수 있지! 조용히 도움이 필요한 사람을 도와주는 존재야!!'
  },
  {
    name: '<거북이> (INTP)',
    desc: '거북이는 어른스러운 성격이야. 혼자 자기만의 생각에 잠기는걸 좋아하지. 어려운 문제라도 차근차근 해결하는 스타일이야. 이론적인 이야기나 철학적인 대화를 좋아해. 무뚝뚝해보여도 주변사람들을 챙겨주는 성격이지. 나는 나만의 세상을 가지고 있어. 말로 하는것 보다는 글이나 내 생각을 전달할 수 있는걸 선호해!'
  },
  {
    name: '<부엉이> (INTJ)',
    desc: '부엉이는 영리하고 치밀한 성격이야. 문제를 심도 있게 고민하고 설계하지. 감정보다는 논리와 전략을 중요하게 여겨. 자기 일에 집중할 때는 옆에서 건들기 힘들정도로 집중해서 해결하지! 자력심이 강해! 상대방에게 깊은 조언이나 충고를 잘 할 수 있지! 지혜로운 말들로 주변에서 신뢰를 얻고있지!'
  },
  {
    name: '<호랑이> (ESTP)',
    desc: '호랑이는 활발하고 용감한 성격이야! 섣불리 하기 힘들 일에서 장점을 드러내지! 위험을 감수하일도 부담없이 잘 할 수 있다고! 에너지가 넘치고 어린남자아이처럼 행동하는 걸 좋아하지! 순간적인 판단과 자신감이 넘쳐요! 친구들 사이에서 관심받는걸 즐기지! 항상 새로운 일들을 찾아서 다니는걸 좋아하지!'
  },
]
