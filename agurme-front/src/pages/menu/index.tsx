import React, {useState} from "react"
import Layout from "../../components/layout"
import MenuComponent from "../../components/MenuComponent/MenuComponent"
import MenuNavigationComponent from "../../components/MenuNavigationComponent/MenuNavigationComponent"
import {PageHeaderComponent} from "../../components/PageHeaderComponent/PageHeaderComponent"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as style from "./menu.module.sass"
import {SectionHeaderComponent} from "../../components/SectionHeaderComponent/SectionHeaderComponent"

export type dishType = {
  dishName: string
  dishIngredient?: string
}

const Index = ({data}) => {
  const {bgImageData} = data
  const dataMenu = [
    {
      id: 1,
      menuTitle: "ピザ",
      image: "pizza-menu",
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
        },
        {
          dishName: "トッピング",
          dishIngredient:
            "さらに自分好みのオリジナルピッツァにしたい方は、お好きなトッピングをたっぷりどうぞ。チェリートマト、 水牛モッツァレラ、生ハム、 モルタデッラハム、 サラミ、ルッコラ、卵、ニンニク、アンチョビ、ブラックオリーブ、ダブルチーズs",
        },
      ],
    },
    {
      id: 2,
      menuTitle: "パスタ",
      image: "pasta-menu",
      dish: [
        {
          dishName: "浅利のペペロンチーノ ボンゴレ",
          dishIngredient: "オイルソース又はトマトソースをお選びください",
        },
        {
          dishName: "ボロネーゼ",
          dishIngredient: "自家製ミートソース",
        },
        {
          dishName: "アマトリチャーナ",
          dishIngredient: "自家製ベーコンと玉葱のトマトソース",
        },
        {
          dishName: "小海老のペンネアラビアータ",
        },
        {
          dishName: "アグルメ名物 レモンクリーム",
        },
        {
          dishName: "自家製ベーコンとポルチーニ茸のカルボナーラ",
        },
        {
          dishName: "ペスカトーレ",
          dishIngredient:
            "有頭海老と魚介のパスタ\n" +
            "              オイルソース又はトマトソースをお選びください",
        },
        {
          dishName: "小海老とイカ フレッシュトマトのジェノベーゼ",
        },
      ],
    },
    {
      id: 3,
      menuTitle: "Second Piatto",
      image: "second-menu",
      dish: [
        {
          dishName: "湘南直送鮮魚と魚介のアクアパッツァ",
        },
        {
          dishName: "骨つき鶏モモ肉のコンフィ",
        },
        {
          dishName: "ハラミステーキ ステーキソース ",
        },
        {
          dishName: "希少部位イチボのグリルステーキ 赤ワインソース",
        },
      ],
    },
    {
      id: 4,
      menuTitle: "ANTIPASTO",
      image: "anti-menu",
      dish: [
        {
          dishName: "グリルソーセージ 2p",
        },
        {
          dishName: "自家製ピクルス",
        },
        {
          dishName: "自家製鶏レバーパテ",
        },
        {
          dishName: "プロシュート",
        },
        {
          dishName: "ポテトフライ",
          dishIngredient: "プレーン・ガーリック・アンチョビバター",
        },
        {
          dishName: "オリーブマリネ",
        },
        {
          dishName: "鴨のスモーク",
        },
        {
          dishName: "イタリアンサラミ",
        },
        {
          dishName: "モルタデッラハム",
        },
        {
          dishName: "ミックスナッツ",
        },
        {
          dishName: "小海老のアヒージョ",
        },
        {
          dishName: "タコのセビーチェ",
        },
        {
          dishName: "ムール貝とあさりの白ワイン蒸し",
        },
        {
          dishName: "トリッパのトマト煮込み",
        },
        {
          dishName: "肉前菜の盛り合わせ",
        },
        {
          dishName: "3種チーズの盛り合わせ",
        },
        {
          dishName: "バケット",
        },
        {
          dishName: "ガーリックトースト",
        },
      ],
    },
    {
      id: 5,
      menuTitle: "INSALATA",
      image: "insalada-menu",
      dish: [
        {
          dishName: "トマトと水牛モッツァレラのカプレーゼ",
        },
        {
          dishName: "自家製ベーコンとパルミジャーノのシーザーサラダ",
        },
        {
          dishName: "アグルメサラダ ～彩り野菜と柑橘のグリーンサラダ～",
        },
      ],
    },

    {
      id: 6,
      menuTitle: "DOLCE",
      image: "dolce-menu",
      dish: [
        {
          dishName: "マスカルポーネをたっぷり使った自家製ティラミス",
        },
        {
          dishName: "しっとり焼き上げた濃厚なガトーショコラ",
        },
        {
          dishName: "さっぱりとした味わいのレモンケーキ",
        },

        {
          dishName: "バニラアイス",
        },
      ],
    },
  ]

  const bgImage = getImage(bgImageData)

  const [menu, setMenu] = useState<any>(dataMenu.filter(menu => menu.id === 1))
  return (
    <Layout>
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
