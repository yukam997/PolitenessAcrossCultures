
const data = [{
        "Scenario number": "1",
        "scenario context": "Sarah is interning at a company, and her boss, Mr. Thompson asks to stay to finish up her report.<br>Mr. Thompson: Can you stay late today to help finish up the report?<br>Sarah: \"I'm feeling slightly exhausted after the back-to-back meetings today, so I'm not sure I'd be at my best. Would it be alright if I leave come in early tomorrow to finish it up?\"",
        "predicate": "exhausted",
        "intensifier": "slightly",
        "Question to ask": "How polite is Sarah being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "2",
        "scenario context": "Amy's boyfriend Jake wants to talk about their date this weekend, but Amy is tired:<br>Jake: \"Hey, can we talk about this weekend?\"<br>Amy: \"I'm kind of exhausted right now. Would it be okay if we talk about it tomorrow instead?\"",
        "predicate": "exhausted",
        "intensifier": "kind of",
        "Question to ask": "How polite is Amy being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "3",
        "scenario context": "Ben's cousin Amy asks him if he's coming to their monthly family gathering:<br>Amy: \"Are you coming to the family dinner this evening?\"<br>Ben: \"I'd love to, but I'm quite exhausted from work this week. I'll catch up with everyone next time.\"",
        "predicate": "exhausted",
        "intensifier": "quite",
        "Question to ask": "How polite is Ben being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "4",
        "scenario context": "Sophie asks Daniel if he can call later tonight:<br>Sophie: \"Can I call you to chat later tonight? I could use some advice.\"<br>Daniel: \"I'd love to help, but I'm very exhausted and might fall asleep. Can we talk tomorrow?\"",
        "predicate": "exhausted",
        "intensifier": "very",
        "Question to ask": "How polite is Daniel being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "5",
        "scenario context": "Chris's friend Emma asks if you want to join her on a weekend trip:<br>Emma: \"We're planning a spontaneous road trip this weekend. Want to join?\"<br>Chris: \"That sounds awesome, but I'm extremely exhausted from traveling all week. I think I need some downtime instead.\"",
        "predicate": "exhausted",
        "intensifier": "extremely",
        "Question to ask": "How polite is Chris being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "6",
        "scenario context": "Jo's manager shares their thoughts on a recent company webinar.<br>Manager: \"The webinar on productivity strategies was so enlightening.\"<br>Jo: \"I thought it was slightly boring. The content didn't really resonate with me.\"",
        "predicate": "boring",
        "intensifier": "slightly",
        "Question to ask": "How polite is Jo being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "7",
        "scenario context": "Sarah excitedly talks about a recent indie band concert she attended with her friend Mark.<br>Sarah: \"I'm so happy I was able to hear them live. I loved every moment!\"<br>Mark: \"I thought it was kind of boring. I couldn't get into the music at all.\"",
        "predicate": "boring",
        "intensifier": "kind of",
        "Question to ask": "How polite is Mark being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "8",
        "scenario context": "Melissa's coworker shares their positive experience at a networking event.<br>Colleague: \"I enjoyed the event and made some great connections.\"<br>Melissa: \"Honestly, I found the event quite boring. I struggled to find conversations that interested me.\"",
        "predicate": "boring",
        "intensifier": "quite",
        "Question to ask": "How polite is Melissa being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "9",
        "scenario context": "After watching a slow-paced romantic drama, Lisa shares her thoughts with Jake.<br>Lisa: \"I thought that movie was so beautiful! The emotions were just perfect.\"<br>Jake: \"Honestly for me, it was very boring. I was hoping for more action.\"",
        "predicate": "boring",
        "intensifier": "very",
        "Question to ask": "How polite is Jake being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "10",
        "scenario context": "After a trip to an art museum, Emily talks about her favorite exhibits.<br>Emily: \"The contemporary art section was fascinating! I could spend hours there!\"<br>David: \"I thought it was extremely boring. I didn't really understand the art.\"",
        "predicate": "boring",
        "intensifier": "extremely",
        "Question to ask": "How polite is David being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "11",
        "scenario context": "Lisa is working in an open-plan office, but her colleague is having a loud phone conversation nearby.<br>Lisa: \"It's slightly difficult to concentrate with the phone call being that loud. Would you mind lowering your voice a little?\"",
        "predicate": "difficult",
        "intensifier": "slightly",
        "Question to ask": "How polite is Lisa being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "12",
        "scenario context": "Amy is trying to study in her room, but her roommate, Jake, is playing music loudly in the living room.<br>Amy: \"Hey Jake, it's kind of difficult to concentrate with the music so loud. Do you think you could turn it down a bit?\"",
        "predicate": "difficult",
        "intensifier": "kind of",
        "Question to ask": "How polite is Amy being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "13",
        "scenario context": "Sarah is at a restaurant with friends, but the background music is too loud to have a conversation.<br>Sarah: \"It's quite difficult to talk with the music this loud. Could you ask the staff to turn it down a little?\"",
        "predicate": "difficult",
        "intensifier": "quite",
        "Question to ask": "How polite is Sarah being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "14",
        "scenario context": " Claire is studying for an exam, but her younger siblings are playing noisily in the next room.<br>Claire: \"It's very difficult to study with all the noise. Can you please be a bit quieter?\"",
        "predicate": "difficult",
        "intensifier": "very",
        "Question to ask": "How polite is Claire being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "15",
        "scenario context": "Alex is attending a lecture, but a group of students nearby is talking loudly, making it hard to hear the professor.<br>Alex: \"It's extremely difficult to listen to the lecture with all the talking. Could you keep it down, please?\"",
        "predicate": "difficult",
        "intensifier": "extremely",
        "Question to ask": "How polite is Alex being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "16",
        "scenario context": "During a class discussion, Emily expresses concerns about a peer.<br>Emily: \"I'm slightly concerned about Jake; he hasn't been participating in class and seems really withdrawn.\"",
        "predicate": "concerned",
        "intensifier": "slightly",
        "Question to ask": "How polite is Emily being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "17",
        "scenario context": "During a coffee break, an Mike notices their colleague looking overwhelmed.<br>Mike: \"You seem really swamped with work lately. I'm kind of concerned that you might be taking on too much.\"",
        "predicate": "concerned",
        "intensifier": "kind of",
        "Question to ask": "How polite is Mike being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "18",
        "scenario context": "Lisa meets with her child's teacher to discuss declining grades.<br>Lisa: \"I noticed my son's grades have dropped significantly, and I'm quite concerned about how this might affect his future.\"",
        "predicate": "concerned",
        "intensifier": "quite",
        "Question to ask": "How polite is Lisa being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "19",
        "scenario context": "Rachel notices that her friend has been looking stressed and overwhelmed.<br>Rachel: \"You've been really busy with work lately. It's making me very concerned about how you're handling everything.\"",
        "predicate": "concerned",
        "intensifier": "very",
        "Question to ask": "How polite is Rachel being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "10",
        "scenario context": "David observes that his colleague has been distant.<br>David: \"I've noticed you haven't been as chatty as usual. I'm extremely concerned if everything is okay at home.\"",
        "predicate": "concerned",
        "intensifier": "extremely",
        "Question to ask": "How polite is David being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "21",
        "scenario context": " Anna explains why she decided to postpone her vacation to her friend Dan.<br>Anna: \"I think I need to save more money before I can go.\"<br>Dan: \"That's slightly understandable; budgeting is important.\"",
        "predicate": "understandable",
        "intensifier": "slightly",
        "Question to ask": "How polite is Dan being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "22",
        "scenario context": "John invites his friend Alex to a weekend camping trip, but Alex declines because of he is tired.<br>Alex: \"I'd love to go, but I think I need some rest this weekend.\"<br>John: \"That's kind of understandable. You've been taking on a lot recently. We can plan another trip later in the year.\"",
        "predicate": "understandable",
        "intensifier": "kind of",
        "Question to ask": "How polite is John being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "23",
        "scenario context": "Anna tells her professor that she needs a few extra days to complete an assignment due to family obligations.<br>Anna: \"I'm really sorry, but could I have an extension on the assignment? I had a family emergency.\"<br>Professor: \"That's quite understandable, Anna. Take the extra time you need.\"",
        "predicate": "understandable",
        "intensifier": "quite",
        "Question to ask": "How polite is the professor being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "24",
        "scenario context": "Emma's friend, Sarah, needs to cancel their dinner plans because she has a work emergency.<br>Sarah: \"I'm really sorry, but I have to stay late at work tonight. I won't be able to make it to dinner.\"<br>Emma: \"That's very understandable. Work comes first. We can always reschedule.\"",
        "predicate": "understandable",
        "intensifier": "very",
        "Question to ask": "How polite is Emma being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "25",
        "scenario context": "Sam apologizes to his coworker, Rachel, for missing a call during a meeting.<br>Sam: \"I didn't see your call; I was in a meeting.\"<br>Rachel: \"That's extremely understandable; we often have back-to-back meetings.\"",
        "predicate": "understandable",
        "intensifier": "extremely",
        "Question to ask": "How polite is Rachel being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "26",
        "scenario context": "During a team meeting, Mark presents a well-researched project proposal.<br>Lisa: \"The data you've gathered and the way you've presented it - it's slightly impressive.\"",
        "predicate": "impressive",
        "intensifier": "slightly",
        "Question to ask": "How polite is Lisa being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "27",
        "scenario context": "During a tech demo, a developer showcases a new app.<br>Investor: \"The features you've included are cutting-edge. It's kind of impressive how you managed to pull this together in such a short time.\"",
        "predicate": "impressive",
        "intensifier": "kind of",
        "Question to ask": "How polite is the investor being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "28",
        "scenario context": "Emma invites her friend Alex over for dinner and cooks a homemade meal.<br>Emma: \"I wasn't sure if you'd like it. I tried a new recipe.\"<br>Alex: \"It's quite impressive! I think the flavors really come together nicely.\"",
        "predicate": "impressive",
        "intensifier": "quite",
        "Question to ask": "How polite is Alex being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "29",
        "scenario context": "Ms. Johnson hands back graded essays to her students and gives feedback.<br>Ms. Johnson: \"Your essay was very impressive. Well done.\"",
        "predicate": "impressive",
        "intensifier": "very",
        "Question to ask": "How polite is Ms. Johnson being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "30",
        "scenario context": "A teacher, Mrs. Carter, is providing feedback on her student's painting.<br>Mrs. Carter: \"This painting is extremely impressive. The colors work really well together, and I can see you've put a lot of thought into the composition.\"",
        "predicate": "impressive",
        "intensifier": "extremely",
        "Question to ask": "How polite is Mrs. Carter being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "31",
        "scenario context": "During a group project, Alex helps Jessica by clarifying some confusing instructions.<br>Jessica: \"I appreciate you taking the time to explain that. You've been slightly helpful.\"",
        "predicate": "helpful",
        "intensifier": "slightly",
        "Question to ask": "How polite is Jessica being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "32",
        "scenario context": "A traveler, Sam, asks an airport staff member where to find a particular gate.<br>Sam: \"Thanks for pointing me in the right direction. You've been kind of helpful.\"",
        "predicate": "helpful",
        "intensifier": "kind of",
        "Question to ask": "How polite is Sam being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "33",
        "scenario context": "A sales assistant helps Megan find the exact item she was looking for after searching through multiple aisles.<br>Megan: \"I appreciate your help finding this. You've been quite helpful.\"",
        "predicate": "helpful",
        "intensifier": "quite",
        "Question to ask": "How polite is Megan being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "34",
        "scenario context": "Amy asks her friend, Lisa, for some tips on baking bread.<br>Amy: \"Thank you for those tips. You've been very helpful.\"",
        "predicate": "helpful",
        "intensifier": "very",
        "Question to ask": "How polite is Amy being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    },
    {
        "Scenario number": "35",
        "scenario context": "Rachel gives feedback on Michael's draft presentation.<br>Michael: \"I appreciate your suggestions. You've been extremely helpful in improving this.\"",
        "predicate": "helpful",
        "intensifier": "extremely",
        "Question to ask": "How polite is Michael being?",
        "Label for 0": "minimally polite",
        "Label for 7": "maximally polite"
    }
];