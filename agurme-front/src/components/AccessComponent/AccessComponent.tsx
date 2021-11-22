import React from "react"
import * as style from "./access-component.module.sass"
import IconLocation from "../../images/location.svg";

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
          茅ヶ崎駅から2分
          <br/>
          <a
            className={style.link}
            href="https://g.page/agrume1215?share"
            target="_blank"
          >
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                 width="24px" height="24px" viewBox="0 0 395.71 395.71">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
              <g>
</g>
</svg>

            アクセス
          </a>
        </p>

      </div>

      <div className={style.category}>
        <strong> Pizzeria&Osteria AGRUME </strong>
        <p>
          住所 <br />
          神奈川県茅ヶ崎市東海岸南6-3-26 シーサイドビル 1F<br />
          茅ヶ崎駅から15分
          <br/>

          <a
            className={style.link}
            href="https://goo.gl/maps/6W1hofU1G2ehiU6f6"
            target="_blank"
          >
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                 width="24px" height="24px" viewBox="0 0 395.71 395.71">
              <g>
                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg  >
            アクセス
          </a>

        </p>

      </div>

      <div className={style.category}>
        <strong>営業時間</strong>
        <p>ランチ営業 11:00~15:00
        <br/>
          ディナー営業 17:00~24:00
          <br/>
          ラストオーダー 23:00
        </p>
        <strong>定休日 </strong>
        <p> 毎週月曜（祝日の場合、翌平日）</p>
      </div>
    </div>
  )
}
