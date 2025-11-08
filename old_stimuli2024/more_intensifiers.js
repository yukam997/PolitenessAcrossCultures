
const data = [{
        "Scenario number": "1",
        "scenario context": "Sarah is interning at a company, and her boss, Mr. Thompson asks to stay to finish up her report.<br>Mr. Thompson: Can you stay late today to help finish up the report?<br>Sarah: \"I'm feeling totally exhausted after the back-to-back meetings today, so I'm not sure I'd be at my best. Would it be alright if I leave come in early tomorrow to finish it up?\"",
        "predicate": "exhausted",
        "intensifier": "totally",
        "Question to ask": "how exhausted is Sarah?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "2",
        "scenario context": "Amy's boyfriend Jake wants to talk about their date this weekend, but Amy is tired:<br>Jake: \"Hey, can we talk about this weekend?\"<br>Amy: \"I'm utterly exhausted right now. Would it be okay if we talk about it tomorrow instead?\"",
        "predicate": "exhausted",
        "intensifier": "utterly",
        "Question to ask": "how exhausted is Amy?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "3",
        "scenario context": "Ben's cousin Amy asks him if he's coming to their monthly family gathering:<br>Amy: \"Are you coming to the family dinner this evening?\"<br>Ben: \"I'd love to, but I'm deeply exhausted from everything that happend at work this week. I'll catch up with everyone next time.\"",
        "predicate": "exhausted",
        "intensifier": "deeply",
        "Question to ask": "how exhausted is Ben?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "4",
        "scenario context": "Chris's friend Emma asks if you want to join her on a weekend trip:<br>Emma: \"We're planning a spontaneous road trip this weekend. Want to join?\"<br>Chris: \"That sounds amazing, but I'm really exhausted from traveling all week.  I need to recharge before diving into anything else.\"",
        "predicate": "exhausted",
        "intensifier": "really",
        "Question to ask": "how exhausted is Chris?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "5",
        "scenario context": "Sophie's friend asks her to help with party preparations the night before the event.<br>Friend: \"Can you stay late to help finish decorating for tomorrow?\"<br>Sophie: \"I've been running errands all day, and I'm rather exhausted. I'll come early tomorrow to help instead.\"",
        "predicate": "exhausted",
        "intensifier": "rather",
        "Question to ask": "how exhausted is Sophie?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "6",
        "scenario context": "Mia's sister asks her to babysit her kids for an evening.<br>Sister: \"Could you watch the kids for a few hours tonight?\"<br>Mia: \"I wish I could, but I'm fairly exhausted after chasing my own little ones all day. Can we plan for another time?\"",
        "predicate": "exhausted",
        "intensifier": "fairly",
        "Question to ask": "how exhausted is Mia?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "7",
        "scenario context": "David's classmate asks him to stay up late to review material for an upcoming exam.<br>Classmate: \"Can we go over the practice questions one more time tonight?\"<br>David: \"I'd love to help, but I'm a little exhausted from studying all day. I think I need to rest to do well tomorrow.\"",
        "predicate": "exhausted",
        "intensifier": "a little",
        "Question to ask": "how exhausted is David?",
        "Label for 0": "minimally exhausted",
        "Label for 7": "maximally exhausted"
    },
    {
        "Scenario number": "8",
        "scenario context": "During a casual conversation after class, Emily shares her thoughts with Andy about their mutual friend Jake:<br>Emily: \"I'm totally concerned about Jake. He hasn't been participating in class and seems withdrawn. Do you think he's okay?\"",
        "predicate": "concerned",
        "intensifier": "totally",
        "Question to ask": "how concerned is Emily?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "9",
        "scenario context": "During a coffee break, an Mike notices their colleague looking overwhelmed.<br>Mike: \"You seem swamped with work lately. I'm utterly concerned that you might be taking on too much.\"",
        "predicate": "concerned",
        "intensifier": "utterly",
        "Question to ask": "how concerned is Mike?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "10",
        "scenario context": "Lisa meets with her child's teacher to discuss declining grades.<br>Lisa: \"I noticed my son's grades have dropped significantly, and I'm deeply concerned about how this might affect his future.\"",
        "predicate": "concerned",
        "intensifier": "deeply",
        "Question to ask": "how concerned is Lisa?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "11",
        "scenario context": "David observes that his colleague has been distant.<br>David: \"I've noticed you haven't been as chatty as usual. I'm really concerned if everything is okay at home.\"",
        "predicate": "concerned",
        "intensifier": "really",
        "Question to ask": "how concerned is David?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "12",
        "scenario context": "Lucy notices her dog has been unusually lethargic and hasn't eaten much.<br>Lucy: \"I'm rather concerned about Max. He hasn't been himself lately. I think we should take him to the vet.\"",
        "predicate": "concerned",
        "intensifier": "rather",
        "Question to ask": "how concerned is Lucy?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "13",
        "scenario context": "Sarah's sister mentions she's been struggling to pay her bills.<br>Sarah: \"I'm fairly concerned about how you've been managing financially. Have you thought about talking to a financial advisor?\"",
        "predicate": "concerned",
        "intensifier": "fairly",
        "Question to ask": "how concerned is Sarah?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "14",
        "scenario context": "Anna notices her friend, Jake, coughing frequently during their hike.<br>Anna: \"You've been coughing a lot today. I'm a little concerned that you might be coming down with something. Have you seen a doctor?\"<br>",
        "predicate": "concerned",
        "intensifier": "a little",
        "Question to ask": "how concerned is Anna?",
        "Label for 0": "minimally concerned",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "15",
        "scenario context": "Emma attends a virtual conference on data analysis.<br>Colleague: \"That keynote speaker had some great insights, don't you think?\"<br>Emma: \"Honestly, I found it totally boring. They were just repeating things I already knew.\"",
        "predicate": "boring",
        "intensifier": "totally",
        "Question to ask": "how boring was the conference for Emma?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "16",
        "scenario context": "John attends a lecture on a topic that doesn't interest him at all. He tells his classmate afterwards:<br>John: \"I tried to stay focused, but the lecture was utterly boring. The professor's monotone voice didn't help either.\"",
        "predicate": "boring",
        "intensifier": "utterly",
        "Question to ask": "how boring was the lecture for John?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "17",
        "scenario context": "During a book club discussion, Alex shares their thoughts.<br>Member: \"This book kept me hooked until the very last page!\"<br>Alex: \"I wish I felt the same, but I found the story deeply boring. The slow pacing just didn't work for me.\"",
        "predicate": "boring",
        "intensifier": "deeply",
        "Question to ask": "how boring was the story for Alex?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "18",
        "scenario context": "Rachel reflects on the lecture with a friend afterward:<br>Friend: \"How was the astrophysics lecture? I heard the professor is supposed to be brilliant.\"<br>Rachel: \"The topic is undoubtedly fascinating, but I found the lecture really boring. Without a stronger background in the subject, it was difficult to stay engaged.\"",
        "predicate": "boring",
        "intensifier": "really",
        "Question to ask": "how boring was the lecture for Rachel?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "19",
        "scenario context": "Jake attends a mandatory corporate training session.<br>Coworker: \"I thought the trainer was engaging and kept it fun.\"<br>Jake: \"I don't know. I thought it was rather boring. Too much theory, not enough practical examples.\"",
        "predicate": "boring",
        "intensifier": "rather",
        "Question to ask": "how boring was the training session for Jake?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "20",
        "scenario context": "David goes to a museum with his partner.<br>Partner: \"The ancient artifacts were so cool to see!\"<br>David: \"I found it fairly boring. I prefer exhibits with more interactive displays.\"",
        "predicate": "boring",
        "intensifier": "fairly",
        "Question to ask": "how boring was the musuem for David?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "21",
        "scenario context": "Sophie and her friend, Mia, attend a classical music recital.<br>Mia: \"The performance was so elegant. I loved how the orchestra played together.\"<br>Sophie: \"I found it a little boring. Classical music isn't quite my style.\"",
        "predicate": "boring",
        "intensifier": "a little",
        "Question to ask": "how boring was the recital for Sophie?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "22",
        "scenario context": "During a group project, Alex helps Jessica by clarifying some confusing instructions.<br>Jessica: \"I appreciate you taking the time to explain that. You've been totally helpful.\"",
        "predicate": "helpful",
        "intensifier": "totally",
        "Question to ask": "how helpful did Jessica find Alex's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "23",
        "scenario context": "A traveler, Sam, asks an airport staff member where to find a particular gate.<br>Sam: \"Thanks for pointing me in the right direction. You've been utterly helpful.\"",
        "predicate": "helpful",
        "intensifier": "utterly",
        "Question to ask": "how helpful did Sam find the staff's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "24",
        "scenario context": "Megan has been searching for a gift for her grandmother, who recently moved into assisted living. After weeks of fruitless searching, a sales assistant helps Megan track down the perfect item - a vintage music box her grandmother had as a child.<br>Megan: \"I can't thank you enough. I've been looking for something like this for so long. You've been deeply helpful.\"",
        "predicate": "helpful",
        "intensifier": "deeply",
        "Question to ask": "how helpful did Megan find the sales assistant's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "25",
        "scenario context": "Rachel gives feedback on Michael's draft presentation.<br>Michael: \"I appreciate your suggestions. You've been really helpful in improving this.\"",
        "predicate": "helpful",
        "intensifier": "really",
        "Question to ask": "how helpful did Michael find Rachel's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "26",
        "scenario context": "Liam asks his neighbor to help him carry a heavy table into his house.<br>Liam: \"I couldn't have done it without you. You've been rather helpful.\"",
        "predicate": "helpful",
        "intensifier": "rather",
        "Question to ask": "how helpful did Liam find his neighbor's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "27",
        "scenario context": "Emma asks her grandmother for guidance on how to cook a traditional family dish.<br>Emma: \"Thanks for explaining the steps so clearly, Grandma. You've been fairly helpful.\"",
        "predicate": "helpful",
        "intensifier": "fairly",
        "Question to ask": "how helpful did Emma find her Grandma's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "28",
        "scenario context": "Ben loses his wallet in a busy park and asks a security guard for assistance.<br>Ben: \"Thank you for helping me check the lost and found. You've been a little helpful.\"",
        "predicate": "helpful",
        "intensifier": "a little",
        "Question to ask": "how helpful did Ben the security guard's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "29",
        "scenario context": "David shows his friend Emma a model airplane he built from scratch.<br>Emma: \"Wow, David! The level of detail on this is totally impressive.\"",
        "predicate": "impressive",
        "intensifier": "totally",
        "Question to ask": "how impressed is Emma?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "30",
        "scenario context": "A tour guide shares historical facts about an ancient castle.<br>Visitor: \"Your knowledge of the history here is utterly impressive. I've learned so much today.\"",
        "predicate": "impressive",
        "intensifier": "utterly",
        "Question to ask": "how impressed is the visitor?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "31",
        "scenario context": "During a job interview, the interviewer comments on the candidate's art portfolio.<br>Interviewer: \"Your portfolio is deeply impressive. The way your work addresses important social issues and provokes thought is remarkable.\"",
        "predicate": "impressive",
        "intensifier": "deeply",
        "Question to ask": "how impressive is the interviewer?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "32",
        "scenario context": "At a hackathon, a team presents their fully functional prototype after 24 hours of coding.<br>Judge: \"It's really impressive how you managed to create such a polished product in such a short time.\"",
        "predicate": "impressive",
        "intensifier": "really",
        "Question to ask": "how impressed is the judge?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "33",
        "scenario context": "Sophia watches her younger sibling perform a difficult gymnastics routine.<br>Sophia: \"That was rather impressive. I can't believe how much you've improved!\"",
        "predicate": "impressive",
        "intensifier": "rather",
        "Question to ask": "how impressed is Sophia?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "34",
        "scenario context": "At a science fair, Sarah explains her project on renewable energy to a judge.<br>Judge: \"Your understanding of the subject is fairly impressive for someone your age.\"",
        "predicate": "impressive",
        "intensifier": "fairly",
        "Question to ask": "how impressed is the judge?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "35",
        "scenario context": "David shows his friend Emma a model airplane he built from scratch.<br>Emma: \"Wow, David! The level of detail on this is a little impressive.\"",
        "predicate": "impressive",
        "intensifier": "a little",
        "Question to ask": "how impressive is Emma?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "36",
        "scenario context": "During a safari in Africa, Lily spots a herd of elephants in the wild.<br>Lily: \"This is totally awe-inspiring! Seeing these majestic animals in their natural habitat is incredible.\"",
        "predicate": "awe-inspiring",
        "intensifier": "totally",
        "Question to ask": "how awe-inspired is Lily?",
        "Label for 0": "minimally awe-inspiring",
        "Label for 7": "maximally awe-inspiring"
    },
    {
        "Scenario number": "37",
        "scenario context": "David watches a professional surfer ride a massive wave.<br>David: \"That was utterly awe-inspiring. The skill and bravery it takes to ride a wave like that is unbelievable.\"",
        "predicate": "awe-inspiring",
        "intensifier": "utterly",
        "Question to ask": "how awe-inspired is David?",
        "Label for 0": "minimally awe-inspiring",
        "Label for 7": "maximally awe-inspiring"
    },
    {
        "Scenario number": "38",
        "scenario context": "Sarah attends a live orchestra performance of Beethoven's Ninth Symphony.<br>Friend: \"The power of the music was deeply awe-inspiring. It's hard to believe something so beautiful was composed so long ago.\"<br>Sarah: \"I completely agree. The emotion in the performance was incredible.\"",
        "predicate": "awe-inspiring",
        "intensifier": "deeply",
        "Question to ask": "how awe-inspired is Sarah?",
        "Label for 0": "minimally awe-inspiring",
        "Label for 7": "maximally awe-inspiring"
    },
    {
        "Scenario number": "39",
        "scenario context": "Sophie visits a national park known for its majestic mountains and valleys.<br>Sophie: \"The landscape here is really awe-inspiring. I feel so small in comparison to these towering peaks.\"",
        "predicate": "awe-inspiring",
        "intensifier": "really",
        "Question to ask": "how awe-inspired is Sophie?",
        "Label for 0": "minimally awe-inspiring",
        "Label for 7": "maximally awe-inspiring"
    },
    {
        "Scenario number": "40",
        "scenario context": "Alice sees a performance by a world-renowned ballerina.<br>Alice: \"Her movements were so graceful and powerful. It was rather awe-inspiring.\"",
        "predicate": "awe-inspiring",
        "intensifier": "rather",
        "Question to ask": "how awe-inspired is Alice?",
        "Label for 0": "minimally awe-inspiring",
        "Label for 7": "maximally awe-inspiring"
    },
    {
        "Scenario number": "41",
        "scenario context": "Anna explains why she decided to postpone her vacation to her friend Dan.<br>Anna: \"I think I need to save more money before I can go.\"<br>Dan: \"That's totally understandable; budgeting is important.\"",
        "predicate": "understandable",
        "intensifier": "totally",
        "Question to ask": "how understandable is Anna's reason for Dan?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "42",
        "scenario context": "John invites his friend Alex to a weekend camping trip, but Alex declines because of he is tired.<br>Alex: \"I'd love to go, but I think I need some rest this weekend.\"<br>John: \"That's utterly understandable. You've been taking on a lot recently. We can plan another trip later in the year.\"",
        "predicate": "understandable",
        "intensifier": "utterly",
        "Question to ask": "how understandable is Alex's reason for John?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "43",
        "scenario context": "Anna tells her professor that she needs a few extra days to complete an assignment due to family obligations.<br>Anna: \"I'm very sorry, but could I have an extension on the assignment? I had a family emergency.\"<br>Professor: \"That's deeply understandable, Anna. Take the extra time you need.\"",
        "predicate": "understandable",
        "intensifier": "deeply",
        "Question to ask": "how understandable is Anna's reason for her professor?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "44",
        "scenario context": "Sam apologizes to his coworker, Rachel, for missing a call during a meeting.<br>Sam: \"I didn't see your call; I was in a meeting.\"<br>Rachel: \"That's really understandable; we often have back-to-back meetings.\"",
        "predicate": "understandable",
        "intensifier": "really",
        "Question to ask": "how understandable is Sam's reason for Rachel?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "45",
        "scenario context": "David explains to his manager why he didn't complete a presentation on time.<br>David: \"I didn't get the data I needed from the supplier until this morning, so I couldn't finish the slides.\"<br>Manager: \"That's rather understandable. Let me know if there's anything I can do to help you stay on track.\"",
        "predicate": "understandable",
        "intensifier": "rather",
        "Question to ask": "how understandable is David's reason for his manager?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "46",
        "scenario context": "Sarah shares why she got upset during a group discussion.<br>Sarah: \"I got defensive because the topic hit close to home for me.\"<br>Friend: \"That's fairly understandable. It's hard to stay calm when it's something so personal.\"",
        "predicate": "understandable",
        "intensifier": "fairly",
        "Question to ask": "how understandable is Sarah 's reason for her friend?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "47",
        "scenario context": "Emma apologizes for missing a virtual meeting due to internet problems.<br>Emma: \"I'm sorry I couldn't join the meeting earlier. My internet went out unexpectedly.\"<br>Colleague: \"That's a little understandable. Technology can be unpredictable sometimes.\"",
        "predicate": "understandable",
        "intensifier": "a little",
        "Question to ask": "how understandable is Emma's reason for her colleague?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    }
];