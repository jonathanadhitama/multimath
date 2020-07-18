import Result from "./result";
import { upperCase } from "lodash";

export default class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
        const allCapsName: string = upperCase(newResult.playerName);
        console.log(`${allCapsName} - ${newResult.score}`);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ' : ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }

        const scoreElement: HTMLElement | null = document.getElementById('postedScores');
        scoreElement!.innerHTML = output;
    }
}