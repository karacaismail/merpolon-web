export const company = {
  brand: 'Merpolon',
  legal: 'Merteks Elastomer San. ve Dış Ticaret Ltd. Şti.',
  since: 2001,
  experience: '25+',
  phone: '444 24 97',
  order: '+90 555 986 97 54',
  fax: '+90 212 671 57 17',
  email: 'info@merteksmerdane.com.tr',
  instagram: 'https://instagram.com/merteksmerdane1',
  tiktok: 'https://www.tiktok.com/@merteksmerdane',
  facebook: 'https://www.facebook.com/merteksmerdane',
  addressCenter: 'İOSB, Esenler San. Sit. 8. Blok No:11, Başakşehir / İstanbul',
  addressFactory: 'İOSB, Esenler San. Sit. 7. Blok No:13-8-9, Başakşehir / İstanbul',
  capacity: { diameter: 1200, length: 7000 },
};

export type Lang = 'tr' | 'en' | 'de';

// Reusable UI strings
export const ui = {
  quote:   { tr:'Teklif Al', en:'Get a Quote', de:'Angebot anfordern', ru:'Запросить цену', ar:'اطلب عرض سعر' },
  products:{ tr:'Ürünleri İncele', en:'View Products', de:'Produkte ansehen', ru:'Смотреть продукцию', ar:'استعرض المنتجات' },
  details: { tr:'Detaylı Bilgi', en:'Learn More', de:'Mehr erfahren', ru:'Подробнее', ar:'تفاصيل أكثر' },
  menu:    { tr:'Menü', en:'Menu', de:'Menü', ru:'Меню', ar:'القائمة' },
  contact: { tr:'İletişim', en:'Contact', de:'Kontakt', ru:'Контакты', ar:'اتصل بنا' },
  address: { tr:'Adres', en:'Address', de:'Adresse', ru:'Адрес', ar:'العنوان' },
  sendEmail:{ tr:'E-posta Gönder', en:'Send Email', de:'E-Mail senden', ru:'Написать письмо', ar:'أرسل بريدًا إلكترونيًا' },
};

// Positioning inspired by sector leaders (development partner, rollers for the extreme)
export const positioning = {
  tr: 'Kaplı merdanede güvenilir geliştirme ortağınız.',
  en: 'Your reliable development partner in coated rollers.',
  de: 'Ihr zuverlässiger Entwicklungspartner für beschichtete Walzen.', ru:'Ваш надёжный партнёр по разработке валов с покрытием.', ar:'شريككم الموثوق في تطوير الأسطوانات المكسوّة.',
};

export const nav = {
  tr: [['/kurumsal/','Kurumsal'],['/urunler/','Ürünler'],['/hizmetler/','Hizmetler'],['/sektorler/','Sektörler'],['/galeri/','Portföy'],['/referanslar/','Referanslar'],['/iletisim/','İletişim']],
  en: [['/en/kurumsal/','Corporate'],['/en/urunler/','Products'],['/en/hizmetler/','Services'],['/en/sektorler/','Industries'],['/en/galeri/','Portfolio'],['/en/referanslar/','References'],['/en/iletisim/','Contact']],
  de: [['/de/kurumsal/','Unternehmen'],['/de/urunler/','Produkte'],['/de/hizmetler/','Leistungen'],['/de/sektorler/','Branchen'],['/de/galeri/','Portfolio'],['/de/referanslar/','Referenzen'],['/de/iletisim/','Kontakt']],
  ru: [['/ru/kurumsal/','О компании'],['/ru/urunler/','Продукция'],['/ru/hizmetler/','Услуги'],['/ru/sektorler/','Отрасли'],['/ru/galeri/','Портфолио'],['/ru/referanslar/','Референсы'],['/ru/iletisim/','Контакты']],
  ar: [['/ar/kurumsal/','عن الشركة'],['/ar/urunler/','المنتجات'],['/ar/hizmetler/','الخدمات'],['/ar/sektorler/','القطاعات'],['/ar/galeri/','معرض الأعمال'],['/ar/referanslar/','المراجع'],['/ar/iletisim/','اتصل بنا']],
} as const;

// Extra pages surfaced in the footer menu (not the top bar)
export const footerExtra = {
  tr: [['/uretim/','Üretim & Tesis'],['/kalite/','Kalite & Garanti'],['/belgeler/','Sertifikalar'],['/teklif/','Teklif Formu'],['/rehber/kaucuk-mu-poliuretan-mi/','Kauçuk mu, PU mu?'],['/sozluk/','Sözlük'],['/sss/','S.S.S.'],['/gizlilik/','Gizlilik & KVKK']],
  en: [['/en/uretim/','Production'],['/en/kalite/','Quality & Warranty'],['/en/belgeler/','Certificates'],['/en/teklif/','Quote form'],['/en/rehber/kaucuk-mu-poliuretan-mi/','Rubber or PU?'],['/en/sozluk/','Glossary'],['/en/sss/','FAQ'],['/en/gizlilik/','Privacy']],
  de: [['/de/uretim/','Produktion'],['/de/kalite/','Qualität & Garantie'],['/de/belgeler/','Zertifikate'],['/de/teklif/','Angebotsformular'],['/de/rehber/kaucuk-mu-poliuretan-mi/','Gummi oder PU?'],['/de/sozluk/','Glossar'],['/de/sss/','FAQ'],['/de/gizlilik/','Datenschutz']],
  ru: [['/ru/uretim/','Производство'],['/ru/kalite/','Качество и гарантия'],['/ru/belgeler/','Сертификаты'],['/ru/teklif/','Форма запроса'],['/ru/rehber/kaucuk-mu-poliuretan-mi/','Резина или ПУ?'],['/ru/sozluk/','Словарь'],['/ru/sss/','Вопросы и ответы'],['/ru/gizlilik/','Конфиденциальность']],
  ar: [['/ar/uretim/','الإنتاج والمنشأة'],['/ar/kalite/','الجودة والضمان'],['/ar/belgeler/','الشهادات'],['/ar/teklif/','نموذج طلب عرض سعر'],['/ar/rehber/kaucuk-mu-poliuretan-mi/','مطاط أم بولي يوريثان؟'],['/ar/sozluk/','المعجم'],['/ar/sss/','الأسئلة الشائعة'],['/ar/gizlilik/','الخصوصية']],
} as const;

export const visionMission = {
  vision: {
    tr:'Kaplı merdanede Türkiye’nin ilk akla gelen üretim ve geliştirme ortağı olmak; kalite, sürat ve güvenle yurt içi ve dışında referans gösterilen bir marka olmak.',
    en:'To be the first name that comes to mind for coated rollers in Türkiye — a brand cited as a reference at home and abroad through quality, speed and trust.',
    de:'Bei beschichteten Walzen der erste Ansprechpartner in der Türkei zu sein – eine Marke, die durch Qualität, Schnelligkeit und Vertrauen im In- und Ausland als Referenz gilt.', ru:'Стать первым, о ком думают в Турции, когда речь идёт о валах с покрытием; быть маркой, на которую ссылаются в стране и за рубежом благодаря качеству, скорости и надёжности.', ar:'أن نكون الاسم الأول الذي يتبادر إلى الذهن في تركيا في مجال الأسطوانات المكسوّة، وأن نصبح علامة يُستشهد بها داخل البلاد وخارجها بفضل الجودة والسرعة والثقة.'
  },
  mission: {
    tr:'Ar-Ge temelli formüller ve mühendislik disipliniyle, her müşterinin çalışma şartlarına birebir uygun, uzun ömürlü ve güvenilir merdaneler üretmek.',
    en:'To produce long-lasting, reliable rollers tailored precisely to each customer’s operating conditions, driven by R&D-based formulas and engineering discipline.',
    de:'Langlebige, zuverlässige Walzen zu fertigen, die exakt auf die Betriebsbedingungen jedes Kunden zugeschnitten sind – getragen von F&E-Formeln und Ingenieurdisziplin.', ru:'Опираясь на формулы собственной разработки и инженерную дисциплину, производить долговечные и надёжные валы, точно соответствующие условиям работы каждого заказчика.', ar:'إنتاج أسطوانات طويلة العمر وموثوقة تتوافق تمامًا مع ظروف تشغيل كل عميل، اعتمادًا على تركيبات قائمة على البحث والتطوير وانضباط هندسي.'
  }
};

// Cities we serve (coverage) — real Turkish textile/industry hubs
export const coverage = ['İstanbul','Bursa','Gaziantep','Kayseri','Kırklareli','Denizli','Uşak','Kahramanmaraş','Adana','Tekirdağ','Adıyaman','Malatya','İzmir','Çorlu','Şanlıurfa'];

export const stats = [
  { tr:'Yıllık tecrübe', en:'Years of expertise', de:'Jahre Erfahrung', ru:'Лет опыта', ar:'سنة خبرة', value:'25+' },
  { tr:'Hizmet verilen sektör', en:'Industries served', de:'Belieferte Branchen', ru:'Обслуживаемых отраслей', ar:'قطاعًا نخدمه', value:'8' },
  { tr:'Max kaplama çapı', en:'Max coating diameter', de:'Max. Beschichtungs-Ø', ru:'Макс. диаметр покрытия', ar:'أقصى قطر للتكسية', value:'Ø1200mm' },
  { tr:'Max kaplama boyu', en:'Max coating length', de:'Max. Beschichtungslänge', ru:'Макс. длина покрытия', ar:'أقصى طول للتكسية', value:'7000mm' },
];

export const productLines = [
  {
    slug: 'merteks-kaucuk', accent: '#D62B23', img: '/gallery/grafit-kaucuk-merdaneler.webp', img2: '/gallery/kaucuk-kapli-merdane-seti.webp',
    name: { tr:'MERTEKS — Kauçuk Seydel', en:'MERTEKS — Rubber Seydel', de:'MERTEKS — Gummi-Seydel', ru:'MERTEKS — резиновый Seydel', ar:'MERTEKS — سيدل مطاطي' },
    tagline: { tr:'Kauçuk kaplı Seydel silindirleri', en:'Rubber-coated Seydel cylinders', de:'Gummibeschichtete Seydel-Walzen', ru:'Валы Seydel с резиновым покрытием', ar:'أسطوانات سيدل مكسوّة بالمطاط' },
    body: {
      tr:'Karışıma ilave edilen özel kimyasallar sayesinde yüzeyde ve iç yapıda ısı barındırmayan, antistatik ve kaygan yüzeyli kauçuk kaplamalar. Akrilik elyaf-iplik sektöründeki TWO / NSC / Seydel makineleri için koparma ve converter merdaneleri olarak özel üretilir.',
      en:'Rubber coatings that retain no heat on the surface or inner body thanks to proprietary chemical additives, with antistatic and low-friction surfaces. Custom-made as breaking and converter rollers for TWO / NSC / Seydel machines in the acrylic fiber-yarn sector.',
      de:'Gummibeschichtungen, die dank spezieller chemischer Additive weder an der Oberfläche noch im Kern Wärme speichern – antistatisch und mit gleitfähiger Oberfläche. Als Abreiß- und Converter-Walzen für TWO- / NSC- / Seydel-Maschinen in der Acryl-Faser-Garn-Branche gefertigt.', ru:'Благодаря специальным химическим добавкам в смеси резиновые покрытия не удерживают тепло ни на поверхности, ни во внутренней структуре, обладают антистатическими свойствами и скользкой поверхностью. Изготавливаются специально как отрывные и конверторные валы для машин TWO / NSC / Seydel в производстве акрилового волокна и пряжи.', ar:'بفضل المواد الكيميائية الخاصة المضافة إلى الخلطة، لا تحتفظ التكسيات المطاطية بالحرارة على السطح ولا في البنية الداخلية، وتتميّز بخاصية مضادة للكهرباء الساكنة وسطح انزلاقي. وتُنتَج خصيصًا كأسطوانات قطع وتحويل لآلات TWO / NSC / Seydel في قطاع الألياف والغزل الأكريليكي.'
    }
  },
  {
    slug: 'merpolon-poliuretan', accent: '#16233F', img: '/gallery/poliuretan-kapli-besleme-merdaneleri.webp', img2: '/gallery/poliuretan-merdane-uretimi.webp',
    name: { tr:'MERPOLON — Poliüretan Seydel', en:'MERPOLON — Polyurethane Seydel', de:'MERPOLON — Polyurethan-Seydel', ru:'MERPOLON — полиуретановый Seydel', ar:'MERPOLON — سيدل بولي يوريثان' },
    tagline: { tr:'Poliüretan kaplı Seydel silindirleri', en:'Polyurethane-coated Seydel cylinders', de:'Polyurethanbeschichtete Seydel-Walzen', ru:'Валы Seydel с полиуретановым покрытием', ar:'أسطوانات سيدل مكسوّة بالبولي يوريثان' },
    body: {
      tr:'Laboratuvar ortamında uzman ekibimizce hazırlanan poliüretan Seydel merdaneleri; üstün aşınma ve yırtılma mukavemeti, çalışma ısısını dışarı atan yapısı ve çalışma boyunca sabit kalan sertlik (SHA) değeri ile öne çıkar.',
      en:'Polyurethane Seydel rollers prepared by our specialists in a laboratory environment; they stand out with superior abrasion and tear resistance, heat-dissipating structure, and a hardness (Shore A) value that stays constant throughout operation.',
      de:'Von unseren Fachleuten im Labor entwickelte Polyurethan-Seydel-Walzen überzeugen durch hervorragende Abrieb- und Reißfestigkeit, wärmeableitende Struktur und eine über die gesamte Betriebsdauer konstante Härte (Shore A).', ru:'Полиуретановые валы Seydel, разрабатываемые нашей командой в лабораторных условиях, отличаются высокой стойкостью к износу и разрыву, структурой, отводящей рабочее тепло, и твёрдостью (Shore A), остающейся неизменной в течение всего срока службы.', ar:'تتميّز أسطوانات سيدل البولي يوريثانية، التي يُعدّها فريقنا المتخصص في المختبر، بمقاومة فائقة للتآكل والتمزّق، وببنية تطرد حرارة التشغيل، وبقيمة صلادة (شور A) تبقى ثابتة طوال فترة العمل.'
    }
  }
];

export const seydelTypes = [
  { type:'870', od:280, id:238, length:408 },
  { type:'679', od:282, id:250, length:410 },
  { type:'671', od:248, id:220, length:258 },
  { type:'Tematex', od:272, id:236, length:370 },
];

export const features = [
  { icon:'thermometer', tr:'Isı barındırmaz', en:'Retains no heat', de:'Speichert keine Wärme', ru:'Не удерживает тепло', ar:'لا تحتفظ بالحرارة', d:{tr:'Yüzey ve iç yapıda çalışma ısısını dışarı atar.', en:'Dissipates operating heat from surface and core.', de:'Leitet die Betriebswärme von Oberfläche und Kern ab.', ru:'Отводит рабочее тепло с поверхности и из внутренней структуры.', ar:'تطرد حرارة التشغيل من السطح والبنية الداخلية.'} },
  { icon:'shield', tr:'Max aşınma direnci', en:'Max wear resistance', de:'Max. Verschleißfestigkeit', ru:'Макс. износостойкость', ar:'أقصى مقاومة للتآكل', d:{tr:'Aşınma ve yırtılmalara üstün mukavemet.', en:'Superior resistance to abrasion and tearing.', de:'Hervorragende Beständigkeit gegen Abrieb und Risse.', ru:'Высокая прочность на износ и разрыв.', ar:'مقاومة فائقة للتآكل والتمزّق.'} },
  { icon:'gauge', tr:'Sabit sertlik (SHA)', en:'Constant hardness', de:'Konstante Härte', ru:'Стабильная твёрдость (Shore A)', ar:'صلادة ثابتة (شور A)', d:{tr:'Çalışma boyunca Shore A değeri sabit kalır.', en:'Shore A value stays constant during operation.', de:'Der Shore-A-Wert bleibt im Betrieb konstant.', ru:'Значение Shore A остаётся постоянным в течение всей работы.', ar:'تبقى قيمة شور A ثابتة طوال فترة التشغيل.'} },
  { icon:'zap-off', tr:'Antistatik', en:'Antistatic', de:'Antistatisch', ru:'Антистатичность', ar:'مضاد للكهرباء الساكنة', d:{tr:'Elektriklenme ve sarma sorunu oluşmaz.', en:'No static build-up or winding problems.', de:'Keine statische Aufladung, keine Wickelprobleme.', ru:'Не возникает статики и наматывания материала.', ar:'لا تحدث مشكلات الشحن الكهربائي أو التفاف المادة.'} },
  { icon:'link', tr:'Mükemmel yapışma', en:'Perfect adhesion', de:'Perfekte Haftung', ru:'Идеальная адгезия', ar:'التصاق مثالي', d:{tr:'Özel teknikle kauçuğun metale yapışması kusursuz.', en:'Flawless rubber-to-metal bond via our technique.', de:'Makellose Gummi-Metall-Bindung durch unser Verfahren.', ru:'Особая техника обеспечивает безупречное сцепление резины с металлом.', ar:'تقنية خاصة تضمن التصاق المطاط بالمعدن بشكل مثالي.'} },
  { icon:'cpu', tr:'ST52 çelik çekirdek', en:'ST52 steel core', de:'ST52-Stahlkern', ru:'Стальной сердечник ST52', ar:'قلب فولاذي ST52', d:{tr:'Özel alaşımlı ST52 çelikten CNC ile imal edilir.', en:'Machined from special ST52 alloy steel on CNC.', de:'Aus ST52-Spezialstahl auf CNC-Maschinen gefertigt.', ru:'Изготавливается на станках с ЧПУ из легированной стали ST52.', ar:'يُصنَّع بماكينات CNC من فولاذ ST52 المسبوك الخاص.'} },
];

export const services = [
  { tr:'Kauçuk & Poliüretan Kaplama', en:'Rubber & PU Coating', de:'Gummi- & PU-Beschichtung', ru:'Резиновое и полиуретановое покрытие', ar:'تكسية بالمطاط والبولي يوريثان', d:{tr:'Ø1200mm × 7000mm boya kadar merdane kaplama.', en:'Roller coating up to Ø1200mm × 7000mm.', de:'Walzenbeschichtung bis Ø1200mm × 7000mm.', ru:'Покрытие валов диаметром до Ø1200 мм и длиной до 7000 мм.', ar:'تكسية أسطوانات حتى قطر Ø1200 مم وطول 7000 مم.'} },
  { tr:'Rektifiye Taşlama', en:'Precision Grinding', de:'Präzisionsschleifen', ru:'Прецизионное шлифование', ar:'جلخ دقيق', d:{tr:'Düz, konik ve bombeli taşlama.', en:'Flat, conical and crowned grinding.', de:'Zylindrisches, konisches und balliges Schleifen.', ru:'Цилиндрическое, коническое и бомбированное шлифование.', ar:'جلخ مستقيم ومخروطي ومحدّب.'} },
  { tr:'Kanal Açma', en:'Channel Grooving', de:'Rillen & Nuten', ru:'Нарезка канавок', ar:'فتح الأخاديد', d:{tr:'Baklava, helis ve özel kanal profilleri.', en:'Diamond, helix and custom channel profiles.', de:'Rauten-, Helix- und Sonderprofile.', ru:'Ромбические, винтовые и специальные профили канавок.', ar:'أخاديد معيّنية ولولبية وبروفيلات خاصة.'} },
  { tr:'Özel Kalıp & Pres İmalat', en:'Custom Mold & Press', de:'Formen- & Pressenbau', ru:'Изготовление в спецформах и на прессе', ar:'تصنيع بقوالب خاصة ومكابس', d:{tr:'Rebrakır, çekim ve finisör merdaneleri.', en:'Rebreaker, drawing and finisher rollers.', de:'Rebreaker-, Streck- und Finisher-Walzen.', ru:'Валы rebreaker, тянущие и финишные.', ar:'أسطوانات ريبريكر والسحب والتشطيب.'} },
];

// group: 'tekstil' | 'baski' | 'sanayi'
export const sectors = [
  { slug:'tekstil', icon:'shirt',      group:'tekstil', tr:'Tekstil', en:'Textile', de:'Textil', ru:'Текстиль', ar:'النسيج' },
  { slug:'elyaf-iplik', icon:'git-commit', group:'tekstil', tr:'Elyaf & İplik', en:'Fiber & Yarn', de:'Faser & Garn', ru:'Волокно и пряжа', ar:'الألياف والغزل' },
  { slug:'hali-yer-dosemesi', icon:'gauge',      group:'tekstil', tr:'Halı & Yer Döşemesi', en:'Carpet & Flooring', de:'Teppich & Bodenbelag', ru:'Ковры и напольные покрытия', ar:'السجاد وأغطية الأرضيات' },
  { slug:'deri-branda', icon:'scissors',   group:'tekstil', tr:'Deri & Branda', en:'Leather & Tarpaulin', de:'Leder & Plane', ru:'Кожа и тенты', ar:'الجلود والمشمّع' },
  { slug:'baski-matbaa', icon:'printer',    group:'baski',   tr:'Baskı & Matbaa', en:'Printing', de:'Druck', ru:'Печать и типография', ar:'الطباعة والمطابع' },
  { slug:'ambalaj', icon:'package',    group:'baski',   tr:'Ambalaj', en:'Packaging', de:'Verpackung', ru:'Упаковка', ar:'التغليف' },
  { slug:'oluklu-mukavva', icon:'box',        group:'baski',   tr:'Oluklu Mukavva', en:'Corrugated Board', de:'Wellpappe', ru:'Гофрокартон', ar:'الكرتون المضلّع' },
  { slug:'etiket-bandrol', icon:'layers',     group:'baski',   tr:'Etiket & Bandrol', en:'Label & Tag', de:'Etikett & Banderole', ru:'Этикетка и бандероль', ar:'الملصقات والأشرطة' },
  { slug:'kagit-tissue', icon:'newspaper',  group:'baski',   tr:'Kağıt & Tissue', en:'Paper & Tissue', de:'Papier & Tissue', ru:'Бумага и тиссью', ar:'الورق والمناديل' },
  { slug:'film-folyo', icon:'film',       group:'baski',   tr:'Film & Folyo', en:'Film & Foil', de:'Folie & Film', ru:'Плёнка и фольга', ar:'الأفلام والرقائق' },
  { slug:'ofset-merdanesi', icon:'roller',     group:'baski',   tr:'Ofset Merdanesi', en:'Offset Roller', de:'Offsetwalze', ru:'Офсетный вал', ar:'أسطوانة أوفست' },
  { slug:'murekkep-merdanesi', icon:'brush',      group:'baski',   tr:'Mürekkep Merdanesi', en:'Ink Roller', de:'Farbwalze', ru:'Красочный вал', ar:'أسطوانة الحبر' },
  { slug:'su-nemlendirme-merdanesi', icon:'droplet',    group:'baski',   tr:'Su (Nemlendirme) Merdanesi', en:'Dampening Roller', de:'Feuchtwalze', ru:'Увлажняющий (водяной) вал', ar:'أسطوانة الماء (الترطيب)' },
  { slug:'demir-celik', icon:'factory',    group:'sanayi',  tr:'Demir & Çelik', en:'Iron & Steel', de:'Eisen & Stahl', ru:'Чёрная металлургия', ar:'الحديد والصلب' },
  { slug:'aluminyum-sac', icon:'grid',       group:'sanayi',  tr:'Alüminyum & Sac', en:'Aluminium & Sheet', de:'Aluminium & Blech', ru:'Алюминий и листовой металл', ar:'الألمنيوم والصفائح' },
  { slug:'ahsap-cam', icon:'square',     group:'sanayi',  tr:'Ahşap & Cam', en:'Wood & Glass', de:'Holz & Glas', ru:'Дерево и стекло', ar:'الخشب والزجاج' },
  { slug:'metal-imalat', icon:'wrench',     group:'sanayi',  tr:'Metal İmalat', en:'Metal Manufacturing', de:'Metallverarbeitung', ru:'Металлообработка', ar:'التصنيع المعدني' },
  { slug:'kaucuk-plastik', icon:'flame',      group:'sanayi',  tr:'Kauçuk & Plastik', en:'Rubber & Plastic', de:'Gummi & Kunststoff', ru:'Резина и пластик', ar:'المطاط والبلاستيك' },
  { slug:'kablo-tel', icon:'bolt',       group:'sanayi',  tr:'Kablo & Tel', en:'Cable & Wire', de:'Kabel & Draht', ru:'Кабель и проволока', ar:'الكابلات والأسلاك' },
  { slug:'otomotiv-yan-sanayi', icon:'car',        group:'sanayi',  tr:'Otomotiv Yan Sanayi', en:'Automotive Supply', de:'Automobilzulieferer', ru:'Автокомпоненты', ar:'الصناعات المغذية للسيارات' },
  { slug:'boya-kaplama', icon:'droplet',    group:'sanayi',  tr:'Boya & Kaplama', en:'Paint & Coating', de:'Lack & Beschichtung', ru:'Краски и покрытия', ar:'الدهانات والطلاءات' },
];

export const sectorGroups = [
  { key:'tekstil', tr:'Tekstil & Elyaf', en:'Textile & Fiber', de:'Textil & Faser', ru:'Текстиль и волокно', ar:'النسيج والألياف' },
  { key:'baski',   tr:'Baskı & Ambalaj', en:'Printing & Packaging', de:'Druck & Verpackung', ru:'Печать и упаковка', ar:'الطباعة والتغليف' },
  { key:'sanayi',  tr:'Ağır Sanayi & İmalat', en:'Heavy Industry & Manufacturing', de:'Schwerindustrie & Fertigung', ru:'Тяжёлая промышленность и производство', ar:'الصناعات الثقيلة والتصنيع' },
];

export const sectorDetail = {
  'Tekstil':{tr:'Terbiye ve apre hatları için antistatik, ısı barındırmayan kaplamalar.', en:'Antistatic, heat-free coatings for finishing and dyeing lines.', de:'Antistatische, wärmefreie Beschichtungen für Ausrüstung und Veredelung.', ru:'Антистатические, не удерживающие тепло покрытия для линий отделки и аппретирования.', ar:'تكسيات مضادة للكهرباء الساكنة ولا تحتفظ بالحرارة لخطوط التجهيز والتنعيم.'},
  'Elyaf & İplik':{tr:'Akrilik elyaf-iplikte TWO/NSC/Seydel makineleri için koparma ve converter merdaneleri.', en:'Breaking and converter rollers for TWO/NSC/Seydel machines in acrylic fiber-yarn.', de:'Abreiß- und Converter-Walzen für TWO/NSC/Seydel-Maschinen in Acryl-Faser-Garn.', ru:'Отрывные и конверторные валы для машин TWO/NSC/Seydel в производстве акрилового волокна и пряжи.', ar:'أسطوانات قطع وتحويل لآلات TWO/NSC/Seydel في الألياف والغزل الأكريليكي.'},
  'Halı & Yer Döşemesi':{tr:'Tafting ve kaplama hatlarında sabit sertlikte, izsiz besleme merdaneleri.', en:'Constant-hardness, mark-free feed rollers for tufting and coating lines.', de:'Zuführwalzen mit konstanter Härte, markierungsfrei, für Tufting- und Beschichtungslinien.', ru:'Питающие валы стабильной твёрдости, не оставляющие следов, для тафтинговых и покрывных линий.', ar:'أسطوانات تغذية بصلادة ثابتة ولا تترك أثرًا في خطوط التفتيت والتكسية.'},
  'Deri & Branda':{tr:'Kaplama ve pres uygulamaları için esnek, dayanıklı kauçuk yüzeyler.', en:'Flexible, durable rubber surfaces for coating and press applications.', de:'Flexible, langlebige Gummioberflächen für Beschichtung und Presse.', ru:'Гибкие и прочные резиновые поверхности для нанесения покрытий и прессования.', ar:'أسطح مطاطية مرنة ومتينة لتطبيقات التكسية والكبس.'},
  'Baskı & Matbaa':{tr:'Flekso ve ofset hatları için hassas, homojen mürekkep transferi sağlayan merdaneler.', en:'Rollers for flexo and offset lines ensuring precise, even ink transfer.', de:'Walzen für Flexo- und Offsetlinien mit präzisem, gleichmäßigem Farbübertrag.', ru:'Валы, обеспечивающие точный и равномерный перенос краски на флексо- и офсетных линиях.', ar:'أسطوانات تضمن نقل حبر دقيق ومتجانس لخطوط الفلكسو والأوفست.'},
  'Ambalaj':{tr:'Baskı ve laminasyon hatları için aşınmaya dayanıklı, sabit sertlikte merdaneler.', en:'Wear-resistant, constant-hardness rollers for printing and lamination lines.', de:'Verschleißfeste Walzen mit konstanter Härte für Druck- und Kaschierlinien.', ru:'Износостойкие валы стабильной твёрдости для линий печати и ламинирования.', ar:'أسطوانات مقاومة للتآكل بصلادة ثابتة لخطوط الطباعة والتغليف بالرقائق.'},
  'Oluklu Mukavva':{tr:'Yüksek hızlı oluklu hatlarda dayanıklı besleme ve pres merdaneleri.', en:'Durable feed and press rollers for high-speed corrugating lines.', de:'Langlebige Zuführ- und Presswalzen für schnelllaufende Wellpappenanlagen.', ru:'Прочные питающие и прессовые валы для высокоскоростных гофролиний.', ar:'أسطوانات تغذية وكبس متينة لخطوط الكرتون المضلّع عالية السرعة.'},
  'Etiket & Bandrol':{tr:'Dar en baskı ve kesim hatları için hassas toleranslı silindirler.', en:'Tight-tolerance cylinders for narrow-web printing and die-cutting.', de:'Walzen mit engen Toleranzen für Schmalbahndruck und Stanzen.', ru:'Цилиндры с высокой точностью допусков для узкорулонной печати и резки.', ar:'أسطوانات بتفاوتات دقيقة لخطوط الطباعة والقص ضيّقة العرض.'},
  'Kağıt & Tissue':{tr:'Yüksek hızda çalışan pres ve kalender merdanelerinde stabil yüzey performansı.', en:'Stable surface performance on high-speed press and calender rollers.', de:'Stabile Oberflächenleistung an schnelllaufenden Pressen- und Kalanderwalzen.', ru:'Стабильная работа поверхности прессовых и каландровых валов на высоких скоростях.', ar:'أداء سطحي مستقر لأسطوانات الكبس والكلندر العاملة بسرعات عالية.'},
  'Film & Folyo':{tr:'İnce film ve folyo işleme hatlarında kaygan, izsiz taşıma yüzeyleri.', en:'Smooth, mark-free transport surfaces for thin film and foil lines.', de:'Glatte, markierungsfreie Transportflächen für Dünnfilm- und Folienlinien.', ru:'Скользящие транспортирующие поверхности без следов для линий обработки тонкой плёнки и фольги.', ar:'أسطح نقل انزلاقية لا تترك أثرًا في خطوط معالجة الأفلام والرقائق الرقيقة.'},
  'Ofset Merdanesi':{tr:'Ofset baskı ünitelerinde homojen baskı ve uzun ömür için hassas kaplı merdaneler.', en:'Precision-coated rollers for even print and long life in offset printing units.', de:'Präzisionsbeschichtete Walzen für gleichmäßigen Druck und lange Standzeit in Offsetwerken.', ru:'Прецизионные валы с покрытием для равномерной печати и долгого срока службы в офсетных секциях.', ar:'أسطوانات مكسوّة بدقة لطباعة متجانسة وعمر طويل في وحدات الأوفست.'},
  'Mürekkep Merdanesi':{tr:'Mürekkebi film halinde dağıtan, aşınmaya ve çözücülere dirençli kaplamalar.', en:'Coatings that spread ink in an even film, resistant to wear and solvents.', de:'Beschichtungen, die Farbe als gleichmäßigen Film verteilen – verschleiß- und lösemittelbeständig.', ru:'Покрытия, распределяющие краску тонкой плёнкой и стойкие к износу и растворителям.', ar:'تكسيات توزّع الحبر كطبقة رقيقة وتقاوم التآكل والمذيبات.'},
  'Su (Nemlendirme) Merdanesi':{tr:'Nemlendirme ünitelerinde dengeli su transferi sağlayan özel yüzeyli merdaneler.', en:'Special-surface rollers for balanced water transfer in dampening units.', de:'Walzen mit Spezialoberfläche für ausgewogenen Wassertransfer in Feuchtwerken.', ru:'Валы со специальной поверхностью для сбалансированного переноса воды в увлажняющих секциях.', ar:'أسطوانات بسطح خاص تضمن نقل ماء متوازن في وحدات الترطيب.'},
  'Demir & Çelik':{tr:'Ağır sanayi hatlarında yüksek yük altında uzun ömür.', en:'Long service life under heavy loads in heavy-industry lines.', de:'Lange Lebensdauer unter hoher Last in der Schwerindustrie.', ru:'Долгий срок службы под высокой нагрузкой на линиях тяжёлой промышленности.', ar:'عمر طويل تحت أحمال عالية في خطوط الصناعات الثقيلة.'},
  'Alüminyum & Sac':{tr:'Sac ve alüminyum işleme hatlarında hassas, çizmeyen besleme merdaneleri.', en:'Precise, non-marking feed rollers for sheet and aluminium lines.', de:'Präzise, nicht markierende Zuführwalzen für Blech- und Aluminiumlinien.', ru:'Точные, не царапающие питающие валы для линий обработки листа и алюминия.', ar:'أسطوانات تغذية دقيقة لا تخدش في خطوط معالجة الصفائح والألمنيوم.'},
  'Ahşap & Cam':{tr:'Hassas besleme ve taşıma merdaneleri için kaygan, izsiz yüzeyler.', en:'Smooth, mark-free surfaces for precise feeding and transport rollers.', de:'Glatte, markierungsfreie Oberflächen für Zuführ- und Transportwalzen.', ru:'Скользящие поверхности без следов для точных питающих и транспортирующих валов.', ar:'أسطح انزلاقية بلا أثر لأسطوانات التغذية والنقل الدقيقة.'},
  'Metal İmalat':{tr:'Şekillendirme ve besleme hatlarında hassas toleranslı silindirler.', en:'Tight-tolerance cylinders for forming and feeding lines.', de:'Walzen mit engen Toleranzen für Umform- und Zuführlinien.', ru:'Цилиндры с точными допусками для линий формовки и подачи.', ar:'أسطوانات بتفاوتات دقيقة في خطوط التشكيل والتغذية.'},
  'Kauçuk & Plastik':{tr:'Kalenderleme ve ekstrüzyon hatlarında ısıya dayanıklı, sabit sertlikte merdaneler.', en:'Heat-resistant, constant-hardness rollers for calendering and extrusion.', de:'Hitzebeständige Walzen mit konstanter Härte für Kalandrier- und Extrusionslinien.', ru:'Термостойкие валы стабильной твёрдости для каландровых и экструзионных линий.', ar:'أسطوانات مقاومة للحرارة بصلادة ثابتة في خطوط الكلندر والبثق.'},
  'Kablo & Tel':{tr:'Çekim ve sarım hatlarında yüksek aşınma dirençli çekiş merdaneleri.', en:'High-wear-resistance haul-off rollers for drawing and winding lines.', de:'Verschleißfeste Abzugswalzen für Zieh- und Wickellinien.', ru:'Тянущие валы высокой износостойкости для линий вытяжки и намотки.', ar:'أسطوانات سحب عالية مقاومة التآكل في خطوط السحب واللف.'},
  'Otomotiv Yan Sanayi':{tr:'Conta, keçe ve kaplama üretiminde hassas toleranslı silindirler.', en:'Tight-tolerance cylinders for gasket, seal and coating production.', de:'Walzen mit engen Toleranzen für Dichtungs-, Filz- und Beschichtungsfertigung.', ru:'Цилиндры с точными допусками для производства прокладок, войлока и покрытий.', ar:'أسطوانات بتفاوتات دقيقة في إنتاج الحشيات واللباد والتكسيات.'},
  'Boya & Kaplama':{tr:'Lak, vernik ve tutkal uygulamalarında homojen film dağıtan merdaneler.', en:'Rollers that spread an even film in lacquer, varnish and adhesive lines.', de:'Walzen für gleichmäßigen Filmauftrag bei Lack-, Firnis- und Klebelinien.', ru:'Валы, равномерно распределяющие плёнку лака, эмали и клея.', ar:'أسطوانات توزّع طبقة متجانسة من الورنيش واللك والغراء.'},
};

export const process = [
  { no:'01', icon:'cpu', tr:'Çelik Çekirdek İmalatı', en:'Steel Core Machining', de:'Stahlkern-Fertigung', ru:'Изготовление стального сердечника', ar:'تصنيع القلب الفولاذي', d:{tr:'Özel alaşımlı ST52 çelikten CNC tezgahlarda hassas çekirdek üretimi.', en:'Precision cores machined from special ST52 alloy steel on CNC lathes.', de:'Präzisionskerne aus ST52-Spezialstahl auf CNC-Maschinen.', ru:'Прецизионное изготовление сердечников из легированной стали ST52 на станках с ЧПУ.', ar:'إنتاج دقيق للأقلاب من فولاذ ST52 المسبوك على ماكينات CNC.'} },
  { no:'02', icon:'link', tr:'Özel Yapıştırma', en:'Proprietary Bonding', de:'Spezielle Bindung', ru:'Специальное сцепление', ar:'لصق خاص', d:{tr:'Kauçuğun metale mükemmel yapışması için özel ara katman tekniği.', en:'Special interlayer technique for a flawless rubber-to-metal bond.', de:'Spezielle Zwischenschicht-Technik für perfekte Gummi-Metall-Bindung.', ru:'Особая техника промежуточного слоя для идеального сцепления резины с металлом.', ar:'تقنية طبقة وسيطة خاصة لالتصاق المطاط بالمعدن بشكل مثالي.'} },
  { no:'03', icon:'gauge', tr:'Kaplama & Vulkanizasyon', en:'Coating & Vulcanising', de:'Beschichtung & Vulkanisation', ru:'Покрытие и вулканизация', ar:'التكسية والفلكنة', d:{tr:'Ar-Ge formüllü karışımla Ø1200mm×7000mm’e kadar kaplama.', en:'R&D-formulated compound, coating up to Ø1200mm×7000mm.', de:'F&E-Mischung, Beschichtung bis Ø1200mm×7000mm.', ru:'Покрытие смесью собственной разработки до Ø1200 мм × 7000 мм.', ar:'تكسية بخلطة من تطويرنا حتى Ø1200 مم × 7000 مم.'} },
  { no:'04', icon:'shield', tr:'Taşlama & Kanal', en:'Grinding & Grooving', de:'Schleifen & Rillen', ru:'Шлифование и канавки', ar:'الجلخ والأخاديد', d:{tr:'Düz/konik/bombeli rektifiye ve baklava/helis kanal açma.', en:'Flat/conical/crowned grinding and diamond/helix grooving.', de:'Zylindrisches/koniges/balliges Schleifen und Rauten-/Helix-Rillen.', ru:'Цилиндрическое/коническое/бомбированное шлифование и нарезка ромбических/винтовых канавок.', ar:'جلخ مستقيم/مخروطي/محدّب وفتح أخاديد معيّنية/لولبية.'} },
  { no:'05', icon:'check', tr:'Kalite Kontrol', en:'Quality Control', de:'Qualitätskontrolle', ru:'Контроль качества', ar:'مراقبة الجودة', d:{tr:'Sertlik (Shore A), çap ve balans kontrolü; 3 ay garanti.', en:'Hardness (Shore A), diameter and balance checks; 3-month warranty.', de:'Härte- (Shore A), Durchmesser- und Wuchtprüfung; 3 Monate Garantie.', ru:'Контроль твёрдости (Shore A), диаметра и балансировки; гарантия 3 месяца.', ar:'فحص الصلادة (شور A) والقطر والاتزان؛ ضمان 3 أشهر.'} },
];

export const faqs = [
  { q:{tr:'Hangi sertlik (Shore A) değerlerinde üretim yapıyorsunuz?', en:'Which hardness (Shore A) values do you produce?', de:'Welche Härten (Shore A) fertigen Sie?', ru:'В каком диапазоне твёрдости (Shore A) вы производите?', ar:'ما قيم الصلادة (شور A) التي تنتجون بها؟'},
    a:{tr:'Kauçuk sertlikleri ve kaplama çapları tamamen çalışma şartlarınıza göre üretilir. İhtiyacınızı iletin, uygun Shore A değerini birlikte belirleyelim.', en:'Rubber hardness and coating diameters are produced entirely to your operating conditions. Share your needs and we will determine the right Shore A together.', de:'Gummihärten und Beschichtungsdurchmesser fertigen wir ganz nach Ihren Betriebsbedingungen. Teilen Sie uns Ihren Bedarf mit – wir bestimmen gemeinsam den passenden Shore-A-Wert.', ru:'Твёрдость резины и диаметр покрытия подбираются полностью под ваши условия работы. Сообщите нам задачу — вместе определим подходящее значение Shore A.', ar:'تُنتَج صلادات المطاط وأقطار التكسية وفقًا لظروف تشغيلكم تمامًا. أخبرونا باحتياجكم لنحدّد معًا قيمة شور A المناسبة.'} },
  { q:{tr:'Maksimum kaplama ölçüleriniz nedir?', en:'What are your maximum coating dimensions?', de:'Wie groß sind Ihre maximalen Beschichtungsmaße?', ru:'Каковы ваши максимальные размеры покрытия?', ar:'ما أقصى مقاسات التكسية لديكم؟'},
    a:{tr:'Ø1200mm dış çapa ve 7000mm boya kadar merdane kaplayabiliyoruz.', en:'We can coat rollers up to Ø1200mm outer diameter and 7000mm length.', de:'Wir beschichten Walzen bis Ø1200mm Außendurchmesser und 7000mm Länge.', ru:'Мы покрываем валы диаметром до Ø1200 мм и длиной до 7000 мм.', ar:'يمكننا تكسية أسطوانات حتى قطر خارجي Ø1200 مم وطول 7000 مم.'} },
  { q:{tr:'Ürünlerde garanti var mı?', en:'Do the products come with a warranty?', de:'Gibt es eine Garantie auf die Produkte?', ru:'Есть ли гарантия на продукцию?', ar:'هل توجد ضمانة على المنتجات؟'},
    a:{tr:'Ürettiğimiz kauçuk silindirler imalat hatalarına karşı 3 ay garanti altındadır.', en:'Our rubber cylinders carry a 3-month warranty against manufacturing defects.', de:'Unsere Gummiwalzen haben 3 Monate Garantie gegen Fertigungsfehler.', ru:'Производимые нами резиновые валы обеспечены гарантией 3 месяца от производственных дефектов.', ar:'الأسطوانات المطاطية التي ننتجها مضمونة 3 أشهر ضد عيوب التصنيع.'} },
  { q:{tr:'Merteks ve Merpolon arasındaki fark nedir?', en:'What is the difference between Merteks and Merpolon?', de:'Was ist der Unterschied zwischen Merteks und Merpolon?', ru:'В чём разница между Merteks и Merpolon?', ar:'ما الفرق بين Merteks وMerpolon؟'},
    a:{tr:'Merteks kauçuk kaplı, Merpolon ise poliüretan kaplı Seydel silindirlerini ifade eder. Uygulamanıza göre en doğru malzemeyi öneririz.', en:'Merteks refers to rubber-coated and Merpolon to polyurethane-coated Seydel cylinders. We recommend the right material for your application.', de:'Merteks steht für gummibeschichtete, Merpolon für polyurethanbeschichtete Seydel-Walzen. Wir empfehlen das passende Material für Ihre Anwendung.', ru:'Merteks обозначает валы Seydel с резиновым покрытием, Merpolon — с полиуретановым. Мы порекомендуем материал, наиболее подходящий вашему применению.', ar:'يشير Merteks إلى أسطوانات سيدل المكسوّة بالمطاط، بينما يشير Merpolon إلى المكسوّة بالبولي يوريثان. ونوصي بالمادة الأنسب لتطبيقكم.'} },
  { q:{tr:'Eski merdanemi yeniden kaplatabilir miyim?', en:'Can you re-coat my existing roller?', de:'Können Sie meine vorhandene Walze neu beschichten?', ru:'Можно ли перепокрыть мой старый вал?', ar:'هل يمكن إعادة تكسية أسطوانتي القديمة؟'},
    a:{tr:'Evet. Mevcut çekirdeğinizi söküp yeniden kaplayarak ekonomik çözüm sunuyoruz.', en:'Yes. We strip your existing core and re-coat it for an economical solution.', de:'Ja. Wir entschichten Ihren vorhandenen Kern und beschichten ihn neu – eine wirtschaftliche Lösung.', ru:'Да. Мы снимаем старое покрытие с вашего сердечника и наносим новое — экономичное решение.', ar:'نعم. نزيل التكسية عن قلبكم الحالي ونعيد تكسيته، وهو حل اقتصادي.'} },
  { q:{tr:'Teslim süreniz ne kadar?', en:'What is your delivery time?', de:'Wie lang ist Ihre Lieferzeit?', ru:'Каковы сроки поставки?', ar:'ما مدة التسليم لديكم؟'},
    a:{tr:'Teslim süresi ölçü, adet ve kaplama tipine göre değişir. Talebinizi ilettiğinizde net bir termin veririz; acil işlerde hızlandırılmış üretim mümkündür.', en:'Delivery time depends on size, quantity and coating type. We give a firm date once you share your request, and rush production is possible for urgent jobs.', de:'Die Lieferzeit hängt von Maß, Menge und Beschichtungsart ab. Nach Ihrer Anfrage nennen wir einen festen Termin; für Eilaufträge ist eine beschleunigte Fertigung möglich.', ru:'Срок зависит от размеров, количества и типа покрытия. После получения запроса мы даём точный срок; для срочных работ возможно ускоренное производство.', ar:'تختلف مدة التسليم حسب المقاس والكمية ونوع التكسية. ونمنحكم موعدًا محددًا فور استلام طلبكم، ويمكن الإنتاج المعجّل للأعمال العاجلة.'} },
  { q:{tr:'Minimum sipariş adedi var mı?', en:'Is there a minimum order quantity?', de:'Gibt es eine Mindestbestellmenge?', ru:'Есть ли минимальный объём заказа?', ar:'هل هناك حد أدنى لكمية الطلب؟'},
    a:{tr:'Tek parça özel üretim dahil her ölçekte üretim yapıyoruz; standart bir minimum adet şartımız yoktur.', en:'We produce at any scale, including single custom pieces; there is no standard minimum order quantity.', de:'Wir fertigen in jeder Größenordnung, auch Einzelstücke; es gibt keine feste Mindestbestellmenge.', ru:'Мы работаем в любом объёме, включая единичное изготовление под заказ; стандартного минимума нет.', ar:'ننتج بجميع الأحجام بما في ذلك القطعة الواحدة المخصّصة؛ ولا يوجد لدينا حد أدنى قياسي.'} },
  { q:{tr:'Numune veya deneme üretimi yapıyor musunuz?', en:'Do you offer samples or trial production?', de:'Bieten Sie Muster oder Testfertigung an?', ru:'Изготавливаете ли вы образцы или пробные партии?', ar:'هل تنتجون عيّنات أو إنتاجًا تجريبيًا؟'},
    a:{tr:'Uygulamanıza uygun sertlik ve kaplamayı doğrulamak için deneme merdanesi üretebiliriz. Detayları birlikte planlayalım.', en:'We can produce a trial roller to validate the right hardness and coating for your application. Let us plan the details together.', de:'Wir können eine Testwalze fertigen, um Härte und Beschichtung für Ihre Anwendung zu prüfen. Planen wir die Details gemeinsam.', ru:'Мы можем изготовить пробный вал, чтобы подтвердить подходящую твёрдость и покрытие для вашего применения. Детали спланируем вместе.', ar:'يمكننا إنتاج أسطوانة تجريبية للتحقق من الصلادة والتكسية المناسبة لتطبيقكم. ولنخطّط التفاصيل معًا.'} },
  { q:{tr:'İthal / marka makinelere uygun üretim yapabilir misiniz?', en:'Can you produce for imported / branded machines?', de:'Fertigen Sie für importierte / Markenmaschinen?', ru:'Можете ли вы изготовить валы для импортных и фирменных машин?', ar:'هل يمكنكم الإنتاج بما يناسب الآلات المستوردة أو ذات العلامات التجارية؟'},
    a:{tr:'Evet. TWO, NSC, Seydel ve benzeri makinelerin merdanelerini orijinal ölçülere birebir uygun üretiyoruz.', en:'Yes. We produce rollers for TWO, NSC, Seydel and similar machines exactly to the original dimensions.', de:'Ja. Wir fertigen Walzen für TWO-, NSC-, Seydel- und ähnliche Maschinen exakt nach Originalmaßen.', ru:'Да. Мы изготавливаем валы для машин TWO, NSC, Seydel и аналогичных точно по оригинальным размерам.', ar:'نعم. ننتج أسطوانات آلات TWO وNSC وSeydel وما شابهها مطابقة تمامًا للمقاسات الأصلية.'} },
  { q:{tr:'Kaplama malzemesini (kauçuk/PU) nasıl seçmeliyim?', en:'How do I choose the coating material (rubber/PU)?', de:'Wie wähle ich das Beschichtungsmaterial (Gummi/PU)?', ru:'Как выбрать материал покрытия — резину или полиуретан?', ar:'كيف أختار مادة التكسية (مطاط أم بولي يوريثان)؟'},
    a:{tr:'Çalışma ısısı, kimyasal maruziyet, yük ve aşınma koşullarına göre öneri veriyoruz. Kısaca: antistatik/ısı için kauçuk, aşınma/yırtılma için poliüretan öne çıkar.', en:'We recommend based on operating heat, chemical exposure, load and wear conditions. In short: rubber stands out for antistatic/heat, polyurethane for abrasion/tear.', de:'Wir beraten nach Betriebswärme, chemischer Belastung, Last und Verschleiß. Kurz: Gummi für antistatisch/Wärme, Polyurethan für Abrieb/Riss.', ru:'Мы даём рекомендацию исходя из рабочей температуры, химического воздействия, нагрузки и условий износа. Коротко: для антистатики и теплоотвода — резина, для износа и разрыва — полиуретан.', ar:'نقدّم التوصية بحسب حرارة التشغيل والتعرّض الكيميائي والحمل وظروف التآكل. باختصار: المطاط للخصائص المضادة للكهرباء الساكنة وإدارة الحرارة، والبولي يوريثان لمقاومة التآكل والتمزّق.'} },
  { q:{tr:'Sevkiyatı Türkiye geneli yapıyor musunuz?', en:'Do you ship nationwide across Türkiye?', de:'Liefern Sie türkeiweit?', ru:'Осуществляете ли вы доставку по всей Турции?', ar:'هل تشحنون إلى جميع أنحاء تركيا؟'},
    a:{tr:'Evet, Türkiye’nin her yerine sevkiyat yapıyoruz. Yurt dışı gönderiler için de talebinize göre çözüm sunarız.', en:'Yes, we ship anywhere in Türkiye, and we can arrange international shipments on request.', de:'Ja, wir liefern in die ganze Türkei und organisieren auf Wunsch auch Auslandsversand.', ru:'Да, мы отправляем во все регионы Турции. Для зарубежных отправок также предлагаем решение по запросу.', ar:'نعم، نشحن إلى جميع أنحاء تركيا. ونوفّر كذلك حلولًا للشحن الدولي حسب طلبكم.'} },
];

export const galleryCats = [
  { key:'all',        tr:'Tümü', en:'All', de:'Alle', ru:'Все', ar:'الكل' },
  { key:'uretim',     tr:'Üretimimiz', en:'Our Production', de:'Unsere Fertigung', ru:'Наше производство', ar:'إنتاجنا' },
  { key:'kaucuk',     tr:'Kauçuk', en:'Rubber', de:'Gummi', ru:'Резина', ar:'المطاط' },
  { key:'poliuretan', tr:'Poliüretan', en:'Polyurethane', de:'Polyurethan', ru:'Полиуретан', ar:'البولي يوريثان' },
  { key:'baski',      tr:'Baskı', en:'Printing', de:'Druck', ru:'Печать', ar:'الطباعة' },
  { key:'uygulama',   tr:'Uygulama & Hatlar', en:'Applications & Lines', de:'Anwendungen & Linien', ru:'Применение и линии', ar:'التطبيقات والخطوط' },
  { key:'tekstil',    tr:'Tekstil', en:'Textile', de:'Textil', ru:'Текстиль', ar:'النسيج' },
  { key:'profil',     tr:'Profil & Kanal', en:'Profiles', de:'Profile', ru:'Профили и канавки', ar:'البروفيلات والأخاديد' },
  { key:'servis',     tr:'Servis & Çekirdek', en:'Service & Cores', de:'Service & Kerne', ru:'Сервис и сердечник', ar:'الخدمة والقلب' },
];

export const timeline = [
  { year:'1989', icon:'flame', yearRu:'1989', yearAr:'1989',
    tr:{t:'Temeller atıldı', d:'Seydel silindirleri ve kauçuk kaplama alanında ilk üretim ve uzmanlaşma.'},
    en:{t:'Foundations laid', d:'First production and specialisation in Seydel cylinders and rubber coating.'},
    de:{t:'Grundstein gelegt', d:'Erste Produktion und Spezialisierung auf Seydel-Walzen und Gummibeschichtung.'},
    ru:{t:'Заложены основы', d:'Первое производство и специализация в области цилиндров Seydel и резинового покрытия.'},
    ar:{t:'إرساء الأسس', d:'أول إنتاج وتخصّص في أسطوانات سيدل والتكسية المطاطية.'} },
  { year:'2000’ler', icon:'link', yearEn:'2000s', yearDe:'2000er', yearRu:'2000-е', yearAr:'سنوات 2000',
    tr:{t:'Ar-Ge & özel yapıştırma', d:'Metalden ayrılmalara son veren özel yapıştırma tekniği ve kaplama formülü geliştirildi.'},
    en:{t:'R&D & proprietary bonding', d:'Developed the bonding technique and coating formula that ended separation from the metal.'},
    de:{t:'F&E & Spezialbindung', d:'Bindetechnik und Beschichtungsformel entwickelt, die das Ablösen vom Metall beendet.'},
    ru:{t:'НИОКР и собственная склейка', d:'Разработаны техника склейки и рецептура покрытия, положившие конец отслоению от металла.'},
    ar:{t:'البحث والتطوير واللصق الخاص', d:'تطوير تقنية اللصق وتركيبة التكسية اللتين أنهتا مشكلة الانفصال عن المعدن.'} },
  { year:'Markalar', icon:'shield', yearEn:'Brands', yearDe:'Marken', yearRu:'Марки', yearAr:'العلامات',
    tr:{t:'Merteks & Merpolon', d:'Kauçuk (Merteks) ve poliüretan (Merpolon) Seydel silindirleri iki marka altında.'},
    en:{t:'Merteks & Merpolon', d:'Rubber (Merteks) and polyurethane (Merpolon) Seydel cylinders under two brands.'},
    de:{t:'Merteks & Merpolon', d:'Gummi- (Merteks) und Polyurethan-Seydel-Walzen (Merpolon) unter zwei Marken.'},
    ru:{t:'Merteks и Merpolon', d:'Резиновые (Merteks) и полиуретановые (Merpolon) цилиндры Seydel под двумя марками.'},
    ar:{t:'Merteks وMerpolon', d:'أسطوانات سيدل المطاطية (Merteks) والبولي يوريثانية (Merpolon) تحت علامتين.'} },
  { year:'Tesis', icon:'cpu', yearEn:'Facility', yearDe:'Werk', yearRu:'Завод', yearAr:'المنشأة',
    tr:{t:'İOSB üretim tesisi', d:'ST52 çelik çekirdek, CNC ve vargel tezgahlarıyla uçtan uca imalat.'},
    en:{t:'İOSB production plant', d:'End-to-end manufacturing with ST52 steel cores, CNC and planing machines.'},
    de:{t:'İOSB-Produktionswerk', d:'Durchgängige Fertigung mit ST52-Stahlkernen, CNC- und Hobelmaschinen.'},
    ru:{t:'Производственный завод в İOSB', d:'Полный цикл производства со стальными сердечниками ST52, станками с ЧПУ и строгальными станками.'},
    ar:{t:'منشأة الإنتاج في İOSB', d:'تصنيع متكامل بأقلاب فولاذية ST52 وماكينات CNC ومقاشط.'} },
  { year:'Kapasite', icon:'gauge', yearEn:'Capacity', yearDe:'Kapazität', yearRu:'Мощность', yearAr:'الطاقة الإنتاجية',
    tr:{t:'Ø1200 × 7000 mm', d:'Büyük çap ve boyda kaplama, hassas taşlama ve kanal açma kapasitesi.'},
    en:{t:'Ø1200 × 7000 mm', d:'Large-diameter, long-length coating, precision grinding and grooving capacity.'},
    de:{t:'Ø1200 × 7000 mm', d:'Beschichtung großer Durchmesser/Längen, Präzisionsschleifen und Rillen.'},
    ru:{t:'Ø1200 × 7000 мм', d:'Возможность покрытия большого диаметра и длины, прецизионного шлифования и нарезки канавок.'},
    ar:{t:'Ø1200 × 7000 مم', d:'قدرة على التكسية بأقطار وأطوال كبيرة، والجلخ الدقيق وفتح الأخاديد.'} },
  { year:'Bugün', icon:'check', yearEn:'Today', yearDe:'Heute', yearRu:'Сегодня', yearAr:'اليوم',
    tr:{t:'21 sektör, Türkiye geneli', d:'25 yılı aşkın tecrübe, geniş referans ağı ve 3 ay garanti.'},
    en:{t:'21 industries, nationwide', d:'25+ years of experience, a wide reference network and a 3-month warranty.'},
    de:{t:'21 Branchen, landesweit', d:'25+ Jahre Erfahrung, breites Referenznetz und 3 Monate Garantie.'},
    ru:{t:'21 отрасль, по всей Турции', d:'Более 25 лет опыта, широкая сеть референсов и гарантия 3 месяца.'},
    ar:{t:'21 قطاعًا في عموم تركيا', d:'خبرة تتجاوز 25 عامًا وشبكة مراجع واسعة وضمان 3 أشهر.'} },
];

export const qualityPoints = [
  { icon:'shield', tr:'3 Ay Garanti', en:'3-Month Warranty', de:'3 Monate Garantie', ru:'Гарантия 3 месяца', ar:'ضمان 3 أشهر', d:{tr:'Ürettiğimiz kauçuk silindirler imalat hatalarına karşı garanti altındadır.', en:'Our rubber cylinders are covered against manufacturing defects.', de:'Unsere Gummiwalzen sind gegen Fertigungsfehler abgesichert.', ru:'Производимые нами резиновые валы обеспечены гарантией от производственных дефектов.', ar:'الأسطوانات المطاطية التي ننتجها مضمونة ضد عيوب التصنيع.'} },
  { icon:'gauge', tr:'Sertlik & Balans Kontrolü', en:'Hardness & Balance Check', de:'Härte- & Wuchtprüfung', ru:'Контроль твёрдости и балансировки', ar:'فحص الصلادة والاتزان', d:{tr:'Her merdane Shore A, çap ve balans kontrolünden geçer.', en:'Every roller passes Shore A, diameter and balance checks.', de:'Jede Walze durchläuft Shore-A-, Durchmesser- und Wuchtprüfung.', ru:'Каждый вал проходит контроль Shore A, диаметра и балансировки.', ar:'تخضع كل أسطوانة لفحص شور A والقطر والاتزان.'} },
  { icon:'cpu', tr:'ST52 Çelik Çekirdek', en:'ST52 Steel Core', de:'ST52-Stahlkern', ru:'Стальной сердечник ST52', ar:'قلب فولاذي ST52', d:{tr:'Özel alaşımlı çelikten CNC tezgahlarda mühendis kontrolünde imalat.', en:'Machined from special alloy steel on CNC lathes under engineer supervision.', de:'Aus Spezialstahl auf CNC-Maschinen unter Ingenieuraufsicht gefertigt.', ru:'Изготовление на станках с ЧПУ из легированной стали под контролем инженера.', ar:'تصنيع من فولاذ مسبوك خاص على ماكينات CNC تحت إشراف هندسي.'} },
  { icon:'link', tr:'Laboratuvar Formülü', en:'Laboratory Formula', de:'Laborformel', ru:'Лабораторная рецептура', ar:'تركيبة مختبرية', d:{tr:'Kaplama karışımları laboratuvar ortamında uzman ekibimizce hazırlanır.', en:'Coating compounds are prepared by our specialists in a laboratory.', de:'Beschichtungsmischungen werden von Fachleuten im Labor hergestellt.', ru:'Смеси для покрытия готовит наша команда специалистов в лабораторных условиях.', ar:'يُعدّ فريقنا المتخصص خلطات التكسية في بيئة مختبرية.'} },
];

export const references = [
  'Şirvan Tekstil — G.Antep',
  'Ormo Tekstil — Bursa',
  'Akkon / Confetti — İstanbul',
  'Damteks — Kırklareli',
  'Esra Tekstil — Kayseri',
];

// Ölçüm yuvası — değer girildiği anda Base.astro ilgili script/meta'yı basar.
// GA4:  'G-XXXXXXX'  ·  Yandex Metrica: '12345678'
// GSC/Bing doğrulaması: Search Console'dan alınan meta içeriği.
export const analytics = {
  ga4: '',
  yandexMetrica: '',
  googleSiteVerification: '',
  bingSiteVerification: '',
};
