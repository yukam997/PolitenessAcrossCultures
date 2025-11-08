const data = [
  {
    "Scenario number": "1",
    "scenario context": "Chris's friend Emma asks Chris if he wants to join her on a weekend trip.<br>Emma: \"We're planning a spontaneous road trip this weekend. Want to join?\"<br>Chris: \"That sounds awesome, but I'm a bit exhausted from traveling all week. I think I need some downtime instead.\"",
    "predicate": "exhausted",
    "intensifier": "a bit",
    "Question to ask": "how tired is Chris?",
    "Label for 0": "minimally tired",
    "Label for 7": "maximally tired"
  },
  {
    "Scenario number": "2",
    "scenario context": "Sarah is interning at a company, and her boss, Mr. Thompson asks her if she can stay to finish up her report.<br>Mr. Thompson: \"Could you stay late today to help finish up the report?\"<br>Sarah: \"I'm feeling slightly exhausted after the back-to-back meetings today, so I'm not sure I'd be at my best. Would it be alright if come in early tomorrow instead to finish it up?\"",
    "predicate": "exhausted",
    "intensifier": "slightly",
    "Question to ask": "how tired is Sarah?",
    "Label for 0": "minimally tired",
    "Label for 7": "maximally tired"
  },
  {
    "Scenario number": "3",
    "scenario context": "Amy's boyfriend Jake wants to talk her about their date this weekend, but Amy is tired.<br>Jake: \"Hey Amy, can we talk about this weekend?\"<br>Amy: \"I'm kind of exhausted right now. Would it be okay if we talk about it tomorrow instead?\"",
    "predicate": "exhausted",
    "intensifier": "kind of",
    "Question to ask": "how tired is Amy?",
    "Label for 0": "minimally tired",
    "Label for 7": "maximally tired"
  },
  {
    "Scenario number": "4",
    "scenario context": "Sophie asks Daniel if he can call later tonight.<br>Sophie: \"Can I call you to chat later tonight? I could use some advice.\"<br>Daniel: \"I'd love to help, but I'm pretty exhausted and might fall asleep. Can we talk tomorrow?\"",
    "predicate": "exhausted",
    "intensifier": "pretty",
    "Question to ask": "how tired is Daniel?",
    "Label for 0": "minimally tired",
    "Label for 7": "maximally tired"
  },
  {
    "Scenario number": "5",
    "scenario context": "Ben's cousin Amy asks him if he's coming to their monthly family gathering.<br>Amy: \"Are you coming to the family dinner this evening?\"<br>Ben: \"I'd love to, but I'm quite exhausted from work this week. I'll catch up with everyone next time.\"",
    "predicate": "exhausted",
    "intensifier": "quite",
    "Question to ask": "how tired is Ben?",
    "Label for 0": "minimally tired",
    "Label for 7": "maximally tired"
  },
  {
    "Scenario number": "6",
    "scenario context": "After a trip to an art museum, Emily talks about her favorite exhibits with David.<br>Emily: \"The contemporary art section was fascinating! I could spend hours there!\"<br>David: \"I actually thought it was a bit boring. I didn't really understand the art.\"",
    "predicate": "boring",
    "intensifier": "a bit",
    "Question to ask": "how boring were the exhibits for David?",
    "Label for 0": "minimally boring",
    "Label for 7": "maximally boring"
  },
  {
    "Scenario number": "7",
    "scenario context": "Jo's manager shares their thoughts on a recent company webinar.<br>Manager: \"The webinar on productivity strategies was so enlightening.\"<br>Jo: \"I thought it was slightly boring. The content didn't really resonate with me.\"",
    "predicate": "boring",
    "intensifier": "slightly",
    "Question to ask": "how boring was the webinar for Jo?",
    "Label for 0": "minimally boring",
    "Label for 7": "maximally boring"
  },
  {
    "Scenario number": "8",
    "scenario context": "Sarah excitedly talks about a recent indie band concert she attended with her friend Mark.<br>Sarah: \"I'm so happy I was able to hear them live. I loved every moment!\"<br>Mark: \"I thought it was kind of boring. I struggled getting into the music.\"",
    "predicate": "boring",
    "intensifier": "kind of",
    "Question to ask": "how boring was the concert for Mark?",
    "Label for 0": "minimally boring",
    "Label for 7": "maximally boring"
  },
  {
    "Scenario number": "9",
    "scenario context": "After watching a slow-paced romantic drama, Lisa shares her thoughts with Jake.<br>Lisa: \"I thought that movie was so beautiful! The emotions were just perfect.\"<br>Jake: \"Honestly for me, it was pretty boring. I was hoping for more action.\"",
    "predicate": "boring",
    "intensifier": "pretty",
    "Question to ask": "how boring was the drama for Jake?",
    "Label for 0": "minimally boring",
    "Label for 7": "maximally boring"
  },
  {
    "Scenario number": "10",
    "scenario context": "Melissa's colleague shares their positive experience at a networking event.<br>Colleague: \"I enjoyed the event and made some great connections.\"<br>Melissa: \"Honestly, I found the event quite boring. I struggled to find conversations that interested me.\"",
    "predicate": "boring",
    "intensifier": "quite",
    "Question to ask": "how boring was the networking event for Melissa?",
    "Label for 0": "minimally boring",
    "Label for 7": "maximally boring"
  },
  {
    "Scenario number": "11",
    "scenario context": "Alex is attending a lecture, but a group of students nearby is talking loudly, making it hard to hear the professor.<br>Alex (to the students): \"It's a bit difficult to listen to the lecture with all the talking. Could you keep it down please?\"",
    "predicate": "difficult",
    "intensifier": "a bit",
    "Question to ask": "how difficult is it for Alex to listen to the lecture?",
    "Label for 0": "minimally difficult",
    "Label for 7": "maximally difficult"
  },
  {
    "Scenario number": "12",
    "scenario context": "Lisa is working in an open-plan office, but her colleague is having a loud phone conversation nearby.<br>Lisa (to colleague): \"It's slightly difficult to concentrate with the phone call being that loud. Would you mind lowering your voice a little?\"",
    "predicate": "difficult",
    "intensifier": "slightly",
    "Question to ask": "how difficult is it for Lisa to concentrate?",
    "Label for 0": "minimally difficult",
    "Label for 7": "maximally difficult"
  },
  {
    "Scenario number": "13",
    "scenario context": "Amy is trying to study in her room, but her roommate, Jake, is playing music loudly in the living room.<br>Amy: \"Hey Jake, it's kind of difficult to concentrate with the music so loud. Do you think you could turn it down a bit?\"",
    "predicate": "difficult",
    "intensifier": "kind of",
    "Question to ask": "how difficult is it for Amy to concentrate?",
    "Label for 0": "minimally difficult",
    "Label for 7": "maximally difficult"
  },
  {
    "Scenario number": "14",
    "scenario context": " Claire is studying for an exam, but her younger siblings are playing noisily in the next room.<br>Claire: \"It's pretty difficult to study with all the noise. Can you please be a bit quieter?\"",
    "predicate": "difficult",
    "intensifier": "pretty",
    "Question to ask": "how difficult is it for Claire to study?",
    "Label for 0": "minimally difficult",
    "Label for 7": "maximally difficult"
  },
  {
    "Scenario number": "15",
    "scenario context": "Sarah is at a restaurant with friends, but the background music is too loud to have a conversation.<br>Sarah (to the waiter): \"It's quite difficult to talk with the music this loud. Could you ask the staff to turn it down a little?\"",
    "predicate": "difficult",
    "intensifier": "quite",
    "Question to ask": "how difficult is it for Sarah to talk?",
    "Label for 0": "minimally difficult",
    "Label for 7": "maximally difficult"
  },
  {
    "Scenario number": "16",
    "scenario context": "David observes that his colleague has been distant.<br>David: \"I've noticed you haven't been as chatty as usual, and am a bit concerned. Is everything okay at home?\"",
    "predicate": "concerned",
    "intensifier": "a bit",
    "Question to ask": "how concerned is David?",
    "Label for 0": "minimally concerned ",
    "Label for 7": "maximally concerned"
  },
  {
    "Scenario number": "17",
    "scenario context": "During a class discussion, Emily expresses concerns about a peer.<br>Emily: \"I'm slightly concerned about Jake; he hasn't been participating in class and seems really withdrawn.\"",
    "predicate": "concerned",
    "intensifier": "slightly",
    "Question to ask": "how concerned is Emily?",
    "Label for 0": "minimally concerned ",
    "Label for 7": "maximally concerned"
  },
  {
    "Scenario number": "18",
    "scenario context": "During a coffee break, Mike notices their colleague looking overwhelmed.<br>Mike: \"You seem really swamped with work lately. I'm kind of concerned that you might be taking on too much.\"",
    "predicate": "concerned",
    "intensifier": "kind of",
    "Question to ask": "how concerned is Mike?",
    "Label for 0": "minimally concerned ",
    "Label for 7": "maximally concerned"
  },
  {
    "Scenario number": "19",
    "scenario context": "Rachel notices that her friend has been looking stressed and overwhelmed.<br>Rachel: \"You've been really busy with work lately. It's making me pretty concerned about how you're handling everything.\"",
    "predicate": "concerned",
    "intensifier": "pretty",
    "Question to ask": "how concerned is Rachel?",
    "Label for 0": "minimally concerned ",
    "Label for 7": "maximally concerned"
  },
  {
    "Scenario number": "20",
    "scenario context": "Lisa meets with her child's teacher to discuss declining grades.<br>Lisa: \"I noticed my son's grades have dropped significantly, and I'm quite concerned about how this might affect his future.\"",
    "predicate": "concerned",
    "intensifier": "quite",
    "Question to ask": "how concerned is Lisa?",
    "Label for 0": "minimally concerned ",
    "Label for 7": "maximally concerned"
  },
  {
    "Scenario number": "21",
    "scenario context": "John invites his friend Alex to a weekend camping trip, but Alex declines.<br>Alex: \"I'd love to go, but I think I need some rest this weekend.\"<br>John: \"That's kind of understandable. You've been taking on a lot recently. I can ask you later in the year when you have more time.\"",
    "predicate": "understandable",
    "intensifier": "kind of",
    "Question to ask": "how understandable does John think Alex's reasons are?",
    "Label for 0": "minimally understandable",
    "Label for 7": "maximally understandable"
  },
  {
    "Scenario number": "22",
    "scenario context": "Emma's friend, Sarah, needs to cancel their dinner plans because she has a work emergency.<br>Sarah: \"I'm really sorry, but I have to stay late at work tonight. I won't be able to make it to dinner.\"<br>Emma: \"That's pretty understandable. Work comes first. We can always reschedule.\"",
    "predicate": "understandable",
    "intensifier": "pretty",
    "Question to ask": "how understandable does Emma think Sarah's reasons are?",
    "Label for 0": "minimally understandable",
    "Label for 7": "maximally understandable"
  },
  {
    "Scenario number": "23",
    "scenario context": "Anna tells her professor that she needs a few extra days to complete an assignment due to family obligations.<br>Anna: \"I'm really sorry, but could I have an extension on the assignment? I had a family emergency.\"<br>Professor: \"That's quite understandable, Anna. Take the extra time you need.\"",
    "predicate": "understandable",
    "intensifier": "quite",
    "Question to ask": "how understandable does the Professor think Anna's reasons are?",
    "Label for 0": "minimally understandable",
    "Label for 7": "maximally understandable"
  },
  {
    "Scenario number": "24",
    "scenario context": "Jane reads a fantasy novel, a genre she doesn't usually enjoy, because a friend recommended it.<br>Friend: \"So, what did you think?\"<br>Jane: \"It was kind of good. The world-building was more interesting than I expected.\"",
    "predicate": "good",
    "intensifier": "kind of",
    "Question to ask": "how good did Jane think the novel was?",
    "Label for 0": "minimally good",
    "Label for 7": "maximally good"
  },
  {
    "Scenario number": "25",
    "scenario context": "Ms. Johnson hands back graded essays to her student and gives feedback.<br>Ms. Johnson: \"Your essay was pretty good. Well done.\"",
    "predicate": "good",
    "intensifier": "pretty",
    "Question to ask": "how good did Ms. Johnson think the student's essay was?",
    "Label for 0": "minimally good",
    "Label for 7": "maximally good"
  },
  {
    "Scenario number": "26",
    "scenario context": "Emma invites her friend Alex over for dinner and cooks a homemade meal.<br>Emma: \"I wasn't sure if you'd like it. I tried a new recipe.\"<br>Alex: \"It's quite good! I think the flavors really come together nicely.\"",
    "predicate": "good",
    "intensifier": "quite",
    "Question to ask": "how good did Alex think Emma's cooking was?",
    "Label for 0": "minimally good",
    "Label for 7": "maximally good"
  }
];

// module.exports = data;
