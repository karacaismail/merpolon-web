// Ürün türü sayfaları (single product type pages) — Product SEO / pSEO çekirdeği
export const productTypes = [
  {
    slug: 'kaucuk-seydel-merdanesi', material: 'Rubber', brand: 'Merteks', accent: '#C63A2E',
    img: '/gallery/grafit-kaucuk-merdaneler.webp',
    gallery: ['/gallery/grafit-kaucuk-merdaneler.webp','/gallery/kaucuk-kapli-merdane-seti.webp','/gallery/kaucuk-kapli-silindir.webp','/gallery/siyah-kaucuk-kaplama-seti.webp'],
    sectors: ['Tekstil','Elyaf & İplik','Kağıt & Tissue','Deri & Branda'],
    name: { tr:'Kauçuk Seydel Merdanesi', en:'Rubber Seydel Roller', de:'Gummi-Seydel-Walze', ru:'Резиновый вал Seydel', ar:'أسطوانة سيدل مطاطية' },
    short: { tr:'Isı barındırmayan, antistatik kauçuk kaplı Seydel silindiri', en:'Heat-free, antistatic rubber-coated Seydel cylinder', de:'Wärmefreie, antistatische gummibeschichtete Seydel-Walze', ru:'Вал Seydel с резиновым покрытием: антистатичный, не удерживающий тепло', ar:'أسطوانة سيدل مكسوّة بمطاط مضاد للكهرباء الساكنة ولا يحتفظ بالحرارة' },
    body: {
      tr:'Merteks kauçuk Seydel merdaneleri, karışıma ilave edilen özel kimyasallar sayesinde yüzeyde ve iç yapıda ısı barındırmaz. Antistatik ve kaygan yüzeyi sayesinde elektriklenme ve sarma sorunu oluşmaz. Akrilik elyaf-iplik sektöründeki TWO / NSC / Seydel makinelerinde koparma ve converter merdanesi olarak kullanılır. Özel yapıştırma tekniğimiz kauçuğun ST52 çelik çekirdeğe kusursuz bağlanmasını sağlar; rektifiye taşlaması yapılsa bile çalışma ömrü uzar.',
      en:'Merteks rubber Seydel rollers retain no heat on the surface or in the core thanks to proprietary chemical additives. The antistatic, low-friction surface prevents static build-up and winding problems. Used as breaking and converter rollers on TWO / NSC / Seydel machines in the acrylic fiber-yarn sector. Our bonding technique gives a flawless rubber-to-ST52-core bond; service life extends even after precision grinding.',
      de:'Merteks Gummi-Seydel-Walzen speichern dank spezieller chemischer Additive weder an der Oberfläche noch im Kern Wärme. Die antistatische, gleitfähige Oberfläche verhindert statische Aufladung und Wickelprobleme. Einsatz als Abreiß- und Converter-Walzen an TWO- / NSC- / Seydel-Maschinen. Unsere Bindetechnik sorgt für eine makellose Gummi-ST52-Verbindung; die Standzeit verlängert sich selbst nach dem Schleifen.', ru:'Резиновые валы Seydel Merteks благодаря специальным химическим добавкам в смеси не удерживают тепло ни на поверхности, ни во внутренней структуре. Антистатическая и скользкая поверхность исключает статику и наматывание материала. Используются как отрывные и конверторные валы на машинах TWO / NSC / Seydel в производстве акрилового волокна и пряжи. Наша особая техника склейки обеспечивает безупречное соединение резины со стальным сердечником ST52; срок службы остаётся долгим даже после прецизионного шлифования.', ar:'لا تحتفظ أسطوانات سيدل المطاطية من Merteks بالحرارة على السطح ولا في البنية الداخلية بفضل المواد الكيميائية الخاصة المضافة إلى الخلطة. ويمنع سطحها المضاد للكهرباء الساكنة والانزلاقي مشكلات الشحن والتفاف المادة. وتُستخدم كأسطوانات قطع وتحويل في آلات TWO / NSC / Seydel في قطاع الألياف والغزل الأكريليكي. وتضمن تقنية اللصق الخاصة لدينا ارتباطًا مثاليًا بين المطاط والقلب الفولاذي ST52، فيطول عمر التشغيل حتى بعد الجلخ الدقيق.'
    },
    specs: [
      { tr:'Kaplama malzemesi', en:'Covering material', de:'Beschichtungsmaterial', ru:'Материал покрытия', ar:'مادة التكسية', v:{ tr:'Kauçuk (elastomer)', en:'Rubber (elastomer)', de:'Gummi (Elastomer)', ru:'Резина (эластомер)', ar:'مطاط (إيلاستومر)' } },
      { tr:'Sertlik', en:'Hardness', de:'Härte', ru:'Твёрдость', ar:'الصلادة', v:{ tr:'Shore A — çalışma şartına göre', en:'Shore A — to operating conditions', de:'Shore A — nach Betriebsbedingungen', ru:'Shore A — по условиям работы', ar:'شور A — بحسب ظروف التشغيل' } },
      { tr:'Çekirdek', en:'Core', de:'Kern', ru:'Сердечник', ar:'القلب', v:{ tr:'ST52 çelik, CNC işlenmiş', en:'ST52 steel, CNC machined', de:'ST52-Stahl, CNC-bearbeitet', ru:'Сталь ST52, обработка на ЧПУ', ar:'فولاذ ST52 مشغّل على CNC' } },
      { tr:'Maks. ölçü', en:'Max. size', de:'Max. Maß', ru:'Макс. размер', ar:'أقصى مقاس', v:{ tr:'Ø1200 × 7000 mm', en:'Ø1200 × 7000 mm', de:'Ø1200 × 7000 mm', ru:'Ø1200 × 7000 мм', ar:'Ø1200 × 7000 مم' } },
      { tr:'Yüzey', en:'Surface', de:'Oberfläche', ru:'Поверхность', ar:'السطح', v:{ tr:'Düz / konik / bombeli, kanal opsiyonlu', en:'Flat / conical / crowned, optional grooving', de:'Zylindrisch / konisch / ballig, optional Rillen', ru:'Цилиндрическая / коническая / бомбированная, с канавками по выбору', ar:'مستقيم / مخروطي / محدّب، مع خيار الأخاديد' } },
      { tr:'Garanti', en:'Warranty', de:'Garantie', ru:'Гарантия', ar:'الضمان', v:{ tr:'İmalat hatalarına karşı 3 ay', en:'3 months against manufacturing defects', de:'3 Monate gegen Fertigungsfehler', ru:'3 месяца от производственных дефектов', ar:'3 أشهر ضد عيوب التصنيع' } },
    ],
    faq: [
      { q:{tr:'Kauçuk merdane hangi durumda tercih edilir?',en:'When is a rubber roller preferred?',de:'Wann wird eine Gummiwalze bevorzugt?', ru:'В каких случаях выбирают резиновый вал?', ar:'متى تُفضَّل الأسطوانة المطاطية؟'},
        a:{tr:'Antistatik özellik ve ısı barındırmama önceliğinizse kauçuk öne çıkar; özellikle elyaf-iplik ve tekstil hatlarında.',en:'Rubber stands out when antistatic behaviour and heat-free operation matter most — especially in fiber-yarn and textile lines.',de:'Gummi überzeugt, wenn antistatisches Verhalten und Wärmefreiheit im Vordergrund stehen – besonders in Faser-Garn- und Textillinien.', ru:'Если приоритет — антистатические свойства и отсутствие накопления тепла, выбирают резину; особенно на линиях волокна-пряжи и текстиля.', ar:'يتقدّم المطاط عندما تكون الأولوية للخاصية المضادة للكهرباء الساكنة وعدم احتباس الحرارة، خصوصًا في خطوط الألياف والغزل والنسيج.'} },
    ],
  },
  {
    slug: 'poliuretan-seydel-merdanesi', material: 'Polyurethane', brand: 'Merpolon', accent: '#16233F',
    img: '/gallery/poliuretan-kapli-besleme-merdaneleri.webp',
    gallery: ['/gallery/poliuretan-kapli-besleme-merdaneleri.webp','/gallery/poliuretan-merdane-uretimi.webp','/gallery/poliuretan-kapli-tasima-merdanesi.webp','/gallery/poliuretan-merdane-yenileme.webp'],
    sectors: ['Elyaf & İplik','Ambalaj','Metal İmalat','Film & Folyo'],
    name: { tr:'Poliüretan Seydel Merdanesi', en:'Polyurethane Seydel Roller', de:'Polyurethan-Seydel-Walze', ru:'Полиуретановый вал Seydel', ar:'أسطوانة سيدل بولي يوريثان' },
    short: { tr:'Üstün aşınma ve yırtılma direncine sahip PU kaplı silindir', en:'PU-coated cylinder with superior abrasion and tear resistance', de:'PU-beschichtete Walze mit hoher Abrieb- und Reißfestigkeit', ru:'Вал с ПУ-покрытием и высокой стойкостью к износу и разрыву', ar:'أسطوانة مكسوّة بالبولي يوريثان بمقاومة فائقة للتآكل والتمزّق' },
    body: {
      tr:'Merpolon poliüretan Seydel merdaneleri laboratuvar ortamında uzman ekibimizce hazırlanır. Üstün aşınma ve yırtılma mukavemeti, çalışma ısısını dışarı atan yapısı ve çalışma boyunca sabit kalan sertlik (Shore A) değeri ile öne çıkar. Yüksek geri esneme özelliği sayesinde çekim ve finisör merdanelerinde uzun ömür sağlar.',
      en:'Merpolon polyurethane Seydel rollers are prepared by our specialists in a laboratory environment. They stand out with superior abrasion and tear resistance, a heat-dissipating structure and a Shore A hardness that stays constant throughout operation. High rebound gives long life on drawing and finisher rollers.',
      de:'Merpolon Polyurethan-Seydel-Walzen werden von unseren Fachleuten im Labor entwickelt. Sie überzeugen durch hohe Abrieb- und Reißfestigkeit, wärmeableitende Struktur und eine im Betrieb konstante Shore-A-Härte. Die hohe Rückprallelastizität sorgt für lange Standzeiten an Streck- und Finisher-Walzen.', ru:'Полиуретановые валы Seydel Merpolon готовятся нашей командой специалистов в лабораторных условиях. Они отличаются высокой стойкостью к износу и разрыву, структурой, отводящей рабочее тепло, и неизменной в течение работы твёрдостью (Shore A). Высокая упругость обеспечивает долгий срок службы на тянущих и финишных валах.', ar:'تُعدّ أسطوانات سيدل البولي يوريثانية من Merpolon على يد فريقنا المتخصص في بيئة مختبرية. وتتميّز بمقاومة فائقة للتآكل والتمزّق، وببنية تطرد حرارة التشغيل، وبقيمة صلادة (شور A) تبقى ثابتة طوال العمل. كما يمنحها ارتدادها المرن العالي عمرًا طويلًا في أسطوانات السحب والتشطيب.'
    },
    specs: [
      { tr:'Kaplama malzemesi', en:'Covering material', de:'Beschichtungsmaterial', ru:'Материал покрытия', ar:'مادة التكسية', v:{ tr:'Poliüretan (PU)', en:'Polyurethane (PU)', de:'Polyurethan (PU)', ru:'Полиуретан (PU)', ar:'بولي يوريثان (PU)' } },
      { tr:'Sertlik', en:'Hardness', de:'Härte', ru:'Твёрдость', ar:'الصلادة', v:{ tr:'Shore A — uygulamaya özel', en:'Shore A — application specific', de:'Shore A — anwendungsspezifisch', ru:'Shore A — под конкретное применение', ar:'شور A — حسب التطبيق' } },
      { tr:'Öne çıkan', en:'Strength', de:'Stärke', ru:'Ключевое преимущество', ar:'الميزة البارزة', v:{ tr:'Aşınma & yırtılma direnci', en:'Abrasion & tear resistance', de:'Abrieb- & Reißfestigkeit', ru:'Стойкость к износу и разрыву', ar:'مقاومة التآكل والتمزّق' } },
      { tr:'Çekirdek', en:'Core', de:'Kern', ru:'Сердечник', ar:'القلب', v:{ tr:'ST52 çelik, CNC işlenmiş', en:'ST52 steel, CNC machined', de:'ST52-Stahl, CNC-bearbeitet', ru:'Сталь ST52, обработка на ЧПУ', ar:'فولاذ ST52 مشغّل على CNC' } },
      { tr:'Maks. ölçü', en:'Max. size', de:'Max. Maß', ru:'Макс. размер', ar:'أقصى مقاس', v:{ tr:'Ø1200 × 7000 mm', en:'Ø1200 × 7000 mm', de:'Ø1200 × 7000 mm', ru:'Ø1200 × 7000 мм', ar:'Ø1200 × 7000 مم' } },
      { tr:'Garanti', en:'Warranty', de:'Garantie', ru:'Гарантия', ar:'الضمان', v:{ tr:'İmalat hatalarına karşı 3 ay', en:'3 months against manufacturing defects', de:'3 Monate gegen Fertigungsfehler', ru:'3 месяца от производственных дефектов', ar:'3 أشهر ضد عيوب التصنيع' } },
    ],
    faq: [
      { q:{tr:'Poliüretan mı kauçuk mu seçmeliyim?',en:'Should I choose polyurethane or rubber?',de:'Polyurethan oder Gummi?', ru:'Что выбрать — полиуретан или резину?', ar:'هل أختار البولي يوريثان أم المطاط؟'},
        a:{tr:'Aşınma ve yırtılma baskınsa poliüretan; antistatik ve ısı yönetimi öncelikliyse kauçuk önerilir. Çalışma şartlarınızı iletin, birlikte belirleyelim.',en:'Choose polyurethane when abrasion and tearing dominate; rubber when antistatic behaviour and heat management come first. Share your conditions and we decide together.',de:'Polyurethan bei Abrieb und Rissbildung; Gummi bei antistatischen Anforderungen und Wärmemanagement. Teilen Sie uns Ihre Bedingungen mit.', ru:'Если преобладают износ и разрыв — полиуретан; если приоритет антистатика и управление теплом — резина. Сообщите условия работы, определим вместе.', ar:'يُوصى بالبولي يوريثان إذا غلب التآكل والتمزّق، وبالمطاط إذا كانت الأولوية للخاصية المضادة للكهرباء الساكنة وإدارة الحرارة. أخبرونا بظروف تشغيلكم لنحدّد معًا.'} },
    ],
  },
  {
    slug: 'ofset-merdanesi', material: 'Rubber', brand: 'Merteks', accent: '#C63A2E',
    img: '/gallery/ofset-murekkep-merdanesi.webp',
    gallery: ['/gallery/ofset-murekkep-merdanesi.webp','/gallery/baski-merdaneleri.webp','/gallery/murekkep-transfer-merdanesi.webp','/gallery/ofset-baski-unitesi.webp'],
    sectors: ['Baskı & Matbaa','Ambalaj','Etiket & Bandrol'],
    name: { tr:'Ofset Merdanesi', en:'Offset Roller', de:'Offsetwalze', ru:'Офсетный вал', ar:'أسطوانة أوفست' },
    short: { tr:'Ofset baskı üniteleri için hassas kaplı merdane', en:'Precision-coated roller for offset printing units', de:'Präzisionsbeschichtete Walze für Offsetdruckwerke', ru:'Прецизионный вал с покрытием для офсетных печатных секций', ar:'أسطوانة مكسوّة بدقة لوحدات الطباعة الأوفست' },
    body: {
      tr:'Ofset baskı ünitelerinde homojen baskı ve uzun ömür için hassas kaplı merdaneler üretiyoruz. Mürekkep ve nem dengesini bozmayan yüzey yapısı, sabit sertlik ve hassas toleranslı taşlama ile baskı kalitesini korur. Heidelberg, Roland ve benzeri makine parkurlarına sahip matbaalar için orijinal ölçülere birebir uygun üretim yapıyoruz.',
      en:'We produce precision-coated rollers for even print and long life in offset printing units. A surface that keeps the ink–water balance, constant hardness and tight-tolerance grinding protect print quality. We manufacture to original dimensions for printers running Heidelberg, Roland and similar machine parks.',
      de:'Wir fertigen präzisionsbeschichtete Walzen für gleichmäßigen Druck und lange Standzeiten in Offsetdruckwerken. Eine Oberfläche, die das Farbe-Wasser-Gleichgewicht hält, konstante Härte und eng tolerierter Schliff sichern die Druckqualität. Fertigung nach Originalmaßen für Druckereien mit Heidelberg-, Roland- und ähnlichen Maschinenparks.', ru:'Мы производим прецизионные валы с покрытием для равномерной печати и долгого срока службы в офсетных секциях. Структура поверхности, не нарушающая баланс краски и влаги, стабильная твёрдость и шлифование с точными допусками сохраняют качество печати. Для типографий с парком машин Heidelberg, Roland и аналогичных мы изготавливаем валы точно по оригинальным размерам.', ar:'ننتج أسطوانات مكسوّة بدقة لطباعة متجانسة وعمر طويل في وحدات الطباعة الأوفست. وتحافظ بنية السطح التي لا تخلّ بتوازن الحبر والماء، إلى جانب الصلادة الثابتة والجلخ بتفاوتات دقيقة، على جودة الطباعة. وننتج للمطابع التي تضم آلات مثل Heidelberg وRoland أسطوانات مطابقة تمامًا للمقاسات الأصلية.'
    },
    specs: [
      { tr:'Uygulama', en:'Application', de:'Anwendung', ru:'Применение', ar:'التطبيق', v:{ tr:'Ofset baskı ünitesi', en:'Offset printing unit', de:'Offsetdruckwerk', ru:'Офсетная печатная секция', ar:'وحدة طباعة أوفست' } },
      { tr:'Kaplama', en:'Covering', de:'Beschichtung', ru:'Покрытие', ar:'التكسية', v:{ tr:'Kauçuk / özel karışım', en:'Rubber / special compound', de:'Gummi / Spezialmischung', ru:'Резина / специальная смесь', ar:'مطاط / خلطة خاصة' } },
      { tr:'Yüzey', en:'Surface', de:'Oberfläche', ru:'Поверхность', ar:'السطح', v:{ tr:'Hassas rektifiye, düşük tolerans', en:'Precision ground, tight tolerance', de:'Präzisionsgeschliffen, enge Toleranz', ru:'Прецизионное шлифование, малый допуск', ar:'جلخ دقيق بتفاوت منخفض' } },
      { tr:'Makine uyumu', en:'Machine fit', de:'Maschinenpassung', ru:'Совместимость с машиной', ar:'توافق الآلة', v:{ tr:'Orijinal ölçülere göre', en:'To original dimensions', de:'Nach Originalmaßen', ru:'По оригинальным размерам', ar:'وفق المقاسات الأصلية' } },
      { tr:'Hizmet', en:'Service', de:'Service', ru:'Услуга', ar:'الخدمة', v:{ tr:'Yeniden kaplama mevcut', en:'Re-coating available', de:'Neubeschichtung möglich', ru:'Доступно перепокрытие', ar:'إعادة التكسية متاحة' } },
    ],
    faq: [
      { q:{tr:'Mevcut ofset merdanemi yeniden kaplatabilir miyim?',en:'Can my existing offset roller be re-coated?',de:'Kann meine vorhandene Offsetwalze neu beschichtet werden?', ru:'Могу ли я перепокрыть свой офсетный вал?', ar:'هل يمكن إعادة تكسية أسطوانة الأوفست الحالية لديّ؟'},
        a:{tr:'Evet. Çekirdeği söküp yeniden kaplıyor, taşlayıp balans kontrolünden geçiriyoruz — yeni merdaneye göre ekonomik bir çözüm.',en:'Yes. We strip the core, re-coat, grind and balance-check it — an economical alternative to a new roller.',de:'Ja. Wir entschichten den Kern, beschichten neu, schleifen und prüfen die Wucht – wirtschaftlicher als eine neue Walze.', ru:'Да. Мы снимаем покрытие с сердечника, наносим новое, шлифуем и проводим контроль балансировки — экономичное решение по сравнению с новым валом.', ar:'نعم. نزيل التكسية عن القلب ونعيد تكسيته ثم نجلخه ونفحص اتزانه — وهو حل اقتصادي مقارنة بأسطوانة جديدة.'} },
    ],
  },
  {
    slug: 'murekkep-merdanesi', material: 'Rubber', brand: 'Merteks', accent: '#C63A2E',
    img: '/gallery/murekkep-transfer-merdanesi.webp',
    gallery: ['/gallery/murekkep-transfer-merdanesi.webp','/gallery/murekkep-su-merdaneleri.webp','/gallery/ofset-murekkep-merdanesi.webp','/gallery/flekso-baski-merdanesi.webp'],
    sectors: ['Baskı & Matbaa','Etiket & Bandrol','Oluklu Mukavva'],
    name: { tr:'Mürekkep Merdanesi', en:'Ink Roller', de:'Farbwalze', ru:'Красочный вал', ar:'أسطوانة الحبر' },
    short: { tr:'Mürekkebi film halinde dağıtan, çözücülere dirençli merdane', en:'Roller that spreads ink in an even film, solvent resistant', de:'Walze für gleichmäßigen Farbfilm, lösemittelbeständig', ru:'Вал, распределяющий краску плёнкой и стойкий к растворителям', ar:'أسطوانة توزّع الحبر كطبقة رقيقة وتقاوم المذيبات' },
    body: {
      tr:'Mürekkep merdaneleri, mürekkebi ünite boyunca eşit bir film halinde dağıtır. Aşınmaya ve baskı kimyasallarına (çözücüler, yıkama solüsyonları) dirençli kaplama karışımı kullanıyoruz. Sertliğin çalışma boyunca sabit kalması, renk yoğunluğunun baskı boyunca değişmemesini sağlar.',
      en:'Ink rollers distribute ink as an even film across the unit. We use a compound resistant to abrasion and to press chemicals (solvents, wash solutions). Because hardness stays constant during operation, colour density does not drift through the run.',
      de:'Farbwalzen verteilen die Farbe als gleichmäßigen Film im Druckwerk. Wir verwenden eine Mischung, die gegen Abrieb und Druckchemikalien (Lösemittel, Waschmittel) beständig ist. Da die Härte im Betrieb konstant bleibt, verändert sich die Farbdichte während der Auflage nicht.', ru:'Красочные валы распределяют краску равномерной плёнкой по всей секции. Мы применяем смесь покрытия, стойкую к износу и печатной химии — растворителям и смывочным составам. Неизменная в течение работы твёрдость обеспечивает постоянство плотности цвета на всём тираже.', ar:'توزّع أسطوانات الحبر الحبرَ كطبقة متساوية على امتداد الوحدة. ونستخدم خلطة تكسية مقاومة للتآكل ولكيماويات الطباعة من مذيبات ومحاليل غسل. كما يضمن ثبات الصلادة طوال التشغيل عدم تغيّر كثافة اللون على امتداد الطبعة.'
    },
    specs: [
      { tr:'Uygulama', en:'Application', de:'Anwendung', ru:'Применение', ar:'التطبيق', v:{ tr:'Mürekkep dağıtma ünitesi', en:'Ink distribution unit', de:'Farbwerk', ru:'Красочный аппарат', ar:'وحدة توزيع الحبر' } },
      { tr:'Direnç', en:'Resistance', de:'Beständigkeit', ru:'Стойкость', ar:'المقاومة', v:{ tr:'Çözücü ve yıkama kimyasalları', en:'Solvents and wash chemicals', de:'Lösemittel und Waschchemikalien', ru:'Растворители и смывочная химия', ar:'المذيبات وكيماويات الغسل' } },
      { tr:'Sertlik', en:'Hardness', de:'Härte', ru:'Твёрдость', ar:'الصلادة', v:{ tr:'Sabit Shore A', en:'Constant Shore A', de:'Konstante Shore A', ru:'Стабильный Shore A', ar:'شور A ثابت' } },
      { tr:'Yüzey', en:'Surface', de:'Oberfläche', ru:'Поверхность', ar:'السطح', v:{ tr:'Hassas rektifiye', en:'Precision ground', de:'Präzisionsgeschliffen', ru:'Прецизионное шлифование', ar:'جلخ دقيق' } },
    ],
    faq: [],
  },
  {
    slug: 'su-nemlendirme-merdanesi', material: 'Rubber', brand: 'Merteks', accent: '#C63A2E',
    img: '/gallery/su-nemlendirme-merdanesi.webp',
    gallery: ['/gallery/su-nemlendirme-merdanesi.webp','/gallery/nemlendirme-uygulama-merdanesi.webp','/gallery/murekkep-su-merdaneleri.webp','/gallery/ofset-baski-hatti.webp'],
    sectors: ['Baskı & Matbaa','Ambalaj'],
    name: { tr:'Su (Nemlendirme) Merdanesi', en:'Dampening Roller', de:'Feuchtwalze', ru:'Увлажняющий (водяной) вал', ar:'أسطوانة الماء (الترطيب)' },
    short: { tr:'Nemlendirme ünitelerinde dengeli su transferi sağlayan merdane', en:'Roller for balanced water transfer in dampening units', de:'Walze für ausgewogenen Wassertransfer im Feuchtwerk', ru:'Вал, обеспечивающий сбалансированный перенос воды в увлажняющих секциях', ar:'أسطوانة تضمن نقل ماء متوازن في وحدات الترطيب' },
    body: {
      tr:'Su (nemlendirme) merdaneleri, ofset baskıda nem dengesinin doğru kurulmasını sağlar. Özel yüzey yapısı su filmini eşit dağıtır; hidrofilik davranışı sayesinde baskı boyunca kararlı çalışır. Yanlış su transferi tonlama ve kuruma sorunlarının ana sebebidir — bu yüzden yüzey ve sertlik hassas seçilir.',
      en:'Dampening rollers establish the correct water balance in offset printing. A dedicated surface spreads the water film evenly and its hydrophilic behaviour keeps it stable through the run. Incorrect water transfer is the main cause of toning and drying problems, so surface and hardness are chosen carefully.',
      de:'Feuchtwalzen stellen im Offsetdruck das richtige Wassergleichgewicht her. Eine spezielle Oberfläche verteilt den Wasserfilm gleichmäßig; ihr hydrophiles Verhalten hält ihn über die Auflage stabil. Falscher Wassertransfer ist die Hauptursache für Tonen und Trocknungsprobleme.', ru:'Увлажняющие (водяные) валы обеспечивают правильный баланс влаги в офсетной печати. Особая структура поверхности равномерно распределяет водяную плёнку; благодаря гидрофильному поведению работа остаётся стабильной на всём тираже. Неправильный перенос воды — главная причина тонирования и проблем с высыханием, поэтому поверхность и твёрдость подбираются точно.', ar:'تضمن أسطوانات الماء (الترطيب) ضبط توازن الرطوبة بشكل صحيح في الطباعة الأوفست. وتوزّع بنية السطح الخاصة طبقة الماء بالتساوي، ويمنحها سلوكها المحبّ للماء ثباتًا طوال الطبعة. ولأن نقل الماء الخاطئ هو السبب الرئيسي لمشكلات التلوين والجفاف، يُختار السطح والصلادة بدقة.'
    },
    specs: [
      { tr:'Uygulama', en:'Application', de:'Anwendung', ru:'Применение', ar:'التطبيق', v:{ tr:'Nemlendirme (su) ünitesi', en:'Dampening unit', de:'Feuchtwerk', ru:'Увлажняющий аппарат', ar:'وحدة الترطيب (الماء)' } },
      { tr:'Yüzey davranışı', en:'Surface behaviour', de:'Oberflächenverhalten', ru:'Поведение поверхности', ar:'سلوك السطح', v:{ tr:'Hidrofilik, eşit su filmi', en:'Hydrophilic, even water film', de:'Hydrophil, gleichmäßiger Wasserfilm', ru:'Гидрофильная, равномерная водяная плёнка', ar:'محبّ للماء، طبقة ماء متساوية' } },
      { tr:'Sertlik', en:'Hardness', de:'Härte', ru:'Твёрдость', ar:'الصلادة', v:{ tr:'Uygulamaya özel Shore A', en:'Application-specific Shore A', de:'Anwendungsspezifische Shore A', ru:'Shore A под применение', ar:'شور A حسب التطبيق' } },
    ],
    faq: [],
  },
  {
    slug: 'anilox-rasterli-merdane', material: 'Ceramic/Chrome', brand: 'Merteks', accent: '#33456C',
    img: '/gallery/anilox-rasterli-merdane.webp',
    gallery: ['/gallery/anilox-rasterli-merdane.webp','/gallery/flekso-baski-merdanesi.webp','/gallery/baski-merdanesi.webp','/gallery/oluklu-mukavva-merdanesi.webp'],
    sectors: ['Baskı & Matbaa','Oluklu Mukavva','Etiket & Bandrol'],
    name: { tr:'Anilox (Rasterli) Merdane', en:'Anilox Roller', de:'Rasterwalze', ru:'Анилоксовый (растрированный) вал', ar:'أسطوانة أنيلوكس (منقّطة)' },
    short: { tr:'Flekso baskıda kontrollü mürekkep transferi için rasterli merdane', en:'Engraved roller for controlled ink transfer in flexo printing', de:'Gravierte Walze für kontrollierten Farbübertrag im Flexodruck', ru:'Растрированный вал для контролируемого переноса краски во флексопечати', ar:'أسطوانة منقّطة لنقل حبر مضبوط في طباعة الفلكسو' },
    body: {
      tr:'Anilox (rasterli) merdaneler, flekso baskıda mürekkebin kontrollü ve tekrarlanabilir biçimde aktarılmasını sağlar. Hücre hacmi ve raster sıklığı baskı işine göre belirlenir. Bu ürün grubunda ölçü ve teknik gereksinimlerinizi alıp uygun çözümü birlikte planlıyoruz.',
      en:'Anilox rollers deliver controlled, repeatable ink transfer in flexo printing. Cell volume and screen count are matched to the print job. For this group we take your dimensions and technical requirements and plan the right solution together.',
      de:'Rasterwalzen sorgen im Flexodruck für kontrollierten, wiederholbaren Farbübertrag. Schöpfvolumen und Rasterweite werden auf den Druckauftrag abgestimmt. Wir nehmen Ihre Maße und technischen Anforderungen auf und planen gemeinsam die passende Lösung.', ru:'Анилоксовые (растрированные) валы обеспечивают контролируемый и воспроизводимый перенос краски во флексопечати. Объём ячейки и линиатура растра определяются по конкретной печатной задаче. В этой товарной группе мы принимаем ваши размеры и технические требования и планируем подходящее решение вместе.', ar:'تضمن أسطوانات الأنيلوكس (المنقّطة) نقل الحبر بشكل مضبوط وقابل للتكرار في طباعة الفلكسو. ويُحدَّد حجم الخلية وكثافة التنقيط وفق طبيعة العمل الطباعي. وفي هذه المجموعة نأخذ مقاساتكم ومتطلباتكم الفنية ونخطّط الحل المناسب معًا.'
    },
    specs: [
      { tr:'Uygulama', en:'Application', de:'Anwendung', ru:'Применение', ar:'التطبيق', v:{ tr:'Flekso baskı, lak/vernik ünitesi', en:'Flexo printing, coating unit', de:'Flexodruck, Lackwerk', ru:'Флексопечать, лаковая секция', ar:'طباعة فلكسو، وحدة الورنيش واللك' } },
      { tr:'Belirleyici', en:'Key parameter', de:'Schlüsselgröße', ru:'Определяющие параметры', ar:'العوامل المحدِّدة', v:{ tr:'Hücre hacmi & raster sıklığı', en:'Cell volume & screen count', de:'Schöpfvolumen & Rasterweite', ru:'Объём ячейки и линиатура растра', ar:'حجم الخلية وكثافة التنقيط' } },
      { tr:'Planlama', en:'Planning', de:'Planung', ru:'Планирование', ar:'التخطيط', v:{ tr:'İşe özel, teklif üzerine', en:'Job specific, on request', de:'Auftragsspezifisch, auf Anfrage', ru:'Индивидуально, по запросу', ar:'خاص بكل عمل، حسب عرض السعر' } },
    ],
    faq: [],
  },
  {
    slug: 'koparma-converter-merdanesi', material: 'Rubber', brand: 'Merteks', accent: '#C63A2E',
    img: '/gallery/kaucuk-kapli-merdane-seti.webp',
    gallery: ['/gallery/kaucuk-kapli-merdane-seti.webp','/gallery/kaucuk-kapli-finisor-merdanesi.webp','/gallery/tekstil-sektoru-merdaneleri.webp','/gallery/endustriyel-merdaneler.webp'],
    sectors: ['Elyaf & İplik','Tekstil'],
    name: { tr:'Koparma & Converter Merdanesi', en:'Breaking & Converter Roller', de:'Abreiß- & Converter-Walze', ru:'Отрывной и конверторный вал', ar:'أسطوانة القطع والتحويل' },
    short: { tr:'TWO / NSC / Seydel makineleri için elyaf-iplik merdaneleri', en:'Fiber-yarn rollers for TWO / NSC / Seydel machines', de:'Faser-Garn-Walzen für TWO- / NSC- / Seydel-Maschinen', ru:'Валы для волокна и пряжи для машин TWO / NSC / Seydel', ar:'أسطوانات الألياف والغزل لآلات TWO / NSC / Seydel' },
    body: {
      tr:'Akrilik elyaf-iplik sektöründe TWO, NSC ve Seydel makinelerinde kullanılan koparma ve converter merdaneleri en güçlü olduğumuz üründür. Ayrıca rebrakır, çekim ve finisör merdanelerini pres tezgahlarımızda özel kalıplarla imal ediyoruz. Elektriklenme ve sarma sorunu oluşmaz; kauçuk üzerinde çökme görülmez.',
      en:'Breaking and converter rollers for TWO, NSC and Seydel machines in the acrylic fiber-yarn sector are our strongest product. We also press rebreaker, drawing and finisher rollers with custom moulds. No static build-up or winding problems occur and the rubber does not collapse.',
      de:'Abreiß- und Converter-Walzen für TWO-, NSC- und Seydel-Maschinen in der Acryl-Faser-Garn-Branche sind unser stärkstes Produkt. Zudem fertigen wir Rebreaker-, Streck- und Finisher-Walzen mit Sonderformen. Keine statische Aufladung, keine Wickelprobleme, kein Einsinken des Gummis.', ru:'Отрывные и конверторные валы, применяемые на машинах TWO, NSC и Seydel в производстве акрилового волокна и пряжи, — наш сильнейший продукт. Кроме того, мы изготавливаем валы rebreaker, тянущие и финишные на прессовом оборудовании в специальных формах. Статика и наматывание не возникают; просадки резины не наблюдается.', ar:'أسطوانات القطع والتحويل المستخدَمة في آلات TWO وNSC وSeydel في قطاع الألياف والغزل الأكريليكي هي أقوى منتجاتنا. كما نصنّع أسطوانات الريبريكر والسحب والتشطيب بقوالب خاصة على مكابسنا. ولا تحدث مشكلات الشحن الكهربائي أو التفاف المادة، ولا يظهر انبعاج في المطاط.'
    },
    specs: [
      { tr:'Makineler', en:'Machines', de:'Maschinen', ru:'Машины', ar:'الآلات', v:{ tr:'TWO · NSC · Seydel', en:'TWO · NSC · Seydel', de:'TWO · NSC · Seydel', ru:'TWO · NSC · Seydel', ar:'TWO · NSC · Seydel' } },
      { tr:'Tipler', en:'Types', de:'Typen', ru:'Типы', ar:'الأنواع', v:{ tr:'Koparma, converter, rebrakır, çekim, finisör', en:'Breaking, converter, rebreaker, drawing, finisher', de:'Abreiß, Converter, Rebreaker, Streck, Finisher', ru:'Отрывной, конверторный, rebreaker, тянущий, финишный', ar:'قطع، تحويل، ريبريكر، سحب، تشطيب' } },
      { tr:'Standart tipler', en:'Standard types', de:'Standardtypen', ru:'Стандартные типы', ar:'الأنواع القياسية', v:{ tr:'870 · 679 · 671 · Tematex', en:'870 · 679 · 671 · Tematex', de:'870 · 679 · 671 · Tematex', ru:'870 · 679 · 671 · Tematex', ar:'870 · 679 · 671 · Tematex' } },
      { tr:'Garanti', en:'Warranty', de:'Garantie', ru:'Гарантия', ar:'الضمان', v:{ tr:'3 ay', en:'3 months', de:'3 Monate', ru:'3 месяца', ar:'3 أشهر' } },
    ],
    faq: [],
  },
  {
    slug: 'merdane-yeniden-kaplama', material: 'Service', brand: 'Merteks', accent: '#33456C',
    img: '/gallery/yeniden-kaplama-servisi.webp',
    gallery: ['/gallery/yeniden-kaplama-servisi.webp','/gallery/kaucuk-kaplama-hizmeti.webp','/gallery/poliuretan-merdane-yenileme.webp','/gallery/celik-cekirdekler.webp'],
    sectors: ['Tekstil','Baskı & Matbaa','Ambalaj','Demir & Çelik'],
    name: { tr:'Merdane Yeniden Kaplama', en:'Roller Re-coating', de:'Walzen-Neubeschichtung', ru:'Перепокрытие вала', ar:'إعادة تكسية الأسطوانة' },
    short: { tr:'Mevcut çekirdeğinizi söküp yeniden kaplıyoruz — ekonomik çözüm', en:'We strip and re-coat your existing core — the economical route', de:'Wir entschichten und beschichten Ihren Kern neu – wirtschaftlich', ru:'Снимаем старое покрытие с вашего сердечника и наносим новое — экономичное решение', ar:'نزيل التكسية عن قلبكم الحالي ونعيد تكسيته — حل اقتصادي' },
    body: {
      tr:'Aşınmış merdanenizi çöpe atmanıza gerek yok. Mevcut ST52 çelik çekirdeğinizi söküyor, yüzeyi hazırlıyor, yeni kauçuk veya poliüretan kaplama uyguluyor, hassas taşlama ve balans kontrolünden sonra size geri gönderiyoruz. Yeni merdane maliyetinin belirgin altında bir çözümdür ve teslim süresi daha kısadır.',
      en:'A worn roller does not have to be scrapped. We strip your existing ST52 core, prepare the surface, apply new rubber or polyurethane covering, then precision grind and balance-check it before returning it. It costs clearly less than a new roller and the lead time is shorter.',
      de:'Eine verschlissene Walze muss nicht verschrottet werden. Wir entschichten Ihren ST52-Kern, bereiten die Oberfläche vor, bringen eine neue Gummi- oder Polyurethanbeschichtung auf, schleifen präzise und prüfen die Wucht. Deutlich günstiger als eine Neuwalze und mit kürzerer Lieferzeit.', ru:'Изношенный вал не нужно выбрасывать. Мы снимаем покрытие с вашего стального сердечника ST52, подготавливаем поверхность, наносим новое резиновое или полиуретановое покрытие и после прецизионного шлифования и контроля балансировки возвращаем вам. Это решение заметно дешевле нового вала, а срок изготовления короче.', ar:'لا حاجة للتخلّص من أسطوانتكم المتآكلة. نزيل التكسية عن قلبكم الفولاذي ST52، ونهيّئ السطح، ونطبّق تكسية مطاطية أو بولي يوريثانية جديدة، ثم نعيدها إليكم بعد الجلخ الدقيق وفحص الاتزان. وهو حل أقل تكلفة بوضوح من أسطوانة جديدة، ومدة تسليمه أقصر.'
    },
    specs: [
      { tr:'Süreç', en:'Process', de:'Ablauf', ru:'Процесс', ar:'العملية', v:{ tr:'Sökme → yüzey hazırlık → kaplama → taşlama → balans', en:'Strip → surface prep → coating → grinding → balancing', de:'Entschichten → Vorbereitung → Beschichten → Schleifen → Wuchten', ru:'Снятие → подготовка поверхности → покрытие → шлифование → балансировка', ar:'الإزالة ثم تهيئة السطح ثم التكسية ثم الجلخ ثم الاتزان' } },
      { tr:'Malzeme', en:'Material', de:'Material', ru:'Материал', ar:'المادة', v:{ tr:'Kauçuk veya poliüretan', en:'Rubber or polyurethane', de:'Gummi oder Polyurethan', ru:'Резина или полиуретан', ar:'مطاط أو بولي يوريثان' } },
      { tr:'Maks. ölçü', en:'Max. size', de:'Max. Maß', ru:'Макс. размер', ar:'أقصى مقاس', v:{ tr:'Ø1200 × 7000 mm', en:'Ø1200 × 7000 mm', de:'Ø1200 × 7000 mm', ru:'Ø1200 × 7000 мм', ar:'Ø1200 × 7000 مم' } },
      { tr:'Avantaj', en:'Benefit', de:'Vorteil', ru:'Преимущество', ar:'الميزة', v:{ tr:'Yeni merdaneye göre ekonomik', en:'Cheaper than a new roller', de:'Günstiger als eine Neuwalze', ru:'Экономичнее нового вала', ar:'أوفر من أسطوانة جديدة' } },
    ],
    faq: [
      { q:{tr:'Yeniden kaplama ne kadar sürer?',en:'How long does re-coating take?',de:'Wie lange dauert die Neubeschichtung?', ru:'Сколько времени занимает перепокрытие?', ar:'كم تستغرق إعادة التكسية؟'},
        a:{tr:'Ölçü ve iş yoğunluğuna göre değişir; talebinizi ilettiğinizde net bir termin veriyoruz, acil işlerde hızlandırılmış üretim mümkündür.',en:'It depends on size and workload; we give a firm date once you share your request, and rush production is possible.',de:'Abhängig von Maß und Auslastung; nach Ihrer Anfrage nennen wir einen festen Termin, Eilaufträge sind möglich.', ru:'Зависит от размеров и загрузки; после получения запроса мы даём точный срок, для срочных работ возможно ускоренное производство.', ar:'تختلف حسب المقاس وحجم العمل؛ ونمنحكم موعدًا محددًا فور استلام طلبكم، ويمكن الإنتاج المعجّل للأعمال العاجلة.'} },
    ],
  },
];

// Sözlük / Glossary — Semantic + Entity SEO (DefinedTerm)
export const glossary = [
  { slug:'shore-a', term:{tr:'Shore A (sertlik)',en:'Shore A (hardness)',de:'Shore A (Härte)', ru:'Shore A (твёрдость)', ar:'شور A (الصلادة)'},
    def:{tr:'Kauçuk ve poliüretan gibi elastomerlerin sertlik ölçüsüdür. Merdanede sertlik, baskı izinin genişliğini ve aşınma davranışını belirler; çalışma şartına göre seçilir ve iyi bir kaplamada çalışma boyunca sabit kalır.',
         en:'A hardness scale for elastomers such as rubber and polyurethane. On a roller, hardness sets the nip width and wear behaviour; it is chosen to suit operating conditions and, in a good covering, stays constant throughout operation.',
         de:'Härteskala für Elastomere wie Gummi und Polyurethan. An der Walze bestimmt die Härte die Nipbreite und das Verschleißverhalten; sie wird nach Betriebsbedingungen gewählt und bleibt bei guter Beschichtung konstant.', ru:'Мера твёрдости эластомеров — резины и полиуретана. Твёрдость вала определяет ширину пятна контакта и характер износа; выбирается по условиям работы и в качественном покрытии остаётся неизменной в течение всей работы.', ar:'هي مقياس صلادة الإيلاستومرات مثل المطاط والبولي يوريثان. وتحدّد صلادة الأسطوانة عرض أثر الضغط وسلوك التآكل؛ وتُختار بحسب ظروف التشغيل وتبقى ثابتة طوال العمل في التكسية الجيدة.'} },
  { slug:'vulkanizasyon', term:{tr:'Vulkanizasyon',en:'Vulcanisation',de:'Vulkanisation', ru:'Вулканизация', ar:'الفلكنة'},
    def:{tr:'Kauçuğun ısı ve basınç altında çapraz bağlanarak elastik, dayanıklı bir yapıya dönüşmesi işlemidir. Merdane kaplamasında kaplamanın nihai sertliğini ve ömrünü belirleyen aşamadır.',
         en:'The process in which rubber cross-links under heat and pressure to become elastic and durable. In roller covering it is the stage that sets the final hardness and service life.',
         de:'Prozess, bei dem Gummi unter Wärme und Druck vernetzt und elastisch sowie beständig wird. Bei der Walzenbeschichtung bestimmt diese Stufe Endhärte und Standzeit.', ru:'Процесс, в котором резина под действием тепла и давления образует поперечные связи и превращается в упругую, прочную структуру. В покрытии вала это этап, определяющий окончательную твёрдость и срок службы покрытия.', ar:'هي عملية تحوّل المطاط إلى بنية مرنة ومتينة عبر الترابط المتشابك تحت الحرارة والضغط. وهي في تكسية الأسطوانات المرحلة التي تحدّد الصلادة النهائية للتكسية وعمرها.'} },
  { slug:'st52-celik', term:{tr:'ST52 çelik çekirdek',en:'ST52 steel core',de:'ST52-Stahlkern', ru:'Стальной сердечник ST52', ar:'قلب فولاذي ST52'},
    def:{tr:'Merdanenin taşıyıcı gövdesinde kullanılan özel alaşımlı yapı çeliğidir. Yüksek mukavemeti sayesinde yük altında sehim yapmaz; CNC tezgahlarda hassas işlenir ve kaplama bu çekirdeğin üzerine uygulanır.',
         en:'A special alloy structural steel used for the roller body. Its high strength prevents deflection under load; it is CNC machined to tight tolerance and the covering is applied onto this core.',
         de:'Spezieller Baustahl für den Walzenkörper. Seine hohe Festigkeit verhindert Durchbiegung unter Last; er wird CNC-bearbeitet, und die Beschichtung wird auf diesen Kern aufgebracht.', ru:'Легированная конструкционная сталь, применяемая в несущем корпусе вала. Благодаря высокой прочности не прогибается под нагрузкой; обрабатывается с высокой точностью на станках с ЧПУ, и покрытие наносится поверх этого сердечника.', ar:'هو فولاذ إنشائي مسبوك خاص يُستخدم في الجسم الحامل للأسطوانة. ولا ينحني تحت الحمل بفضل متانته العالية؛ ويُشغَّل بدقة على ماكينات CNC، وتُطبَّق التكسية فوق هذا القلب.'} },
  { slug:'rektifiye-taslama', term:{tr:'Rektifiye taşlama',en:'Precision grinding',de:'Präzisionsschleifen', ru:'Прецизионное шлифование', ar:'الجلخ الدقيق'},
    def:{tr:'Kaplanmış merdanenin yüzeyinin hassas ölçüye getirilmesidir. Düz, konik veya bombeli yapılabilir. Doğru bir kaplamada rektifiye sonrası çalışma ömrü uzar, sertlik değişmez.',
         en:'Bringing the covered roller surface to precise dimension. It can be flat, conical or crowned. With a good covering, service life extends after grinding and hardness does not change.',
         de:'Das Bringen der beschichteten Walzenoberfläche auf Präzisionsmaß – zylindrisch, konisch oder ballig. Bei guter Beschichtung verlängert sich danach die Standzeit, die Härte bleibt gleich.', ru:'Доведение поверхности покрытого вала до точного размера. Может выполняться цилиндрически, конически или с бомбировкой. При качественном покрытии после шлифования срок службы возрастает, а твёрдость не меняется.', ar:'هو ضبط سطح الأسطوانة المكسوّة على المقاس الدقيق. ويمكن أن يكون مستقيمًا أو مخروطيًا أو محدّبًا. وفي التكسية السليمة يطول عمر التشغيل بعد الجلخ ولا تتغيّر الصلادة.'} },
  { slug:'kanal-acma', term:{tr:'Kanal açma (baklava / helis)',en:'Grooving (diamond / helix)',de:'Rillen (Rauten / Helix)', ru:'Нарезка канавок (ромб / винт)', ar:'فتح الأخاديد (معيّني / لولبي)'},
    def:{tr:'Merdane yüzeyine açılan kanallardır. Baklava (rauten) ve helis profilleri; suyun/havanın tahliyesi, kavrama ve malzeme taşımada tutuş sağlamak için kullanılır.',
         en:'Channels cut into the roller surface. Diamond and helix profiles are used to evacuate water or air and to improve grip when transporting material.',
         de:'In die Walzenoberfläche eingebrachte Rillen. Rauten- und Helixprofile dienen der Wasser-/Luftabfuhr und dem besseren Griff beim Materialtransport.', ru:'Канавки, нарезаемые на поверхности вала. Ромбический (раутен) и винтовой профили используются для отвода воды и воздуха, захвата и удержания материала при транспортировке.', ar:'هي أخاديد تُفتَح على سطح الأسطوانة. وتُستخدم البروفيلات المعيّنية (راوتن) واللولبية لتصريف الماء أو الهواء وتحسين القبضة والإمساك أثناء نقل المادة.'} },
  { slug:'antistatik', term:{tr:'Antistatik kaplama',en:'Antistatic covering',de:'Antistatische Beschichtung', ru:'Антистатическое покрытие', ar:'تكسية مضادة للكهرباء الساكنة'},
    def:{tr:'Yüzeyde statik elektrik birikmesini önleyen kaplamadır. Elyaf-iplik ve film hatlarında elektriklenme, malzemenin merdaneye sarılmasına ve durușlara yol açar; antistatik kaplama bunu engeller.',
         en:'A covering that prevents static build-up on the surface. In fiber-yarn and film lines static causes the material to wrap the roller and forces stops; an antistatic covering prevents this.',
         de:'Eine Beschichtung, die statische Aufladung verhindert. In Faser-Garn- und Folienlinien führt Statik zum Umwickeln der Walze und zu Stillständen; die antistatische Beschichtung verhindert das.', ru:'Покрытие, предотвращающее накопление статического электричества на поверхности. На линиях волокна-пряжи и плёнки электризация приводит к наматыванию материала на вал и остановкам; антистатическое покрытие это предотвращает.', ar:'هي تكسية تمنع تراكم الكهرباء الساكنة على السطح. ففي خطوط الألياف والغزل والأفلام يؤدي الشحن الكهربائي إلى التفاف المادة حول الأسطوانة وإلى التوقفات؛ وتمنع التكسية المضادة للكهرباء الساكنة ذلك.'} },
];
