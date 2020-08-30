import { Home } from "../screens/Home";
import { MillenialsChallenge } from "../screens/MillenialsChallenge";
import { DangerousDave } from "../screens/DangerousDave";
import { CowMaze } from "../screens/CowMaze";
import { PatasDadas } from "../screens/PatasDadas";
import { PiggyBank } from "../screens/PiggyBank";
import { LearnIt } from "../screens/LearnIt";
import { Compiler } from "../screens/Compiler";
import { AITools } from "../screens/AITools";
import { OSTools } from "../screens/OSTools";

export const screenList = [
    { title: "Home", class: Home },
    { title: "Games", pages: [
      { title: "Millenial's Challenge", class: MillenialsChallenge },
      { title: "Dangerous Dave", class: DangerousDave },
      { title: "The Homogeneous Cow Maze", class: CowMaze }
    ] },
    { title: "Web projects", pages: [
      { title: "Patas Dadas internal system", class: PatasDadas },
      { title: "Piggy Bank", class: PiggyBank },
      { title: "LearnIt", class: LearnIt }
    ] },
    { title: "Shell applications", pages: [
      { title: "OS Tools", class: OSTools },
      { title: "AI Tools", class: AITools },
      { title: "Code Compiler", class: Compiler }
    ] }
];