<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My ePortfolio</title>
    <link href="styles.css" type="text/css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #1a1a1a;
        }

        header {
            background-color: #000000;
            color: #fff;
            text-align: center;
            padding: 2rem;
        }

        nav {
            background-color: #444;
            padding: 1rem;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 1rem;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
        }

        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .section {
            background-color: #333333;
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            color: #fff;
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            justify-items: center;
            text-align: center;
        }

        .project-card {
            background-color: #333333;
            padding: 1.5rem;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            color: #fff;
            width: 100%;
            max-width: 350px;
            transition: transform 0.3s ease;
        }

        .project-card:nth-child(1) {
            background-color: #111111;
        }

        .project-card:nth-child(2) {
            background-color: #111111;
        }

        .project-card:nth-child(3) {
            background-color: #111111;
        }

        .view-project-button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 15px;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .view-project-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgb(76, 218, 236);
        }

        .view-project-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease;
        }

        .view-project-button:active::after {
            width: 200px;
            height: 200px;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                text-align: center;
            }

            nav ul li {
                margin: 0.5rem 0;
            }
        }
    </style>
</head>

<body>
    <header>
        <h1>Walt Aldrin Rayos del Sol</h1>
        <p>ITE Elective 4 - E-portfolio</p>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Works</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <div class="container">
        <section id="about" class="section" style="display: flex; align-items: center;">
            <img src=".\picture\img20241207_13443442.png" alt="Profile Picture"
                style="width: 300px; height: 500px; border-radius: 5%; margin-right: 20px;">
                
            <div>
                <h2>About Me<br></h2>
                <p>Hello, I'm Walt Aldrin B. Rayos del Sol, I'm 21 years old, and I live in Cainta Rizal, I'm withmy
                    parents and have one younger brother. My hobbies are playing online games with my friends and I do
                    like playing basketball but because of the pandemic, I stop playing basketball. I studied at La
                    Immaculada Concepcion School from grade 1 to grade 12 and I learned so many things in that school.
                    Now I'm in college at Jose Rizal University and I'm currently studying Information Technology. I am
                    a passionate web developer with experience in creating responsive and user-friendly websites.
                </p>
            </div>
        </section>

        <section id="projects" class="section">
            <div class="projects">
                <div class="project-card">
                    <h3 style="font-size: 30px;">Prelim Term</h3>
                    <!--<p>Description of project 1</p>-->
                    <!--<a href="project1.html" class="view-project-button">View Project</a>-->
                    <!--<link href="project1.html" type="text\html" rel="stylesheet">-->
                    <!--<a href="https://github.com/WDrin/ePortfolio---ITE-4.git/ePortfolio---ITE-4/project1.html" title="Prelim">View Project</a>-->
                    <!--<a href="project1.html" class="view-project-button">View Project</a>-->
                    <!--https://github.com/WDrin/ePortfolio---ITE-4.git-->
                </div>
                <div class="project-card">
                    <h3 style="font-size: 30px;">Midterm</h3>
                    <!--<p>Description of project 2</p>-->
                    <a href="project2.html" class="view-project-button">View Project</a>
                </div>
                <div class="project-card">
                    <h3 style="font-size: 30px;">Final Term</h3>
                    <!--<p>Description of project 3</p>-->
                    <a href="project3.html" class="view-project-button">View Project</a>
                </div>
            </div>
        </section>


        <section id="contact" class="section">
            <h2>Contact</h2>
            <p>Email: waltaldrin.rayosdelsol@my.jru.edu</p>
            <p>Phone: 09762594642</p>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Rayos del Sol. My ePortfolio.</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add animation to project cards on hover
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.03)';
                card.style.transition = 'transform 0.3s ease';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Modified ripple effect and navigation for view project buttons
        const buttons = document.querySelectorAll('.view-project-button');
        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                const ripple = document.createElement('div');
                ripple.classList.add('ripple');

                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                button.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                    // Navigate to the href in the same tab
                    window.location.href = this.getAttribute('href');
                }, 600);
            });
        });
    </script>
</body>

</html>
