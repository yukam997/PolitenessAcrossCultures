
const data = [{
        "Scenario number": "1",
        "scenario context": "Sarah is interning at a company, and her boss, Mr. Thompson asks her to stay to finish up her report. <br>Sarah was feeling slightly exhausted after the back-to-back meetings and was not sure she'd be at her best. She told Mr. Thompson this, and asked him if she could come in early tomorrow to finish it up instead.",
        "predicate": "exhausted",
        "intensifier": "slightly",
        "Question to ask": "how tired is Sarah?",
        "Label for 0": "minimally tired",
        "Label for 7": "maximally tired"
    },
    {
        "Scenario number": "2",
        "scenario context": "Amy's boyfriend Jake wants to talk about their date this weekend.<br>Amy  was feeling kind of exhausted. Amy told this to Jake, and asked if it would be okay to talk about it tomorrow instead.",
        "predicate": "exhausted",
        "intensifier": "kind of",
        "Question to ask": "how tired is Amy?",
        "Label for 0": "minimally tired",
        "Label for 7": "maximally tired"
    },
    {
        "Scenario number": "3",
        "scenario context": "Ben's cousin Amy asks him if he's coming to their monthly family gathering that evening.<br>Ben wanted to, but was quite exhausted from work.  He told Amy this, and told her that he'll catch up with everyone next time.",
        "predicate": "exhausted",
        "intensifier": "quite",
        "Question to ask": "how tired is Ben?",
        "Label for 0": "minimally tired",
        "Label for 7": "maximally tired"
    },
    {
        "Scenario number": "4",
        "scenario context": "Sophie asks Daniel if he can call later tonight to and give her some advice.<br>Daniel wanted to help, but he was very exhausted and felt he might fall asleep. He told Sophie this, and suggested they talk tomorrow instead.",
        "predicate": "exhausted",
        "intensifier": "very",
        "Question to ask": "how tired is Daniel?",
        "Label for 0": "minimally tired",
        "Label for 7": "maximally tired"
    },
    {
        "Scenario number": "5",
        "scenario context": "Chris's friend Emma asks if he wants to join her on a roadtrip the upcoming weekend.<br>He thought it sounded awesome, but he was extremely exhausted from traveling all week. He told Emma this, and said that he needed some downtime instead.",
        "predicate": "exhausted",
        "intensifier": "extremely",
        "Question to ask": "how tired is Emma?",
        "Label for 0": "minimally tired",
        "Label for 7": "maximally tired"
    },
    {
        "Scenario number": "6",
        "scenario context": "Jo's manager shares her thoughts on a recent company webinar on productivity strategies, saying that she thought it was enlightening.<br>Jo thought it was slightly boring, and that the content didn't really resonate with her. She shared this thought with her manager.",
        "predicate": "boring",
        "intensifier": "slightly",
        "Question to ask": "how boring was the webinar for Jo?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "7",
        "scenario context": "Sarah excitedly talks about a recent indie band concert she attended with her friend Mark, telling him that she loved every moment of it, and was happy she was to able to hear them live.<br>On the other hand, Mark couldn't get into the music, and thought the concert was kind of boring, and told Sarah so.",
        "predicate": "boring",
        "intensifier": "kind of",
        "Question to ask": "how boring was the concert for Mark?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "8",
        "scenario context": "Melissa's coworker shares their positive experience at a networking event, saying how he enjoyed the event and made some great connections.<br>Melissa struggled to find conversations that interested her, and found the event quite boring, and shared this experience with her colleague.",
        "predicate": "boring",
        "intensifier": "quite",
        "Question to ask": "how boring was the networking event for Melissa?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "9",
        "scenario context": "After watching a slow-paced romantic drama, Lisa shares her thoughts with Jake, that she thought that movie was very beautiful and the emotions were perfect.<br>On the other hand, Jake was hoping for more action, and thought it was very boring, and told Lisa so. ",
        "predicate": "boring",
        "intensifier": "very",
        "Question to ask": "how boring was the drama for Jake?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "10",
        "scenario context": "After a trip to an art museum, Emily talks about her favorite exhibits to David. She found the contemporary art section was fascinating saying that she could spend hours there.<br>David found the art extremely boring and hard to understand, and told her so.",
        "predicate": "boring",
        "intensifier": "extremely",
        "Question to ask": "how boring were the exhibits for David?",
        "Label for 0": "minimally boring",
        "Label for 7": "maximally boring"
    },
    {
        "Scenario number": "11",
        "scenario context": "Lisa is working in an open-plan office, but her colleague is having a loud phone conversation nearby.<br>It is slightly difficult to concentrate with the loud phone call, so Lisa asked them to lower their voice a little.",
        "predicate": "difficult",
        "intensifier": "slightly",
        "Question to ask": "how difficult is it forLisa to concentrate?",
        "Label for 0": "minimally difficult",
        "Label for 7": "maximally difficult"
    },
    {
        "Scenario number": "12",
        "scenario context": "Amy is trying to study in her room, but her roommate, Jake, is playing music loudly in the living room.<br>It is kind of difficult to concentrate with the loud music, so Amy asks Jake to turn it down slightly.",
        "predicate": "difficult",
        "intensifier": "kind of",
        "Question to ask": "how difficult is it for Amy to concentrate?",
        "Label for 0": "minimally difficult",
        "Label for 7": "maximally difficult"
    },
    {
        "Scenario number": "13",
        "scenario context": "Sarah is at a restaurant with friends, but the background music is too loud, making it quite difficult to talk. She asks the staff to turn the music down a little.",
        "predicate": "difficult",
        "intensifier": "quite",
        "Question to ask": "how difficult is it for Sarah to talk?",
        "Label for 0": "minimally difficult",
        "Label for 7": "maximally difficult"
    },
    {
        "Scenario number": "14",
        "scenario context": " Claire is studying for an exam, but her younger siblings are playing noisily in the next room.<br>It is very difficult to study with all the noise, and Claire asks them to be a bit quieter.",
        "predicate": "difficult",
        "intensifier": "very",
        "Question to ask": "how difficult is it for Claire to study?",
        "Label for 0": "minimally difficult",
        "Label for 7": "maximally difficult"
    },
    {
        "Scenario number": "15",
        "scenario context": "Alex is attending a lecture, but a group of students nearby is talking loudly.<br>It is extremely difficult to listen to the lecture, so  Alex asks them to be quieter.",
        "predicate": "difficult",
        "intensifier": "extremely",
        "Question to ask": "how difficult is it for Alex to listen to the lecture?",
        "Label for 0": "minimally difficult",
        "Label for 7": "maximally difficult"
    },
    {
        "Scenario number": "16",
        "scenario context": "Emily is slightly concerned that her classmate Dan hasn't been participating in class and seems really withdrawn. She brings this concern up during a class discussion.",
        "predicate": "concerned",
        "intensifier": "slightly",
        "Question to ask": "how concerned is Emily?",
        "Label for 0": "minimally concerned ",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "17",
        "scenario context": "Mike notices his colleague looking overwhelmed with work and is kind of concerned that he is taking on too much. He expresses his worry to him during a coffee break.",
        "predicate": "concerned",
        "intensifier": "kind of",
        "Question to ask": "how concerned is Mike?",
        "Label for 0": "minimally concerned ",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "18",
        "scenario context": "Lisa noticed that her son's grades have dropped significantly, and is quite concerned about how this might affect his future. She meets with her son's teacher to discuss this.",
        "predicate": "concerned",
        "intensifier": "quite",
        "Question to ask": "how concerned is Lisa?",
        "Label for 0": "minimally concerned ",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "19",
        "scenario context": "Rachel notices that her friend has been looking stressed and overwhelmed with work, making her very concerned about how he is handling everything.",
        "predicate": "concerned",
        "intensifier": "very",
        "Question to ask": "how concerned is Rachel?",
        "Label for 0": "minimally concerned ",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "20",
        "scenario context": "David observes that his colleague has been distant and less chatty than usual, making him extremely concerned whether everything is okay.",
        "predicate": "concerned",
        "intensifier": "extremely",
        "Question to ask": "how concerned is David?",
        "Label for 0": "minimally concerned ",
        "Label for 7": "maximally concerned"
    },
    {
        "Scenario number": "21",
        "scenario context": "Anna explains to Dan how she decided to postpone her vacation because she needs to save more money before she can go.<br>Dan thinks it is slightly understandable as budgeting is important.",
        "predicate": "understandable",
        "intensifier": "slightly",
        "Question to ask": "how understandable does Dan think Anna's reasons are?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "22",
        "scenario context": "John invites his friend Alex to a weekend camping trip, but Alex declines because he is tired, and needs some rest during the weekend.<br>John thinks that is kind of understandable as he has been taking on a lot recently. He expresses his understanding, and suggests that they plan another trip later in the year.",
        "predicate": "understandable",
        "intensifier": "kind of",
        "Question to ask": "how understandable does John think Alex's reasons are?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "23",
        "scenario context": "Anna tells her professor that she needs a few extra days to complete an assignment, due to a family emergency.<br>The professor thinks it is quite understandable, and tells her to take the extra time she needs.",
        "predicate": "understandable",
        "intensifier": "quite",
        "Question to ask": "how understandable does the Professor think Anna's reasons are?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "24",
        "scenario context": "Emma's friend, Sarah, apologises for cancelling their dinner plans due to a work emergency.<br>Emma accepts the apology, and thinks it is very understandable. She empathizes with Emma that work comes first, and that they can always reschedule their plans.",
        "predicate": "understandable",
        "intensifier": "very",
        "Question to ask": "how understandable does Emma think Sarah's reasons are?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "25",
        "scenario context": "Sam apologizes to his coworker, Rachel for missing her call. He tells her that he was in a meeting and did not see it.<br>Rachel accepts the appology, thinking that it is extremly understandable as they often have back-to-back meetings.",
        "predicate": "understandable",
        "intensifier": "extremely",
        "Question to ask": "how understandable does Rachel think Sam's reasons are?",
        "Label for 0": "minimally understandable",
        "Label for 7": "maximally understandable"
    },
    {
        "Scenario number": "26",
        "scenario context": "During a team meeting, Mark presents a well-researched project proposal.<br>Lisa thinks that the data Mark gathered and the way he presented it is slightly impressive.",
        "predicate": "impressive",
        "intensifier": "slightly",
        "Question to ask": "how impressive did Lisa think Marks presentation was?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "27",
        "scenario context": "During a tech demo, a developer showcases a new app.<br>The features that they have included are cutting-edge, and the investor thinks that it is kind of impressive how the developer managed  to pull this together in such a short time.",
        "predicate": "impressive",
        "intensifier": "kind of",
        "Question to ask": "how impressive did the investor find the developer's work?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "28",
        "scenario context": "Emma invites her friend Alex over for dinner and cooks a homemade meal. She tried a new recipe, and asks Alex if he likes it.<br>Alex thinks it is quite impressive, and compliments her on how the flavors come together nicely.",
        "predicate": "impressive",
        "intensifier": "quite",
        "Question to ask": "how impressive did Alex think Emma's cooking was?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "29",
        "scenario context": "Ms. Johnson hands back graded essays to her student Jade.<br>Ms. Johnson thinks Jade's essay is very impressive, and compliments her.",
        "predicate": "impressive",
        "intensifier": "very",
        "Question to ask": "how impressive did Ms. Johnson find the studen's essay?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "30",
        "scenario context": "A teacher, Mrs. Carter, is providing feedback on her student Lin's painting.<br>Mrs. Carter thinks Lin's painting is extremly impressive, and compliments Lin that the colors work really well together, and that she can see that Lin has put a lot of thought into the composition.",
        "predicate": "impressive",
        "intensifier": "extremely",
        "Question to ask": "how impressive did Mrs. Carter think the student's painting was?",
        "Label for 0": "minimally impressive",
        "Label for 7": "maximally impressive"
    },
    {
        "Scenario number": "31",
        "scenario context": "During a group project, Alex helps Jessica by clarifying some confusing instructions.<br>Jessica thanks Alex for taking the time to explain, and feels that he has been slightly helpful.",
        "predicate": "helpful",
        "intensifier": "slightly",
        "Question to ask": "how helpful did Jessica find Alex's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "32",
        "scenario context": "A traveler, Sam, asks an airport staff member where to find a particular gate.<br>Sam thanks the staff for pointing him in the right direction, and feels that they have been kind of helpful.",
        "predicate": "helpful",
        "intensifier": "kind of",
        "Question to ask": "how helpful did Sam find the staff's help?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "33",
        "scenario context": "A sales assistant helps Megan find the exact item she was looking for after searching through multiple aisles.<br>Feeling that they have been quite helpful, Megan thanks the assistant for their help finding the item.",
        "predicate": "helpful",
        "intensifier": "quite",
        "Question to ask": "how helpful did Michael find Rachel's feedback?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "34",
        "scenario context": "Amy asks her friend, Lisa, for some tips on baking bread.<br>The tips are very helpful, and Amy thanks Lisa for it.",
        "predicate": "helpful",
        "intensifier": "very",
        "Question to ask": "how helpful did Amy find Lisa's tips?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    },
    {
        "Scenario number": "35",
        "scenario context": "Rachel gives feedback on Michael's draft presentation.<br>Michael feels that the suggestions are extremely helpful, and thanks Rachel for it.",
        "predicate": "helpful",
        "intensifier": "extremely",
        "Question to ask": "how helpful did Michael find Rachel's feedback?",
        "Label for 0": "minimally helpful",
        "Label for 7": "maximally helpful"
    }
];

// module.exports = data;