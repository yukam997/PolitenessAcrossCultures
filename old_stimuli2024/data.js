const data = [
  {
    "Scenario number": "1",
    "scenario context": "Jack and Euan are working at their desks in an office. Jack stands up to grab a sweater from the back of their chair, and asks Euan.",
    "Type A last sentence": "Jack:\"Did you turn up the AC ? It's a bit cold.\"",
    "Type B last sentence": "Jack: \"Did you turn up the AC ? It's cold.\"",
    "intensifier": "a bit",
    "Question to ask": "How cold does Jack feel?",
    "Label for 0": "not cold at all",
    "Label for 7": "very cold"
  },
  {
    "Scenario number": "2",
    "scenario context": "Taylor asks Chris to give advice on a poster he designed for an upcoming event.\nTaylor: “Can you give me feedback for this poster?”",
    "Type A last sentence": "Chris: “The content is great, but the graphics is a bit too flashy. I think it's diverting attention away from the message.”",
    "Type B last sentence": "Chris: “The content is great, but the graphics is too flashy. I think it's diverting attention away from the message.”",
    "intensifier": "a bit",
    "Question to ask": "How flashy does Chris think the graphics is?",
    "Label for 0": "not flashy at all",
    "Label for 7": "very flashy"
  },
  {
    "Scenario number": "3",
    "scenario context": "Dana's younger brother asks if she can play video games him after she gets home from work.\nYounger Brother: “Hey, do you want to play video games with me?”",
    "Type A last sentence": "Dana: “I’m a bit exhausted from work today. I’d be down to play tomorrow tho?”",
    "Type B last sentence": "Dana: “I’m exhausted from work today. I’d be down to play tomorrow tho?”",
    "intensifier": "a bit",
    "Question to ask": "How tired is Dana?",
    "Label for 0": "not tired at all",
    "Label for 7": "very tired"
  },
  {
    "Scenario number": "4",
    "scenario context": "Amy and John are talking about their hobbies:\nAmy: \"You know, stamp collecting is really the most fascinating hobby. You can learn so much about history!\"\nJohn: \"Yeah, I guess it could be interesting...\"\nAmy: \"It’s honestly one of the best ways to spend your free time.\"",
    "Type A last sentence": "John: \"That’s true.\"",
    "Type B last sentence": "John: “That’s certainly true.”",
    "intensifier": "Certainly",
    "Question to ask": "How much does John agree with Amy?",
    "Label for 0": "strongly disagree",
    "Label for 7": "strongly agree"
  },
  {
    "Scenario number": "5",
    "scenario context": "A friend shares with Mia, her struggles of being away from home.\nFriend: “Being away from home for so long is harder than I thought. I miss my family a lot.”",
    "Type A last sentence": "Mia: “Yes, I relate to that. I certainly felt the same way when I first moved here.”",
    "Type B last sentence": "Mia: “Yes, I relate to that. I felt the same way when I first moved here.”",
    "intensifier": "Certainly",
    "Question to ask": "How much does Mia relate to her friend?",
    "Label for 0": "Don't relate at all.",
    "Label for 7": "she knows exactly what her friend is going through."
  },
  {
    "Scenario number": "6",
    "scenario context": "Nancy's friend shares their doubts about entering a writing competition and worries that their story may not be good enough to win.\nFriend: “I’ve entered my story into a writing competition, but I’m not sure if it’s good enough to win.”",
    "Type A last sentence": "Nancy: “Your story is very captivating. I think you certainly have a good chance.”",
    "Type B last sentence": "Nancy: “Your story is very captivating. I think you have a good chance.”",
    "intensifier": "Certainly",
    "Question to ask": "How much does Nancy believe her friend will win?",
    "Label for 0": "Nancy does not believe at all.",
    "Label for 7": "Nancy belives in her friend 100%."
  },
  {
    "Scenario number": "7",
    "scenario context": "Nia receives a birthday present gift from Kate.\r\nKate: \"I wasn’t sure if you’d like it. I know it’s a bit different.\"",
    "Type A last sentence": "Nia: “Thanks a lot. It is really nice.\"",
    "Type B last sentence": "Nia: \"Thanks a lot. It is really quite nice.\"",
    "intensifier": "quite",
    "Question to ask": "How much does Nia like her present?",
    "Label for 0": "Nia really doesn't like the present",
    "Label for 7": "Nia really likes the present."
  },
  {
    "Scenario number": "8",
    "scenario context": "Lin cooked dinner for both Sophie and herself. Lin asks Sophie’s opinion.\r\nLin : \"How was the dinner today? I think I may have overcooked the chicken a little bit.\"",
    "Type A last sentence": "Sophie: \"No, I think it was quite good!\"",
    "Type B last sentence": "Sophie: \"No, I think it was good!\"",
    "intensifier": "quite",
    "Question to ask": "How good did Sophie think the chicken was?",
    "Label for 0": "she thinks it was very bad",
    "Label for 7": "she thinks it was very good"
  },
  {
    "Scenario number": "9",
    "scenario context": "Amy and Dan are meeting up for coffee, but Dan arrives 15 min in late.\r\nDan: “Sorry I’m late. I was about to leave, but I forgot where I put my key and took long finding it.”",
    "Type A last sentence": "Amy: “No worries. That’s understandable.”",
    "Type B last sentence": "Amy: “No worries. That’s quite understandable.”",
    "intensifier": "quite",
    "Question to ask": "How much does Amy forgive Dan?",
    "Label for 0": "amy does not forgive Dan at all",
    "Label for 7": "amy completely forgives Dan"
  },
  {
    "Scenario number": "10",
    "scenario context": "Ronnie and his brother Joel are talking about their upcoming family holiday dinner.\r\nJoel: \"You’re making the holiday dinner again this year, right? Everyone loves your cooking, and it just wouldn’t be the same if someone else did it.\"",
    "Type A last sentence": "Ronnie: \"Ok. I don’t mind doing it.\"",
    "Type B last sentence": "Ronnie: “Ok. I can do it.”",
    "intensifier": "I don't mind",
    "Question to ask": "How happy is Ronnie about cooking the holiday dinner?",
    "Label for 0": "Ronnie is not happy at all about cooking dinner",
    "Label for 7": "Ronnie is very happy about cooking dinner"
  },
  {
    "Scenario number": "11",
    "scenario context": "Sarah and John had plans to meet for dinner at 6 p.m., but Sarah suggests moving the time to 5 p.m. Sarah: “Can we move the dinner to 5 instead of 6?”",
    "Type A last sentence": "John: “I don’t mind, that works for me!”",
    "Type B last sentence": "John: “Yes, that works for me.”",
    "intensifier": "I don't mind",
    "Question to ask": "How happy is John about moving dinner from 6pm to 5pm?",
    "Label for 0": "John is not happy at all",
    "Label for 7": "John is very happy"
  },
  {
    "Scenario number": "12",
    "scenario context": "At a library, Emma sees an empty chair next to a stranger and wants to use it. She asks if they mind her taking the chair.\nEmma: “Do you mind if I take this chair?”",
    "Type A last sentence": "Stranger: “No, I don’t mind. Go ahead.”",
    "Type B last sentence": "Stranger: “No. Go ahead.”",
    "intensifier": "I don't mind",
    "Question to ask": "How happy is the stranger about Emma taking their chair?",
    "Label for 0": "Not happy at all.",
    "Label for 7": "completely happy."
  },
  {
    "Scenario number": "13",
    "scenario context": "Alex hears that Jamie is visiting Boston next weekend and offers some help.",
    "Type A last sentence": "Alex: “I heard you’re visiting Boston next weekend. If you’re interested, I could suggest some good places to go, because I lived there for a few years.”",
    "Type B last sentence": "Alex: “I heard you’re visiting Boston next weekend. If you’re interested, I can suggest some good places to go, because I lived there for a few years.”",
    "intensifier": "can/could",
    "Question to ask": "How much does Alex believe Jamie will want his help?",
    "Label for 0": "Alex thinks Jamie not want his advice",
    "Label for 7": "Alex thinks Jamie wants his advice."
  },
  {
    "Scenario number": "14",
    "scenario context": "Your flat mate, who normally does the trash asks you to take out the trash today.",
    "Type A last sentence": "Flat mate:  \"I have to leave for work early. If it’s alright, could you take out the trash for me today?\"",
    "Type B last sentence": "Flatmate: \"I have to leave for work early. If it’s alright, can you take out the trash for me today?\"",
    "intensifier": "can/could",
    "Question to ask": "Does your flatmate think you might say no?",
    "Label for 0": "flatmate thinks I will say no",
    "Label for 7": "flatmate thinks I will definitely say yes."
  },
  {
    "Scenario number": "15",
    "scenario context": "A group of friends is making plans to go to a concert this weekend and asks if you want to join.",
    "Type A last sentence": "Friend: “If you’re free this weekend, you could come to the concert with us.”",
    "Type B last sentence": "Friend: “If you’re free this weekend, you can come to the concert with us.”",
    "intensifier": "can/could",
    "Question to ask": "How enthusiastic are they about you joining them?",
    "Label for 0": "they don't want you to join",
    "Label for 7": "they really want you to join"
  },
  {
    "Scenario number": "16",
    "scenario context": "Colin's friend Nate from highschool invited him to a gathering with some of their old classmates. He thanks Nate when leaving.",
    "Type A last sentence": "Colin: \"This was such a nice evening. Thanks for inviting me!\"",
    "Type B last sentence": "Colin: \"This was a nice evening. Thanks for inviting me!\"",
    "intensifier": "such a ",
    "Question to ask": "How much did Colin enjoy the evening.",
    "Label for 0": "He wish he stayed at home",
    "Label for 7": "he is very hapy he came"
  },
  {
    "Scenario number": "17",
    "scenario context": "You reach out to a friend who you forgot to contact on their birthday becuase you were busy settling into your new job.\nYou: “I’m sorry I forgot to reach out to you on your birthday.”",
    "Type A last sentence": "Friend: “No worries. I know it’s such a stressful time for you moving jobs and everything.”",
    "Type B last sentence": "Friend: “No worries. I know it’s a stressful time for you moving jobs and everything.”",
    "intensifier": "such a",
    "Question to ask": "How much does your friend forgive you?/ how much does your friend understand?",
    "Label for 0": "they do not forgive you at all.",
    "Label for 7": "they forigive you completely."
  },
  {
    "Scenario number": "18",
    "scenario context": "During a team meeting, Tim's colleague expresses their thoughts on the importance of evaluating the long-term impact of the marketing strategy.\nColleague: “I think we should consider the long-term impact of our marketing strategy.”",
    "Type A last sentence": "Tim: “That is such a good point.”",
    "Type B last sentence": "Tim: “That is a good point.”",
    "intensifier": "such a",
    "Question to ask": "How much does Tim think his colleague's idea is good?",
    "Label for 0": "Tim thinks the idea is average",
    "Label for 7": "Tim thinks the idea is excellent"
  }
];