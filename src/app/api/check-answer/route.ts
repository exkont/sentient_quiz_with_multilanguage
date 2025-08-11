import { NextRequest, NextResponse } from 'next/server';
import { getQuestions, checkAnswer } from '@/utils/questions';

export async function POST(request: NextRequest) {
  try {
    const { questionIndex, answer, language } = await request.json();
    
    const questions = getQuestions(language);
    
    if (questionIndex < 0 || questionIndex >= questions.length) {
      return NextResponse.json({ error: 'Invalid question index' }, { status: 400 });
    }
    
    const question = questions[questionIndex];
    const isCorrect = checkAnswer(language, questionIndex, answer);
    
    return NextResponse.json({
      isCorrect,
      correctAnswer: question.answer,
      explanation: isCorrect ? 'Correct answer!' : `Correct answer was: ${question.answer}`
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 