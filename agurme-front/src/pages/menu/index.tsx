import React, {useState} from "react"
import Layout from "../../components/layout"
import MenuComponent from "../../components/MenuComponent/MenuComponent"
import MenuNavigationComponent from "../../components/MenuNavigationComponent/MenuNavigationComponent"
import {PageHeaderComponent} from "../../components/PageHeaderComponent/PageHeaderComponent";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import * as style from "./menu.module.sass"
import {SectionHeaderComponent} from "../../components/SectionHeaderComponent/SectionHeaderComponent";

export type dishType = {
  dishName: string;
  dishIngredient?: string;
}

const Index = ({data}) => {
  const {bgImageData} = data;
  const dataMenu = [
    {
      id: 1,
      menuTitle: "ピザ",
      image: 'pizza-menu',
      dish: [
        {
          dishName: 'マルゲリータ',
          dishIngredient: 'トマトソース・バジル・モッツァレラ'
        },
        {
          dishName: 'マリナーラ',
          dishIngredient: 'トマトソース・アンチョビ・バジル・ニンニク・チェリートマト・オレガノ'
        },
        {
          dishName: 'モルタデッラ',
          dishIngredient: 'トマトソース・モルタデッラハム・モッツァレラ'
        },
        {
          dishName: 'フンギポルチーニ',
          dishIngredient: 'ポルチーニソース・3種のきのこ・モッツァレラ・ニンニク'
        },
        {
          dishName: 'クアトロフォルマッジ',
          dishIngredient: 'モッツァレラ・タレッジョ・ゴルゴンゾーラ・パルミジャーノ・はちみつ付'
        },
        {
          dishName: 'サルシッチャ',
          dishIngredient: '自家製ソーセージミート・ほうれん草・モッツァレラ'
        },
        {
          dishName: 'マルゲリータビアンカドック',
          dishIngredient: '水牛モッツァレラ・バジル・チェリートマト・オレガノ'
        },
        {
          dishName: 'プロシュート エ ルーコラ',
          dishIngredient: 'モッツァレラ・生ハム・チェリートマト・ルッコラ・パルミジャーノ'
        },
        {
          dishName: 'ディアボラ',
          dishIngredient: 'トマトソース・サラミ・鶏モモ肉・唐辛子・モッツァレラ'
        },
        {
          dishName: 'ビスマルク',
          dishIngredient: 'トマトソース・生ハム・卵・きのこ・モッツァレラ'
        },
        {
          dishName: 'チチニエリ',
          dishIngredient: 'トマトソース・シラス・オレガノ・チェリートマト・にんにく'
        },
        {
          dishName: 'マーレ',
          dishIngredient: 'ジェノベーゼソース・魚介類・チェリートマト・モッツァレラ'
        },
        {
          dishName: 'トッピング',
          dishIngredient: 'チェリートマト、 水牛モッツァレラ、生ハム、 モルタデッラハム、\n' +
            '              サラミ、ルッコラ、卵、ニンニク、アンチョビ、ブラックオリーブ、ダブルチーズ...\n' +
            '            '
        },
      ]
    },
    {
      id: 2,
      menuTitle: "パスタ",
      image: 'pasta-menu',
      dish: [
        {
          dishName: '浅利のペペロンチーノ ボンゴレ',
          dishIngredient: 'オイルソース又はトマトソースをお選びください'
        },
        {
          dishName: 'ボロネーゼ',
          dishIngredient: '自家製ミートソース'
        },
        {
          dishName: 'アマトリチャーナ',
          dishIngredient: '自家製ベーコンと玉葱のトマトソース'
        },
        {
          dishName: '小海老のペンネアラビアータ',
        },
        {
          dishName: 'アグルメ名物 レモンクリーム',
        },
        {
          dishName: '自家製ベーコンとポルチーニ茸のカルボナーラ',
        },
        {
          dishName: 'ペスカトーレ',
          dishIngredient: '有頭海老と魚介のパスタ\n' +
            '              オイルソース又はトマトソースをお選びください'
        },
        {
          dishName: '小海老とイカ フレッシュトマトのジェノベーゼ',
        },
      ]
    },
    {
      id: 3,
      menuTitle: "Second Piatto",
      image: 'second-menu',
      dish: [
        {
          dishName: '湘南直送鮮魚と魚介のアクアパッツァ'
        },
        {
          dishName: '骨つき鶏モモ肉のコンフィ'
        },
        {
          dishName: 'ハラミステーキ ステーキソース '
        },
        {
          dishName: '希少部位イチボのグリルステーキ 赤ワインソース'
        },
      ]
    },
    {
      id: 4,
      menuTitle: "ANTIPASTO",
      image: 'anti-menu',
      dish: [
        {
          dishName: 'グリルソーセージ 2p'
        },
        {
          dishName: '自家製ピクルス'
        },
        {
          dishName: '自家製鶏レバーパテ'
        },
        {
          dishName: 'プロシュート'
        },
        {
          dishName: 'ポテトフライ',
          dishIngredient: 'プレーン・ガーリック・アンチョビバター'
        },
        {
          dishName: 'オリーブマリネ'
        },
        {
          dishName: '鴨のスモーク'
        },
        {
          dishName: 'イタリアンサラミ'
        },
        {
          dishName: 'モルタデッラハム'
        },
        {
          dishName: 'ミックスナッツ'
        },
        {
          dishName: '小海老のアヒージョ'
        },
        {
          dishName: 'タコのセビーチェ'
        },
        {
          dishName: 'ムール貝とあさりの白ワイン蒸し'
        },
        {
          dishName: 'トリッパのトマト煮込み'
        },
        {
          dishName: '肉前菜の盛り合わせ'
        },
        {
          dishName: '3種チーズの盛り合わせ'
        },
        {
          dishName: 'バケット'
        },
        {
          dishName: 'ガーリックトースト'
        },
      ]
    },
    {
      id: 5,
      menuTitle: "INSALATA",
      image: 'insalada-menu',
      dish: [
        {
          dishName: 'トマトと水牛モッツァレラのカプレーゼ'
        },
        {
          dishName: '自家製ベーコンとパルミジャーノのシーザーサラダ'
        },
        {
          dishName: 'アグルメサラダ ～彩り野菜と柑橘のグリーンサラダ～'
        },
      ]
    },

    {
      id: 6,
      menuTitle: "DOLCE",
      image: 'dolce-menu',
      dish: [
        {
          dishName: 'マスカルポーネをたっぷり使った自家製ティラミス'
        },
        {
          dishName: 'しっとり焼き上げた濃厚なガトーショコラ'
        },
        {
          dishName: 'さっぱりとした味わいのレモンケーキ'
        },

        {
          dishName: 'バニラアイス'
        },
      ]
    },
  ];

  const bgImage = getImage(bgImageData);


  const [menu, setMenu] = useState<any>(dataMenu.filter(menu => menu.id === 1));
  return (
    <Layout>


        <PageHeaderComponent title={`Menu`}/>


        <div className={style.bgImage}>
          <GatsbyImage
            className="bg-img-menu"
            image={bgImage!}
            alt='bg'
          />
        </div>
      <div className={style.container}>

        <div className="section-wrapper">

          <SectionHeaderComponent title={`REGULAR MENU`}/>
        </div>
        <p className={style.paragraph}>
          ランチやディナーにおススメのメイン料理や、シェアに最適なサイドメニュー、
          <br/>
          食後のデザートなど幅広くご用意しております。
          <br/>
          AGURMEでしか食べられない、こだわりのメニューをお楽しみください。
          <br/>
          ※予告なく販売を終了とする場合がございます。
        </p>


        <div className={style.menuCategory}>
          Category
        </div>

        <MenuNavigationComponent
          className={style.menuNav}
          onNavigate={e => setMenu(dataMenu.filter(menu => menu.id === e))}
        />


        {menu.map(menu => (
          <MenuComponent key={menu.id} menuTitle={menu.menuTitle} dish={menu.dish} menuImage={menu.image}/>
        ))}
      </div>
    </Layout>
  )
};
export const query = graphql`
    query {
        bgImageData: file(relativePath: {eq: "bg-images/all-menu.jpeg"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: {quality: 80}
                    transformOptions: {cropFocus: NORTHWEST, fit: COVER}
                    blurredOptions: {toFormat: PNG, width: 10}
                    height: 400
                )
            }
        }}
`

export default Index
