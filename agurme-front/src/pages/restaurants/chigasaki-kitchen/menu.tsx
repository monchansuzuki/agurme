import React, {useState} from "react"
import Layout from "../../../components/layout"
import MenuComponent from "../../../components/MenuComponent/MenuComponent"
import MenuNavigationComponent from "../../../components/MenuNavigationComponent/MenuNavigationComponent"
import {PageHeaderComponent} from "../../../components/PageHeaderComponent/PageHeaderComponent"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as style from "./menu.module.sass"
import {SectionHeaderComponent} from "../../../components/SectionHeaderComponent/SectionHeaderComponent"

export type dishType = {
  dishName: string
  dishIngredient?: string
}

const Index = ({data, location}) => {
  const {bgImageData} = data
  const dataMenu = [
    {
      id: 1,
      menuTitle: "ピザ",
      image: "pizza-menu",
      relativeDirectory: 'foods/pizza',
      dish: [
        {
          dishName: "マルゲリータ",
          dishIngredient: "香り高いトマトソースとバジルがモッツァレラチーズと絶妙にマッチした一押しピザです。",
        },
        {
          dishName: "マリナーラ",
          dishIngredient:
            "トマトソースベースにアンチョビ、チェリートマト、ニンニクの抜群の相性がたまらない一品！！",
        },
        {
          dishName: "モルタデッラ",
          dishIngredient: "トマトソースベースに大判のモルタデッラハムとモッツァレラチーズをふんだんに使用した食べ応え満点のピッツァです。",
        },
        {
          dishName: "フンギポルチーニ",
          dishIngredient:
            "香り高いポルチーニソースとニンニクで３種類のきのこの香りをさらに引き立てる一品です。",
        },
        {
          dishName: "クアトロフォルマッジ",
          dishIngredient:
            "『モッツァレラチーズ』『タレッジョ』『ゴルゴンゾーラ』『パルミジャーノ』と人気のチーズを終結させたチーズ好きにはたまらない一品。お好みでハチミツをかけると味変を楽しめます♪",
        },
        {
          dishName: "サルシッチャ",
          dishIngredient: "自家製ソーセージミートとほうれん草の最強タッグで食欲をそそるピッツァです。",
        },
        {
          dishName: "マルゲリータビアンカドック",
          dishIngredient: "弾力あるフレッシュな水牛モッツァレラに香り高いバジル・チェリートマト・オレガノを添えて。シンプルだけど満足な一品ピッツァです。",
        },
        {
          dishName: "プロシュート エ ルーコラ",
          dishIngredient:
            "こだわりの生ハムとフレッシュなチェリートマト、ルッコラを添えてパルミジャーノチーズをアクセントにした爽やかなピッツァ",
        },
        {
          dishName: "ディアボラ",
          dishIngredient:
            "ピリ辛のトマトソースをベースにイタリアンサラミとモッツァレラをふんだんに使ったやみつきになるスパイシーピッツァです。",
        },
        {
          dishName: "ビスマルク",
          dishIngredient: "トマトソースに生ハムと新鮮卵、きのこをモッツァレラチーズで包みこむような絶妙なハーモニーが味わえる一品です。",
        },
        {
          dishName: "釜揚げしらすのチチニエリ",
          dishIngredient:
            "湘南で獲れた新鮮な『しらす』をたっぷりと堪能できる贅沢なアグルメオリジナル海鮮ピザです。",
        },
        {
          dishName: "マーレ",
          dishIngredient:
            "たっぷりのジェノベーゼソースにエビやたこなどの魚介類とチェリートマトで地中海ピッツァをお楽しみください。",
        },
        {
          dishName: "トッピング",
          dishIngredient:
            "さらに自分好みのオリジナルピッツァにしたい方は、お好きなトッピングをたっぷりどうぞ。チェリートマト、 水牛モッツァレラ、生ハム、 モルタデッラハム、 サラミ、ルッコラ、卵、ニンニク、アンチョビ、ブラックオリーブ、ダブルチーズ",
        },
      ],
    },
    {
      id: 2,
      menuTitle: "パスタ",
      image: "pasta-menu",
      relativeDirectory: 'foods/pasta',
      dish: [
        {
          dishName: "小海老のアラビアータ",
        },
        {
          dishName: "ゴルゴンゾーラのクリームソース",
        },
        {
          dishName: "パンチェッタと玉葱のアマトリチャーナ",
        },
        {
          dishName: "ボンゴレビアンコ",
        },
        {
          dishName: "アグルメ名物 レモンクリーム",
        },
        {
          dishName: "自家製ミートソース　ボロネーゼ",
        },
        {
          dishName: "サルシッチャと季節野菜のアーリオオーリオ",
        },
        {
          dishName: "パンチェッタとポルチーニ茸のカルボナーラ",
        },
        {
          dishName: "魚介のペスカトーレ 　",
        },
        {
          dishName: "小海老とイカのジェノヴェーゼ",
        },
      ],
    },
    {
      id: 3,
      menuTitle: "Second Piatto",
      relativeDirectory: 'foods/second',
      image: "second-menu",
      dish: [
        {
          dishName: "ハラミステーキ（200g）　",
        },
        {
          dishName: "希少部位イチボのグリル（200ｇ）",
        },
        {
          dishName: "湘南直送鮮魚のアクアパッツァ",
        },
      ],
    },
    {
      id: 4,
      menuTitle: "ANTIPASTO",
      image: "anti-menu",
      relativeDirectory: 'foods/anti',
      dish: [
        {
          dishName: "ピクルス",
        },
        {
          dishName: "鶏白レバーパテ",
        },
        {
          dishName: "クリームチーズの赤ワイン味噌漬け",
        },
        {
          dishName: "プロシュート",
        },
        {
          dishName: "イタリアンサラミ",
        },
        {
          dishName: "モルタデッラハム",
        },
        {
          dishName: "鴨のスモーク",
        },
        {
          dishName: "ポテトフライ(プレーン・ガーリック)",
        },
        {
          dishName: "2種のオリーブ　",
        },
        {
          dishName: "グリルソーセージ",
        },
        {
          dishName: "小海老のアヒージョ",
        },
        {
          dishName: "鎌倉タコのセビーチェ",
        },
        {
          dishName: "肉前菜の盛り合わせ",
        },
        {
          dishName: "トリッパのトマト煮込み",
        },
        {
          dishName: "ムール貝とアサリの白ワイン蒸し",
        },
        {
          dishName: "3種チーズの盛り合わせ",
        },
        {
          dishName: "バケット（２P）　",
        },
        {
          dishName: "ガーリックトースト（２P）",
        },
      ],
    },
    {
      id: 5,
      menuTitle: "INSALATA",
      image: "insalada-menu",
      relativeDirectory: 'foods/salad',
      dish: [
        {
          dishName: "アグルメサラダ~彩野菜と柑橘のグリーンサラダ~",
        },
        {
          dishName: "水牛モッツァレラのカプレーゼ",
        },
        {
          dishName: "パンチェッタとグラナパダーノのシーザーサラダ",
        },
      ],
    },

  ]

  const bgImage = getImage(bgImageData)

  const [menu, setMenu] = useState<any>(dataMenu.filter(menu => menu.id === 1))
  return (
    <Layout location={location}>
      <PageHeaderComponent title={`Menu`}/>

      <div className={style.bgImage}>
        <GatsbyImage className="bg-img-menu" image={bgImage!} alt="bg"/>
      </div>
      <div className={style.container}>
        <div className="section-wrapper">
          <SectionHeaderComponent title={`REGULAR MENU`}/>
        </div>
        <p className={style.paragraph}>
          ランチやディナーにオススメなアグルメこだわりピザ＆パスタでおもてなしいたします。
          <br/>
          「季節限定メニュー」や「シェフのオススメメニュー」をご用意しております。
          <br/>
          アグルメでしか味わえない、こだわりの食事をお楽しみください。
          <br/>
          ※一部、予告なしにその日の状況によりメニュー変更・中止をする場合がございます。<br/>
          ご了承下さい。詳細はスタッフまでお尋ねください。
        </p>

        <div className={style.menuCategory}>Category</div>

        <MenuNavigationComponent
          className={style.menuNav}
          onNavigate={e => setMenu(dataMenu.filter(menu => menu.id === e))}
        />

        {menu.map(menu => (
          <MenuComponent
            key={menu.id}
            menuTitle={menu.menuTitle}
            dish={menu.dish}
            relativeDirectory={menu.relativeDirectory}
            menuImage={menu.image}
          />
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    bgImageData: file(relativePath: { eq: "bg-images/all-menu.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 50
          webpOptions: { quality: 80 }
          transformOptions: { cropFocus: NORTHWEST, fit: COVER }
          blurredOptions: { toFormat: PNG, width: 10 }
          height: 400
        )
      }
    }
  }
`

export default Index
