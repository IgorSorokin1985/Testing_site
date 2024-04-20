const questions = [
    {
        "question": "1.	You have probably heard about ZyMot Sperm Separation Device Multi (850mkL)/ KOEK Fertile Plus Chip. Which technology is this product based on?",
        "answers": [
            "Swim-up",
            "Density gradient centrifugation",
            "Microfluidics"
        ],
        "right_answer": 0,
        "correct_case": "Correct! Despite these devices are often called “microfluidic chips”, they are based on a swim-up technology.",
        "incorrect_case": "You’ll be surprised, but despite these devices are often called “microfluidic chips”, they are based on a swim-up technology.",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    },
    {
        "question": "2.	ZyMot Sperm Separation Device Multi (850mkL)/ KOEK Fertile Plus Chip allow for isolation of Spermatozoa with non-fragmented DNA",
        "answers": [
            "Motile spermatozoa",
            "Spermatozoa with high DNA integrity",
            "Non-apoptotic spermatozoa",
            "Spermatozoa with all the mentioned above positive features"
        ],
        "right_answer": 0,
        "correct_case": "You a right! While utilizing swim-up methodology, these devices allow for isolation of motile spermatozoa. Motility correlates to sperm DNA integrity, so DNA fragmentation level among spermatozoa, isolated with ZyMot/Koek device, will be lower compared raw ejaculate. The same would happen if you prepare sperm sample with swim up. ",
        "incorrect_case": "Incorrect. While utilizing swim-up methodology, these devices allow for isolation of motile spermatozoa. Motility correlates to sperm DNA integrity, so DNA fragmentation level among spermatozoa, isolated with ZyMot/Koek device, will be lower compared raw ejaculate. The same would happen if you prepare sperm sample with swim up. ",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    },
    {
        "question": "3.	ZyMot Sperm Separation Device Multi (850mkL)/ KOEK Fertile Plus Chip can be considered a replacement for:",
        "answers": [
            "Sperm selection for ICSI with PICSI dish",
            "Sperm selection for ICSI with SpermSlow media",
            "Sperm selection for ICSI using IMSI technology",
            "Sperm preparation with density gradient centrifugation or swim-up"
        ],
        "right_answer": 3,
        "correct_case": "That’s true! These devices are intended for sperm preparation. They cannot help to select single mature spermatozoa with intact DNA during ICSI process.",
        "incorrect_case": "No, these devices are intended for sperm preparation. They cannot help to select single mature spermatozoa with intact DNA during ICSI process.",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    },
    {
        "question": "4.	Can ZyMot Sperm Separation Device Multi (850mkL)/ KOEK Fertile Plus Chip remove viruses or bacteria from the semen sample?",
        "answers": [
            "Yes",
            "No",
            "It can remove only bacteria, not viruses",
            "It can remove only viruses, not bacteria"
        ],
        "right_answer": 1,
        "correct_case": "Yes, as a swim-up based technology, these devices cannot remove bacteria and viruses from the seminal plasma.",
        "incorrect_case": "No, as a swim-up based technology, these devices cannot remove bacteria and viruses from the seminal plasma.",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    },
    {
        "question": "5.	What is the least disputable and most proven benefit of ZyMot Sperm Separation Device Multi (850mkL)/ KOEK Fertile Plus Chip?",
        "answers": [
            "It makes sperm preparation process shorter and more standardized compared to DGC",
            "It helps to improve clinical outcomes cored to DGC",
            "It helps to obtain more spermatozoa for fertilization from the sperm sample compared to DGC"
        ],
        "right_answer": 0,
        "correct_case": "Yes, these devices are easy to use, sperm preparation takes only 30 minutes and is standardized. The same time DGC allows for flexibility during sperm preparation and can give higher yield.",
        "incorrect_case": "That’s not true. Clinical data are promising, but controversial. Sperm yield is often lower compared to swim-up or DGC. But these devices are easy to use, and sperm preparation takes only 30 minutes and is standardized.",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    },
    {
        "question": "6.	According to the last randomized control trial, published in 2022, comparing ZyMot with density gradient centrifugation, sperm preparation with  ZyMot leads to statistically significant increase in:",
        "answers": [
            "Cleavage-stage embryo quality",
            "Blastocyst-stage embryo quality ",
            "Clinical pregnancy rate ",
            "Ongoing pregnancy rates ",
            "None of it"
        ],
        "right_answer": 4,
        "correct_case": "Yes, there was no difference between ZyMot and DGC in any of the measured clinical outcomes. Despite clinical data are promising, now it’s not possible to say, that chip-based sperm preparation improves treatment outcomes. ",
        "incorrect_case": "No, there was no difference between ZyMot and DGC in any of the measured clinical outcomes. Despite clinical data are promising, now it’s not possible to say, that chip-based sperm preparation improves treatment outcomes. ",
        "is_answered": false,
        "is_correct_answer": null,
        "user_answer": null
    }
]

const user_result = document.getElementById('user_result')
const list_questions = document.getElementById('list_questions')
const number_questions = questions.length
let clicked_number_questions = 0
let right_user_answers = 0


function get_HTML_question(question, index_question) {
    return `
    <div class="my_center my_question">
        <div class="row text-center">
            <h4 class="question_text">${question.question}</h4>
        </div>

        <div class="row d-flex">
            <div class="col-lg-3 col-md-12 px-2"><img src="media/prod_${index_question}.jpg" alt="" class="my_img"></div>
            <div class="col-lg-9 col-md-12 my_answers px-2">
                ${get_HTML_answers(question, index_question)}
                ${question.is_answered ? get_HTML_conclusion(question) : ''}

            </div>
        </div>
      </div>
    `
}

function get_HTML_answers(question, index_question){
    let result = ''
    let index_answer = 0
    let color_text = ''
    if (question.is_correct_answer == true) {
        color_text = '_green"'
    }
    if(question.is_correct_answer == false){
        color_text = '_red"'
    }

    for (let answer of question.answers){
        result += `
        <div class="form-check" >
            <input class="form-check-input"  data-index="${index_question}.${index_answer}" data-type="answer" type="radio" name="exampleRadios${index_question}" id="exampleRadios${index_answer}" value="option1" ${question.user_answer == index_answer ? 'checked' : ''} ${question.is_answered ? 'disabled' : ''}>
            <label class="form-check-label answer_text${question.user_answer == index_answer ? color_text : ''}" for="exampleRadios${index_answer}">
          ${answer}
        </label>
        </div>
        `
        index_answer += 1
    }
    return result
}

function get_HTML_conclusion(question){

    return `<h6 class="answer_text${question.is_correct_answer ? '_green' : '_red'}">${question.is_correct_answer ? question.correct_case : question.incorrect_case}</h6>`
}

function get_HTML_result(){
    return `<h2 class="invitation">Welcome to the sperm preparation quiz. Choose the right answer below. You answered to ${clicked_number_questions}. You got ${right_user_answers} points. (${clicked_number_questions > 0 ? Math.round(right_user_answers * 100 / clicked_number_questions) : 0} %)</h2>`
}

function reder () {
    list_questions.innerHTML = ''
    user_result.innerHTML = ''
    let i = 0
    for (let question of questions) {
        list_questions.insertAdjacentHTML('beforeend', get_HTML_question(question, i))
        i += 1
    }
     
    user_result.insertAdjacentHTML('beforeend', get_HTML_result())

}

console.log('Hello!')
reder()

list_questions.onclick = function(event) {
    if (event.target.dataset.type == 'answer') {
        let click_index = event.target.dataset.index.split('.')
        console.log(click_index[0], click_index[1])
        let index_question_click = Number(click_index[0])
        let index_answer_click = Number(click_index[1])
        questions[index_question_click].is_answered = true
        questions[index_question_click].user_answer = index_answer_click
        if (questions[index_question_click].user_answer == questions[index_question_click].right_answer) {
            questions[index_question_click].is_correct_answer = true
            right_user_answers += 1
        } else {
            questions[index_question_click].is_correct_answer = false
        }
        clicked_number_questions += 1

        reder()
        if (clicked_number_questions == number_questions) {
            
            setTimeout(() => window.alert(`Thank you for completing the quiz. You ansered correctly to  ${right_user_answers} questions`), 1000)
        }

}
}
