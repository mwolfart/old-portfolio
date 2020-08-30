import { Home } from "./Home";
import { MillenialsChallenge } from "./MillenialsChallenge";
import { DangerousDave } from "./DangerousDave";
import { CowMaze } from "./CowMaze";
import { PatasDadas } from "./PatasDadas";
import { PiggyBank } from "./PiggyBank";
import { LearnIt } from "./LearnIt";
import { Compiler } from "./Compiler";
import { AITools } from "./AITools";
import { OSTools } from "./OSTools";

export const ScreenList = [
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