import React from "react"
import * as style from "./access-component.module.sass"

export type MyComponentProps = {}

export default function AccessComponent(props: MyComponentProps) {
  return (
    <div className={style.container}>
      <div className={style.category}>
        <strong> ChigasaKitchen アグルメ</strong>
        <p>
          住所 <br />
          神奈川県茅ヶ崎市幸町23-18 渡辺ビル 1F
          <br/>
          <a
            className={style.link}
            href="https://g.page/agrume1215?share"
            target="_blank"
          >
            Google マップ
          </a>
        </p>

      </div>

      <div className={style.category}>
        <strong> Pizzeria&Osteria AGRUME </strong>
        <p>
          住所 <br />
          神奈川県茅ヶ崎市東海岸南6-3-26 シーサイドビル 1F<br />
          <a
            className={style.link}
            href="https://goo.gl/maps/6W1hofU1G2ehiU6f6"
            target="_blank"
          >
            Google マップ
          </a>

        </p>

      </div>

      <div className={style.category}>
        <strong>営業時間</strong>
        <p>ランチ営業 11:30~15:00(L.O14:30)
        <br/>
          ディナー営業 17:00~20:00(L.O19:30)
        </p>
        <strong>定休日 </strong>
        <p> 毎週月曜（祝日の場合、翌平日）</p>
      </div>
    </div>
  )
}
