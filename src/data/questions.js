const questions = [
  {
  id: 1,
  question: "You are outside a room with 3 switches that control 3 bulbs inside. You can enter the room only once. How do you figure out which switch controls which bulb?",
  keyPoints: [
    "one switch on for some time",
    "one switch on just before entering",
    "one switch off",
    "one bulb warm",
    "one bulb glowing",
    "one bulb cold"
  ]
},
{
  id: 2,
  question: "You have two ropes that each burn for 60 minutes, but they burn unevenly. How can you measure exactly 45 minutes?",
  keyPoints: [
    "light one rope from both ends",
    "light the second rope from one end",
    "first rope finishes in 30 minutes",
    "light second rope from other end",
    "remaining time is 15 minutes"
  ]
},
{
  id: 3,
  question: "There are three switches and three bulbs. You toggle some switches and then check once. How can you tell which bulb was always on?",
  keyPoints: [
    "turn on two switches",
    "turn one off before entering",
    "one bulb stays glowing",
    "one bulb warm but off",
    "one bulb cold"
  ]
},
{
  id: 4,
  question: "A man lives on the 10th floor. Every day he takes the elevator to the ground floor to leave. But when he returns, he only goes to the 7th floor and walks the rest unless it's raining. Why?",
  keyPoints: [
    "short man",
    "cannot reach higher buttons",
    "uses umbrella when raining",
    "umbrella helps press button",
    "walks from 7th floor"
  ]
},
{
  id: 5,
  question: "There are 1000 bottles and one of them is poisoned. You have 10 test subjects and only one round of testing. The poison takes effect in 24 hours. How do you find the poisoned bottle?",
  keyPoints: [
    "binary numbering",
    "assign bottles in binary",
    "each person represents a bit",
    "drink based on binary pattern",
    "result forms binary number",
    "identify bottle from pattern"
  ]
},
{
  id: 6,
  question: "You have 12 coins. One of them is fake and differs in weight (you don’t know if it’s heavier or lighter). You have a balance scale and can use it only 3 times. How do you identify the fake coin and whether it is heavier or lighter?",
  keyPoints: [
    "divide coins into groups of 4",
    "compare 4 vs 4",
    "analyze imbalance direction",
    "second weighing narrows to 3 coins",
    "third weighing identifies exact coin",
    "deduce heavier or lighter from pattern"
  ]
},
{
  id: 7,
  question: "You meet two guards. One always tells the truth, the other always lies. One door leads to freedom, the other to death. You can ask only ONE question to ONE guard. What do you ask to guarantee choosing the correct door?",
  keyPoints: [
    "meta question",
    "ask what other guard would say",
    "liar flips truth",
    "truth reports lie",
    "both point to wrong door",
    "choose opposite door"
  ]
},
{
  id: 8,
  question: "There are 100 prisoners in solitary cells. A light bulb is in a central room. Prisoners are taken randomly into the room. They can toggle the bulb or leave it unchanged. They cannot communicate. How can they eventually determine when all 100 prisoners have visited the room at least once?",
  keyPoints: [
    "choose one counter prisoner",
    "others turn bulb on only once",
    "counter turns it off and counts",
    "count reaches 99",
    "declare everyone visited",
    "requires strict strategy"
  ]
},
{
  id: 9,
  question: "You are given two identical-looking pills. One is lethal, one is harmless. The lethal pill acts instantly. You have a prisoner who must take one pill, and you must take the other. The prisoner dies. How did you survive?",
  keyPoints: [
    "poison was in water",
    "both pills harmless",
    "glass was poisoned",
    "prisoner drank poisoned water",
    "misdirection",
    "assumption trap"
  ]
},
{
  id: 10,
  question: "A train leaves City A at 60 km/h toward City B. Another train leaves City B at 90 km/h toward City A at the same time. A bird flies back and forth between the two trains at 120 km/h until they collide. If the cities are 300 km apart, how far did the bird travel?",
  keyPoints: [
    "relative speed concept",
    "time until collision",
    "total speed 150 km/h",
    "collision time 2 hours",
    "bird speed 120 km/h",
    "distance = speed × time"
  ]
},
{
  id: 11,
  question: "You are in a room with no clocks and no windows. You are given two hourglasses: one measures 7 minutes, the other 11 minutes. How can you measure exactly 15 minutes?",
  keyPoints: [
    "start both hourglasses",
    "when 7 finishes flip it",
    "track overlap timing",
    "manipulate remaining sand",
    "synchronize intervals",
    "exact 15-minute alignment"
  ]
},
{
  id: 12,
  question: "There are 8 balls. One of them is slightly heavier. You have a balance scale and can use it only twice. How do you find the heavier ball?",
  keyPoints: [
    "divide into 3 and 3",
    "compare groups",
    "identify heavier side",
    "reduce to 3 balls",
    "second weighing isolates heavier",
    "logic elimination"
  ]
},
{
  id: 13,
  question: "You have 9 identical-looking balls. One is heavier. You have a balance scale and can use it only twice. How do you guarantee finding the heavier ball?",
  keyPoints: [
    "divide into 3 groups of 3",
    "compare first two groups",
    "identify heavier side or remaining group",
    "second weighing compares two from heavier group",
    "deduce final ball"
  ]
},
{
  id: 14,
  question: "A farmer must transport a wolf, a goat, and cabbage across a river. The boat carries only one at a time. If left alone, wolf eats goat, goat eats cabbage. How does he do it?",
  keyPoints: [
    "goat first",
    "return alone",
    "wolf next",
    "bring goat back",
    "cabbage next",
    "return alone",
    "take goat"
  ]
},
{
  id: 15,
  question: "There are 100 doors, all closed. 100 people toggle doors in passes (1st toggles all, 2nd every 2nd, etc.). After 100 passes, which doors remain open?",
  keyPoints: [
    "perfect squares",
    "factor pairs",
    "odd number of divisors",
    "square numbers only"
  ]
},
{
  id: 16,
  question: "You have a 5L jug and a 3L jug. No markings. How do you measure exactly 4L?",
  keyPoints: [
    "fill 5L",
    "pour into 3L",
    "2L remains",
    "empty 3L",
    "transfer 2L",
    "refill 5L",
    "pour until 3L full",
    "4L remains"
  ]
},
{
  id: 17,
  question: "Three people each wear a hat that is either red or blue. They can see others' hats but not their own. At least one hat is red. After logical silence, one deduces his hat color. What is it?",
  keyPoints: [
    "common knowledge",
    "logical delay",
    "assumption contradiction",
    "deductive reasoning"
  ]
},
{
  id: 18,
  question: "You must cut a cake into 8 equal pieces using only 3 straight cuts. How?",
  keyPoints: [
    "two vertical cuts",
    "stack halves",
    "one horizontal cut"
  ]
},
{
  id: 19,
  question: "There are 25 horses. You can race only 5 at a time. What is the minimum number of races needed to find the top 3 fastest horses?",
  keyPoints: [
    "group into 5 races",
    "rank winners",
    "eliminate impossible horses",
    "final decisive race",
    "7 total races"
  ]
},
{
  id: 20,
  question: "You have a digital lock with 4 digits (0000–9999). You can try one code per minute. Worst case, how long to guarantee unlocking?",
  keyPoints: [
    "10000 combinations",
    "worst case scenario",
    "sequential brute force",
    "10000 minutes"
  ]
},
{
  id: 21,
  question: "You flip a fair coin until you get two consecutive heads. What is the expected number of flips?",
  keyPoints: [
    "state transition",
    "recursive expectation",
    "memory state",
    "expected value 6"
  ]
},
{
  id: 22,
  question: "A man pushes his car to a hotel and loses all his money. What happened?",
  keyPoints: [
    "Monopoly game",
    "landed on property",
    "owed rent"
  ]
},
{
  id: 23,
  question: "You are given 8 identical batteries. One is dead. With a flashlight and minimum tests, how do you find the dead one?",
  keyPoints: [
    "pair testing",
    "binary elimination",
    "divide and test"
  ]
},
{
  id: 24,
  question: "A prisoner is told: if he makes a false statement, he will be shot. If he makes a true statement, he will be hanged. What can he say to survive?",
  keyPoints: [
    "paradox statement",
    "self-referential logic",
    "execution contradiction"
  ]
},
{
  id: 25,
  question: "Two fathers and two sons go fishing. They catch 3 fish. Each person gets one fish. How?",
  keyPoints: [
    "three people",
    "grandfather father son",
    "overlapping roles"
  ]
},
{
  id: 26,
  question: "You are in a room with 4 people. What is the probability at least two share the same birthday?",
  keyPoints: [
    "complement probability",
    "calculate distinct birthdays",
    "1 minus distinct probability"
  ]
},
{
  id: 27,
  question: "A man builds a house with all four sides facing south. A bear walks by. What color is the bear?",
  keyPoints: [
    "north pole",
    "polar bear",
    "white"
  ]
},
{
  id: 28,
  question: "You have unlimited matches and a 7-minute and 13-minute fuse. How do you measure exactly 10 minutes?",
  keyPoints: [
    "light both ends",
    "manipulate burn rate",
    "combine timings"
  ]
},
{
  id: 29,
  question: "In a village of 100 couples, each husband has cheated except one. Wives know about all cheating except their own husband. After public announcement, what happens?",
  keyPoints: [
    "logical induction",
    "common knowledge",
    "day 99 realization",
    "cascade deduction"
  ]
},
{
  id: 30,
  question: "A clock shows 3:15. What is the angle between hour and minute hands?",
  keyPoints: [
    "minute hand at 90 degrees",
    "hour hand slightly ahead",
    "calculate offset",
    "7.5 degrees difference"
  ]
},
{
  id: 31,
  question: "You have a biased coin. How can you generate a fair 50-50 outcome?",
  keyPoints: [
    "flip twice",
    "HT = 1",
    "TH = 0",
    "ignore HH TT"
  ]
},
{
  id: 32,
  question: "There are 10 black socks and 10 white socks in a drawer. Minimum socks to pick blindly to guarantee a matching pair?",
  keyPoints: [
    "pigeonhole principle",
    "3 socks needed"
  ]
},
{
  id: 33,
  question: "Find next number: 2, 6, 12, 20, 30, ?",
  keyPoints: [
    "n(n+1)",
    "pattern recognition",
    "42"
  ]
},
{
  id: 34,
  question: "You have 4 people crossing a bridge at night with one torch. They walk at different speeds. How to minimize total crossing time?",
  keyPoints: [
    "fastest shuttles",
    "pair slowest together",
    "strategy optimization"
  ]
},
{
  id: 35,
  question: "You are given a function that returns 0 or 1 randomly. How do you detect if it's truly random?",
  keyPoints: [
    "statistical testing",
    "distribution analysis",
    "pattern detection"
  ]
},
{
  id: 36,
  question: "How many handshakes occur if 20 people each shake hands once?",
  keyPoints: [
    "combination formula",
    "n(n-1)/2",
    "190"
  ]
},
{
  id: 37,
  question: "You have 3 boxes labeled incorrectly: Apples, Oranges, Mixed. You can pick one fruit from one box. How do you relabel correctly?",
  keyPoints: [
    "pick from mixed label",
    "deduce actual content",
    "correct others logically"
  ]
},
{
  id: 38,
  question: "If a train passes a pole in 10 seconds and a 200m platform in 30 seconds, what is the train length?",
  keyPoints: [
    "relative distance",
    "difference time",
    "calculate speed",
    "length 200m"
  ]
},
{
  id: 39,
  question: "You are told a die is loaded but don't know how. How many rolls minimum to detect bias confidently?",
  keyPoints: [
    "large sample size",
    "law of large numbers",
    "hypothesis testing"
  ]
},
{
  id: 40,
  question: "There are 8 queens on a chessboard. How can you arrange them so none attack each other?",
  keyPoints: [
    "backtracking",
    "row column constraint",
    "diagonal constraint"
  ]
},
{
  id: 41,
  question: "You are given a sorted array rotated unknown times. How do you find minimum in O(log n)?",
  keyPoints: [
    "binary search",
    "compare mid and high",
    "divide and conquer"
  ]
},
{
  id: 42,
  question: "You have 1000 identical-looking pills. One bottle contains double-strength pills. By weighing once, how do you find the double-strength bottle?",
  keyPoints: [
    "take increasing counts",
    "label bottles 1 to 1000",
    "weigh total",
    "difference reveals bottle"
  ]
}
];

export default questions;