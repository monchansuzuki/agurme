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
            "ピリ辛のトマトソースをベースにイタリアンサラミとモッツァレラをふんだんに使ったやみつきになるスパイシーピザです。",
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
        }
      ],
    },
    {
      id: 2,
      menuTitle: "パスタ",
      image: "pasta-menu",
      relativeDirectory: 'foods/pasta',
      dish: [
        {
          dishName: "小海老のペンネアラビアータ",
        },
        {
          dishName: "ペンネゴルゴンゾーラ",
        },
        {
          dishName: "パンチェッタと玉葱のアマトリチャーナ",
        },
        {
          dishName: "ボンゴレ",
          dishIngredient: 'オイルソース又はトマトソースをお選びください'
        },
        {
          dishName: "アグルメ名物レモンクリーム",
        },
        {
          dishName: "自家製ミートソース　ボロネーゼ",
        },
        {
          dishName: "パンチェッタとポルチーニ茸のカルボナーラ",
        },
        {
          dishName: "ペスカトーレ",
          dishIngredient: 'オイルソース又はトマトソースをお選びください'
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
          dishName: "岩手県産岩中豚骨付きロースのグリル〜季節野菜を添えて〜",
        },
        {
          dishName: "希少部位イチボのタリアータ",
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
          dishName: "自家製ピクルス",
        },
        {
          dishName: "自家製鶏白レバーパテ",
        },
        {
          dishName: "バッファローチキン",
        },
        {
          dishName: "ポテトフライ　(プレーン、ガーリック)¥",
        },
        {
          dishName: "鶏もも肉唐揚げ",
          dishIngredient: "プレーン・ガーリック・アンチョビバター",
        },
        {
          dishName: "オリーブマリネ",
        },
        {
          dishName: "イイダコのガリシア風",
        },
        {
          dishName: "鎌倉タコのセビーチェ",
        },
        {
          dishName: "クリームチーズの赤ワイン味噌漬け",
        },
        {
          dishName: "鴨のスモーク　",
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
          dishName: "小海老のアヒージョ",
        },
        {
          dishName: "牡蠣のアヒージョ",
        },
        {
          dishName: "カマンベールチーズのアヒージョ",
        },
        {
          dishName: "トリッパのトマト煮込み",
        },
        {
          dishName: "骨付き鶏もも肉のコンフィ",
        },
        {
          dishName: "カマンベールチーズフライ",
        },
        {
          dishName: "ムール貝とアサリの白ワイン蒸し",
        },
        {
          dishName: "3種チーズの盛り合わせ",
        },
        {
          dishName: "スペイン産ベーコンとカマンベールチーズの鉄板包み焼き",
        },
        {
          dishName: "水牛モッツァレラと生ハムの盛り合わせ",
        },
        {
          dishName: "肉前菜の盛り合わせ",
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
          dishName: "焼きロメインレタスと自家製パンチェッタのシーザーサラダ",
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
