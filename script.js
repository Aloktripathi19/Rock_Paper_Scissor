        let my = 0, cy = 0
        function fun(ch) {
            let game = ['ROCK', 'PAPER', 'SCISSOR']
            g = game[(Math.floor(Math.random() * game.length))]

            document.getElementById("min1").innerHTML = ch
            document.getElementById("min2").innerHTML = g

            if (ch == 'ROCK' && g == 'SCISSOR' || ch == 'PAPER' && g == 'ROCK' || ch == 'SCISSOR' && g == 'PAPER') {
                document.getElementById("min3").innerHTML = 'YOU WON'
                document.getElementById("min3").style.color = 'green'
                my++
                document.getElementById("min4").innerHTML = my

            }
            else if (ch === g) {
                document.getElementById("min3").innerHTML = 'DRAW'
                document.getElementById("min3").style.color = 'blue'
            }
            else {
                document.getElementById("min3").innerHTML = 'YOU LOOSE'
                document.getElementById("min3").style.color = "red"
                cy++
                document.getElementById("min5").innerHTML = cy
            }
        }
