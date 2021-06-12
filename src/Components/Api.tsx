import { quizTypes, quizTypesMain } from './Types';

const shuffleAnswers = (array: any[]) =>  [...array].sort( () => Math.random() - 0.5 );

export const getQuestions = async (numbOfQues: number, level: string): Promise<quizTypesMain[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${numbOfQues}&difficulty=${level}&type=multiple`)
    const { results } = await response.json();

    const quizContent: quizTypesMain[] = results.map( (quizValues: quizTypes) => {
        return{
            question: quizValues.question,
            answer: quizValues.correct_answer,
            options: shuffleAnswers(quizValues.incorrect_answers.concat(quizValues.correct_answer)),
        }
    })

    return quizContent;
}