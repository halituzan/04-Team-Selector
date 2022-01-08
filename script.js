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
    getAddPlayerToPosition(positionName, playerName, playerPoint,playerImg) {
        return this._positions[positionName].push([playerName, playerPoint,playerImg])
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
        console.log([...centerArr,...forwArr,...guardArr])
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
team.getAddPlayerToPosition("guards", "Allen Iverson", 98,"../players/allen-iverson.png")
team.getAddPlayerToPosition("guards", "Blake Griffin", 89,"../players/blake-griffin.png")
team.getAddPlayerToPosition("guards", "Clyde Draxler", 97,"../players/clyde-draxler.png")
team.getAddPlayerToPosition("guards", "Demarcus Cousins", 95,"../players/demarcus-cousins.png")
team.getAddPlayerToPosition("guards", "Demar deRozan", 94,"../players/demar-derozan.png")

/// Centers
team.getAddPlayerToPosition("centers", "Giannis Anteto", 89,"../players/giannis-antetokounm.png")
team.getAddPlayerToPosition("centers", "Gordon Hayvard", 83,"../players/gordon-hayvard.png")
team.getAddPlayerToPosition("centers", "James Worthy",98, "../players/james-worthy.png")
team.getAddPlayerToPosition("centers", "Kevin Durant",92,"../players/kevin-durant.png")
team.getAddPlayerToPosition("centers", "Kyrie Irving",94,"../players/kyrie-irving.png")

/// Forwards
team.getAddPlayerToPosition("forwards", "Mike Conley", 91,"../players/mike-conley.png")
team.getAddPlayerToPosition("forwards", "Richard Hamilton", 94,"../players/richard-hamilton.png")
team.getAddPlayerToPosition("forwards", "Sleepy Floyd", 95,"../players/sleepy-floyd.png")
team.getAddPlayerToPosition("forwards", "Stephen Curry", 98, "../players/stephen-curry.png")
team.getAddPlayerToPosition("forwards", "Zydrunas Ilgauskas", 86, "../players/zydrunas-ilgauskas.png")

let selectedTeam = team.generateRandomTeam();

console.log(selectedTeam)

console.log(team.aboveAverage());
console.log(team.aboveAverage().guard);
console.log(team.aboveAverage().center);
console.log(team.aboveAverage().forward);

console.log(team._positions)
console.log("-------------------")
