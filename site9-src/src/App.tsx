import { useState, type ReactNode } from 'react'

const NAV_ITEMS = [
  { label: '依頼できること', href: '#services' },
  { label: '講演テーマ', href: '#themes' },
  { label: '小野歩について', href: '#profile' },
  { label: '事業内容', href: '#business' },
  { label: '実績', href: '#record' },
  { label: '著書', href: '#books' },
  { label: 'よくある質問', href: '#faq' },
  { label: 'ご依頼・ご相談', href: 'https://tecworks.co.jp/contact.html' },
]

const SERVICES = [
  {
    title: '講演・研修・セミナー登壇',
    items: ['新人エンジニア研修／内定者向け', '採用イベント・学生向けキャリア講演', 'カンファレンス基調講演・パネル登壇'],
  },
  {
    title: '協業・アライアンス',
    items: ['イベント共催・スポンサード', '共同企画・コンテンツ制作', 'IT人材の採用・育成での連携'],
  },
  {
    title: '取材・対談・出演',
    items: ['ITキャリア／人材トレンドの解説', '経営者・著者としての対談', '記事・動画・ポッドキャスト出演'],
  },
  {
    title: '執筆・監修',
    items: ['連載・寄稿記事の執筆', '教材・研修コンテンツの監修', '書籍の企画・共著'],
  },
  {
    title: '組織・採用のご相談',
    items: ['エンジニア採用・定着の課題整理', '育成カリキュラムの設計相談', '技術組織づくりのアドバイザリー'],
  },
  {
    title: 'キャリア支援・独立支援',
    items: ['ITエンジニアのキャリア相談', '独立・起業を目指す方の支援', '社員向けキャリア研修'],
  },
]

const THEMES = [
  {
    no: '01',
    title: 'AI時代に、ITエンジニアはどう働くか',
    target: '現役エンジニア／技術組織',
    duration: '45〜90分（質疑込み）',
    format: '対面／オンライン',
  },
  {
    no: '02',
    title: 'ITエンジニア1年目の教科書',
    target: '新人・内定者／育成担当',
    duration: '60〜120分（ワーク可）',
    format: '対面／オンライン',
  },
  {
    no: '03',
    title: "IT業界の『仕事の地図』を描く",
    target: '学生／未経験者／転職検討層',
    duration: '45〜90分',
    format: '対面／オンライン',
  },
  {
    no: '04',
    title: '数多くの業種／相談から見えた、キャリアの分かれ道',
    target: 'エンジニア全般／人事',
    duration: '45〜90分',
    format: '対面／オンライン',
  },
  {
    no: '05',
    title: 'コミュニティの作り方',
    target: 'コミュニティ運営／広報・採用',
    duration: '45〜60分',
    format: '対面／オンライン',
  },
  {
    no: '06',
    title: '会社員から独立へ ― 多角経営に至るまで',
    target: '独立検討層／新規事業担当',
    duration: '45〜90分',
    format: '対面／オンライン',
  },
]

const BOOKS = [
  {
    title: 'ITエンジニア働き方超大全',
    publisher: '日経BP',
    year: '2024年4月',
    rank: { num: '11', unit: '部門', sub: 'Amazonランキング 1位' },
    subtitle: '就職・転職からフリーランス、起業まで',
    results: [
      'ビジネス書総合ランキング7位',
      '「ITエンジニア本大賞2025 ビジネス書部門」にノミネートされ、ベスト10選出',
    ],
    img: 'images/book-hatarakikata.webp',
  },
  {
    title: 'ITエンジニア1年目の教科書',
    publisher: '講談社',
    year: '2026年1月',
    rank: { num: '4', unit: '部門', sub: 'Amazonベストセラー 1位' },
    subtitle: '現場の心得47箇条',
    results: [
      '代官山蔦屋書店で出版記念トークイベント開催（2026年3月）',
    ],
    img: 'images/book-1nenme.webp',
  },
  {
    title: 'IT仕事図鑑',
    publisher: 'インプレス',
    year: '2026年4月',
    rank: { num: '6', unit: '部門', sub: 'Amazonランキング 1位' },
    subtitle: 'はたらく現場と人がイラストでぜんぶわかる！',
    results: [
      '1位の部門：情報・コンピュータ産業／高校情報処理教科書 など',
      '丸善丸の内本店：ノンフィクション4位、ブックファースト新宿店：PCランキング5位',
    ],
    img: 'images/book-shigoto-zukan.webp',
  },
]

const BUSINESS = [
  {
    title: 'システム開発事業',
    desc: 'Webシステム・業務システムの受託開発、Webサイト制作、ITコンサルティングを手がけています。生成AIをはじめとする最新技術を取り入れ、少数精鋭のチームで要件整理から設計・開発・運用まで一貫して支援します。',
  },
  {
    title: 'スクール運営事業',
    desc: '未経験からITエンジニアへのキャリアチェンジを支援するスクール「tecUp」を運営。eラーニングと現役フリーランスメンターの指導で、技術力とあわせて現場で求められるヒューマンスキル、キャリアの描き方まで伴走します。',
  },
  {
    title: 'プラットフォーム事業',
    desc: 'IT勉強会・交流会コミュニティ「tecHub」を秋葉原で主宰。毎月のオフラインイベントとDiscordを軸に、会社員・フリーランス・企業が人脈づくりや案件相談、新規事業の創出につなげられる場を提供しています。',
  },
  {
    title: 'イベント企画・運営事業',
    desc: '独立後、最初に創業した事業です。セミナー・カンファレンス・交流会の企画運営から集客・営業支援まで一貫して対応。主催・共催イベントの参加者は延べ3,500人を超え、企業との共催やスポンサードも承っています。',
  },
  {
    title: '出版事業',
    desc: '『ITエンジニア働き方超大全』『ITエンジニア1年目の教科書』『IT仕事図鑑』の3冊を刊行。現場で得た知見を書籍として届けるほか、書籍の企画・執筆、教材やコンテンツの監修にも取り組んでいます。',
  },
  {
    title: '講師事業',
    desc: '企業の新人・内定者研修、採用イベントや学生向けのキャリア講演、カンファレンスやウェビナーへの登壇など、講師・スピーカーとして活動しています。テーマは貴社の課題に合わせてアレンジ可能です。',
  },
  {
    title: '小売事業',
    desc: '漢方・薬膳のセレクトショップと整体院を運営。「体の内側と外側から整える」をテーマに、美と健康をサポートする店舗づくりを行っています。出店を目指す方のプロデュースにも対応しています。',
  },
  {
    title: '創業支援・独立支援事業',
    desc: '会社員から独立し3社を創業した経験をもとに、独立・起業を目指す方を支援します。フリーランス転向や事業立ち上げの相談、営業基盤づくり、MENTAでの1対1相談まで、それぞれの段階に合わせて伴走します。',
  },
]

const RECORDS = [
  { tag: 'YouTube', title: '伸びる1年目は何が違う？ 現場で差がつくスキルと学習習慣（TECH PLAY Channel）' },
  { tag: 'YouTube', title: 'ITエンジニアのキャリアビジョン ― 市場価値を高める考え方（SCSK GROUP）' },
  { tag: 'NewsPicks', title: '高年収？働き方自由？「エンジニア就活」の裏側（ハバヒロ就活カレッジ）' },
  { tag: 'GLOBIS', title: 'ダイバーシティニュース テクノロジー 出演（グロービス学び放題）' },
  { tag: 'Event', title: '『ITエンジニア1年目の教科書』出版記念トークイベント（代官山 蔦屋書店）' },
  { tag: 'Interview', title: 'AI時代のITキャリア形成について（インプレスグループ）' },
  { tag: 'Event', title: 'tecHub（IT交流会）を秋葉原で開催' },
]

const FAQS = [
  {
    q: '謝礼・費用はどのくらいですか？',
    a: '内容・時間・形式・ご予算に合わせて個別にご相談します。教育機関や非営利イベントについても柔軟に対応しておりますので、まずはお気軽にご連絡ください。',
  },
  {
    q: 'オンライン登壇は可能ですか？',
    a: 'オンライン・ハイブリッド形式に対応しています。地方での対面開催も、日程が合えばお伺いします。',
  },
  {
    q: 'どのくらい前に依頼すればよいですか？',
    a: '1〜2か月前にご相談いただけると調整しやすいです。お急ぎの場合もご相談ください。',
  },
  {
    q: 'テーマを自社向けにアレンジできますか？',
    a: '事前ヒアリングのうえ構成し直すことができます。既存テーマの組み合わせや、完全オーダーメイドにも対応します。',
  },
  {
    q: 'まず一度会って話すことはできますか？',
    a: "もちろんです。オンライン相談のほか、毎月開催しているIT勉強会・交流会『tecHub』にお越しいただければその場でお話しできます。",
  },
]

function SectionTitle({ en, children, dark = false, className = '' }: { en: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={className}>
      <h2
        className={`text-[26px] md:text-[30px] font-light leading-[1.4] ${dark ? 'text-white' : 'text-[#1c1c1c]'}`}
        style={{ fontFamily: "'Noto Serif JP', serif" }}
      >
        {children}
      </h2>
      <div className="flex items-center gap-3 mt-3">
        <span className="block w-10 h-[2px] bg-[#b8a07a]" />
        <span
          aria-hidden="true"
          className={`font-script italic font-medium text-[22px] md:text-[24px] leading-none select-none ${dark ? 'text-[#b8a07a]' : 'text-[#a58a5a]'}`}
        >
          {en}
        </span>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-[#1c1c1c]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center justify-between h-[60px]">
            <a href="#" className="text-[15px] font-semibold tracking-[0.15em] text-[#1a2d4f]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              小野 歩　<span className="font-light tracking-[0.1em]">Ayumu Ono</span>
            </a>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14.5px] text-[#1c1c1c] hover:text-[#1a2d4f] transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              <span className={`block w-5 h-[1.5px] bg-[#1c1c1c] transition-transform origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#1c1c1c] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#1c1c1c] transition-transform origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e0e0e0]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-[15px] border-b border-[#f0f0f0] hover:bg-[#f7f7f5] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-[60px]">
        {/* Main hero: text left, photo right */}
        <div className="bg-[#0f1c32]">
          <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left: text */}
            <div className="py-10 md:py-16 pr-0 md:pr-12 flex flex-col justify-center">
              <div className="inline-block mb-5 md:mb-6 px-3 py-1.5 border border-[rgba(184,160,122,0.5)] text-[#b8a07a] text-[12.5px] tracking-[0.12em] self-start">
                ITエンジニア本大賞2025 ビジネス書部門 ベスト10 選出
              </div>
              <h1
                className="text-[26px] md:text-[42px] font-normal leading-[1.6] md:leading-[1.5] tracking-[0.08em] text-white mb-5 md:mb-8"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                キャリアの可能性を、<br />一緒に広げませんか。
              </h1>
              <div className="hidden md:block w-12 h-px bg-[#b8a07a] mb-8" />
              <p className="text-[15px] md:text-[15.5px] text-[rgba(255,255,255,0.75)] md:text-[rgba(255,255,255,0.65)] leading-[1.85] md:leading-[1.9] mb-0 md:mb-8">
                イベント・セミナーの企画運営、店舗運営、IT関連事業（システム開発・プログラミングスクール運営）、キャリア支援事業、出版まで、3社で多角経営を実践。転職・フリーランス相談などの幅広いキャリア相談、延べ数千人が参加した勉強会「tecHub」ほか主催・共催イベント、3冊の著書で得た現場のリアルを、貴社のイベント・事業・組織づくりにお役立てします。
              </p>
              <div className="hidden md:flex flex-wrap gap-3">
                <a
                  href="https://tecworks.co.jp/contact.html"
                  className="inline-block text-center px-6 py-3 bg-[#b8a07a] text-white text-[15px] tracking-wide hover:bg-[#a08e6a] transition-colors"
                >
                  講演・研修を依頼する →
                </a>
              </div>
            </div>
            {/* Right: photo */}
            <div className="-mx-6 md:mx-0 relative overflow-hidden h-[480px] md:h-auto">
              <img
                src="images/ono-hero.jpg"
                alt="小野歩"
                className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <SectionTitle en="Services" className="mb-4">小野歩に依頼できること</SectionTitle>
          <p className="text-[17px] text-[#6b6b6b] leading-relaxed">
            「IT人材」と「キャリア」をテーマに、話す・書く・組む。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e0e0] border border-[#e0e0e0]">
          {SERVICES.map((sv) => (
            <div key={sv.title} className="bg-white p-6 md:p-8">
              <h3 className="text-[20px] md:text-[21px] font-semibold mb-5 leading-[1.45] text-[#1c1c1c]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                {sv.title}
              </h3>
              <ul className="space-y-2">
                {sv.items.map((item) => (
                  <li key={item} className="text-[15px] md:text-[16px] text-[#3a3a3a] leading-[1.7] flex items-start gap-2">
                    <span className="mt-[11px] w-1 h-1 rounded-full bg-[#b8a07a] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking Themes */}
      <section id="themes" className="py-20 md:py-24 bg-[#0f1c32] md:bg-[#1a2d4f]">
        <div className="max-w-[1100px] mx-auto px-6 md:grid md:grid-cols-[300px_1fr] md:grid-rows-[auto_auto_auto_1fr] md:gap-x-14">
          <div className="mb-10 md:mb-8 md:col-start-1 md:row-start-1">
            <SectionTitle en="Speaking Themes" dark>講演テーマ例</SectionTitle>
          </div>
          <div className="md:hidden border-t border-[rgba(255,255,255,0.15)]">
            {THEMES.map((theme) => {
              return (
                <div key={theme.no} className="border-b border-[rgba(255,255,255,0.15)] py-8">
                  <div className="text-[12.5px] text-[#b8a07a] font-light tracking-[0.2em] mb-3">
                    THEME {theme.no}
                  </div>
                  <h3 className="text-[22px] font-medium leading-[1.55] text-white text-balance mb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    {theme.title.split(/(?<=、)|(?<=―)\s+/).map((part) => (
                      <span key={part} className="inline-block">{part}</span>
                    ))}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {theme.target.split('／').map((t) => (
                      <span key={t} className="px-2.5 py-0.5 border border-[rgba(255,255,255,0.3)] text-[13px] text-[rgba(255,255,255,0.85)]">{t}</span>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1 text-[14px] text-[rgba(255,255,255,0.7)]">
                    <p>時間：{theme.duration}</p>
                    <p>形式：{theme.format}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="hidden md:block md:col-start-2 md:row-start-1 md:row-span-4 border-t border-[rgba(255,255,255,0.15)]">
            {THEMES.map((theme) => (
              <div key={theme.no} className="border-b border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)] transition-colors group">
                <div className="flex items-center px-3 py-6">
                  <div className="text-[12.5px] text-[#b8a07a] font-light tracking-[0.2em] w-[84px] shrink-0">
                    THEME {theme.no}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-medium text-white mb-2" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      {theme.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[rgba(255,255,255,0.7)]">
                      <span>対象：{theme.target}</span>
                      <span>時間：{theme.duration}</span>
                      <span>形式：{theme.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <figure className="mt-12 md:mt-0 md:col-start-1 md:row-start-2">
            <img
              src="images/speaking-hotel.jpg"
              alt="トークイベントで登壇する小野歩"
              className="w-full aspect-[16/9] md:aspect-[4/3] object-cover object-[45%_65%]"
            />
          </figure>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <SectionTitle en="Profile" className="mb-6">小野歩について</SectionTitle>
            <div className="mb-6">
              <img
                src="images/profile.jpg"
                alt="小野歩"
                className="w-full h-[380px] object-cover object-[75%_28%]"
              />
            </div>
            <div className="bg-[#f7f7f5] border border-[#e0e0e0] p-6 space-y-3 text-[15px] text-[#6b6b6b] leading-[1.8]">
              <div className="flex gap-3">
                <span className="text-[#8a6f45] shrink-0">氏名</span>
                <span>小野 歩（おの あゆむ）</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#8a6f45] shrink-0">現職</span>
                <span>株式会社テックワークス 代表取締役（ほか2社を経営）</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#8a6f45] shrink-0">出身</span>
                <span>大分県大分市／九州大学大学院 卒業</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#8a6f45] shrink-0">座右の銘</span>
                <span>不断挑戦</span>
              </div>
            </div>
          </div>
          <div className="md:pt-[69px]">
            <h3 className="text-[22px] md:text-[24px] font-light mb-8 leading-[1.6]" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              「不断挑戦」で、ここまで来ました。
            </h3>
            {/* Bio paragraphs */}
            <div className="space-y-5 text-[15.5px] leading-[1.9] text-[#1c1c1c]">
              <p>大分県大分市に生まれ、九州大学大学院を卒業後、NECに入社。ITエンジニアとしての基礎を培いながら、並行して独立の準備を進めていました。</p>
              <p>独立後は、チーム作りと事業作りを追求。1社目としてイベント・セミナーの企画運営会社を創業し、営業支援とあわせて経営基盤をつくりました。</p>
              <p>2社目として店舗運営会社を立ち上げ、漢方・薬膳のセレクトショップと整体院を運営。その後、3社目の株式会社テックワークスを創業しました。</p>
              <p>現在はイベント事業、店舗運営事業、IT関連事業（システム開発・プログラミングスクール運営）、キャリア支援事業、出版と多角的に事業を展開しています。その経験を活かし、キャリア支援と独立支援にも取り組んでいます。</p>
              <p>これまでにIT分野では1,000人を超えるエンジニアのキャリア相談に応じ、IT勉強会・交流会「tecHub」を秋葉原で主宰。主催・共催イベントの参加者は延べ3,500人を超えます。</p>
              <p>その現場で得た知見を、3冊の著書としてまとめてきました。近年は企業での講演やウェビナー出演、メディア出演を通じて活躍の場を広げています。</p>
              <p>「何のために仕事をしているのか？」という問いが今のキャリアを築いた原点です。そのため講演や書籍でも働く目的（キャリアビジョン）の大切さをお話しています。ただし、そういった願望は知識から生まれます。選択肢を知らなければ、描くことすらできないのです。だからこそ、書籍・イベント・講演という形で「知るきっかけ」を届け続けています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionTitle en="Business" className="mb-14">事業内容</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e0e0e0]">
            {BUSINESS.map((b, i) => (
              <div key={b.title} className="group bg-[#f7f7f5] hover:bg-white transition-colors p-5 md:p-7 flex flex-col border-r border-b border-[#e0e0e0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[76px] h-[76px] shrink-0 overflow-hidden bg-[#eceae4]">
                    <img src={`images/biz/biz-0${i + 1}.svg`} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-[19px] md:text-[20px] font-semibold leading-[1.5] text-[#1c1c1c]" style={{ fontFamily: "'Noto Serif JP', serif" }}>{b.title}</h3>
                </div>
                <p className="text-[15px] text-[#4a4a4a] leading-[1.9]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section id="record" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-14">
            <SectionTitle en="Track Record" className="mb-4">登壇・掲載の実績</SectionTitle>
            <p className="text-[17px] text-[#6b6b6b] leading-relaxed">
              企業研修、カンファレンス、動画番組への出演、出版記念イベントの登壇など。
            </p>
          </div>
          <ul className="border-t border-[#e0e0e0]">
            {RECORDS.map((r) => (
              <li key={r.title} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-5 py-5 px-1 md:px-2 border-b border-[#e0e0e0]">
                <span className="self-start shrink-0 sm:min-w-[96px] text-center px-3 py-1 text-[12.5px] tracking-[0.1em] leading-[1.4] text-[#8a6f45] border border-[rgba(184,160,122,0.6)] rounded-full">{r.tag}</span>
                <span className="text-[15.5px] leading-[1.8] text-[#1c1c1c] sm:pt-0.5">{r.title}</span>
              </li>
            ))}
          </ul>
          <figure className="mt-12">
            <img
              src="images/speaking-seminar.jpg"
              alt="セミナーで登壇する小野歩"
              className="w-full aspect-[16/9] md:aspect-[21/9] object-cover object-[50%_35%]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Books */}
      <section id="books" className="py-24 md:py-28 bg-[#0f1c32]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="font-script italic font-medium text-[36px] md:text-[44px] leading-[1] tracking-[0.02em] text-[#b8a07a] mb-2 select-none">Books</p>
            <h2 className="text-[30px] md:text-[36px] font-normal tracking-[0.15em] text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>著書</h2>
            <div className="w-12 h-px bg-[#b8a07a] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOOKS.map((book) => (
              <div key={book.title} className="group flex flex-col items-center text-center border border-[rgba(184,160,122,0.5)] bg-[rgba(255,255,255,0.03)] px-6 pt-10 pb-8">
                <div className="w-[70%] md:w-[80%] max-w-[260px] aspect-[7/10] mb-8 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[19px] font-medium mb-2 leading-[1.6] tracking-[0.05em] text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>{book.title}</h3>
                <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-2 leading-[1.6] md:min-h-[3.2em]">{book.subtitle}</p>
                <p className="text-[14px] text-[#b8a07a] mb-6 tracking-[0.08em]">{book.publisher}／{book.year}</p>
                <div className="w-full border-y border-[rgba(184,160,122,0.4)] text-white py-4 mb-6">
                  <div className="text-[13px] text-[rgba(255,255,255,0.65)] tracking-[0.1em]">{book.rank.sub}</div>
                  <div className="leading-none mt-1" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                    <span className="text-[40px] font-normal text-[#b8a07a]">{book.rank.num}</span>
                    <span className="text-[17px] ml-1">{book.rank.unit}で獲得</span>
                  </div>
                </div>
                <ul className="text-left text-[15px] text-white leading-[1.75] space-y-3 w-full">
                  {book.results.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-[#b8a07a] mt-[2px]">●</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#1a2d4f]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="font-script italic font-medium text-[36px] md:text-[44px] leading-[1] tracking-[0.02em] text-[#b8a07a] mb-2 select-none">Process</p>
            <h2 className="text-[28px] font-light text-white" style={{ fontFamily: "'Noto Serif JP', serif" }}>ご依頼の流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.12)]">
            {[
              { step: '01', title: 'お問い合わせ', desc: 'フォームまたはメールにてご連絡ください。内容が固まっていない段階でも歓迎です。' },
              { step: '02', title: 'オンラインで30分', desc: 'まずは30分のオンライン相談を実施。ご要望・ご予算・スケジュールを伺います。' },
              { step: '03', title: '実施・その後', desc: '詳細を詰め、実施に向けて準備を進めます。終了後もご相談いただけます。' },
            ].map((item) => (
              <div key={item.step} className="bg-[rgba(255,255,255,0.04)] px-8 py-8 text-center">
                <div className="text-[12.5px] text-[#b8a07a] tracking-[0.2em] mb-4">STEP {item.step}</div>
                <h3 className="text-[17px] font-light text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>{item.title}</h3>
                <p className="text-[14.5px] text-[rgba(255,255,255,0.6)] leading-[1.8]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-[rgba(255,255,255,0.45)] mt-6">
            お問い合わせから実施まで、通常2〜3週間程度です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <SectionTitle en="FAQ">よくある質問</SectionTitle>
        </div>
        <div className="space-y-px bg-[#e0e0e0] border border-[#e0e0e0]">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-[#f7f7f5] transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-[16px] font-medium pr-8" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  Q. {faq.q}
                </span>
                <span className="text-[#8a6f45] text-[20px] font-light leading-none shrink-0">
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-8 pb-6 border-t border-[#f0f0f0]">
                  <p className="text-[15.5px] text-[#6b6b6b] leading-[1.9] pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionTitle en="Contact" className="mb-4">ご依頼・ご相談</SectionTitle>
          <p className="text-[15.5px] text-[#6b6b6b] leading-[1.9] mb-8">
            講演・研修、協業、取材、執筆、組織のご相談まで。内容が固まっていない段階のお問い合わせも歓迎です。
          </p>
          <div className="space-y-3 text-[14.5px] text-[#6b6b6b]">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#b8a07a]" />
              原則2営業日以内にご返信します
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#b8a07a]" />
              まずは30分のオンライン相談から
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#b8a07a]" />
              ご予算・スケジュールの制約もご相談ください
            </div>
          </div>
          <a
            href="https://tecworks.co.jp/contact.html"
            className="mt-10 block md:inline-block text-center px-10 py-3.5 bg-[#1a2d4f] text-white text-[15px] tracking-wide hover:bg-[#0f1c32] transition-colors"
          >
            お問い合わせフォームへ →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1c] text-white pt-16 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
            <div>
              <p className="text-[15px] tracking-[0.2em] font-semibold mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                AYUMU ONO — OFFICIAL SITE
              </p>
              <p className="text-[14.5px] text-[rgba(255,255,255,0.5)] leading-[1.9] max-w-[320px]">
                株式会社テックワークス代表取締役。IT関連事業・キャリア支援事業・店舗運営事業・出版など幅広く事業を展開。
              </p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.2em] text-[#b8a07a] mb-4 uppercase">Menu</p>
              <ul className="space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[14px] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.2em] text-[#b8a07a] mb-4 uppercase">Link</p>
              <ul className="space-y-2.5">
                {[
                  { label: '株式会社テックワークス', href: 'https://tecworks.co.jp/' },
                  { label: 'note', href: 'https://note.com/mu0401' },
                  { label: 'MENTA（キャリア相談）', href: 'https://menta.work/plan/19067' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[rgba(255,255,255,0.55)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 text-[12.5px] text-[rgba(255,255,255,0.3)]">
            © 2026 Ayumu Ono. All rights reserved. 株式会社テックワークス 代表取締役
          </div>
        </div>
      </footer>
    </div>
  )
}
