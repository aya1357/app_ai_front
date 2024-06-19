import { Card } from '@/components/ui/card'
import { Button, Label, Textarea } from 'flowbite-react'

export function TextReviews() {
  return (
    <div className="flex justify-center items-center">
      <Card className="sm:w-2/3 w-full">
        <div className="text-center font-bold text-xl mt-6">
          校閲ちゃんが
          <br />
          あなたの文章を完璧に仕上げます
        </div>
        <form className="flex flex-col gap-4 p-6 max-w-full">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="text"
                value="修正したい文章をご入力ください"
                className="font-bold"
              />
            </div>
            <Textarea
              id="text"
              rows={10}
              placeholder="例: お世話になっております。昨日はお打ち合わせのお時間をいただき、誠にありがとうございました。●●様からお伺いした課題やご要望に関しまして、新たな対策を検討しつつ、次のお打ち合わせの際にご提案させていただければと思います。宜しくお願い致します。"
            ></Textarea>
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="request"
                value="ご要望をご入力ください"
                className="font-bold"
              />
            </div>
            <Textarea
              id="request"
              required
              rows={10}
              placeholder="例: 丁寧な言葉遣いを保ちつつ、もう少しカジュアルなトーンにしてください。"
            ></Textarea>
          </div>
          <Button type="submit">修正する</Button>
        </form>
      </Card>
    </div>
  )
}
