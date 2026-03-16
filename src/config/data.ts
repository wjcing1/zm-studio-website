import type { Project } from "@/types";
import type { LocalizedText } from "@/lib/i18n";

const loc = (en: string, zh: string, it: string) => ({ en, zh, it });
const list = (en: string[], zh: string[], it: string[]) => ({ en, zh, it });

export const EXHIBITION_PROJECTS: Project[] = [
  {
    id: "p1",
    title: loc("Highfield Boat Show", "Highfield 游艇展", "Salone nautico Highfield"),
    year: 2025,
    location: loc("Dusseldorf, Germany", "德国 杜塞尔多夫", "Dusseldorf, Germania"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["Boat Show", "Trade Fair", "Brand Experience"],
      ["游艇展", "贸易展", "品牌体验"],
      ["Salone nautico", "Fiera", "Esperienza di brand"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p1-cover.jpg",
    summary: loc(
      "A premium exhibition booth for Highfield at Boot Dusseldorf 2025.",
      "为 Highfield 于 2025 杜塞尔多夫游艇展打造的高端展台。",
      "Uno stand premium progettato per Highfield a Boot Dusseldorf 2025."
    ),
    body: loc(
      "This project was designed for Highfield at Boot Dusseldorf 2025, the world's largest indoor boat show. The booth presents multiple yacht models within an open and highly recognizable brand environment.\n\nA bold turquoise floor establishes an immediate connection to the sea, while suspended brand signage and focused lighting attract attention from long distances. The circulation allows visitors to move around each vessel freely and understand the product range step by step.\n\nThe overall composition balances spectacle and clarity. Product positioning, sightlines, and visitor movement were carefully coordinated so every boat could be experienced at its strongest angle.",
      "该项目为 Highfield 参加 2025 年杜塞尔多夫国际游艇展而设计。开放而清晰的展陈布局容纳多艘游艇，让品牌识别与产品体量同时成立。\n\n高识别度的蓝绿色地面建立起与海洋的直接联想，悬挂式标识与聚焦照明强化了展馆中的远距离辨识度。观众可以自由环绕各艘船体，在连续动线中逐步理解产品序列。\n\n整个空间在视觉张力与信息清晰之间保持平衡。产品摆位、视线组织与参观路径经过精确统筹，让每艘船都能以最充分的姿态被观看。",
      "Il progetto e stato sviluppato per Highfield in occasione di Boot Dusseldorf 2025. Lo stand accoglie piu modelli di yacht in un impianto aperto e leggibile, dove identita di brand e presenza del prodotto si rafforzano a vicenda.\n\nIl pavimento turchese costruisce un richiamo immediato al mare, mentre l'insegna sospesa e l'illuminazione mirata aumentano la riconoscibilita a distanza. Il percorso permette di girare attorno a ogni imbarcazione e di leggere la gamma in modo progressivo.\n\nL'insieme bilancia impatto scenico e chiarezza. Posizionamento dei prodotti, visuali e flussi sono coordinati con precisione, cosi che ogni barca possa essere percepita dal punto di vista piu efficace."
    ),
    gallery: ["/images/exhibition/p1-1.jpg", "/images/exhibition/p1-2.jpg", "/images/exhibition/p1-3.jpg"]
  },
  {
    id: "p2",
    title: loc("Mode Safety Exhibition", "Mode 安全设备展位", "Stand Mode Safety"),
    year: 2025,
    location: loc("Dusseldorf, Germany", "德国 杜塞尔多夫", "Dusseldorf, Germania"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["A+A", "Safety Equipment", "Industrial"],
      ["A+A", "安全设备", "工业"],
      ["A+A", "Sicurezza", "Industriale"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p2-cover.jpg",
    summary: loc(
      "A modern booth for Mode at the A+A international safety trade fair.",
      "为 Mode 于 A+A 国际安全展打造的当代展台。",
      "Uno stand contemporaneo per Mode alla fiera internazionale A+A."
    ),
    body: loc(
      "This booth was designed for Mode at A+A 2025, the leading fair for safety, security, and occupational health. The design combines professional presentation with an approachable brand story.\n\nA black-and-white palette with metallic highlights creates a premium industrial identity. Display cases, wall graphics, and focused product zones communicate technical content without making the space feel cold.\n\nThe booth works as both a product platform and a meeting environment. It supports demonstrations, client conversations, and brand immersion within one unified spatial language.",
      "该展台为 Mode 参加 2025 年 A+A 展会而设计，在专业可靠的行业形象与更具亲和力的品牌表达之间取得平衡。\n\n黑白主色与金属细节构成克制而明确的工业气质。展示柜、墙面图文与清晰分区让技术信息被准确传达，同时避免空间显得生硬。\n\n空间既承担产品展示，也支持商务洽谈。在统一的语言下，它同时容纳演示、交流与品牌体验。",
      "Lo stand e stato progettato per Mode in occasione di A+A 2025, la principale fiera dedicata a sicurezza, protezione e salute sul lavoro. Il progetto trova un equilibrio tra affidabilita professionale e un'espressione di brand piu accessibile.\n\nLa palette in bianco e nero, insieme ai dettagli metallici, definisce un'identita industriale chiara e controllata. Vetrine, grafiche a parete e zone prodotto ben leggibili permettono di trasmettere i contenuti tecnici senza irrigidire lo spazio.\n\nLo stand funziona sia come piattaforma espositiva sia come ambiente di incontro. All'interno di un unico linguaggio spaziale accoglie demo, conversazioni commerciali ed esperienza di brand."
    ),
    gallery: ["/images/exhibition/p2-1.jpg", "/images/exhibition/p2-2.png", "/images/exhibition/p2-3.png"]
  },
  {
    id: "p3",
    title: loc("Topband Solar Exhibition", "拓邦光伏展位", "Stand Topband Solar"),
    year: 2025,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Solar", "Energy", "Technology"],
      ["光伏", "能源", "科技"],
      ["Solare", "Energia", "Tecnologia"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p3-cover.png",
    summary: loc(
      "An exhibition concept for Topband focused on solar energy and smart technology.",
      "为拓邦打造的展览概念，聚焦光伏能源与智能技术解决方案。",
      "Un concept espositivo per Topband dedicato a soluzioni fotovoltaiche e tecnologie intelligenti."
    ),
    body: loc(
      "This concept for Topband presents solar energy solutions through a bright and open spatial language. The booth is organized around clarity, technological optimism, and environmental responsibility.\n\nDifferent product categories are arranged in distinct yet connected zones, allowing visitors to understand the system as a whole. Green lighting accents and interactive displays reinforce the clean-energy message.\n\nSustainability informed the design from the beginning. Material choices, visual identity, and visitor flow all support a narrative of efficiency, intelligence, and future-oriented infrastructure.",
      "该概念以明亮、开放的空间语言呈现拓邦的光伏解决方案。整体氛围围绕清晰表达、技术信心与环境责任展开。\n\n不同产品类别被组织为彼此独立又连续关联的区域，使观众能够沿着清晰路径理解完整系统。绿色灯光节点与互动展示进一步强化了清洁能源主题。\n\n可持续性从方案初期便被纳入设计判断。材料选择、视觉语言与参观动线共同服务于高效、智能且面向未来的基础设施叙事。",
      "Il concept per Topband presenta le soluzioni fotovoltaiche del brand attraverso un linguaggio spaziale luminoso e aperto. L'atmosfera complessiva si costruisce attorno a chiarezza, fiducia tecnologica e responsabilita ambientale.\n\nLe diverse categorie di prodotto sono organizzate in aree distinte ma connesse, cosi che il visitatore possa comprendere il sistema nel suo insieme lungo un percorso continuo. Accenti luminosi verdi e contenuti interattivi rafforzano il racconto dell'energia pulita.\n\nLa sostenibilita orienta il progetto fin dalle prime scelte. Materiali, identita visiva e flussi di visita sostengono una narrazione fatta di efficienza, intelligenza e infrastrutture rivolte al futuro."
    ),
    gallery: ["/images/exhibition/p3-1.png", "/images/exhibition/p3-2.png", "/images/exhibition/p3-3.png"]
  },
  {
    id: "p4",
    title: loc("Safety Workwear Booth", "安全工装展位", "Stand Safety Workwear"),
    year: 2025,
    location: loc("Dusseldorf, Germany", "德国 杜塞尔多夫", "Dusseldorf, Germania"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["A+A", "Workwear", "Fashion"],
      ["A+A", "工装", "时尚"],
      ["A+A", "Abbigliamento da lavoro", "Moda"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p4-cover.png",
    summary: loc(
      "A contemporary concept for safety workwear and protective equipment.",
      "面向安全工装与防护装备的当代展台概念。",
      "Un concept contemporaneo per workwear tecnico e dispositivi di protezione."
    ),
    body: loc(
      "This concept blends the atmosphere of premium retail with the display logic of industrial safety products. The goal is to elevate workwear into a more aspirational and experience-driven environment.\n\nWarm wood tones, clean white surfaces, and mannequin compositions create an approachable mood that differs from typical industrial exhibitions. Products are shown as complete use scenarios rather than isolated items.\n\nThe structure combines openness and intimacy. It offers strong aisle visibility while still providing sheltered zones for meetings and detailed product conversations.",
      "该概念把精品零售的空间氛围与工业安全产品的展示逻辑结合在一起，让工装从单纯功能陈列转向更具体验感的品牌呈现。\n\n温暖木色、纯净白色界面与模特陈列构成更具亲和力的空间气氛，与传统工业展会拉开距离。产品不再以孤立单品出现，而是通过完整穿着场景被理解。\n\n结构在开放与围合之间取得平衡。它既保持通道侧的高可见性，也为会谈和细节沟通提供相对安静的区域。",
      "Il concept unisce l'atmosfera del retail premium con la logica espositiva dei prodotti per la sicurezza industriale, trasformando il workwear da semplice esposizione funzionale a racconto di brand piu esperienziale.\n\nLegni caldi, superfici bianche pulite e composizioni con manichini costruiscono un ambiente piu accogliente, in netto contrasto con l'immaginario della fiera industriale tradizionale. I prodotti non sono mostrati come pezzi isolati, ma come scenari d'uso completi.\n\nLa struttura bilancia apertura e raccoglimento. Mantiene un'elevata visibilita dal corridoio e allo stesso tempo offre aree piu quiete per incontri e conversazioni di dettaglio."
    ),
    gallery: ["/images/exhibition/p4-1.png", "/images/exhibition/p4-2.png", "/images/exhibition/p4-3.png"]
  },
  {
    id: "p5",
    title: loc("BKT Tires Exhibition", "BKT 轮胎展位", "Stand BKT Tires"),
    year: 2025,
    location: loc("Hanover, Germany", "德国 汉诺威", "Hannover, Germania"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Agricultural", "Tires", "Industrial"],
      ["农业", "轮胎", "工业"],
      ["Agricoltura", "Pneumatici", "Industriale"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p5-cover.png",
    summary: loc(
      "A bold concept for BKT showcasing agricultural and industrial tire solutions.",
      "为 BKT 打造的高辨识度展览概念，聚焦农业与工业轮胎解决方案。",
      "Un concept espositivo ad alta riconoscibilita per BKT, dedicato ai pneumatici agricoli e industriali."
    ),
    body: loc(
      "This exhibition concept gives BKT a strong and memorable presence through oversized product gestures and the brand's signature green accent. The booth treats the tire itself as architecture.\n\nA large tire tunnel acts as both landmark and threshold, drawing visitors into the center of the booth. Around it, products are positioned to communicate the range and scale of the brand.\n\nDigital media and technical information are integrated without weakening the physical impact of the installation. The result is a space that is practical, recognizable, and highly photogenic.",
      "该概念通过超尺度的产品动作与 BKT 标志性的绿色视觉，为品牌建立鲜明而有记忆点的现场存在。轮胎本身被转化为空间的构成语言。\n\n巨大的轮胎通道既是视觉地标，也是进入展位的门槛，引导观众向核心区域聚拢。围绕其展开的产品陈列进一步传达品牌的产品宽度与行业尺度。\n\n数字媒介与技术信息被整合进整体空间，但不削弱装置的物理张力。最终形成的是一个兼具传播性、识别性与实用性的展览空间。",
      "Il concept costruisce per BKT una presenza di forte impatto attraverso gesti di grande scala e il verde distintivo del brand. Il pneumatico viene assunto come vero e proprio elemento architettonico.\n\nIl grande tunnel circolare funziona al tempo stesso come landmark e soglia d'ingresso, attirando i visitatori verso il cuore dello stand. Intorno a questo segno centrale, la disposizione dei prodotti comunica ampiezza di gamma e scala del marchio.\n\nMedia digitali e contenuti tecnici sono integrati senza ridurre la forza fisica dell'installazione. Il risultato e uno spazio insieme riconoscibile, pratico e altamente comunicativo."
    ),
    gallery: ["/images/exhibition/p5-1.png", "/images/exhibition/p5-2.png", "/images/exhibition/p5-3.png"]
  },
  {
    id: "p6",
    title: loc("Jetinno Hotel Equipment", "Jetinno 酒店设备展位", "Stand Jetinno Hospitality"),
    year: 2025,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Hospitality", "Coffee", "Equipment"],
      ["酒店", "咖啡", "设备"],
      ["Ospitalita", "Caffe", "Attrezzature"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p6-cover.png",
    summary: loc(
      "A warm exhibition concept for hospitality equipment and coffee systems.",
      "用于展示酒店设备与咖啡系统的温暖展览概念。",
      "Un concept accogliente dedicato ad attrezzature hospitality e sistemi coffee."
    ),
    body: loc(
      "This concept for Jetinno creates a welcoming atmosphere closer to a cafe than a conventional trade fair booth. The intention is to let visitors experience hospitality equipment in a believable setting.\n\nWarm wood, greenery, and soft lighting build a relaxed environment that supports product demonstrations and casual conversation. Lifestyle scenes help potential buyers imagine how each machine might live in a real interior.\n\nThe layout encourages exploration and interaction. Rather than treating equipment as isolated technical objects, the project presents them as part of a complete service experience.",
      "该概念为 Jetinno 营造出更接近咖啡馆而非传统展位的氛围，使观众能在更可信的场景中理解酒店设备与咖啡系统。\n\n温暖木色、绿植与柔和灯光共同构成放松而友好的环境，既适合产品演示，也适合轻松交流。带有生活方式线索的场景帮助客户想象设备进入真实空间后的使用状态。\n\n整体布局鼓励停留、探索与互动。设备不再被视为孤立的技术物件，而是完整服务体验的一部分。",
      "Il concept per Jetinno costruisce un'atmosfera piu vicina a una caffetteria che a uno stand fieristico tradizionale, cosi da far leggere le attrezzature hospitality all'interno di un contesto credibile.\n\nLegni caldi, verde e luci morbide definiscono un ambiente rilassato e accogliente, adatto sia alla dimostrazione del prodotto sia a conversazioni informali. Le scene di lifestyle aiutano il cliente a immaginare le macchine inserite in spazi reali.\n\nIl layout invita a sostare, esplorare e interagire. Le attrezzature non sono trattate come oggetti tecnici isolati, ma come parte di un'esperienza di servizio completa."
    ),
    gallery: ["/images/exhibition/p6-1.png", "/images/exhibition/p6-2.png", "/images/exhibition/p6-3.png"]
  }
];

export const INTERIOR_PROJECTS: Project[] = [
  {
    id: "i1",
    title: loc("Xingguo Road Residence", "兴国路住宅", "Residenza su Xingguo Road"),
    year: 2023,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Residential", "Minimal"],
      ["室内", "住宅", "极简"],
      ["Interni", "Residenziale", "Minimal"]
    ),
    category: "interior",
    coverImage: "/images/projects/i1-cover.jpg",
    summary: loc(
      "A refined private residence on historic Xingguo Road.",
      "位于历史街区兴国路的一处精致私宅。",
      "Una residenza privata raffinata nella storica Xingguo Road."
    ),
    body: loc(
      "This residence combines warm neutrals, marble surfaces, and carefully curated natural elements. The project seeks a balance between contemporary minimalism and a timeless domestic calm.\n\nNatural stone, warm oak, and tactile fabrics shape a palette that feels elegant without becoming fragile. The rooms are connected through long sightlines and a restrained use of material contrast.\n\nCustom joinery integrates storage and display so that daily life remains orderly while personal objects still contribute to the atmosphere of the home.",
      "这处住宅以暖中性色、大理石与精选自然元素构建空间基底，在当代极简与恒久居住感之间寻找平衡。\n\n天然石材、暖色橡木与富有触感的织物共同塑造材料层次，既精致又不脆弱。房间之间通过连续视线与克制的材质对比保持统一。\n\n定制木作整合了储物与展示，使日常生活保持秩序，也让屋主的个人物件继续参与空间气质的形成。",
      "Questa residenza costruisce il proprio equilibrio attraverso neutri caldi, superfici in marmo ed elementi naturali selezionati con cura, cercando una sintesi tra minimalismo contemporaneo e calma domestica senza tempo.\n\nPietra naturale, rovere caldo e tessuti tattili definiscono una materia elegante ma mai fragile. Gli ambienti si tengono insieme grazie a visuali continue e a un uso misurato dei contrasti materici.\n\nLa falegnameria su misura integra contenimento ed esposizione, mantenendo ordinata la vita quotidiana e lasciando agli oggetti personali un ruolo attivo nell'atmosfera della casa."
    ),
    gallery: ["/images/projects/i1-1.jpg", "/images/projects/i1-2.jpg", "/images/projects/i1-3.jpg"]
  },
  {
    id: "i2",
    title: loc("Shanghaiwan Residence", "上海湾住宅", "Residenza Shanghaiwan"),
    year: 2024,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Living", "Contemporary"],
      ["室内", "居住", "当代"],
      ["Interni", "Living", "Contemporaneo"]
    ),
    category: "interior",
    coverImage: "/images/projects/i2-cover.jpg",
    summary: loc(
      "A contemporary residence overlooking Shanghai Bay.",
      "一处俯瞰上海湾景观的当代住宅。",
      "Una residenza contemporanea affacciata sulla baia di Shanghai."
    ),
    body: loc(
      "This project frames panoramic views, natural light, and layered textures into a calm contemporary living space. The bay remains a constant visual backdrop to daily life.\n\nThe interior composition is organized around sightlines and openness. Low furniture, reflective surfaces, and restrained colors allow the changing sky and water to become part of the room.\n\nPublic and private areas are zoned to support different rhythms of use, creating a home that feels open, composed, and deeply connected to its setting.",
      "项目将全景视野、自然采光与层次丰富的材料组织成一个平静的当代居住空间，湾景始终是日常生活的背景。\n\n室内构成围绕视线与开敞感展开。低矮家具、反射表面与克制色彩让天空与水面的变化自然进入室内体验。\n\n公共与私密区域被清晰分区，以回应不同的生活节奏，最终形成一个开阔、从容且与场地关系紧密的家。",
      "Il progetto organizza viste panoramiche, luce naturale e materiali stratificati in uno spazio domestico contemporaneo e calmo, dove la baia resta una presenza costante nella vita quotidiana.\n\nLa composizione interna si costruisce attorno a visuali e senso di apertura. Arredi bassi, superfici riflettenti e colori misurati permettono a cielo e acqua di entrare nell'esperienza dello spazio.\n\nLe aree pubbliche e private sono chiaramente distinte per assecondare ritmi diversi dell'abitare, dando forma a una casa aperta, composta e profondamente legata al luogo."
    ),
    gallery: ["/images/projects/i2-1.jpg", "/images/projects/i2-2.jpg", "/images/projects/i2-3.jpg"]
  },
  {
    id: "i3",
    title: loc("Xiangyang South Road Private House", "襄阳南路私宅", "Casa privata in Xiangyang South Road"),
    year: 2024,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Heritage", "Modern"],
      ["室内", "历史建筑", "现代"],
      ["Interni", "Patrimonio", "Moderno"]
    ),
    category: "interior",
    coverImage: "/images/projects/i3-cover.jpg",
    summary: loc(
      "A historic lane house transformed into a contemporary home.",
      "一栋历史里弄住宅被更新为当代居所。",
      "Una casa storica di lilong trasformata in abitazione contemporanea."
    ),
    body: loc(
      "This renovation preserves the character of a historic lane house while introducing contemporary comfort and updated systems. Existing structure and new intervention are meant to remain in dialogue.\n\nOriginal timber beams and masonry are retained as visible elements, while new insertions are kept restrained and precise. A skylight transforms the central circulation into a brighter and more generous core.\n\nThe project argues that preservation and innovation can support each other. The house remains recognizably historic while meeting the demands of current living.",
      "这次改造在保留历史里弄住宅原有气质的同时，引入当代生活所需的舒适度与更新系统，使旧结构与新介入保持持续对话。\n\n原有木梁与砌体被保留为可见元素，新加入的部分则尽量克制而准确。一处新增天窗将原本偏暗的中心交通空间转化为更明亮、更开敞的核心。\n\n项目说明，保护与更新并不矛盾。住宅在满足当代生活需求的同时，仍然保有清晰的历史身份。",
      "La ristrutturazione conserva il carattere della storica casa di lilong introducendo il comfort e gli impianti richiesti dall'abitare contemporaneo, cosi che struttura esistente e nuovi inserimenti restino in dialogo.\n\nTravi in legno e murature originali sono mantenute come elementi visibili, mentre le nuove aggiunte si presentano con misura e precisione. Un lucernario trasforma il nucleo distributivo centrale, prima piu buio, in un cuore piu luminoso e aperto.\n\nIl progetto dimostra che conservazione e aggiornamento possono sostenersi a vicenda. La casa risponde alle esigenze dell'abitare attuale senza perdere la propria identita storica."
    ),
    gallery: ["/images/projects/i3-1.jpg", "/images/projects/i3-2.jpg", "/images/projects/i3-3.jpg"]
  },
  {
    id: "i4",
    title: loc("Cangjia Mansion Showroom I", "藏家公馆样板间 I", "Showroom Cangjia Mansion I"),
    year: 2024,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Showroom", "Luxury"],
      ["室内", "样板间", "高端"],
      ["Interni", "Showroom", "Luxury"]
    ),
    category: "interior",
    coverImage: "/images/projects/i4-cover.jpg",
    summary: loc(
      "A premium showroom for a luxury residential development.",
      "为高端住宅项目打造的样板展示空间。",
      "Uno showroom premium per un progetto residenziale di fascia alta."
    ),
    body: loc(
      "This model apartment showcases refined material coordination, bespoke furniture, and an elevated domestic atmosphere aimed at high-end buyers.\n\nThe showroom balances aspiration with realism. Standard finishes are elevated through careful curation, while lighting and layout help visitors imagine themselves inside the future residence.\n\nThe circulation is choreographed to reveal each room with compositional control, turning the visit into a carefully staged spatial sequence.",
      "这套样板间以精细的材料搭配、定制家具与完整的氛围控制，向高端住宅客户呈现生活方式与品质感。\n\n空间在理想感与可实现性之间保持平衡。标准化交付内容通过设计整合得到提升，灯光与布局帮助参观者更自然地代入未来居住场景。\n\n参观路径经过编排，让每个房间都以更有控制力的方式被展开，形成一段层层递进的空间序列。",
      "Questo appartamento campione presenta un coordinamento materico raffinato, arredi su misura e un'atmosfera domestica controllata, pensata per un pubblico residenziale di fascia alta.\n\nLo showroom trova un equilibrio tra aspirazione e concretezza. Le finiture standard vengono valorizzate dal progetto, mentre luce e layout aiutano il visitatore a immaginarsi nella futura abitazione.\n\nIl percorso di visita e orchestrato per aprire ogni ambiente con precisione compositiva, trasformando la visita in una sequenza spaziale progressiva."
    ),
    gallery: ["/images/projects/i4-1.jpg", "/images/projects/i4-2.jpg", "/images/projects/i4-3.jpg"]
  },
  {
    id: "i5",
    title: loc("Cangjia Mansion Showroom II", "藏家公馆样板间 II", "Showroom Cangjia Mansion II"),
    year: 2025,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Showroom", "Contemporary"],
      ["室内", "样板间", "当代"],
      ["Interni", "Showroom", "Contemporaneo"]
    ),
    category: "interior",
    coverImage: "/images/projects/i5-cover.jpg",
    summary: loc(
      "A contemporary showroom shaped by warm earth tones.",
      "以暖土地色系塑造的当代样板空间。",
      "Uno showroom contemporaneo costruito su toni terrosi e caldi."
    ),
    body: loc(
      "This model unit explores a calmer and warmer interpretation of contemporary luxury. Layered plasters, textiles, and natural-toned furniture create depth without visual noise.\n\nMateriality plays a central role. Surfaces are designed to reward close attention, while furniture selections emphasize craftsmanship and long-term value.\n\nThe narrative of the showroom is one of retreat. It offers a sense of shelter from urban intensity through proportion, texture, and a muted palette.",
      "这套样板间呈现了一种更安静、更温暖的当代高端住宅表达。层次化灰泥、织物与自然色家具营造出有深度却不过分喧闹的室内氛围。\n\n材料是空间的核心线索。表面处理鼓励近距离感知，家具选择则强调工艺品质与长期使用价值。\n\n整个空间以“避风港”为叙事核心，通过比例、触感与低饱和色彩回应城市生活的强度。",
      "Questa unita campione propone una lettura piu quieta e piu calda del lusso contemporaneo. Intonaci stratificati, tessuti e arredi nei toni naturali costruiscono profondita senza produrre rumore visivo.\n\nLa materia e il filo conduttore del progetto. Le superfici invitano a un'osservazione ravvicinata, mentre gli arredi mettono in evidenza artigianalita e valore nel tempo.\n\nL'intero showroom e costruito attorno all'idea di rifugio. Proporzioni, texture e palette attenuata rispondono all'intensita della vita urbana con una sensazione di protezione."
    ),
    gallery: ["/images/projects/i5-1.jpg", "/images/projects/i5-2.jpg", "/images/projects/i5-3.jpg"]
  },
  {
    id: "i6",
    title: loc("Cangjia Mansion Showroom III", "藏家公馆样板间 III", "Showroom Cangjia Mansion III"),
    year: 2025,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Showroom", "Minimal"],
      ["室内", "样板间", "极简"],
      ["Interni", "Showroom", "Minimal"]
    ),
    category: "interior",
    coverImage: "/images/projects/i6-cover.jpg",
    summary: loc(
      "A light-filled showroom centered on spatial calm.",
      "以采光与空间平静感为核心的样板间。",
      "Uno showroom luminoso costruito attorno alla calma dello spazio."
    ),
    body: loc(
      "This project uses natural light as the main design material. Pale finishes, reflective surfaces, and careful detailing make the apartment feel open and bright throughout the day.\n\nThe furniture strategy is deliberately restrained so the architecture can remain primary. A limited palette supports an atmosphere that is minimal but not cold.\n\nThe result is a showroom that communicates generosity through emptiness, continuity, and measured control rather than excess decoration.",
      "该项目将自然光视为最重要的设计材料。浅色饰面、反射表面与克制细节共同让样板间在一天不同时间都保持明亮与开阔。\n\n家具策略被有意压低存在感，让建筑空间本身成为主角。有限的材料与色彩建立出极简但不冷漠的气质。\n\n最终呈现的是一个通过留白、连续性与尺度控制传达从容感的样板空间，而不是依赖过度装饰。",
      "Il progetto assume la luce naturale come principale materiale di lavoro. Finiture chiare, superfici riflettenti e dettagli misurati mantengono l'appartamento aperto e luminoso nell'arco della giornata.\n\nLa strategia d'arredo e volutamente discreta, cosi che sia l'architettura a restare protagonista. Una palette ridotta costruisce un'atmosfera minimale ma non fredda.\n\nNe deriva uno showroom che comunica generosita attraverso vuoto, continuita e controllo della scala, piu che tramite un eccesso di decorazione."
    ),
    gallery: ["/images/projects/i6-1.jpg", "/images/projects/i6-2.jpg", "/images/projects/i6-3.jpg"]
  },
  {
    id: "i7",
    title: loc("Cangjia Mansion Showroom IV", "藏家公馆样板间 IV", "Showroom Cangjia Mansion IV"),
    year: 2025,
    location: loc("Shanghai, China", "中国 上海", "Shanghai, Cina"),
    typology: "Interior",
    status: "Built",
    tags: list(
      ["Interior", "Showroom", "Elegant"],
      ["室内", "样板间", "优雅"],
      ["Interni", "Showroom", "Elegante"]
    ),
    category: "interior",
    coverImage: "/images/projects/i7-cover.jpg",
    summary: loc(
      "An elegant showroom with a rich and tactile material palette.",
      "一个拥有丰富触感与材料层次的优雅样板空间。",
      "Uno showroom elegante con una palette materica ricca e tattile."
    ),
    body: loc(
      "This model apartment is conceived for buyers who value finish quality, detail, and material richness. Stone, metal, and custom millwork are treated as a continuous luxury language.\n\nRare materials and hand-finished elements are used with restraint so that richness feels composed rather than excessive. Hidden lighting and seamless joints reinforce the sense of refinement.\n\nThe visitor experience unfolds as a sequence of discoveries, where each room reveals new textures and details while maintaining an overall atmosphere of calm elegance.",
      "这套样板间面向重视完成度、细节与材料价值的购房者。石材、金属与定制木作共同构成连续而克制的高端语言。\n\n珍贵材料与手工细节被谨慎使用，让丰富感呈现为有控制力的优雅，而不是堆砌。隐藏灯光与精细收口进一步强化了整体完成度。\n\n参观体验被组织为层层展开的发现过程。每个房间都呈现新的质感与细节，同时维持整体上的安静与优雅。",
      "Questo appartamento campione e pensato per acquirenti che attribuiscono valore a qualita esecutiva, dettaglio e ricchezza materica. Pietra, metallo e falegnameria su misura costruiscono un linguaggio continuo e misurato.\n\nMateriali preziosi e dettagli rifiniti a mano sono impiegati con controllo, cosi che la ricchezza appaia come eleganza composta e non come accumulo. Illuminazione nascosta e giunti accurati rafforzano ulteriormente il senso di precisione.\n\nL'esperienza di visita si sviluppa come una sequenza di scoperte progressive. Ogni ambiente introduce nuove texture e nuovi dettagli, mantenendo pero un'atmosfera complessiva di calma ed eleganza."
    ),
    gallery: ["/images/projects/i7-1.jpg", "/images/projects/i7-2.jpg", "/images/projects/i7-3.jpg"]
  }
];

export const PROJECTS: Project[] = [...EXHIBITION_PROJECTS, ...INTERIOR_PROJECTS];

export const FEATURED_EXHIBITION = EXHIBITION_PROJECTS.filter((p) => ["p1", "p2"].includes(p.id));
export const FEATURED_INTERIOR = INTERIOR_PROJECTS.filter((p) => ["i1", "i2", "i4"].includes(p.id));

export interface HomeSection {
  type: "image" | "text";
  title?: LocalizedText;
  subtitle?: LocalizedText;
  align?: "left" | "right";
  url?: string;
  heading?: LocalizedText;
  text?: LocalizedText;
}

export const HOME_SECTIONS: HomeSection[] = [
  {
    type: "image",
    title: loc("ZM Studio", "ZM Studio", "ZM Studio"),
    subtitle: loc("Exhibition & Interior Design", "展览与室内设计", "Design espositivo e d'interni"),
    align: "left",
    url: "/images/home/hero1.jpg"
  },
  {
    type: "text",
    heading: loc("Design Philosophy", "设计理念", "Filosofia del progetto"),
    text: loc(
      "We believe architecture is not static. It moves, adapts, and connects to emotion. Each project is a deep exploration of space, time, and human experience.",
      "我们相信，建筑从不是静止的对象。它会回应环境、适应使用，并与人的情绪建立联系。每个项目都是对空间、时间与体验的持续推敲。",
      "Per noi l'architettura non e un fatto statico: reagisce, si adatta e costruisce un legame emotivo. Ogni progetto e una ricerca continua su spazio, tempo ed esperienza."
    )
  },
  {
    type: "image",
    title: loc("Highfield Boat Show", "Highfield 游艇展", "Salone nautico Highfield"),
    subtitle: loc("Boot Dusseldorf 2025", "2025 杜塞尔多夫游艇展", "Boot Dusseldorf 2025"),
    align: "right",
    url: "/images/home/hero-exhibition1.jpg"
  },
  {
    type: "text",
    heading: loc("Exhibition Design", "展览设计", "Design espositivo"),
    text: loc(
      "From concept to construction drawings to on-site coordination. We create light, fast, and reusable systems that let temporary spaces tell memorable stories.",
      "从概念策划到施工图深化，再到现场统筹，我们以轻量、快速且可重复使用的系统，让临时空间也能讲出清晰而有记忆点的故事。",
      "Dal concept espositivo allo sviluppo esecutivo fino al coordinamento in cantiere, sviluppiamo sistemi leggeri, rapidi e riutilizzabili capaci di dare forma a spazi temporanei memorabili."
    )
  },
  {
    type: "image",
    title: loc("BKT Tires Exhibition", "BKT 轮胎展位", "Stand BKT Tires"),
    subtitle: loc("Agricultural Trade Fair", "农业行业展会", "Fiera agricola"),
    align: "left",
    url: "/images/home/hero-exhibition2.png"
  },
  {
    type: "image",
    title: loc("Interior Design", "室内设计", "Design d'interni"),
    subtitle: loc("Creating harmonious living spaces", "营造和谐而耐久的生活空间", "Spazi da abitare armoniosi e durevoli"),
    align: "right",
    url: "/images/home/hero3.jpg"
  },
  {
    type: "text",
    heading: loc("Practice", "实践方式", "Metodo"),
    text: loc(
      "We work like editors: choose one strong idea, then remove everything that weakens it. Materials stay honest, and details guide the body through space.",
      "我们的工作方式更像编辑：先找到最有力量的核心概念，再去掉所有削弱它的部分。材料保持诚实，细节则引导身体穿过空间。",
      "Lavoriamo come editor: individuiamo un'idea forte e togliamo tutto cio che la indebolisce. I materiali restano sinceri, mentre i dettagli guidano il corpo nello spazio."
    )
  },
  {
    type: "image",
    title: loc("Topband Solar Exhibition", "拓邦光伏展位", "Stand Topband Solar"),
    subtitle: loc("Clean Energy Trade Fair", "清洁能源展会", "Fiera dell'energia pulita"),
    align: "left",
    url: "/images/home/hero-exhibition3.png"
  },
  {
    type: "image",
    title: loc("Crafted Spaces", "精心雕琢的空间", "Spazi su misura"),
    subtitle: loc("Where function meets aesthetics", "功能与美学取得平衡", "Dove funzione ed estetica trovano equilibrio"),
    align: "right",
    url: "/images/home/hero4.jpg"
  }
];

export interface Founder {
  name: string;
  nameCN: string;
  role: LocalizedText;
  education: LocalizedText;
  specialty: LocalizedText;
  photo: string;
}

export const MILAN_TEAM: Founder[] = [
  {
    name: "Niko Chew",
    nameCN: "周家桢",
    role: loc("Partner / Project Manager", "合伙人 / 项目管理", "Socio / Project Manager"),
    education: loc("M.Arch, Politecnico di Milano", "米兰理工大学 建筑学硕士", "M.Arch, Politecnico di Milano"),
    specialty: loc(
      "Specializes in end-to-end project management from concept to implementation, coordinating factories, venue teams, and multiple stakeholders.",
      "擅长统筹从概念到落地的全流程项目管理，协调工厂、场馆团队与多方合作方。",
      "Segue la gestione del progetto end-to-end, dal concept alla realizzazione, coordinando produzione, venue team e stakeholder."
    ),
    photo: "/images/about/niko.png"
  },
  {
    name: "Wei Ma",
    nameCN: "马威",
    role: loc("Partner / Architect", "合伙人 / 建筑师", "Socio / Architetto"),
    education: loc("M.Arch, Politecnico di Milano", "米兰理工大学 建筑学硕士", "M.Arch, Politecnico di Milano"),
    specialty: loc(
      "Focuses on narrative structure and formal expression in exhibition spaces.",
      "专注于展览空间中的叙事结构与形式表达。",
      "Si concentra su struttura narrativa ed espressione formale negli spazi espositivi."
    ),
    photo: "/images/about/wei.png"
  },
  {
    name: "Jiachen Wang",
    nameCN: "王嘉琛",
    role: loc("Partner / Brand Strategist", "合伙人 / 品牌策略", "Socio / Stratega di brand"),
    education: loc("B.Arch, Politecnico di Milano", "米兰理工大学 建筑学学士", "B.Arch, Politecnico di Milano"),
    specialty: loc(
      "Connects brand strategy with spatial expression through design marketing and visual storytelling.",
      "通过设计营销与视觉叙事，把品牌策略转化为空间表达。",
      "Collega strategia di brand ed espressione spaziale attraverso marketing del progetto e narrazione visiva."
    ),
    photo: "/images/about/jiachen.png"
  }
];

export const SHANGHAI_TEAM: Founder[] = [
  {
    name: "Jian Liu",
    nameCN: "刘健",
    role: loc("Shanghai Studio Director", "上海工作室负责人", "Responsabile dello studio di Shanghai"),
    education: loc("Architectural Design", "建筑设计", "Progettazione architettonica"),
    specialty: loc(
      "Oversees operations in the Shanghai studio and leads the team on residential and commercial interiors.",
      "负责上海工作室运营，并带领团队推进住宅与商业室内项目。",
      "Coordina le attivita dello studio di Shanghai e guida il team sui progetti residenziali e commerciali."
    ),
    photo: "/images/about/shanghai2.png"
  },
  {
    name: "Luna",
    nameCN: "Luna",
    role: loc("Designer", "设计师", "Designer"),
    education: loc("Interior Design", "室内设计", "Design d'interni"),
    specialty: loc(
      "Focuses on spatial planning, material selection, and bringing concepts into detailed execution.",
      "专注于空间规划、材料选择，以及将概念推进到细部执行。",
      "Si occupa di pianificazione dello spazio, selezione dei materiali e sviluppo del concept fino al dettaglio esecutivo."
    ),
    photo: "/images/about/shanghai3.png"
  },
  {
    name: "Jerry",
    nameCN: "Jerry",
    role: loc("Designer", "设计师", "Designer"),
    education: loc("Interior Design", "室内设计", "Design d'interni"),
    specialty: loc(
      "Specializes in 3D visualization, technical drawing, and coordination with contractors.",
      "擅长三维呈现、施工图表达以及与施工方的协同。",
      "Specializzato in visualizzazione 3D, disegno esecutivo e coordinamento con le imprese."
    ),
    photo: "/images/about/shanghai4.png"
  },
  {
    name: "May",
    nameCN: "May",
    role: loc("Designer", "设计师", "Designer"),
    education: loc("Interior Design", "室内设计", "Design d'interni"),
    specialty: loc(
      "Passionate about spatial narratives developed through furniture, lighting, and soft furnishing choices.",
      "擅长通过家具、灯光与软装共同塑造空间叙事。",
      "Lavora sulla narrazione dello spazio attraverso arredi, illuminazione e soft decoration."
    ),
    photo: "/images/about/shanghai5.png"
  }
];

export const ABOUT_STUDIO_PARAGRAPHS: LocalizedText[] = [
  loc(
    "ZM Studio was founded by three graduates of Politecnico di Milano's School of Architecture. Based in Milan, the studio focuses on exhibition design, brand narrative spaces, and art installations.",
    "ZM Studio 由三位毕业于米兰理工大学建筑学院的创始合伙人创建。工作室立足米兰，专注于展览设计、品牌叙事空间与艺术装置。",
    "ZM Studio e stato fondato da tre professionisti formati alla Scuola di Architettura del Politecnico di Milano. Con base a Milano, lo studio lavora su design espositivo, spazi narrativi per i brand e installazioni artistiche."
  ),
  loc(
    "We care deeply about spatial experience and material detail. By understanding brand identity and storytelling, we translate abstract concepts into spaces with tactile and emotional presence.",
    "我们重视空间体验与材料细节。通过理解品牌身份与叙事逻辑，我们把抽象概念转化为可感知、可停留、可被记住的空间。",
    "Dedichiamo grande attenzione all'esperienza dello spazio e al dettaglio materico. A partire dall'identita del brand e dalla sua narrazione, trasformiamo concetti astratti in luoghi tangibili, emotivi e memorabili."
  ),
  loc(
    "The studio maintains long-term partnerships with manufacturing and processing facilities in Italy, Poland, and Germany, enabling a fast transition from sketches to implementation across Europe.",
    "工作室与意大利、波兰和德国的生产及加工伙伴保持长期合作，使项目得以在欧洲范围内从草图高效推进到实施。",
    "Lo studio collabora stabilmente con partner produttivi in Italia, Polonia e Germania, permettendo ai progetti di passare rapidamente dallo schizzo alla realizzazione in Europa."
  )
];

export const ABOUT_KEYWORDS: LocalizedText[] = [
  loc("Spatial Storytelling", "空间叙事", "Narrazione spaziale"),
  loc("Material Experimentation", "材料实验", "Sperimentazione materica"),
  loc("On-site Implementation", "现场统筹", "Realizzazione in cantiere"),
  loc("International Supply Chain", "国际供应链", "Filiera internazionale")
];

export interface AboutServiceCard {
  title: LocalizedText;
  provide: LocalizedText;
  result: LocalizedText;
}

export const ABOUT_SERVICE_CARDS: AboutServiceCard[] = [
  {
    title: loc("Exhibition & Brand Space Design", "展览与品牌空间设计", "Design espositivo e spazi di brand"),
    provide: loc(
      "Concept -> 3D -> Detail drawings -> On-site coordination",
      "概念策略 -> 三维方案 -> 深化图纸 -> 现场统筹",
      "Concept -> 3D -> Disegni esecutivi -> Coordinamento in cantiere"
    ),
    result: loc(
      "Distinctive brand presentation and immersive visitor experience",
      "清晰可识别的品牌呈现与沉浸式参观体验",
      "Presenza di brand riconoscibile ed esperienza di visita immersiva"
    )
  },
  {
    title: loc("Booth Production & Installation", "展台制作与安装", "Produzione e installazione stand"),
    provide: loc(
      "Partner factories + transport + installation teams",
      "合作工厂 + 运输 + 安装团队",
      "Partner produttivi + trasporto + squadre di installazione"
    ),
    result: loc(
      "Reliable and cost-effective implementation across regions",
      "跨区域、稳定且具成本效率的落地执行",
      "Realizzazione affidabile ed efficiente su piu territori"
    )
  },
  {
    title: loc("Art & Interactive Installations", "艺术与互动装置", "Installazioni artistiche e interattive"),
    provide: loc(
      "Material experiments + model development + prototype testing",
      "材料实验 + 模型开发 + 原型测试",
      "Esperimenti materici + sviluppo modelli + test prototipi"
    ),
    result: loc(
      "Tangible brand narratives that can be seen, touched, and remembered",
      "可被观看、触摸并留下记忆的品牌叙事",
      "Narrazioni di brand tangibili, da vedere, toccare e ricordare"
    )
  }
];

export const ABOUT_MUTUAL_CONDUCT_PARAGRAPHS: LocalizedText[] = [
  loc(
    "We value respectful collaboration and transparent communication.",
    "我们重视彼此尊重、边界清晰且透明的合作方式。",
    "Per noi contano collaborazione rispettosa, chiarezza dei ruoli e comunicazione trasparente."
  ),
  loc(
    "Clients, partners, and suppliers working with ZM Studio are expected to maintain professional conduct, support fair working conditions, and respect intellectual and creative work.",
    "与 ZM Studio 合作的客户、合作伙伴与供应商，均应保持专业行为，支持公平的工作条件，并尊重知识与创意劳动。",
    "Clienti, partner e fornitori che collaborano con ZM Studio sono tenuti a mantenere un comportamento professionale, sostenere condizioni di lavoro corrette e rispettare il lavoro intellettuale e creativo."
  )
];

export const ABOUT_QUALITY_PARAGRAPHS: LocalizedText[] = [
  loc(
    "ZM Studio is committed to delivering spaces that are conceptually strong and precisely executed. We work closely with fabrication partners to ensure consistent quality from design to installation.",
    "ZM Studio 致力于交付概念清晰、执行准确的空间。我们与制作伙伴紧密协同，确保从设计到安装的质量始终连贯。",
    "ZM Studio si impegna a realizzare spazi solidi sul piano concettuale e precisi nell'esecuzione. Collaboriamo a stretto contatto con i partner produttivi per garantire continuita qualitativa dal progetto all'installazione."
  )
];

export const ABOUT_QUALITY_BULLETS: LocalizedText[] = [
  loc(
    "Understanding each client's narrative and transforming it into spatial experience.",
    "理解每位客户的叙事核心，并将其转化为空间体验。",
    "Comprendere il nucleo narrativo di ogni cliente e tradurlo in esperienza spaziale."
  ),
  loc(
    "Maintaining reliable communication between design, fabrication, and on-site teams.",
    "维持设计、制作与现场团队之间稳定可靠的沟通。",
    "Mantenere una comunicazione solida e affidabile tra design, produzione e team di cantiere."
  ),
  loc(
    "Ensuring clarity in drawings, materials, and construction details to reduce implementation risk.",
    "确保图纸、材料与构造细节足够清晰，以降低实施风险。",
    "Garantire chiarezza in disegni, materiali e dettagli costruttivi per ridurre il rischio in fase di realizzazione."
  ),
  loc(
    "Continuously improving workflows based on project feedback and installation experience.",
    "基于项目反馈与安装经验持续优化工作流程。",
    "Migliorare continuamente i flussi di lavoro sulla base dei feedback di progetto e dell'esperienza in cantiere."
  ),
  loc(
    "Working responsibly and in accordance with local regulations and safety standards.",
    "以负责任的方式工作，并遵守当地法规与安全标准。",
    "Operare in modo responsabile e nel rispetto delle normative locali e degli standard di sicurezza."
  )
];

export interface Service {
  title: LocalizedText;
  text: LocalizedText;
}

export const SERVICES: Service[] = [
  { title: loc("Exhibition Application & Registration", "展会申请与注册", "Iscrizione e pratiche fieristiche"), text: loc("Documents, registration, and liaison with organizers.", "文件准备、报名流程与主办方沟通协调。", "Documentazione, pratiche di iscrizione e coordinamento con gli organizzatori.") },
  { title: loc("Custom Booth Design & Construction", "定制展台设计与搭建", "Progettazione e costruzione stand su misura"), text: loc("3D concepts, construction details, and on-site management.", "三维方案、施工深化与现场统筹。", "Concept 3D, sviluppo esecutivo e coordinamento in cantiere.") },
  { title: loc("Graphic Design & Printing", "平面设计与印刷", "Grafica e stampa"), text: loc("Brochures, posters, backdrops, and brand print assets.", "画册、海报、背景画面及品牌印刷物料。", "Brochure, poster, fondali e materiali stampati di brand.") },
  { title: loc("Furniture & Equipment Rental", "家具与设备租赁", "Noleggio arredi e attrezzature"), text: loc("Rental of chairs, lighting, audio, and display equipment.", "家具、灯光、音响与展示设备租赁。", "Noleggio di sedute, illuminazione, audio e attrezzature espositive.") },
  { title: loc("Logistics & Shipping Coordination", "物流与运输协调", "Logistica e spedizioni"), text: loc("Transport, customs, storage, and venue access support.", "运输、清关、仓储与场馆进场协调。", "Trasporto, dogana, deposito e supporto per l'accesso in venue.") },
  { title: loc("On-site Supervision", "现场统筹", "Coordinamento in loco"), text: loc("Full monitoring during setup and dismantling.", "布展与撤展全过程现场统筹。", "Presidio completo durante montaggio e smontaggio.") },
  { title: loc("Interpretation & Translation", "口译与翻译", "Interpretariato e traduzione"), text: loc("On-site interpretation and document translation in Chinese, English, and Italian.", "中英意现场口译与文件翻译。", "Interpretariato in loco e traduzione documentale in cinese, inglese e italiano.") },
  { title: loc("Hospitality & Travel Support", "接待与出行支持", "Accoglienza e supporto ai viaggi"), text: loc("Hotel booking, local transport, and business travel support.", "酒店预订、交通安排与商务出行支持。", "Prenotazioni hotel, trasporti locali e supporto ai viaggi di lavoro.") },
  { title: loc("Catering & Event Management", "餐饮与活动管理", "Catering e gestione evento"), text: loc("Catering, receptions, and launch-event coordination.", "餐饮、酒会与发布活动统筹。", "Catering, reception e coordinamento di eventi di lancio.") }
];

export interface NewsItem {
  date: string;
  title: LocalizedText;
  desc: LocalizedText;
}

export const NEWS: NewsItem[] = [
  {
    date: "2025-10-01",
    title: loc("Shortlisted for pop-up pavilion", "入围快闪展亭项目", "Shortlist per un padiglione pop-up"),
    desc: loc("Reusable timber frames and a lightweight assembly strategy.", "可重复使用的木结构框架与轻量化装配策略。", "Telai in legno riutilizzabili e una strategia di montaggio leggera.")
  },
  {
    date: "2025-09-12",
    title: loc("Runway Curve Campus concept released", "Runway Curve Campus 概念发布", "Presentato il concept Runway Curve Campus"),
    desc: loc("Five convex nodes transform a 1.1 km linear strip into a spatial sequence.", "五个凸形节点将 1.1 公里的线性场地转化为连续的空间序列。", "Cinque nodi convessi trasformano una fascia lineare di 1,1 km in una sequenza spaziale continua.")
  },
  {
    date: "2025-08-20",
    title: loc("Talk: Healing Micro-Rooms", "分享：疗愈型微空间", "Incontro: Healing Micro-Rooms"),
    desc: loc("A conversation on comfort, color, and restorative small environments.", "围绕舒适感、色彩与疗愈型小空间展开的一次分享。", "Una conversazione su comfort, colore e piccoli ambienti capaci di rigenerare.")
  }
];
