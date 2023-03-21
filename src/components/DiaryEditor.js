import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import MyButton from './MyButton';
import MyHeader from './MyHeader';
import EmotionItem from './EmotionItem';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [{
  emotion_id: 1,
  emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
  emotion_descript: "완전 좋음"

},
{
  emotion_id: 2,
  emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
  emotion_descript: "좋음"

},
{
  emotion_id: 3,
  emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
  emotion_descript: "그럭저럭"

},
{
  emotion_id: 4,
  emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
  emotion_descript: "나쁨"

},
{
  emotion_id: 5,
  emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
  emotion_descript: "끔찍함"

},
]

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10)
}

const DiaryEditor = () => {

  const constRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const handleClickEmote = (emotion) => {
    setEmotion(emotion)
  }

  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <MyHeader headText={"새 일기쓰기"}
        leftChild={<MyButton text={"< 뒤로가기"}
          onClick={() => navigate(-1)} />} />
      <div>

      </div>
      <section>
        <h4>오늘은 언제인가요?</h4>
        <div className='input_box'>
          <input className='input_date'
            value={date} onChange={(e) => setDate(e.target.value)} type="date" />
        </div>
      </section>
      <section>
        <h4>오늘의 감정</h4>
        <div className='imput_box emotion_list_wrapper'>
          {emotionList.map((it) => (
            <EmotionItem key={it.emotion_id} {...it}
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion} />
          ))}
        </div>
      </section>
      <section>
        <h4>
          오늘의 일기
        </h4>
        <div className='input_box_text_wrapper'>
          <textarea
            placeholder='오늘은 어땠나요'
            ref={constRef} value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
      </section>


    </div >
  )
};

export default DiaryEditor;