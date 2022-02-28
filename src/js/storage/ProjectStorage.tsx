import Portfolio from "../interfaces/Portfolio";

export const listIndividualProject: Portfolio[] = [
    {
        id: 'snake-c',
        title: 'Snake in C',
        preview: {
            previewImgPath: '/images/projects/SnakeC/SnakeC.png',
            previewDescription: `This is console game that I made. 
            I made this game during holiday.`
        },
        description: `This is my first C console game.
            I build this during holiday my semester break.
            I made this to improve my logic using C.
            Like another general snake game, you can move, increase the snake body with eat some food.`,
        listTech: ['C'],
        listScreenshootImgPath: [
            '/images/projects/SnakeC/SnakeC.png',
            '/images/projects/SnakeC/image-1.png',
            '/images/projects/SnakeC/image-2.png',
            '/images/projects/SnakeC/image-3.png',
            '/images/projects/SnakeC/image-4.png',
            '/images/projects/SnakeC/image-5.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Snake'
            }
        ],
        filePath: '/assets/Snake.exe',
    },
    {
        id: 'tetris',
        title: 'Tetris',
        preview: {
            previewImgPath: '/images/projects/Tetris/Tetris.png',
            previewDescription: `This is console game that I made. 
            I made this game during holiday.`
        },
        description: `This is my second C console game.
        I build this during holiday my semester break.
        I made this to improve my logic using C.
        Like another tetris game, you can rotated, and move the block.
        And I make different color for every block.`,
        listTech: ['C'],
        listScreenshootImgPath: [
            '/images/projects/Tetris/Tetris.png',
            '/images/projects/Tetris/image-1.png',
            '/images/projects/Tetris/image-2.png',
            '/images/projects/Tetris/image-3.png',
            '/images/projects/Tetris/image-4.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Tetris'
            }
        ],
        filePath: '/assets/Tetris.exe',
    },
    {
        id: 'othello',
        title: 'Othello',
        preview: {
            previewImgPath: '/images/projects/Othello/Othello.png',
            previewDescription: `This is console game that I made. 
            I made this game during holiday.`
        },
        description: `This is my third C console game.
        I build this during holiday my semester break.
        I made this to improve my logic using C.
        This is a 2 player game.
        Asterisk sign (*) define every place that you can place your disc.`,
        listTech: ['C'],
        listScreenshootImgPath: [
            '/images/projects/Othello/Othello.png',
            '/images/projects/Othello/image-1.png',
            '/images/projects/Othello/image-2.png',
            '/images/projects/Othello/image-3.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Othello'
            }
        ],
        filePath: '/assets/Othello.exe',
    },
    {
        id: 'calculator',
        title: 'Calculator',
        preview: {
            previewImgPath: '/images/projects/Calculator/Calculator.png',
            previewDescription: `This is desktop app that I made. 
            I made this app during holiday.`
        },
        description: `This is a desktop app that I made using python.
        I made this project because I interested to learn about python.
        I made the GUI using tkinter.
        This calculator supports basic operation, decimal number, and can read multiple operator and it will prioritize multiplication and division first.`,
        listTech: ['Python', 'Tkinter'],
        listScreenshootImgPath: [
            '/images/projects/Calculator/Calculator.png',
            '/images/projects/Calculator/image-1.png',
            '/images/projects/Calculator/image-2.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Python-Tkinter-Calculator'
            }
        ],
        filePath: '/assets/Calculator.exe',
    },
    {
        id: 'tabs-creator',
        title: 'Tabs Creator',
        preview: {
            previewImgPath: '/images/projects/TabsCreator/TabsCreator.png',
            previewDescription: `This is desktop app that I made. 
            I made this app during holiday.`
        },
        description: `This is another desktop app that i made using python.
        The GUI was made using tkinter.
        Besides of interested with python, The reason why I made this because I want to create a desktop app that can write and show guitar tabs.
        As displayed in Homepage, playing guitar is one of my hobbies.
        Especially at playing fingerstyle.
        And at that time I want learn to make a fingerstyle by my self, so I made this app.`,
        listTech: ['Python', 'Tkinter', 'psycopg2', 'SQL Server'],
        listScreenshootImgPath: [
            '/images/projects/TabsCreator/TabsCreator.png',
            '/images/projects/TabsCreator/image-1.png',
            '/images/projects/TabsCreator/image-2.png',
            '/images/projects/TabsCreator/image-3.png',
            '/images/projects/TabsCreator/image-4.png',
            '/images/projects/TabsCreator/image-5.png',
            '/images/projects/TabsCreator/image-6.png',
            '/images/projects/TabsCreator/image-7.png',
            '/images/projects/TabsCreator/image-8.png',
            '/images/projects/TabsCreator/image-9.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Python-Tkinter-Tabs-Creator'
            }
        ],
        filePath: '/assets/Tabs_Creator.exe',
    },
    {
        id: 'linked-list-overflow',
        title: 'LinkedList Overflow',
        preview: {
            previewImgPath: '/images/projects/LinkedListOverflow/LinkedListOverflow.png',
            previewDescription: `This is website clone project that I made. 
            I made this project during holiday.`
        },
        description: `This is my laravel project.
        I made this to increase my skill, both at front end dan back end.
        This website features are login, register, ask and answer question, up vote and down vote, comment, etc.`,
        listTech: ['Laravel', 'Bootstrap', 'Html', 'CSS', 'MySQL'],
        listScreenshootImgPath: [
            '/images/projects/LinkedListOverflow/LinkedListOverflow.png',
            '/images/projects/LinkedListOverflow/image-1.png',
            '/images/projects/LinkedListOverflow/image-2.png',
            '/images/projects/LinkedListOverflow/image-3.png',
            '/images/projects/LinkedListOverflow/image-4.png',
            '/images/projects/LinkedListOverflow/image-5.png',
            '/images/projects/LinkedListOverflow/image-6.png',
            '/images/projects/LinkedListOverflow/image-7.png',
            '/images/projects/LinkedListOverflow/image-8.png',
            '/images/projects/LinkedListOverflow/image-9.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/LinkedListOverflow'
            }
        ],
        demoLink: 'https://samlaravelproject.000webhostapp.com/'
    },
    {
        id: 'sliding-puzzle',
        title: 'Sliding Puzzle',
        preview: {
            previewImgPath: '/images/projects/SlidingPuzzle/SlidingPuzzle.png',
            previewDescription: `This is a website game that I made. 
            I made this game during holiday.`
        },
        description: `This is a website game.
        I made this during my semester breaks.
        The reason why i made this game because i want to increase my logic skills.
        This game are made with html, css, javascript, and bootstrap.
        In this game, you can choose the difficulty and size.`,
        listTech: ['Html', 'CSS', 'Javascript', 'Bootstrap'],
        listScreenshootImgPath: [
            '/images/projects/SlidingPuzzle/SlidingPuzzle.png',
            '/images/projects/SlidingPuzzle/image-1.png',
            '/images/projects/SlidingPuzzle/image-2.png',
            '/images/projects/SlidingPuzzle/image-3.png',
            '/images/projects/SlidingPuzzle/image-4.png',
            '/images/projects/SlidingPuzzle/image-5.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/SlidingPuzzle'
            }
        ],
        demoLink: 'https://sam21dr2.000webhostapp.com/SlidingPuzzle/layout/index.html'
    },
    {
        id: 'snake',
        title: 'Snake',
        preview: {
            previewImgPath: '/images/projects/Snake/Snake.png',
            previewDescription: `This is a website game that I made. 
            I made this game during holiday.`
        },
        description: `This is another my website game project.
        I made this, again to fullfil my hobbies and increase my logic skills.
        This project I made using html, css, javascript, and jquery.`,
        listTech: ['Html', 'CSS', 'Javascript'],
        listScreenshootImgPath: [
            '/images/projects/Snake/Snake.png',
            '/images/projects/Snake/image-1.png',
            '/images/projects/Snake/image-2.png',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/SnakeWeb'
            }
        ],
        demoLink: 'https://sam21dr2.000webhostapp.com/Snake/view/index.html'
    },
    {
        id: 'mp3p',
        title: 'MP3P',
        preview: {
            previewImgPath: '/images/projects/MP3P/MP3P.png',
            previewDescription: `This is and android app that I made. 
            I made this to fulfill my hobbies and learn developing android app more.`
        },
        description: `This is my android project.
        This app can played mp3 music by setting the source folder.
        I made this using some design pattern like mediator, observer, singleton, state.
        Programming language that I used is java.
        I made this project because I interested with android and I want to exercise to use design pattern.
        Some feature from this app are play, pause, loop, search music, and the mini player.`,
        listTech: ['Java', 'Android Studio'],
        listScreenshootImgPath: [
            '/images/projects/MP3P/MP3P.png',
            '/images/projects/MP3P/image-1.jpeg',
            '/images/projects/MP3P/image-2.jpeg',
            '/images/projects/MP3P/image-3.jpeg',
            '/images/projects/MP3P/image-4.jpeg',
            '/images/projects/MP3P/image-5.jpeg',
            '/images/projects/MP3P/image-6.jpeg',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/MP3P'
            }
        ],
        filePath: '/assets/mp3p.apk',
    },
    {
        id: 'wakkha-catalog',
        title: 'Wakkha Catalog',
        preview: {
            previewImgPath: '/images/projects/WakkhaCatalog/WakkhaCatalog.png',
            previewDescription: `This is and android app that I made. 
            I made this app to help my sister to maintain her bussines.`
        },
        description: `This is my another android project.
        I made this, because at that time my sister has a little bussines.
        And she feels difficult to manage her business.
        I made this with java, sqlite as the local db, postgresql as the server db.
        Some feature on this app are fetch and backup data from server, manage delivery, product, cart, and transaction report, etc.`,
        listTech: ['Java', 'Android Studio', 'ExpressJS', 'PostgreSQL', 'SQLite'],
        listScreenshootImgPath: [
            '/images/projects/WakkhaCatalog/WakkhaCatalog.png',
            '/images/projects/WakkhaCatalog/image-1.jpeg',
            '/images/projects/WakkhaCatalog/image-2.jpeg',
            '/images/projects/WakkhaCatalog/image-3.jpeg',
            '/images/projects/WakkhaCatalog/image-4.jpeg',
            '/images/projects/WakkhaCatalog/image-5.jpeg',
            '/images/projects/WakkhaCatalog/image-6.jpeg',
            '/images/projects/WakkhaCatalog/image-7.jpeg',
            '/images/projects/WakkhaCatalog/image-8.jpeg',
            '/images/projects/WakkhaCatalog/image-9.jpeg',
            '/images/projects/WakkhaCatalog/image-10.jpeg',
            '/images/projects/WakkhaCatalog/image-11.jpeg',
            '/images/projects/WakkhaCatalog/image-12.jpeg',
            '/images/projects/WakkhaCatalog/image-13.jpeg',
            '/images/projects/WakkhaCatalog/image-14.jpeg',
            '/images/projects/WakkhaCatalog/image-15.jpeg',
            '/images/projects/WakkhaCatalog/image-16.jpeg',
            '/images/projects/WakkhaCatalog/image-17.jpeg',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/Wakkha-Mobile-App'
            }
        ],
        filePath: '/assets/wakkha.apk',
    },
    {
        id: 'whutsupp-web',
        title: 'Whutsupp Web',
        preview: {
            previewImgPath: '/images/projects/WhutsuppWeb/WhutsuppWeb.png',
            previewDescription: `This is website clone project that I made. 
            I made this game during free time when internship.`
        },
        description: `This is my another website clone project.
        Again, I made this to improve my front end and back end skills.
        For the front end, I used Next JS.
        And the backend I used Dotnet.
        Some features from this project are personal and group chatting, add people, search message and contact, edit profile, status, and etc.
        What I want to improve from this project is to make it realtime using websocket.`,
        listTech: ['NextJS', 'CSS', 'Typescript', 'Dotnet', 'PostgreSQL'],
        listScreenshootImgPath: [
            '/images/projects/WhutsuppWeb/WhutsuppWeb.png',
            '/images/projects/WhutsuppWeb/image-1.png',
            '/images/projects/WhutsuppWeb/image-2.png',
            '/images/projects/WhutsuppWeb/image-3.png',
            '/images/projects/WhutsuppWeb/image-4.png',
            '/images/projects/WhutsuppWeb/image-5.png',
            '/images/projects/WhutsuppWeb/image-6.png',
            '/images/projects/WhutsuppWeb/image-7.png',
            '/images/projects/WhutsuppWeb/image-8.png',
            '/images/projects/WhutsuppWeb/image-9.png',
        ],
        repositoryLink: [
            {
                label: 'Front end Repository',
                link: 'https://github.com/Samuellsam/WhutsuppWebFrontEnd'
            },
            {
                label: 'Back end Repository',
                link: 'https://github.com/Samuellsam/WhutsuppWebBackEnd'
            }
        ],
        demoLink: 'https://whutsupp-web-app.herokuapp.com/login'
    },
    {
        id: 'cundy-crash',
        title: 'Cundy Crash',
        preview: {
            previewImgPath: '/images/projects/CundyCrash/CundyCrash.png',
            previewDescription: `This is website game project that I made. 
            I made this game during free time when internship.`
        },
        description: `This is my another NextJS website project.
        I made this because I want to exercise to using NextJS and fill my free time during internship.
        This is a match 3 game with score.
        I am also make feature to change the background.
        And I design this website to playable on desktop or mobile`,
        listTech: ['NextJS', 'CSS', 'Typescript'],
        listScreenshootImgPath: [
            '/images/projects/CundyCrash/CundyCrash.png',
            '/images/projects/CundyCrash/image-1.png',
            '/images/projects/CundyCrash/image-2.png',
            '/images/projects/CundyCrash/image-3.png',
            '/images/projects/CundyCrash/image-4.jpeg',
            '/images/projects/CundyCrash/image-5.jpeg',
        ],
        repositoryLink: [
            {
                label: 'Repository',
                link: 'https://github.com/Samuellsam/CundyCrash'
            }
        ],
        demoLink: 'https://cundy-crash.herokuapp.com/'
    },
];

export const thesisProject: Portfolio = 
{
    id: 'hiber-web-app',
    title: 'Hiber Web App',
    preview: {
        previewImgPath: '/images/projects/Hiber/Hiber.png',
        previewDescription: `This is my thesis project.
        I made this with two of my other friends during my internship program.`
    },
    description: `This is my thesis project.
    I made this with my 2 friends.
    We made my thesis along with my internship.
    Some feature from this website are print barcode, pdf document, managing product, delivery, transaction, and many others feature.
    We build this using NextJS as front end framework, Dotnet as back end, Postgresql, Nswag, etc.`,
    listTech: ['NextJS', 'CSS', 'Typescript'],
    listScreenshootImgPath: [
        '/images/projects/Hiber/Hiber.png',
        '/images/projects/Hiber/image-1.png',
        '/images/projects/Hiber/image-2.png',
        '/images/projects/Hiber/image-3.png',
        '/images/projects/Hiber/image-4.png',
        '/images/projects/Hiber/image-5.png',
        '/images/projects/Hiber/image-6.png',
        '/images/projects/Hiber/image-7.png',
        '/images/projects/Hiber/image-8.png',
        '/images/projects/Hiber/image-9.png',
        '/images/projects/Hiber/image-10.png',
        '/images/projects/Hiber/image-11.png',
        '/images/projects/Hiber/image-12.png',
        '/images/projects/Hiber/image-13.png',
        '/images/projects/Hiber/image-14.png',
        '/images/projects/Hiber/image-15.png',
        '/images/projects/Hiber/image-16.png',
    ],
    repositoryLink: [
        {
            label: 'Front end Repository',
            link: 'https://gitlab.com/Samuellsam/hiber-web-app-frontend'
        },
        {
            label: 'Back end Repository',
            link: 'https://gitlab.com/Samuellsam/hiber-web-app-backend'
        }
    ],
    demoLink: 'https://hiber-web-app.herokuapp.com/'
}
