const questions = [
{
  id: 1,
  question: "Three switches control three bulbs in another room. You may enter the room only once. How can you determine which switch controls which bulb?",
  keyPoints: ["heat"],
  hints: [
    "Light is not the only observable property.",
    "Time can change the state of objects."
  ],
  explanation: "Turn one switch on for several minutes, then turn it off. Turn a second switch on and enter the room. The bulb that is glowing corresponds to the second switch. The bulb that is off but warm corresponds to the first switch. The cold bulb corresponds to the untouched switch."
},
{
  id: 2,
  question: "Two ropes each burn for exactly 60 minutes but at uneven rates. How can you measure exactly 45 minutes?",
  keyPoints: ["simultaneity"],
  hints: [
    "Burning from both ends changes total duration.",
    "Use both ropes together."
  ],
  explanation: "Light rope A at both ends and rope B at one end. Rope A will burn completely in 30 minutes. When it finishes, light the other end of rope B. Rope B will now burn for 15 more minutes. Total time measured is 45 minutes."
},
{
  id: 3,
  question: "There are 1000 bottles and exactly one is poisoned. You have 10 test subjects and one round of testing. How can you identify the poisoned bottle?",
  keyPoints: ["binary"],
  hints: [
    "Each subject can represent a bit.",
    "Encode information efficiently."
  ],
  explanation: "Label bottles 0–999 in binary. Assign each test subject to one binary position. Each subject drinks from bottles where their bit position is 1. After 24 hours, the pattern of deaths forms a binary number revealing the poisoned bottle."
},
{
  id: 4,
  question: "You have 12 coins. One is fake and may be heavier or lighter. Using a balance scale only three times, how can you identify the fake coin and determine whether it is heavier or lighter?",
  keyPoints: ["information partition"],
  hints: [
    "Each weighing must eliminate possibilities.",
    "Track imbalance direction carefully."
  ],
  explanation: "Divide the coins into groups and compare strategically to isolate subsets. Use the first weighing to narrow possibilities, the second to reduce to three candidates, and the third to identify the coin. The direction of imbalance across weighings reveals whether it is heavier or lighter."
},
{
  id: 5,
  question: "100 prisoners are randomly taken one at a time into a room containing a light bulb. They cannot communicate. How can they eventually determine when all prisoners have visited the room?",
  keyPoints: ["state tracking"],
  hints: [
    "The bulb can store shared information.",
    "Assign responsibility carefully."
  ],
  explanation: "Designate one prisoner as the counter. Every other prisoner turns the bulb on exactly once upon their first visit if it is off. The counter turns it off and increments a count. When the counter reaches 99, they know all prisoners have visited."
},
{
  id: 6,
  question: "100 doors are initially closed. 100 people toggle doors in passes: the first toggles every door, the second every second door, and so on. Which doors remain open?",
  keyPoints: ["divisors"],
  hints: [
    "A door changes state once per factor.",
    "Only certain numbers have an odd number of divisors."
  ],
  explanation: "A door is toggled once for every divisor it has. Only perfect squares have an odd number of divisors. Therefore, doors numbered 1, 4, 9, 16, ..., 100 remain open."
},
{
  id: 7,
  question: "You flip a fair coin until you get two consecutive heads. What is the expected number of flips?",
  keyPoints: ["state transition"],
  hints: [
    "The process has memory.",
    "Consider recursive expectation."
  ],
  explanation: "Define states based on whether the previous flip was a head. Solving the recursive expectation equations yields an expected value of 6 flips."
},
{
  id: 8,
  question: "A prisoner must make a statement: if it is true, he will be hanged; if false, he will be shot. What can he say to avoid execution?",
  keyPoints: ["self-reference"],
  hints: [
    "Create a logical contradiction.",
    "Force the system to break."
  ],
  explanation: "He says, 'I will be shot.' If this statement is true, he must be hanged, making it false. If it is false, he must be shot, making it true. The paradox prevents either punishment."
},
{
  id: 9,
  question: "You have a biased coin. How can you generate a fair 50-50 outcome?",
  keyPoints: ["symmetry"],
  hints: [
    "Use two flips.",
    "Ignore certain outcomes."
  ],
  explanation: "Flip the coin twice. If the result is HT, output heads. If TH, output tails. Ignore HH and TT. HT and TH are equally likely, producing a fair outcome."
},
{
  id: 10,
  question: "You are given a sorted array rotated an unknown number of times. How can you find the minimum element in O(log n) time?",
  keyPoints: ["binary search"],
  hints: [
    "Compare middle and end elements.",
    "Eliminate half each step."
  ],
  explanation: "Use modified binary search. Compare the middle element with the rightmost element. If the middle is greater, the minimum lies to the right; otherwise, it lies to the left. Repeat until the minimum is found."
}
];

export default questions;