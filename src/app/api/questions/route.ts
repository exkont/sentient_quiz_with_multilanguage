import { NextRequest, NextResponse } from 'next/server';
import { getQuestions } from '@/utils/questions';
import { Language } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('language') || 'en') as Language;
    
    const questions = getQuestions(language);
    
    return NextResponse.json({ questions });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 