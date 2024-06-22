import { object, string } from 'yup'

export const reviewSchema = object({
  text: string()
    .required('文章は必須です')
    .max(100, '100文字以内でご利用できます'),
  request: string()
    .required('ご要望は必須です')
    .max(100, '100文字以内でご利用できます'),
})
