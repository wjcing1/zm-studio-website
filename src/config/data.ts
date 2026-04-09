import type { Project } from "@/types";
import type { LocalizedText } from "@/lib/i18n";

const loc = (en: string, zh: string, it: string) => ({ en, zh, it });
const list = (en: string[], zh: string[], it: string[]) => ({ en, zh, it });

export const EXHIBITION_PROJECTS: Project[] = [
  {
    id: "p1",
    title: loc(
      "International Boat Show",
      "国际游艇展",
      "International Boat Show"
    ),
    year: 2025,
    location: loc("Dusseldorf, Germany", "杜塞尔多夫，德国", "Dusseldorf, Germania"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["Marine", "Boat Show", "Brand Experience"],
      ["船艇", "游艇展", "品牌体验"],
      ["Nautica", "Salone", "Esperienza di brand"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p1-cover.jpg",
    summary: loc(
      "A warm, open exhibition booth for International Boat Show in Dusseldorf, organized around strong visibility and clear visitor flow.",
      "为杜塞尔多夫国际游艇展打造的展台，以开放动线、清晰识别和温暖材料建立现场气质。",
      "Uno stand aperto e riconoscibile per l'International Boat Show di Dusseldorf, costruito su visibilita immediata e flussi chiari."
    ),
    body: loc(
      "This project frames the boat-show presentation through a calm but high-impact spatial language. Warm timber elements, suspended branding, and a broad central opening give the booth a premium presence without making it feel closed.\n\nThe plan is organized to support circulation around large products while keeping the brand legible from long distances. Visitors can read the booth in one glance, then move deeper into the display at an easy rhythm.\n\nRather than relying on spectacle alone, the design works through proportion, material balance, and clear sightlines. The result is a stand that feels confident, approachable, and easy to navigate.",
      "这个项目以克制但有力度的空间语言来组织游艇展现场。温暖木质、清晰吊牌与开敞入口共同建立出更成熟的品牌形象，也让展台不会显得封闭。\n\n平面围绕大体量展品的观看与绕行来组织，同时保证远距离识别足够明确。观众可以先快速读懂整体，再自然进入更细的展示层次。\n\n它并不依赖单纯的视觉冲击，而是通过比例、材质平衡和视线组织来建立说服力。最终形成的是一个自信、友好、也便于停留的展台。",
      "Il progetto costruisce la presenza del brand con un linguaggio misurato ma incisivo. Legno caldo, insegne sospese e una grande apertura frontale danno allo stand un'identita premium senza irrigidirlo.\n\nL'impianto accompagna la lettura di prodotti di grande scala mantenendo il brand leggibile gia da lontano. Il visitatore coglie subito il quadro generale e poi entra nello spazio con un ritmo naturale.\n\nIl risultato non dipende dall'effetto scenico puro, ma da proporzioni, materiali e visuali ben controllate. Ne nasce uno stand sicuro, accogliente e facile da attraversare."
    ),
    gallery: [
      "/images/exhibition/p1-1.jpg",
      "/images/exhibition/p1-2.jpg"
    ]
  },
  {
    id: "p2",
    title: loc("The Elevator Show", "电梯展", "The Elevator Show"),
    year: 2026,
    location: loc("Dubai, UAE", "迪拜，阿联酋", "Dubai, Emirati Arabi Uniti"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Elevator", "Hospitality", "Trade Fair"],
      ["电梯", "接待体验", "行业展会"],
      ["Ascensori", "Ospitalita", "Fiera di settore"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p2-cover.jpg",
    summary: loc(
      "A hospitality-led concept for The Elevator Show in Dubai, combining product demonstration, reception, and meeting spaces.",
      "为迪拜电梯展提出的概念方案，把产品展示、接待与洽谈收进同一套空间秩序里。",
      "Un concept per The Elevator Show di Dubai che unisce dimostrazione prodotto, accoglienza e incontri commerciali."
    ),
    body: loc(
      "This concept approaches the elevator fair through a softer and more architectural expression. A curved front edge and a sequence of arches create a controlled frontage toward the aisle while giving the booth a memorable silhouette.\n\nInside, product panels, meeting areas, and reception moments are arranged as one continuous environment rather than separate zones. The space moves from first impression to technical explanation without losing its calm tone.\n\nThe overall language balances precision with hospitality. It is intended to feel credible for business conversations while still offering a distinct brand image in a crowded exhibition hall.",
      "这个方案试图用更建筑化、也更柔和的方式来回应电梯行业展会。弧形界面与一系列拱形开口共同建立出面向主通道的识别，也让展台轮廓更容易被记住。\n\n内部把产品展示、接待与洽谈组织成一段连续空间，而不是彼此割裂的几个区域。观众可以从第一印象自然进入更具体的技术沟通。\n\n整体语言在准确与接待感之间保持平衡。它既适合商务交流，也能在密集的展馆环境中留下稳定而清晰的品牌印象。",
      "Il concept affronta la fiera del settore ascensori con un'espressione piu architettonica e piu misurata. Una facciata curva e una sequenza di archi costruiscono una presenza chiara verso il corridoio e rendono lo stand riconoscibile.\n\nAll'interno, pannelli prodotto, zone meeting e momenti di accoglienza formano un unico ambiente continuo. Il visitatore passa dalla prima percezione alla spiegazione tecnica senza perdere il tono calmo del progetto.\n\nIl linguaggio complessivo bilancia precisione e ospitalita. Lo stand e pensato per sostenere un'immagine credibile nelle conversazioni business e allo stesso tempo distinguersi nel contesto fieristico."
    ),
    gallery: [
      "/images/exhibition/p2-1.jpg",
      "/images/exhibition/p2-2.jpg"
    ]
  },
  {
    id: "p3",
    title: loc(
      "International Exhibition for Hospitality Industry",
      "酒店行业国际展",
      "International Exhibition for Hospitality Industry"
    ),
    year: 2025,
    location: loc("Moscow, Russia", "莫斯科，俄罗斯", "Mosca, Russia"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Hospitality", "Coffee Systems", "Trade Fair"],
      ["酒店设备", "咖啡系统", "展会"],
      ["Hospitality", "Coffee systems", "Fiera"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p3-cover.jpg",
    summary: loc(
      "A hospitality-industry booth shaped by warm materials, open product islands, and a more welcoming rhythm of circulation.",
      "围绕温暖材质、开放展示岛和更友好动线展开的酒店行业展位方案。",
      "Uno stand per il settore hospitality costruito con materiali caldi, isole prodotto aperte e un ritmo di visita piu accogliente."
    ),
    body: loc(
      "This project takes cues from cafe and lounge environments rather than from a conventional technical fair booth. Timber frames, soft lighting, and open counters create a setting that feels closer to use than to abstract display.\n\nThe plan is broken into readable islands so visitors can understand equipment categories without losing the sense of an integrated brand environment. Product interaction, quick conversations, and longer meetings can happen within one continuous layout.\n\nThe space is designed to make hospitality products feel believable, not isolated. That makes the booth more approachable and helps clients imagine the products inside a real service setting.",
      "这个项目更接近咖啡馆和接待空间的气质，而不是传统技术展位的表达。木构框架、柔和灯光与开放式柜台，让现场更像一个可被使用的环境，而不只是抽象陈列。\n\n平面被拆成清晰可读的几个展示岛，让不同设备类别可以被快速理解，同时整体品牌气氛仍然保持统一。产品体验、简短交流与较长时间的洽谈可以同时发生。\n\n空间希望让酒店设备显得可信、可被想象，而不是被当作孤立技术物件看待。这种处理让展位更容易接近，也更有助于客户代入真实使用场景。",
      "Il progetto prende distanza dallo stand tecnico convenzionale e si avvicina piuttosto all'atmosfera di una lounge o di una caffetteria. Telai in legno, luce morbida e banchi aperti costruiscono un ambiente piu vicino all'uso reale che alla pura esposizione.\n\nL'impianto e diviso in isole leggibili, cosi che le diverse categorie di prodotto siano comprensibili senza perdere l'unita dell'ambiente di brand. Interazione, conversazioni rapide e incontri piu lunghi convivono nello stesso layout.\n\nL'obiettivo e far percepire i prodotti hospitality in un contesto credibile, non come oggetti tecnici isolati. Questo rende lo stand piu accessibile e aiuta il cliente a immaginare i prodotti in un servizio reale."
    ),
    gallery: [
      "/images/exhibition/p3-1.jpg",
      "/images/exhibition/p3-2.jpg"
    ]
  },
  {
    id: "p4",
    title: loc(
      "Integrated Systems Europe",
      "欧洲视听系统集成展",
      "Integrated Systems Europe"
    ),
    year: 2025,
    location: loc("Barcelona, Spain", "巴塞罗那，西班牙", "Barcellona, Spagna"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["Technology", "Display", "Brand Booth"],
      ["科技", "展示系统", "品牌展台"],
      ["Tecnologia", "Display", "Stand di brand"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p4-cover.jpg",
    summary: loc(
      "A dark-toned technology booth that uses contrast, lighting, and controlled openings to sharpen product presence.",
      "以深色基调、灯光对比和受控开口来强化产品存在感的科技展台。",
      "Uno stand dal tono scuro che usa contrasto, luce e aperture controllate per dare maggiore presenza al prodotto."
    ),
    body: loc(
      "This booth is organized around a stronger contrast between enclosure and display. Dark surfaces define the outer figure, while illuminated product zones and counters pull attention toward the interior.\n\nThe layout keeps the footprint compact but legible. Open corners support entry from multiple directions, while the darker shell helps frame product demonstrations and conversation areas more precisely.\n\nThe result is a stand with a sharper and more technical character. It communicates clarity and control without becoming visually heavy.",
      "这个展台围绕更鲜明的“外壳与展示”对比来组织。深色界面先建立出整体轮廓，发光的展示面与柜台则把注意力准确拉向内部。\n\n布局在相对紧凑的尺度里保持清晰。开放转角允许观众从不同方向进入，而较深的外层界面也让产品展示与交流区域被更准确地框定出来。\n\n最终形成的是一个更利落、也更偏技术感的展台。它传递的是清晰与控制，而不是沉重。",
      "Lo stand e costruito su un contrasto piu netto tra involucro e display. Le superfici scure definiscono la figura esterna, mentre banchi illuminati e zone prodotto attirano l'attenzione verso l'interno.\n\nL'impianto mantiene una scala compatta ma leggibile. Gli angoli aperti favoriscono l'accesso da piu lati, mentre il guscio piu scuro aiuta a inquadrare con precisione demo e conversazioni.\n\nIl risultato e uno stand piu nitido e piu tecnico, capace di comunicare chiarezza e controllo senza risultare pesante."
    ),
    gallery: [
      "/images/exhibition/p4-1.jpg",
      "/images/exhibition/p4-2.jpg"
    ]
  },
  {
    id: "p5",
    title: loc("Automechanika", "法兰克福汽配展", "Automechanika"),
    year: 2025,
    location: loc("Dubai, UAE", "迪拜，阿联酋", "Dubai, Emirati Arabi Uniti"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Automotive", "Tire Display", "Industrial"],
      ["汽车", "轮胎展示", "工业"],
      ["Automotive", "Pneumatici", "Industriale"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p5-cover.jpg",
    summary: loc(
      "A large-scale exhibition concept built around tire display, luminous framing, and a highly legible central gesture.",
      "围绕轮胎展示、发光框景与强识别中心装置展开的大尺度展台概念。",
      "Un concept di grande scala costruito attorno a pneumatici, cornici luminose e un gesto centrale molto leggibile."
    ),
    body: loc(
      "This project uses the tire as both product and spatial device. A large circular gesture organizes the stand, giving it an immediate identity from the aisle and helping structure the visitor path.\n\nGreen lighting accents, suspended frames, and open meeting zones give the booth a strong industrial character while keeping the plan easy to read. The products can be understood at different distances, from broad visual impact to close inspection.\n\nThe concept aims for directness rather than excess. It is built to feel bold, efficient, and easy to move through, with the product always remaining at the center of the composition.",
      "这个项目把轮胎同时当作产品与空间装置来处理。一个大尺度环形动作首先建立出对主通道的识别，也把整体参观路径组织得更明确。\n\n绿色灯光、悬挂框架和开放式会谈区共同塑造出鲜明的工业气质，同时仍然保持平面足够清晰。产品既可以在远距离被整体感知，也能在近距离被仔细观看。\n\n它追求的是直接而不是堆叠。整个概念希望展台显得有力度、高效、易于浏览，并始终把产品放在构图中心。",
      "Il progetto tratta il pneumatico sia come prodotto sia come dispositivo spaziale. Un grande gesto circolare costruisce l'identita dello stand verso il corridoio e aiuta a organizzare il percorso di visita.\n\nAccenti verdi, cornici sospese e zone meeting aperte danno al booth un carattere industriale netto senza compromettere la leggibilita dell'impianto. I prodotti possono essere letti da lontano e approfonditi da vicino.\n\nL'obiettivo e la chiarezza piu che l'accumulo. Lo stand vuole apparire deciso, efficiente e facile da percorrere, con il prodotto sempre al centro della composizione."
    ),
    gallery: [
      "/images/exhibition/p5-1.jpg",
      "/images/exhibition/p5-2.jpg"
    ]
  },
  {
    id: "p6",
    title: loc("MIDO", "MIDO 米兰展", "MIDO"),
    year: 2025,
    location: loc("Milan, Italy", "米兰，意大利", "Milano, Italia"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["Brand Booth", "Retail Display", "Trade Fair"],
      ["品牌展台", "零售展示", "展会"],
      ["Stand di brand", "Display", "Fiera"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p6-cover.jpg",
    summary: loc(
      "A compact exhibition booth in Milan that balances clear product presentation, aisle visibility, and conversation space.",
      "位于米兰展会现场的一处紧凑型展台，在产品展示、通道识别与交流空间之间保持平衡。",
      "Uno stand compatto per Milano che bilancia presentazione del prodotto, visibilita dal corridoio e spazio per il dialogo."
    ),
    body: loc(
      "This project is defined by a compact but efficient footprint. Display walls, counters, and open corners are arranged so the stand reads quickly from the aisle while still offering more controlled moments inside.\n\nThe composition avoids unnecessary visual weight. Instead, it relies on proportion, sharp framing, and careful product placement to create a professional and confident presence.\n\nWhat matters most here is usability. The booth supports both first contact and more focused discussion, making it well suited to a trade-fair context where time and attention are limited.",
      "这个项目的重点是一种紧凑但高效的尺度控制。展示墙、柜台与开放转角被组织成一个能被快速读懂的界面，同时内部仍然保留更可控的交流层次。\n\n整体避免多余的视觉负担，而是通过比例、清晰框定和产品摆放来建立更专业、更稳定的形象。\n\n对这个展台来说，可用性比夸张表达更重要。它既适合建立第一印象，也适合展开更深入的交流，因此很适合节奏紧凑的行业展会。",
      "Il progetto lavora su una scala compatta ma molto efficiente. Pareti espositive, banchi e angoli aperti sono disposti in modo da rendere lo stand leggibile subito dal corridoio, lasciando pero zone piu controllate all'interno.\n\nLa composizione evita peso superfluo e si affida invece a proporzioni, inquadrature nette e posizionamento accurato dei prodotti per costruire una presenza professionale.\n\nQui conta soprattutto l'usabilita. Lo stand sostiene sia il primo contatto sia conversazioni piu approfondite, risultando adatto a un contesto fieristico in cui tempo e attenzione sono limitati."
    ),
    gallery: [
      "/images/exhibition/p6-1.jpg",
      "/images/exhibition/p6-2.jpg"
    ]
  },
  {
    id: "p7",
    title: loc("A+A", "A+A 安全工业展", "A+A"),
    year: 2025,
    location: loc("Dusseldorf, Germany", "杜塞尔多夫，德国", "Dusseldorf, Germania"),
    typology: "Exhibition",
    status: "Built",
    tags: list(
      ["Safety", "Industrial", "Brand Presence"],
      ["安全行业", "工业", "品牌识别"],
      ["Sicurezza", "Industriale", "Presenza di brand"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p7-cover.jpg",
    summary: loc(
      "An exhibition stand at A+A that uses vertical framing, contrast, and clean zoning to stand out in a dense industrial fair context.",
      "位于 A+A 展会现场的展台，通过垂直构架、强对比与清晰分区，在密集的工业展馆里建立识别。",
      "Uno stand per A+A che usa verticalita, contrasto e zonizzazione chiara per emergere in un contesto fieristico denso."
    ),
    body: loc(
      "This project is built around vertical emphasis and a stronger graphic identity. The stand presents itself clearly from the aisle and uses layered thresholds to move from open display into more focused interaction.\n\nDifferent zones are kept legible without becoming isolated. Product display, reception, and conversation areas are linked through one continuous language of framing, signage, and material contrast.\n\nThe design aims to be efficient in a crowded hall. It gives the brand enough visual force to be noticed while still supporting practical movement and business exchange.",
      "这个项目围绕更明显的垂直构架与图形识别来展开。展台首先在主通道上建立清晰形象，再通过层层递进的界面，把开放展示自然带向更集中的交流区域。\n\n不同区域之间保持可读，但不会彼此割裂。展示、接待与洽谈通过统一的框架、标识与材料对比被串联起来。\n\n它希望在拥挤展馆里保持效率。品牌需要足够醒目，但现场动线与商务沟通也同样重要。",
      "Il progetto lavora su una forte verticalita e su un'identita grafica piu decisa. Lo stand si presenta in modo chiaro verso il corridoio e usa soglie successive per accompagnare il passaggio dall'esposizione aperta all'interazione piu mirata.\n\nLe diverse zone restano leggibili senza diventare autonome. Display, accoglienza e incontro sono legati da un linguaggio continuo fatto di cornici, segnaletica e contrasti materici.\n\nL'obiettivo e l'efficienza dentro un padiglione affollato: abbastanza forza visiva per emergere, ma anche un uso pratico dello spazio per muoversi e parlare."
    ),
    gallery: [
      "/images/exhibition/p7-1.jpg",
      "/images/exhibition/p7-2.jpg",
      "/images/exhibition/p7-3.jpg"
    ]
  },
  {
    id: "p8",
    title: loc("Lift Expo", "电梯博览会", "Lift Expo"),
    year: 2025,
    location: loc("Kazakhstan", "哈萨克斯坦", "Kazakistan"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Elevator", "Trade Fair", "Spatial Identity"],
      ["电梯", "行业展会", "空间识别"],
      ["Ascensori", "Fiera", "Identita spaziale"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p8-cover.jpg",
    summary: loc(
      "A lift-industry exhibition concept that combines a soft architectural shell with direct brand visibility.",
      "为电梯行业展会提出的概念方案，以柔和的建筑外壳和直接的品牌识别共同构成空间。",
      "Un concept per il settore ascensori che combina un involucro architettonico morbido con una visibilita di brand immediata."
    ),
    body: loc(
      "This concept uses a rounded envelope and a more architectural frontage to give the stand a calm but recognizable image. Instead of relying on fragmented display, it organizes the booth as one coherent figure in the hall.\n\nThe interior supports product viewing, quick explanation, and business conversation within a compact footprint. Curved edges help soften the technical character of the category without reducing clarity.\n\nThe result is a stand that feels composed and contemporary. It offers a stronger identity while remaining practical for trade-fair use.",
      "这个概念通过圆润外壳和更建筑化的正面界面，让展台在展馆里形成一种安静但明确的识别。它不是把展示拆得很碎，而是把整个展位作为一个完整体量来处理。\n\n内部在紧凑尺度里同时容纳产品观看、简要讲解与商务交流。弧形边界减弱了品类本身过强的技术感，同时并没有牺牲清晰度。\n\n最终形成的是一个更完整、也更当代的展台形象。它既有更强的品牌个性，也适合展会现场的实际使用。",
      "Il concept utilizza un involucro arrotondato e una facciata piu architettonica per dare allo stand un'immagine calma ma riconoscibile. Invece di frammentare l'esposizione, il progetto tratta il booth come una figura coerente nel padiglione.\n\nAll'interno trovano posto visione del prodotto, spiegazione rapida e conversazione commerciale in una scala compatta. I bordi curvi attenuano il carattere tecnico della categoria senza perdere chiarezza.\n\nNe risulta uno stand piu composto e contemporaneo, capace di dare identita al brand restando pratico per l'uso fieristico."
    ),
    gallery: [
      "/images/exhibition/p8-1.jpg",
      "/images/exhibition/p8-2.jpg"
    ]
  },
  {
    id: "p9",
    title: loc("Vitafoods Europe", "欧洲营养健康展", "Vitafoods Europe"),
    year: 2025,
    location: loc("Europe", "欧洲", "Europa"),
    typology: "Exhibition",
    status: "Concept",
    tags: list(
      ["Health", "Ingredients", "Trade Fair"],
      ["营养健康", "配料", "展会"],
      ["Salute", "Ingredienti", "Fiera"]
    ),
    category: "exhibition",
    coverImage: "/images/exhibition/p9-cover.jpg",
    summary: loc(
      "A bright green-and-white booth concept for Vitafoods Europe, designed to feel open, clean, and easy to approach.",
      "为 Vitafoods Europe 设计的白绿展位概念，以开放、清洁、易于接近的现场氛围为重点。",
      "Un concept in bianco e verde per Vitafoods Europe, pensato per apparire aperto, pulito e immediato."
    ),
    body: loc(
      "This stand is organized around visual openness and direct communication. A white-and-green palette gives the project an immediate identity while keeping the atmosphere bright and accessible.\n\nGraphics, shelving, and meeting points are integrated into one clear framework so information and product categories can be understood quickly. The plan leaves enough breathing room for conversations without losing display density.\n\nThe design aims to feel credible and friendly at the same time. It supports brand visibility, product storytelling, and practical use within one consistent spatial language.",
      "这个展台围绕视觉开敞和直接沟通来组织。白绿主调先建立出鲜明识别，同时也让整体氛围保持明亮、干净和容易接近。\n\n图形、货架与会谈点被整合进一套清晰框架里，让信息和产品类别都能被快速理解。平面在保证展示密度的同时，也留出了足够的交流余量。\n\n它希望同时具备可信度和亲和力，在统一的空间语言中兼顾品牌识别、产品叙事与现场使用。",
      "Lo stand e costruito attorno a apertura visiva e comunicazione diretta. La palette bianca e verde definisce un'identita immediata mantenendo l'atmosfera luminosa e accessibile.\n\nGrafiche, scaffalature e punti incontro sono integrati in una struttura chiara, cosi che informazioni e categorie di prodotto siano comprensibili rapidamente. Il layout lascia spazio alle conversazioni senza perdere intensita espositiva.\n\nL'obiettivo e un equilibrio tra credibilita e prossimita. Il progetto sostiene visibilita di brand, racconto del prodotto e uso pratico dentro un unico linguaggio spaziale."
    ),
    gallery: [
      "/images/exhibition/p9-1.jpg",
      "/images/exhibition/p9-2.jpg"
    ]
  }
];

export const PROJECTS: Project[] = EXHIBITION_PROJECTS;

export const FEATURED_EXHIBITION = EXHIBITION_PROJECTS.filter((p) => ["p1", "p2"].includes(p.id));

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
    subtitle: loc(
      "Exhibition Design & Brand Spaces",
      "展览设计与品牌空间",
      "Design espositivo e spazi di brand"
    ),
    align: "left",
    url: "/images/home/hero1.jpg"
  },
  {
    type: "text",
    heading: loc("Design Philosophy", "设计理念", "Filosofia del progetto"),
    text: loc(
      "We believe strong exhibition design comes from clarity, rhythm, and material honesty. Each project is shaped to be both memorable and buildable.",
      "我们相信，好的展览空间来自清晰的判断、准确的节奏和真实的材料。每个项目都需要同时具备识别度与可落地性。",
      "Per noi un buon progetto espositivo nasce da chiarezza, ritmo e sincerita dei materiali. Ogni lavoro deve essere insieme memorabile e costruibile."
    )
  },
  {
    type: "image",
    title: loc(
      "International Boat Show",
      "国际游艇展",
      "International Boat Show"
    ),
    subtitle: loc("Dusseldorf 2025", "杜塞尔多夫 2025", "Dusseldorf 2025"),
    align: "right",
    url: "/images/home/hero2.jpg"
  },
  {
    type: "text",
    heading: loc("Exhibition Design", "展览设计", "Design espositivo"),
    text: loc(
      "From concept framing to detailed drawings and on-site coordination, we build exhibition systems that stay clear under real production pressure.",
      "从概念框架到深化图纸，再到现场统筹，我们关心的不只是效果，也包括方案在真实制作条件下是否依然清晰成立。",
      "Dal concept allo sviluppo esecutivo fino al coordinamento in cantiere, costruiamo sistemi espositivi che restano chiari anche sotto la pressione della realizzazione."
    )
  },
  {
    type: "image",
    title: loc("The Elevator Show", "电梯展", "The Elevator Show"),
    subtitle: loc("Dubai 2026", "迪拜 2026", "Dubai 2026"),
    align: "left",
    url: "/images/home/hero3.jpg"
  },
  {
    type: "image",
    title: loc("AI Workflows", "AI 工作流", "Workflow AI"),
    subtitle: loc(
      "Visual development and workflow research",
      "用于视觉推演与流程研究",
      "Ricerca su sviluppo visivo e workflow"
    ),
    align: "right",
    url: "/images/home/hero4.jpg"
  },
  {
    type: "text",
    heading: loc("Practice", "实践方式", "Metodo"),
    text: loc(
      "We prefer one strong spatial idea over unnecessary complexity. Materials, graphics, and circulation should work together rather than compete for attention.",
      "我们更相信一个足够有力的空间动作，而不是过度堆叠。材料、图形与动线应该彼此协同，而不是互相争夺注意力。",
      "Preferiamo un'idea spaziale forte alla complessita gratuita. Materiali, grafica e flussi devono lavorare insieme, non competere tra loro."
    )
  },
  {
    type: "image",
    title: loc("Vitafoods Europe", "欧洲营养健康展", "Vitafoods Europe"),
    subtitle: loc("Open, bright, product-led", "开放、明亮、以产品为中心", "Aperto, luminoso, centrato sul prodotto"),
    align: "left",
    url: "/images/home/hero5.jpg"
  }
];

export interface Founder {
  name: string;
  nameCN: string;
  role: LocalizedText;
  education: LocalizedText;
  specialty: LocalizedText;
  photo: string;
  photoPosition?: string;
}

export const MILAN_TEAM: Founder[] = [
  {
    name: "Niko Chew",
    nameCN: "周家桢",
    role: loc("Partner / Project Manager", "合伙人 / 项目经理", "Socio / Project Manager"),
    education: loc("M.Arch, Politecnico di Milano", "米兰理工大学 建筑学硕士", "M.Arch, Politecnico di Milano"),
    specialty: loc(
      "Specializes in end-to-end project management from concept to implementation, coordinating factories, venue teams, and multiple stakeholders.",
      "负责从概念到落地的全流程项目管理，统筹工厂、场馆团队与各方协作。",
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
      "专注展览空间的叙事结构与形式表达。",
      "Si concentra su struttura narrativa ed espressione formale negli spazi espositivi."
    ),
    photo: "/images/about/wei.png"
  },
  {
    name: "Jiachen Wang",
    nameCN: "王嘉琛",
    role: loc("Partner / Brand Strategist", "合伙人 / 品牌策略顾问", "Socio / Stratega di brand"),
    education: loc("B.Arch, Politecnico di Milano", "米兰理工大学 建筑学学士", "B.Arch, Politecnico di Milano"),
    specialty: loc(
      "Connects brand strategy with spatial expression through design marketing and visual storytelling.",
      "通过设计营销与视觉叙事，把品牌策略转化为更具体的空间表达。",
      "Collega strategia di brand ed espressione spaziale attraverso marketing del progetto e narrazione visiva."
    ),
    photo: "/images/about/jiachen.png"
  },
  {
    name: "Rafshaan Shaik",
    nameCN: "Rafshaan Shaik",
    role: loc("Partner", "合伙人", "Socio"),
    education: loc("Architectural Design", "建筑设计", "Progettazione architettonica"),
    specialty: loc(
      "Supports concept development, visual communication, and coordination across project phases.",
      "负责方案推进、视觉表达与各阶段设计协调。",
      "Supporta lo sviluppo del concept, la comunicazione visiva e il coordinamento delle diverse fasi di progetto."
    ),
    photo: "/images/about/rafshaan-shaik-cropped.jpg"
  }
];

export const ABOUT_STUDIO_PARAGRAPHS: LocalizedText[] = [
  loc(
    "ZM Studio was founded by designers trained at Politecnico di Milano. Based in Milan, the studio focuses on exhibition design, brand-space narratives, and spatial concepts that can move efficiently from idea to implementation.",
    "ZM Studio 由毕业于米兰理工大学的设计合伙人共同创立，立足米兰，主要从事展览设计、品牌叙事空间，以及能够高效推进到落地的空间方案。",
    "ZM Studio e stato fondato da professionisti formati al Politecnico di Milano. Con base a Milano, lo studio lavora su design espositivo, narrazioni spaziali per i brand e concept capaci di arrivare in modo efficiente alla realizzazione."
  ),
  loc(
    "We care about how a booth is read in motion: from the first view across the aisle to the smaller moments of product explanation, meeting, and pause. Visual identity, material choices, and circulation are developed together.",
    "我们关心展台在真实移动中的被阅读方式: 从通道上的第一眼识别，到更细的产品讲解、洽谈与停留。视觉识别、材料选择与动线会被放在一起推进。",
    "Ci interessa come uno stand viene letto nel movimento reale: dal primo colpo d'occhio dal corridoio ai momenti piu ravvicinati di spiegazione prodotto, incontro e sosta. Identita visiva, materiali e circolazione vengono sviluppati insieme."
  ),
  loc(
    "The studio works with long-term production and installation partners across Europe, allowing concepts, drawings, and execution to stay closely aligned through the whole process.",
    "工作室与欧洲多地的制作和安装伙伴保持长期协作，让概念、图纸与执行在整个过程中始终紧密对应。",
    "Lo studio collabora stabilmente con partner di produzione e installazione in Europa, cosi che concept, disegni ed esecuzione restino allineati lungo tutto il processo."
  )
];

export const ABOUT_KEYWORDS: LocalizedText[] = [
  loc("Exhibition Strategy", "展览策略", "Strategia espositiva"),
  loc("Spatial Storytelling", "空间叙事", "Narrazione spaziale"),
  loc("Production Coordination", "制作统筹", "Coordinamento produttivo"),
  loc("International Delivery", "国际落地", "Realizzazione internazionale")
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
      "概念策略 / 三维方案 / 深化图纸 / 现场统筹",
      "Concept -> 3D -> Disegni esecutivi -> Coordinamento in cantiere"
    ),
    result: loc(
      "Distinctive brand presentation and immersive visitor experience",
      "清晰的品牌呈现与完整的参观体验",
      "Presenza di brand riconoscibile ed esperienza di visita immersiva"
    )
  },
  {
    title: loc("Booth Production & Installation", "展台制作与安装", "Produzione e installazione stand"),
    provide: loc(
      "Partner factories + transport + installation teams",
      "合作工厂 / 运输衔接 / 安装团队",
      "Partner produttivi + trasporto + squadre di installazione"
    ),
    result: loc(
      "Reliable and cost-effective implementation across regions",
      "跨区域、稳定且高效的落地执行",
      "Realizzazione affidabile ed efficiente su piu territori"
    )
  },
  {
    title: loc("Art & Interactive Installations", "艺术与互动装置", "Installazioni artistiche e interattive"),
    provide: loc(
      "Material experiments + model development + prototype testing",
      "材料实验 / 模型开发 / 原型测试",
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
    "我们重视彼此尊重、边界清晰和透明沟通的合作方式。",
    "Per noi contano collaborazione rispettosa, chiarezza dei ruoli e comunicazione trasparente."
  ),
  loc(
    "Clients, partners, and suppliers working with ZM Studio are expected to maintain professional conduct, support fair working conditions, and respect intellectual and creative work.",
    "与 ZM Studio 合作的客户、合作伙伴和供应商，都应保持专业行为，支持公平的工作条件，并尊重知识与创意劳动。",
    "Clienti, partner e fornitori che collaborano con ZM Studio sono tenuti a mantenere un comportamento professionale, sostenere condizioni di lavoro corrette e rispettare il lavoro intellettuale e creativo."
  )
];

export const ABOUT_QUALITY_PARAGRAPHS: LocalizedText[] = [
  loc(
    "ZM Studio is committed to delivering spaces that are conceptually strong and precisely executed. We work closely with fabrication partners to ensure consistent quality from design to installation.",
    "ZM Studio 致力于交付概念清晰、执行准确的空间。我们与制作伙伴保持紧密协同，确保从设计到安装的每个环节都维持稳定质量。",
    "ZM Studio si impegna a realizzare spazi solidi sul piano concettuale e precisi nell'esecuzione. Collaboriamo a stretto contatto con i partner produttivi per garantire continuita qualitativa dal progetto all'installazione."
  )
];

export const ABOUT_QUALITY_BULLETS: LocalizedText[] = [
  loc(
    "Understanding each client's narrative and transforming it into spatial experience.",
    "理解每位客户的叙事重点，并把它转化为空间体验。",
    "Comprendere il nucleo narrativo di ogni cliente e tradurlo in esperienza spaziale."
  ),
  loc(
    "Maintaining reliable communication between design, fabrication, and on-site teams.",
    "保持设计、制作与现场团队之间稳定而有效的沟通。",
    "Mantenere una comunicazione solida e affidabile tra design, produzione e team di cantiere."
  ),
  loc(
    "Ensuring clarity in drawings, materials, and construction details to reduce implementation risk.",
    "确保图纸、材料和构造细节足够清晰，尽量降低落地风险。",
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
  { title: loc("Exhibition Application & Registration", "展会申请与注册", "Iscrizione e pratiche fieristiche"), text: loc("Documents, registration, and liaison with organizers.", "负责文件准备、报名流程，以及与主办方的沟通协调。", "Documentazione, pratiche di iscrizione e coordinamento con gli organizzatori.") },
  { title: loc("Custom Booth Design & Construction", "定制展台设计与搭建", "Progettazione e costruzione stand su misura"), text: loc("3D concepts, construction details, and on-site management.", "提供三维方案、施工深化与现场统筹。", "Concept 3D, sviluppo esecutivo e coordinamento in cantiere.") },
  { title: loc("Graphic Design & Printing", "平面设计与印刷", "Grafica e stampa"), text: loc("Brochures, posters, backdrops, and brand print assets.", "包括画册、海报、背景画面及品牌印刷物料。", "Brochure, poster, fondali e materiali stampati di brand.") },
  { title: loc("Furniture & Equipment Rental", "家具与设备租赁", "Noleggio arredi e attrezzature"), text: loc("Rental of chairs, lighting, audio, and display equipment.", "提供家具、灯光、音响与展示设备租赁。", "Noleggio di sedute, illuminazione, audio e attrezzature espositive.") },
  { title: loc("Logistics & Shipping Coordination", "物流与运输协调", "Logistica e spedizioni"), text: loc("Transport, customs, storage, and venue access support.", "负责运输、清关、仓储与场馆进场协调。", "Trasporto, dogana, deposito e supporto per l'accesso in venue.") },
  { title: loc("On-site Supervision", "现场统筹", "Coordinamento in loco"), text: loc("Full monitoring during setup and dismantling.", "统筹布展与撤展全过程。", "Presidio completo durante montaggio e smontaggio.") },
  { title: loc("Interpretation & Translation", "口译与翻译", "Interpretariato e traduzione"), text: loc("On-site interpretation and document translation in Chinese, English, and Italian.", "提供中英意现场口译与文件翻译。", "Interpretariato in loco e traduzione documentale in cinese, inglese e italiano.") },
  { title: loc("Hospitality & Travel Support", "接待与出行支持", "Accoglienza e supporto ai viaggi"), text: loc("Hotel booking, local transport, and business travel support.", "协助酒店预订、交通安排与商务出行。", "Prenotazioni hotel, trasporti locali e supporto ai viaggi di lavoro.") },
  { title: loc("Catering & Event Management", "餐饮与活动管理", "Catering e gestione evento"), text: loc("Catering, receptions, and launch-event coordination.", "统筹餐饮、酒会与发布活动。", "Catering, reception e coordinamento di eventi di lancio.") }
];

export interface NewsItem {
  date: string;
  title: LocalizedText;
  desc: LocalizedText;
}

export const NEWS: NewsItem[] = [
  {
    date: "2025-10-01",
    title: loc("Shortlisted for pop-up pavilion", "快闪展亭方案入围", "Shortlist per un padiglione pop-up"),
    desc: loc("Reusable timber frames and a lightweight assembly strategy.", "采用可重复使用的木构框架与轻量化装配方式。", "Telai in legno riutilizzabili e una strategia di montaggio leggera.")
  },
  {
    date: "2025-09-12",
    title: loc("Runway Curve Campus concept released", "Runway Curve Campus 方案发布", "Presentato il concept Runway Curve Campus"),
    desc: loc("Five convex nodes transform a 1.1 km linear strip into a spatial sequence.", "五个凸形节点把 1.1 公里的线性场地组织成连续的空间序列。", "Cinque nodi convessi trasformano una fascia lineare di 1,1 km in una sequenza spaziale continua.")
  },
  {
    date: "2025-08-20",
    title: loc("Talk: Healing Micro-Rooms", "分享会：微型疗愈空间", "Incontro: Healing Micro-Rooms"),
    desc: loc("A conversation on comfort, color, and restorative small environments.", "围绕舒适感、色彩与可恢复身心的小尺度环境展开的一次讨论。", "Una conversazione su comfort, colore e piccoli ambienti capaci di rigenerare.")
  }
];
