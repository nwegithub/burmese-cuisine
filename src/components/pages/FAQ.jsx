import React, { useState } from 'react';
import { useAuth } from '../../Auth/AuthContext';
import question from '../../assets/question.png';
import { useNavigate } from 'react-router-dom';
const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '20px',
    minHeight: '50vh',
  },
  header: {
    backgroundColor: '#4267b2',
    color: 'black',
    padding: '20px',
  },
  headerText: {
    margin: 0,
  },
  subHeader: {
    margin: '20px 0',
  },
  faqSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  faqColumn: {
    flex: '1',
    minWidth: '300px',
    textAlign: 'left',
  },
  question: {
    margin: '10px 0',
    cursor: 'pointer',
  },
  answer: {
    fontSize: '1rem',
    color: '#FF5768',
    marginTop: '5px',
  },
  link: {
    color: '#4267b2',
    textDecoration: 'none',
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  },
  btnStyle: {
    borderRadius: '20px',
    backgroundColor: "#fe9e0d",
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    marginTop: '0px'
  },
  image: {
    width: '200px',  // Increased width
    height: '200px', // Increased height
    display: 'block',
    margin: '20px auto',
    animation: 'bounce 2s infinite', // Apply bounce animation
  },
};

// Keyframes for bounce animation
const keyframes = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`;

// Inject keyframes into the document
const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);



const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const { isMya } = useAuth();
  const navigate = useNavigate()

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleClick = () => {
    navigate('/Contactus')
  }

  const adEspressoQuestions = [
    {
      question: {
        en: "What are popular dishes in Myanmar during the monsoon season?",
        mya: "မုတ်သုံရာသီမှာ မြန်မာနိုင်ငံမှာ လူကြိုက်များတဲ့ ဟင်းပွဲတွေက ဘာလဲ?",
      },
      answer: {
        en: "Mohinga (rice noodle soup), a national favorite, is especially popular during monsoon due to its warming properties.",
        mya: "မုန့်ဟင်းခါး သည် ၎င်း၏ ပူနွေးသော ဂုဏ်သတ္တိကြောင့် မုတ်သုံရာသီတွင် အထူးသဖြင့် လူကြိုက်များသည်။",
      },
    },
    {
      question: {
        en: ".What are the key ingredients in Burmese curries?",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေမှာ အများဆုံးသုံးတဲ့ ပါဝင်ပစ္စည်းတွေက ဘာတွေလဲ?",
      },
      answer: {
        en: "Turmeric, lemongrass, and shrimp paste are common in Burmese curries, imparting unique flavors.",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေမှာ သုံးလေ့ရှိတဲ့ ပါဝင်ပစ္စည်းတွေက နနွင်း၊ စပါးလင်နှင့် မျှင်ငပိသည် မြန်မာဟင်းချက်ရာတွင် ထူးထူးခြားခြား အရသာရှိစေပါသည်။",
      },
    },
    {
      question: {
        en: "How is Shan rice different from regular rice?",
        mya: "ရှမ်းထမင်းနှင့် ပုံမှန်ထမင်း ဘယ်လိုကွာခြားပါသလဲ?",
      },
      answer: {
        en: "Shan rice  tends to be soft and stickyer than regular rice.Seasoned and served with a variety of side dishes, creating a distinct and flavorful meal.",
        mya: "ရှမ်းထမင်းသည် ပုံမှန်ထမင်းထက် နူးညံ့ပြီးစေးကပ်လေ့ရှိပါသည်။အရံဟင်းမျိုးစုံဖြင့် အရသာရှိရှိ စားသုံးပေးခြင်းဖြင့် ထူးခြားပြီး အရသာရှိသော အစားအစာကို ဖန်တီးပေးပါသည်။",
      },
    },
    {
      question: {
        en: "What distinguishes Rakhine cuisine from other Myanmar cuisines?",
        mya: "ရခိုင်ဟင်းလျာတွေက တခြားမြန်မာအစားအစာတွေနဲ့ ဘယ်လိုကွာခြားလဲ?",
      },
      answer: {
        en: "Rakhine dishes are known for their bold flavors and abundant use of local seafood and spiciness.",
        mya: "ရခိုင်ဟင်းလျာများသည် ၎င်းတို့၏ထူးခြားသောအရသာရရှိစေရန် ဒေသထွက်ပင်လယ်စာများနှင့်အစပ်ကို ပေါများစွာအသုံးပြုခြင်းကြောင့် လူသိများသည်။",
      },
    },
    {
      question: {
        en: "What are some common festivals where ethnic foods are highlighted?",
        mya: "တိုင်းရင်းသားအစားအစာများကို အသားပေးဖော်ပြသည့် လူသိများသောပွဲတော်အချို့ကား အဘယ်နည်း?",
      },
      answer: {
        en: "Thingyan (Water Festival),Thadingyut (Lighting Festival),Tazaungdaing (Festival of Lights),Kachin Manaw Festival,Shan New Year Festival,Chin National Day,Kayin New Year,Mon National Day,Kayah New Year,Rakhine Water Festival.",
        mya: "သင်္ကြန်(ရေပွဲတော်)၊သီတင်းကျွတ်လ (မီးထွန်းပွဲတော်)၊တန်ဆောင်တိုင် (မီးထွန်းပွဲတော်)၊ကချင်မနောပွဲ၊ရှမ်းနှစ်သစ်ကူးပွဲတော်၊ချင်းအမျိုးသားနေ့၊ကရင်နှစ်သစ်ကူးမွန်အမျိုးသားနေ့၊ကယားနှစ်သစ်ကူး၊ရခိုင်သင်္ကြန် တို့ဖြစ်ကြသည်",
      },
    },
    {
      question: {
        en: "How does the geography of Myanmar influence its ethnic cuisines?",
        mya: "မြန်မာနိုင်ငံရဲ့ ပထဝီဝင်အနေအထားက တိုင်းရင်းသား အစားအစာတွေကို ဘယ်လိုလွှမ်းမိုးထားလဲ?",
      },
      answer: {
        en: "Mountainous regions, coastal areas, and river valleys: Each geographic area provides different ingredients and influences cooking methods, leading to a rich diversity in ethnic cuisines.",
        mya: "တောင်တန်းဒေသများ၊ ကမ်းရိုးတန်းဒေသများနှင့် မြစ်ချိုင့်များစသော ပထဝီဝင်ဧရိယာတစ်ခုစီသည် မတူညီသောပါဝင်ပစ္စည်းများနှင့် ချက်ပြုတ်နည်းများကို ပံ့ပိုးပေးသောကြောင့် လူမျိုးစုအစားအစာများ ကွဲပြားမှုများပြားလာစေသည်။",
      },
    },
    
  ];

  const onlineAdvertisingQuestions = [
    {
      question: {
        en: "What are some fusion dishes that combine elements from different ethnic cuisines in Myanmar?",
        mya: "မြန်မာနိုင်ငံမှာ မတူညီတဲ့ လူမျိုးစုအစားအစာတွေကနေ ပေါင်းစပ်ထားတဲ့ ပေါင်းစပ်ဟင်းလျာတွေက ဘာတွေလဲ?",
      },
      answer: {
        en: "Burmese Shan Noodle Salad,Kachin-Style Laphet Thote,Rakhine Mohinga,Shan Tofu Curry,Mon Fish Curry with Shan Rice,Karen Bamboo Shoot Stir-fry with Bamar Spices,Kayin Sticky Rice with Rakhine Seafood,Shan Fish Soup with Kachin Herbs.These fusion dishes reflect the blending of different culinary traditions within Myanmar.",
        mya: "မြန်မာ ရှမ်းခေါက်ဆွဲသုပ်၊ကချင်စတိုင် လက်ဖက်သုတ်၊ရခိုင်က မုန့်ဟင်းခါး၊ရှမ်းတို့ဟူးဟင်း၊ရှမ်းထမင်းနှင့်မွန်ငါးဟင်း၊ဗမာအမွှေးနံ့သာများဖြင့်ကရင်မျှစ်ညွန့်ကြော်၊ရခိုင်ပင်လယ်စာနှင့်ကရင်ကောက်ညှင်း၊ကချင်ဆေးဖက်ဝင်အပင်များဖြင့် ရှမ်းငါးဟင်းရည်။ဤပေါင်းစပ်ဟင်းလျာများသည် မြန်မာနိုင်ငံအတွင်း မတူညီသော အချက်အပြုတ် ဓလေ့ထုံးတမ်းများကို ရောစပ်ဖော်ပြနေပါသည်။",
      },
    },
    {
      question: {
        en: "How much average time is it spend cooking myanmar food?",
        mya: "မြန်မာအစားအစာချက်ပြုတ်ရာမှာ ပျမ်းမျှအချိန်ဘယ်လောက်သုံးလဲ?",
      },
      answer: {
        en: "The average time spent cooking Burmese (Myanmar) food can vary widely depending on the complexity of the dish. Simple dishes might take around 30 minutes to an hour, while more elaborate meals could take several hours.Overall, a typical Burmese meal preparation might take anywhere from 1 to 2 hours on average.",
        mya: "မြန်မာအစားအစာများသည် ချက်ပြုတ်သည့် ပျမ်းမျှအချိန်သည် ဟင်း၏ ရှုပ်ထွေးမှုပေါ်မူတည်၍ ကွဲပြားနိုင်သည်။ ရိုးရှင်းသောဟင်းလျာများသည် မိနစ် 30 မှ တစ်နာရီအတွင်း ကြာမြင့်နိုင်သော်လည်း ပိုမိုစုံလင်သော အစားအစာများ(ဥပမာ-မုန့်ဟင်းခါး)သည် နာရီပေါင်းများစွာ ကြာနိုင်သည်။ ယေဘုယျအားဖြင့် မြန်မာအစားအစာပြင်ဆင်မှုတစ်ခုသည် ပျမ်းမျှအားဖြင့် 1 နာရီမှ 2 နာရီအထိ ကြာနိုင်သည်။",
      },
    },
    {
      question: {
        en: "Can I cook traditional Burmese dishes as a vegetarian?",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေကို သက်သတ်လွတ်အဖြစ်ချက်ပြုတ်လို့ရမလား?",
      },
      answer: {
        en: "You can cook traditional Burmese dishes as vegetarian dishes, and substitute meat with vegetables, Tofu and so on.",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေကို သက်သတ်လွတ်ဟင်းလျာအဖြစ် ချက်ပြုတ်နိုင်ပြီး အသားအစားတွေကို ဟင်းသီးဟင်းရွက်၊ တို့ဖူး စသည်တို့နဲ့ အစားထိုးအသုံးပြုနိုင်ပါတယ်။",
      },
    },
    {
      question: {
        en: " How to store Burmese traditional dishes after cooking?",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေကို ချက်ပြုတ်ပြီးသွားရင် ဘယ်လိုသိမ်းဆည်းရမလဲ?",
      },
      answer: {
        en: "After cooking, cool the dishes and store them in an airtight container in the refrigerator. It can be kept for 2 to 3 days at most. When you are going to eat it, reheat it and eat it.",
        mya: "ချက်ပြုတ်ပြီးသွားတဲ့ ဟင်းလျာတွေကို အအေးခံပီး လေလုံအောင် ရေခဲသေတ္တာထဲ ထည့်ပြီး သိမ်းဆည်းပါ။ အများဆုံး ၂ ရက်မှ ၃ ရက်ထိ ထိမ်းဆည်းနိုင်ပါတယ်။ စားမယ့်အခါ ပြန်ပူအောင်ချက်ပြီး စားပါ။",
      },
    },
    {
      question: {
        en: "Can you prepare Myanmar traditional dishes in advance?",
        mya: "မြန်မာ့ရိုးရာဟင်းလျာတွေကို ကြိုတင်ပြင်ဆင်လို့ရလား?",
      },
      answer: {
        en: "Yes, Most dishes can be prepared in advance and stored. Some dishes taste better when prepared a day in advance",
        mya: "ကြိုတင်ပြင်ဆင်လို့ရပါတယ်၊ အများစုဟင်းလျာတွေကို ကြိုတင်ပြင်ဆင်ပြီး သိမ်းဆည်းထားနိုင်ပါတယ်။ တချို့ဟင်းလျာတွေက တစ်ရက်ကြိုပြင်ဆင်ထားမှ ပိုပြီးအရသာရှိလာတတ်ပါတယ်။",
      },
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.subHeader} className='title1'>
        {isMya ? "သင့်မှာမေးခွန်းများရှိပါသလား?" : "Do You Have Questions?"}
      </h2>
      <p className='title2'>{isMya ? "ကျွန်ုပ်တို့တွင် အဖြေများ ရှိသည်" : "We have answers (well, most of the times!)"}</p>
      <img src={question} style={styles.image} alt="question" />

      <div style={styles.faqSection}>
        <div style={styles.faqColumn}>
          {/* <p>AdEspresso FAQs</p> */}
          {adEspressoQuestions.map((item, index) => (
            <div key={`adEspresso-${index}`}>
              <p className='body1' style={styles.question} onClick={() => toggleAnswer(`adEspresso-${index}`)}>
                {index + 1}. {isMya ? item.question.mya : item.question.en}
              </p>
              {visibleAnswers[`adEspresso-${index}`] && (
                <p style={styles.answer}>{isMya ? item.answer.mya : item.answer.en}</p>
              )}
            </div>
          ))}
        </div>
        <div style={styles.faqColumn}>
          {/* <p>Online Advertising FAQs</p> */}
          {onlineAdvertisingQuestions.map((item, index) => (
            <div key={`onlineAd-${index}`}>
              <p className='body1' style={styles.question} onClick={() => toggleAnswer(`onlineAd-${index}`)}>
                {index + 7}. {isMya ? item.question.mya : item.question.en}
              </p>
              {visibleAnswers[`onlineAd-${index}`] && (
                <p style={styles.answer}>{isMya ? item.answer.mya : item.answer.en}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.contact}>
        <button
          className="body3"
          style={styles.btnStyle}
          onClick={handleClick}
        >
          {isMya ? "ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ" : "Contact us"}

        </button>
      </div>

    </div>
  );
};

export default FAQ;
