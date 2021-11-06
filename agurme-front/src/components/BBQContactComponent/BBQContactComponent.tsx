import React from "react"
import * as style from "./bbq-contact-component.module.sass"

export type MyComponentProps = {}

export default function BBQContactComponent(props: MyComponentProps) {
  return (
    <div className={style.container}>
      <p>★ご利用の3日前までにご予約をお願い致します。</p>
      <div className={style.block}>
        <h5>ご予約・お間い合わせ電話番ご</h5>
        <div className={style.flex}>
          <a href="tel:0467-73-7712" className={style.phone}>
            Tel: 0467-73-7712
          </a>
          <a href="tel:080-5378-7703" className={style.phone}>
            ENGLISH Tel: 080-5378-7703{" "}
          </a>
        </div>
      </div>

      <div>
        <h5>
          ご予約・お間い合わせ時間 <br />
          10:00 ~ 22:00
        </h5>
      </div>

      <div className={style.subAttention}>
        《ご予約について》
        <br />
        <br />
        ご予約は先着順で定数になリ次第、締切となリますのでご了承ください．
        <br />
        予約受付は火曜日～金躍日の10時から22時とさせて頂きます．
        <br />
        尚、混雑時ご連絡が遅くなる場合がございますので、ご了承下さい。
        <br />
        ※レンタル機材・食材等は下記店舗にてお受け取りをお願い致します。※当日は前会計になっております‘受付時に一括でお支払いください。
      </div>
    </div>
  )
}
