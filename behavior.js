
         window.onscroll = function() {
            const navbar = document.getElementById("navbar");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.remove("default");
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
                navbar.classList.add("default");
            }
        };

        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;

        const target1 = 1234;
        const target2 = 156;
        const target3 = 8901;

        const interval = setInterval(() => {
            if (counter1 < target1) {
                counter1++;
                document.getElementById("counter1").textContent = counter1;
            }
            if (counter2 < target2) {
                counter2++;
                document.getElementById("counter2").textContent = counter2;
            }
            if (counter3 < target3) {
                counter3++;
                document.getElementById("counter3").textContent = counter3;
            }

            if (counter1 === target1 && counter2 === target2 && counter3 === target3) {
                clearInterval(interval);
            }
        }, 0.3);