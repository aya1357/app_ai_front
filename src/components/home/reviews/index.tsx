'use client'

import { Card } from '@/components/ui/card'
import { reviewSchema } from '@/validations/home/review'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { Button, Label, Textarea } from 'flowbite-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  text: string
  request: string
}

export function Reviews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(reviewSchema) })

  const [response, setResponse] = useState('')

  const onSubmit = async (data: Inputs) => {
    try {
      setResponse('')
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/home`,
        { review: data },
      )
      console.log('Response:', response.data)
      setResponse(response.data.response)
    } catch (error) {
      console.error('Error:', error)
      setResponse('エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="sm:w-2/3 w-full">
          <div className="text-center font-bold text-xl mt-6">
            校閲ちゃんが
            <br />
            あなたの文章を完璧に仕上げます
          </div>

          <form
            className="flex flex-col gap-4 p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex items-center">
                <Label
                  htmlFor="text"
                  value="修正したい文章をご入力ください"
                  className="font-bold"
                />
                <div className="bg-red-500 text-white px-2 py-1 rounded-md w-12 text-sm ml-4 justify-center">
                  必須
                </div>
              </div>
              {errors.text && (
                <p className="text-red-500 text-sm">{errors.text.message}</p>
              )}
              <div className="mb-2" />
              <Textarea
                id="text"
                rows={10}
                {...register('text', { required: true })}
                placeholder="例: お世話になっております。昨日はお打ち合わせのお時間をいただき、誠にありがとうございました。●●様からお伺いした課題やご要望に関しまして、新たな対策を検討しつつ、次のお打ち合わせの際にご提案させていただければと思います。宜しくお願い致します。"
              />
              <div className="text-sm text-gray-500">* 100文字まで</div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <Label
                  htmlFor="request"
                  value="ご要望をご入力ください"
                  className="font-bold"
                />
                <div className="bg-red-500 text-white px-2 py-1 rounded-md w-12 text-sm ml-4 justify-center">
                  必須
                </div>
              </div>
              {errors.request && (
                <p className="text-red-500 text-sm">{errors.request.message}</p>
              )}
              <div className="mb-2" />
              <Textarea
                id="request"
                rows={10}
                {...register('request', { required: true })}
                placeholder="例: 丁寧な言葉遣いを保ちつつ、もう少しカジュアルなトーンにしてください。"
              ></Textarea>
              <div className="text-sm text-gray-500">* 100文字まで</div>
            </div>
            <Button type="submit" className="mt-6">
              修正する
            </Button>
            <div className="text-sm text-gray-500">
              * ログイン後は文字数制限無しでご利用できます。
            </div>
          </form>

          {response && (
            <>
              <div className="mt-10" />
              <div className="flex justify-center items-center">
                <Image
                  src="/login.png"
                  alt="校閲ちゃん"
                  width={50}
                  height={50}
                />
                <div className="ml-6 font-bold text-xl font-hannari">
                  修正しました！
                </div>
              </div>
              <Card className="p-6 m-6 bg-blue-50">
                <div>{response}</div>
              </Card>
            </>
          )}
        </Card>
      </div>
    </>
  )
}
