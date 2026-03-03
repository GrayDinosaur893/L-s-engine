const questions = [
{
  id: 1,
  question: "Three switches control three bulbs in another room. You may enter the room only once. How can you determine which switch controls which bulb?",
  keyPoints: [
    "heat",
    "leave one on",
    "one on",
    "one off",
    "warm",
    "hot bulb",
    "touch bulb",
    "on off warm",
    "check heat"
    "one on one off one heated"
    "1 on 1 off and 1 heat"
  ],
  hints: [
    "Light is not the only observable property.",
    "Time can change the state of objects."
  ],
  explanation: "Turn one switch on for several minutes, then turn it off. Turn a second switch on and enter the room. The glowing bulb corresponds to the second switch. The off but warm bulb corresponds to the first switch. The cold bulb corresponds to the untouched switch."
},
{
  id: 2,
  question: "Two ropes each burn for exactly 60 minutes but at uneven rates. How can you measure exactly 45 minutes?",
  keyPoints: [
    "both ends",
    "light both ends",
    "one end",
    "second rope",
    "half left",
    "30 then 15",
    "burn both",
    "45 after half"
  ],
  hints: [
    "Burning from both ends changes total duration.",
    "Use both ropes together."
  ],
  explanation: "Light rope A at both ends and rope B at one end. Rope A burns in 30 minutes. When it finishes, light the other end of rope B. It burns for 15 more minutes. Total: 45 minutes."
},
{
  id: 3,
  question: "There are 1000 bottles and exactly one is poisoned. You have 10 test subjects and one round of testing. How can you identify the poisoned bottle?",
  keyPoints: [
    "binary",
    "bits",
    "2^10",
    "1024",
    "assign bottles",
    "person as bit",
    "0 1 system",
    "binary system",
    "each person bit",
    "different combinations"
  ],
  hints: [
    "Each subject can represent a bit.",
    "Encode information efficiently."
  ],
  explanation: "Label bottles 0–999 in binary. Assign each subject a bit position. Each subject drinks from bottles where their bit is 1. The pattern of deaths forms a binary number revealing the poisoned bottle."
},
{
  id: 4,
  question: "You have 12 coins. One is fake and may be heavier or lighter. Using a balance scale only three times, how can you identify the fake coin and determine whether it is heavier or lighter?",
  keyPoints: [
    "divide groups",
    "compare groups",
    "track imbalance",
    "heavier or lighter",
    "3 weighings",
    "eliminate possibilities"
  ],
  hints: [
    "Each weighing must eliminate possibilities.",
    "Track imbalance direction carefully."
  ],
  explanation: "Divide coins strategically. Each weighing narrows possibilities. The direction of imbalance reveals whether the fake is heavier or lighter."
},
{
  id: 5,
  question: "100 prisoners are randomly taken one at a time into a room containing a light bulb. They cannot communicate. How can they eventually determine when all prisoners have visited the room?",
  keyPoints: [
    "one counter",
    "state tracking",
    "bulb memory",
    "turn on once",
    "count 99",
    "designate leader"
  ],
  hints: [
    "The bulb can store shared information.",
    "Assign responsibility carefully."
  ],
  explanation: "One prisoner is the counter. Others turn the bulb on once during their first visit. The counter turns it off and counts. When the counter reaches 99, everyone has visited."
},
{
  id: 6,
  question: "100 doors are closed. Person 1 toggles every door. Person 2 every second door. Person 3 every third, and so on until 100. Which doors remain open?",
  keyPoints: [
    "perfect square",
    "square numbers",
    "1 4 9 16",
    "25 36 49",
    "64 81 100",
    "odd divisors",
    "odd factors",
    "only squares",
    "factor count"
  ],
  hints: [
    "Each door toggles once per divisor.",
    "Which numbers have an odd number of divisors?"
  ],
  explanation: "A door is toggled once for each divisor it has. Only perfect squares have an odd number of divisors. Therefore, doors numbered 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100 remain open."
},
{
  id: 7,
  question: "You flip a fair coin until you get two consecutive heads. What is the expected number of flips?",
  keyPoints: [
    "state transition",
    "previous head",
    "recursive",
    "expected value",
    "6 flips"
  ],
  hints: [
    "The process has memory.",
    "Consider recursive expectation."
  ],
  explanation: "Define states based on previous flips. Solving the expectation equations gives 6 flips."
},
{
  id: 8,
  question: "A prisoner must make a statement: if true, he is hanged; if false, he is shot. What can he say?",
  keyPoints: [
    "self reference",
    "i will be shot",
    "paradox",
    "contradiction"
  ],
  hints: [
    "Create a logical contradiction.",
    "Force the system to break."
  ],
  explanation: "He says, 'I will be shot.' This creates a paradox preventing execution."
},
{
  id: 9,
  question: "You have a biased coin. How can you generate a fair 50-50 outcome?",
  keyPoints: [
    "ht",
    "th",
    "ignore hh",
    "ignore tt",
    "two flips",
    "symmetry"
  ],
  hints: [
    "Use two flips.",
    "Ignore certain outcomes."
  ],
  explanation: "Flip twice. HT = heads, TH = tails. Ignore HH and TT."
},
{
  id: 10,
  question: "You are given a sorted array rotated an unknown number of times. How can you find the minimum element in O(log n)?",
  keyPoints: [
    "binary search",
    "compare mid",
    "mid greater than right",
    "halve search",
    "log n"
  ],
  hints: [
    "Compare middle and end elements.",
    "Eliminate half each step."
  ],
  explanation: "Use modified binary search comparing middle with rightmost element to eliminate half each step."
}
];
export default questions;
