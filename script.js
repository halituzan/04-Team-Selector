const team = {
    _positions: {
        centers: [],
        forwards: [],
        guards: [],
        // get center() {
        //     return this.centers
        // },
        // set center(center) {
        //     return this.center = center;
        // },
        // get forward() {
        //     return this.forwards
        // },
        // set forward(forward) {
        //     return this.forwards = forward;
        // },
        // get guard() {
        //     return this.guards
        // },
        // set guard(guard) {
        //     return this.guards = guard;
        // }

    },
    getAddPlayerToPosition(positionName, playerName, playerPoint) {
        return this._positions[positionName].push([playerName, playerPoint])
    },
    getRandomPlayerFromPosition(positionName) {
        let players = this._positions[positionName]
        let randNum = Math.floor(Math.random() * players.length)
        return randNum
    },
    generateRandomTeam() {
        const center = this._positions["centers"]
        let centerArr = [];
        centerArr.push(center[this.getRandomPlayerFromPosition("centers")])

        const forwards = this._positions["forwards"]
        let forwArr = [];
        forwArr.push(forwards[this.getRandomPlayerFromPosition("forwards")])

        const guards = this._positions["guards"]
        let guardArr = [];
        guardArr.push(guards[this.getRandomPlayerFromPosition("guards")])

        let avgCenters = center.reduce((a, b) => a + b[1], 0);
        let avgForwards = forwards.reduce((a, b) => a + b[1], 0);
        let avgGuards = guards.reduce((a, b) => a + b[1], 0);

        return `Guards:\n--------------------\nPlayer Name: ${guardArr[0][0]} \n\nPlayer Point: ${guardArr[0][1]}\nPosition Avg: ${avgGuards/guards.length}\n\nCenters:\n--------------------\nPlayer Name: ${centerArr[0][0]}\n\nPlayer Point: ${centerArr[0][1]}\nPosition Avg: ${avgCenters/center.length}\n\nForwards:\n--------------------\nPlayer Name: ${forwArr[0][0]}\n\nPlayer Point:${forwArr[0][1]}\nPosition Avg: ${avgForwards/forwards.length}`

    },
    aboveAverage () {
        const center = this._positions["centers"]
        const forward = this._positions["forwards"]
        const guard = this._positions["guards"]
        let avgCenters = center.reduce((a, b) => a + b[1], 0)/center.length;
        let avgForwards = forward.reduce((a, b) => a + b[1], 0)/forward.length;
        let avgGuards = guard.reduce((a, b) => a + b[1], 0)/guard.length;
        let above = {
            center : [],
            forward : [],
            guard : [],
        };
        for (item of center) {
            if (item[1]>avgCenters) {
                above.center.push(item[0]);
            }
        }
        for (item of forward) {
            if (item[1]>avgForwards) {
                above.forward.push(item[0]);
            }
        }
        for (item of guard) {
            if (item[1]>avgGuards) {
                above.guard.push(item[0]);
            }
        }
        return above
    }
   
};



/// Guards
team.getAddPlayerToPosition("guards", "Ball", 9.5)
team.getAddPlayerToPosition("guards", "Carter", 13.5)
team.getAddPlayerToPosition("guards", "Dragic", 6)
team.getAddPlayerToPosition("guards", "Flynn", 12)
team.getAddPlayerToPosition("guards", "Lewis Jr.", 17)

/// Centers
team.getAddPlayerToPosition("centers", "Babi", 15)
team.getAddPlayerToPosition("centers", "Mell", 27)
team.getAddPlayerToPosition("centers", "John Jr.", 13)
team.getAddPlayerToPosition("centers", "Hamlet", 19)
team.getAddPlayerToPosition("centers", "Elon Musk", 16)

/// Forwards
team.getAddPlayerToPosition("forwards", "Kobe", 35.5)
team.getAddPlayerToPosition("forwards", "Gordon", 29)
team.getAddPlayerToPosition("forwards", "Harris", 37.5)
team.getAddPlayerToPosition("forwards", "Jackson", 22.5)
team.getAddPlayerToPosition("forwards", "Lamb", 35)

let selectedTeam = team.generateRandomTeam();

console.log(selectedTeam)

console.log(team.aboveAverage());
console.log(team.aboveAverage().guard);
console.log(team.aboveAverage().center);
console.log(team.aboveAverage().forward);

console.log(team._positions)
console.log("-------------------")
