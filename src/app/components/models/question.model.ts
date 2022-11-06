// export interface Question {
//   id: number | null;
//   title: string;
//   active: boolean;
// }

export interface QuestionDTO {
  question_id: number | null,
  question: string,
  answer: string,
  source_article_id: number
}

export function QToDTO(q: any, articleId: number): QuestionDTO {
  return {
    question_id: q.id,
    question: q.title,
    answer: q.answer,
    source_article_id: articleId
  }
}