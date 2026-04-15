const questionList = [
    {
        "number": 1,
        "question": "Which planet in our solar system is known as the 'Red Planet'?",
        "options": {
            "A": "Venus",
            "B": "Mars",
            "C": "Jupiter",
            "D": "Saturn"
        },
        "answer": {
            "option": "B",
            "detail": "Mars. It looks red because its surface is covered in iron oxide, which is the same stuff that makes old nails rusty!"
        }
    },
    {
        "number": 2,
        "question": "How many continents are there on Earth?",
        "options": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
        },
        "answer": {
            "option": "C",
            "detail": "7. The continents are North America, South America, Europe, Africa, Asia, Australia, and Antarctica."
        }
    },
    {
        "number": 3,
        "question": "What gas do plants absorb from the atmosphere to make their own food?",
        "options": {
            "A": "Oxygen",
            "B": "Nitrogen",
            "C": "Carbon Dioxide",
            "D": "Hydrogen"
        },
        "answer": {
            "option": "C",
            "detail": "Carbon Dioxide. Through a process called photosynthesis, plants take in carbon dioxide and release the oxygen that we breathe."
        }
    },
    {
        "number": 4,
        "question": "Who was the first person to step onto the surface of the Moon?",
        "options": {
            "A": "Buzz Aldrin",
            "B": "Yuri Gagarin",
            "C": "Neil Armstrong",
            "D": "Elon Musk"
        },
        "answer": {
            "option": "C",
            "detail": "Neil Armstrong. In 1969, he famously said, 'That's one small step for man, one giant leap for mankind.'"
        }
    },
    {
        "number": 5,
        "question": "Which is the largest mammal currently living on Earth?",
        "options": {
            "A": "African Elephant",
            "B": "Blue Whale",
            "C": "Great White Shark",
            "D": "Giraffe"
        },
        "answer": {
            "option": "B",
            "detail": "Blue Whale. A blue whale's tongue alone can weigh as much as a whole elephant!"
        }
    },
    {
        "number": 6,
        "question": "What is the hardest natural substance found on Earth?",
        "options": {
            "A": "Gold",
            "B": "Iron",
            "C": "Diamond",
            "D": "Granite"
        },
        "answer": {
            "option": "C",
            "detail": "Diamond. Diamonds are made of carbon atoms squeezed under intense pressure deep inside the Earth."
        }
    },
    {
        "number": 7,
        "question": "Which organ in the human body is responsible for pumping blood?",
        "options": {
            "A": "Lungs",
            "B": "Brain",
            "C": "Stomach",
            "D": "Heart"
        },
        "answer": {
            "option": "D",
            "detail": "Heart. Your heart is a muscle that beats about 100,000 times a day to keep blood moving through your body."
        }
    },
    {
        "number": 8,
        "question": "In which country would you find the Great Pyramid of Giza?",
        "options": {
            "A": "Mexico",
            "B": "Egypt",
            "C": "Italy",
            "D": "China"
        },
        "answer": {
            "option": "B",
            "detail": "Egypt. These pyramids were built thousands of years ago as tombs for the ancient Pharaohs."
        }
    },
    {
        "number": 9,
        "question": "What do we call the imaginary line that divides the Earth into the Northern and Southern Hemispheres?",
        "options": {
            "A": "The Prime Meridian",
            "B": "The North Pole",
            "C": "The Equator",
            "D": "The Arctic Circle"
        },
        "answer": {
            "option": "C",
            "detail": "The Equator. It is an imaginary belt around the middle of the Earth where the weather is usually very hot."
        }
    },
    {
        "number": 10,
        "question": "How many bones are in the adult human body?",
        "options": {
            "A": "150",
            "B": "206",
            "C": "300",
            "D": "512"
        },
        "answer": {
            "option": "B",
            "detail": "206. Interestingly, babies are born with about 300 bones, but many of them fuse together as they grow up!"
        }
    }
]

const timer = document.getElementById("timer")


const question_index = document.getElementById("question-index")
const question = document.getElementById("question")


const option_a = document.getElementById("option-a")
const option_b = document.getElementById("option-b")
const option_c = document.getElementById("option-c")
const option_d = document.getElementById("option-d")


const next_button = document.getElementById("next-button")

let currentIndex = 0;


function displayQuestion() {
    question_index.textContent = "Q." + (currentIndex + 1);
    question.textContent = questionList[currentIndex].question;

    option_a.textContent = questionList[currentIndex].options.A;
    option_b.textContent = questionList[currentIndex].options.B;
    option_c.textContent = questionList[currentIndex].options.C;
    option_d.textContent = questionList[currentIndex].options.D;
}

next_button.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questionList.length) {
        displayQuestion();
    } else {
        alert("All Questions Attempted !!");
    }
})

displayQuestion();
