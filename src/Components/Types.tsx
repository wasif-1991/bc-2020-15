import React from "react"

export type quizTypes  = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type quizTypesMain  = {
    question: string
    answer: string
    options: string[]
    correct_answer: string
}

export type quizProps  = {
    question: string
    options: string[]
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
}