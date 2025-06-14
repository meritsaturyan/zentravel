import React, { useState } from "react";

export default function TravelCompanySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [infoTour, setInfoTour] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allTours = [
    {
      image: "/italy.jpg",
      title: "Տուր Իտալիայում 7 օր",
      dates: "10.07–17.07",
      price: "$1200",
      description: "🇮🇹 7 Օրյա Տուր Իտալիայում\n📍 Օր 1 – Հռոմ (Rome)\nԺամանում Հռոմ\n\nՏրանսֆեր հյուրանոց\n\nԺամանցային զբոսանք Վատիկանի շուրջ\n\nՃաշ՝ տեղական ռեստորանում\n\nԵրեկոյան՝ Տրևի շատրվան և Իսպանական սանդուղքներ\n\n📍 Օր 2 – Հռոմ\nՎատիկանի թանգարաններ, Սուրբ Պետրոսի տաճար\n\nԿոլիզեում և Հռոմեական ֆորում\n\nՃաշ՝ Տրաստեվերեում\n\nԱրիան վիճակագրական զբոսանք գիշերով\n\n📍 Օր 3 – Ֆլորենցիա (Florence)\nԱռավոտյան գնացքով տեղափոխում Ֆլորենցիա (~1.5–2 ժամ)\n\nԴոմո տաճար, Ուֆիցի պատկերասրահ\n\nՊոնտե Վեկկիո կամուրջ\n\nԱրևամուտը Միքելանջելոյի հրապարակից\n\n📍 Օր 4 – Ֆլորենցիա և Սիենա կամ Պիզա (ընտրովի)\nԸնտրովի էքսկուրսիա դեպի Սիենա կամ Պիզա\n\nՎայելել տոսկանյան գինին և բնությունը\n\nՎերադարձ Ֆլորենցիա՝ հանգստի երեկո\n\n📍 Օր 5 – Վենետիկ (Venice)\nԳնացքով տեղափոխում Վենետիկ (~2 ժամ)\n\nԶբոսանք Սան Մարկոյի հրապարակում\n\nԴոժերի պալատ, Սան Մարկոսի տաճար\n\nԳոնդոլայի զբոսանք՝ ջրանցքներով\n\n📍 Օր 6 – Վենետիկ\nՄուրանո և Բուրանո կղզիներ՝ ապակու և ծիածանագույն տների այցելություն\n\nՀանգիստ լանչ՝ ծովամթերքներով\n\nԺամանցային զբոսանք երեկոյան\n\n📍 Օր 7 – Վերադարձ\nԱզատ ժամանակ՝ վերջին գնումների համար\n\nՏրանսֆեր օդանավակայան՝ վերադարձի համար\n\n💼 Տուրի փաթեթը ներառում է՝\nՏեղափոխումներ քաղաքների միջև\n\n3* կամ 4* հյուրանոցներ նախաճաշով\n\nԷքսկուրսիաներ գիդով\n\nՏրանսֆեր օդանավակայանից և հետ\n\nՏոմսեր հիմնական մուտքավճարներով"

    },
    {
      image: "/dubai.jpg",
      title: "Տուր Դուբայում 5 օր",
      dates: "05.08–10.08",
      price: "$950",
      description: "🇦🇪 5 Օրյա Տուր Դուբայում\n📍 Օր 1 – Ժամանում և ծանոթացում Դուբայի հետ\nԺամանում Դուբայ, տրանսֆեր դեպի հյուրանոց\n\nՀանգիստ հյուրանոցում, լողավազան\n\nԵրեկոյան զբոսանք Dubai Marina, նավակով զբոսանք (Dhow Cruise) ընթրիքով\n\nԱրևամուտը՝ նավից դիտելու հնարավորություն\n\n📍 Օր 2 – Դուբայի ժամանակակից կողմը\nԱյցելություն Burj Khalifa (տոմս մինչև 124-րդ հարկ)\n\nDubai Mall, Dubai Aquarium\n\nՃաշ՝ առևտրի կենտրոնում\n\nԵրեկոյան՝ Dubai Fountain շոու\n\n📍 Օր 3 – Անապատային սաֆարի\nԱռավոտը՝ ազատ ժամանակ լողավազանում կամ շոփինգում\n\n15:00 – 21:00 անապատային սաֆարի\n\nJeep-ով արկածներ ավազների վրա\n\nՔեմել-ռայդ, ավազի սահք, հեննա նկարչություն\n\nԱրևամուտ անապատում\n\nԵրեկոյան շոու և ընթրիք բեդուինյան ճամբարում\n\n📍 Օր 4 – Դուբայի ավանդական կողմը\nԱյցելություն Dubai Frame\n\nԱրտաբազարներ (Gold Souk, Spice Souk)՝ նավակով անցում Deira-ից\n\nAl Fahidi պատմական թաղամաս\n\nՃաշ տեղական արաբական խոհանոցով\n\nԸնտրովի՝ այցելություն Museum of the Future կամ Global Village\n\n📍 Օր 5 – Վերադարձ\nԱզատ ժամանակ՝ վերջին գնումների համար կամ ծովափ\n\nՏրանսֆեր օդանավակայան\n\n💼 Տուրի փաթեթը ներառում է՝\n4* հյուրանոց նախաճաշով\n\nԲոլոր տրանսֆերները\n\nԱնապատային սաֆարի ընթրիքով\n\nՏոմսեր հիմնական տեսարժան վայրերի համար\n\nՀայերեն կամ ռուսերեն գիդ (ըստ պահանջի)"

    },
    {
      image: "/cyprus.jpg",
      title: "Տուր Կիպրոսում 6 օր",
      dates: "20.07–26.07",
      price: "$1100",
      description: "🇨🇾 6 Օրյա Տուր Կիպրոսում\n📍 Օր 1 – Ժամանում Լառնակա (Larnaca)\nԺամանում և տրանսֆեր դեպի հյուրանոց\n\nՀանգիստ ծովափնյա զբոսանք՝ Ֆինիկուդեսի ափամերձ գոտի\n\nԱյցելություն Սուրբ Լազարոսի եկեղեցի\n\nՃաշ տեղական ռեստորանում՝ ծովամթերքով\n\n📍 Օր 2 – Այա Նապա (Ayia Napa)\nԱռավոտյան տեղափոխում դեպի Այա Նապա (~45 ր․)\n\nԸնդմիջում Nissi Beach-ում (փուչիկներ, լող, հանգիստ)\n\nԱյցելություն Սամար cave (ծովափնյա քարանձավներ)\n\nԵրեկոյան՝ զբոսանք և զվարճանք Այա Նապայի գիշերային կյանքում (ըստ ցանկության)\n\n📍 Օր 3 – Նիկոսիա (Nicosia)\nԱյցելություն Կիպրոսի մայրաքաղաք Նիկոսիա (միակ բաժանված մայրաքաղաքը աշխարհում)\n\nԶբոսանք հին քաղաքի տարածքով՝ Լեդրա փողոց, սահմանագիծ\n\nՍելիմիյե մզկիթ, Բյուզանդական թանգարան\n\nՃաշ հին քաղաքի բակում՝ ավանդական կիպրական խոհանոց\n\n📍 Օր 4 – Լիմասոլ (Limassol)\nԱյցելություն Լիմասոլ՝ նավահանգիստ, ամրոց, զբոսայգի\n\nՏեղական գինու համտես «Ktima Gerolemo» գինու գործարանում\n\nԾովափնյա ընթրիք՝ Sunset-ից դիտմամբ\n\n📍 Օր 5 – Տրոդոս լեռներ և Կիկոսի վանք\nԱրագյան գոտու շրջայց՝ Տրոդոս լեռներում\n\nԱյցելություն Կիկոսի հայտնի վանքին՝ պատմական և հոգևոր վայր\n\nԲնության վայելում, մաքուր օդ, տեղի գյուղացիների արտադրանք\n\nՃաշ լեռնային գյուղում՝ գյուղական միջավայրով\n\n📍 Օր 6 – Վերադարձ Լառնակա և թռիչք\nԱզատ ժամանակ՝ գնումների և ափամերձ հանգստի համար\n\nՏրանսֆեր դեպի օդանավակայան\n\n💼 Տուրի փաթեթը ներառում է՝\nՏեղափոխումներ բոլոր քաղաքների միջև\n\nՀյուրանոցներ 3*/4* նախաճաշով\n\nԱնհատական կամ խմբակային էքսկուրսիաներ\n\nՏեղեկատվական ուղեկցող (հայերեն/ռուսերեն ըստ պահանջի)\n\nԱնապատային սարքավորումներ՝ ըստ անհրաժեշտության"

    },
    {
      image: "/greece.jpg",
      title: "Տուր Հունաստանում 8 օր",
      dates: "01.09–09.09",
      price: "$1350",
      description: "🇬🇷 8 Օրյա Տուր Հունաստանում\n📆 Աթենք – Միկոնոս – Սանտորինի – Աթենք\n\n📍 Օր 1 – Ժամանում Աթենք (Athens)\nՏրանսֆեր հյուրանոց\n\nԶբոսանք Պլակա թաղամասով\n\nՏեսարան Ակրոպոլիսից՝ երեկոյան լուսավորությամբ\n\nԸնթրիք տեղական տավեռնայում՝ կենդանի երաժշտությամբ\n\n📍 Օր 2 – Աթենք՝ պատմական կենտրոն\nԱյցելություն Ակրոպոլիս (Պարթենոն, Էրեխթեոն, Նիկե տաճար)\n\nԱկրոպոլիսի թանգարան\n\nՍինթագմայի հրապարակ՝ պահակների փոփոխություն\n\nԱզատ ժամանակ գնումների համար Ermou փողոցում\n\n📍 Օր 3 – Միկոնոս կղզի\nԱռավոտյան նավով տեղափոխում դեպի Միկոնոս (~2.5–3 ժ․)\n\nՀանգիստ և լանչ Paradise Beach-ում\n\nԵրեկոյան՝ զբոսանք նեղ փողոցներով, «Փոքր Վենետիկ» թաղամաս\n\nԱրևամուտը՝ հողմաղացների ֆոնին\n\n📍 Օր 4 – Միկոնոս\nԱզատ օր՝ հանգստի, լողափերի կամ ակումբների համար\n\nԸնտրովի՝ նավով փոքր տուր դեպի Դելոս կղզի (հին հունական սրբավայր)\n\nԸնթրիք՝ ծովափնյա ռեստորանում\n\n📍 Օր 5 – Սանտորինի կղզի\nՆավով տեղափոխում Սանտորինի (~2 ժամ)\n\nՏեղավորում հյուրանոցում՝ գունեղ տեսարանով դեպի կալդերա\n\nԶբոսանք Ֆիրա քաղաքի նեղլիկ փողոցներով\n\nԱրևամուտ Oia քաղաքում (աշխարհի լավագույններից)\n\n📍 Օր 6 – Սանտորինի (կղզիաշրջում)\nԷքսկուրսիա՝\n\nՍև ավազով ծովափ (Kamari կամ Perissa)\n\nԿարմիր լողափ\n\nԳինու գործարան այց և համտես\n\nԸնտրովի՝ նավակով լեռնակղզի և ջերմաղբյուրներ\n\n📍 Օր 7 – Վերադարձ Աթենք\nԱռավոտյան թռիչք կամ նավով տեղափոխում Աթենք\n\nԱզատ ժամանակ՝ վերջին գնումների կամ հանգստի համար\n\nԸնթրիք՝ հրաժեշտի երեկույթով\n\n📍 Օր 8 – Վերադարձ տուն\nՏրանսֆեր դեպի օդանավակայան\n\nԹռիչք\n\n💼 Տուրի փաթեթը ներառում է՝\nԲոլոր տրանսֆերները (նավեր, օդանավակայաններ)\n\n3*/4* հյուրանոցներ նախաճաշով\n\nԷքսկուրսիաներ Աթենքում, Միկոնոսում, Սանտորինիում\n\nԱկրոպոլիսի և թանգարանների մուտքավճարներ\n\nՀունական գինու համտես"

    },
    {
      image: "/lori.jpeg",
      title: "Տուր դեպի Լոռի",
      dates: "12.07–14.07",
      price: "$150",
      description: "🇦🇲 1 Օրյա Տուր Լոռու Մարզում\n📍 Հաղպատ – Սանահին – Դեբեդի կիրճ – Օձուն – Քոբայր\n\n🕐 08:00 – Ելք Երևանից\nՀանդիպում և մեկնում կոմֆորտ միկրոավտոբուսով դեպի Լոռու մարզ (~2.5 ժամ)\n\n📍 11:00 – Այցելություն Հաղպատի վանքային համալիր\nՅՈՒՆԵՍԿՕ-ի ժառանգության ցուցակում գրանցված վանական համալիր\n\nՃարտարապետական վայելք և պատմական ակնարկներ\n\nՆկարչություն գեղեցիկ տեսարաններով\n\n📍 12:30 – Այցելություն Սանահինի վանք\nՄիջնադարյան վանական համալիր՝ նշանավոր հայկական մանրանկարներով\n\nՄիկոյան եղբայրների թանգարանի դիտում (ըստ ցանկության)\n\n📍 14:00 – Ճաշ Դեբեդ գետի ափին կամ Օձունի գոմեշի մսով խորովածով (ըստ նախընտրության)\nՏեղական ավանդական կերակուրներ\n\nԳյուղական միջավայր՝ մաքուր օդով\n\n📍 15:30 – Օձունի տաճար\n5-7-րդ դարերով թվագրվող վեհաշուք տաճար\n\nՀայ ճարտարապետության վաղ շրջանի օրինակ\n\n📍 17:00 – Քոբայրի վանք (ընտրովի՝ փոքր ոտքով բարձրացում)\nԲարձունքում գտնվող քարանձավային միջավայրում կառուցված վանք\n\nՀիասքանչ տեսարան դեպի Դեբեդի կիրճ\n\n📍 18:30 – Մեկնում Երևան\nՃանապարհին կանգառներ սրճի կամ հուշանվերների համար\n\nՎերադարձ ~21:00\n\n💼 Տուրը ներառում է՝\nՏրանսպորտ\n\nԳիդ-ուղեկցորդ\n\nՄուտքեր նշված վայրեր\n\nՃաշ (ըստ ցանկության՝ ներառված կամ հավելավճարով)"

    },
    {
      image: "/syunik.jpeg",
      title: "Տուր դեպի Սյունիք",
      dates: "18.07–20.07",
      price: "$180",
      description: "🇦🇲 1 Օրյա Տուր Սյունիքի Մարզում\n📍 Տաթև – Տաթևեր՝ աշխարհի ամենաերկար ճոպանուղի – Սատանի կամուրջ – Խնձորեսկ\n\n🕐 08:00 – Ելք Գորիսից կամ Երևանից (շուտ)\nՃանապարհ դեպի Հալիձոր (~30 ր․ Գորիսից / ~5.5 ժ․ Երևանից)\n\nՎայելեք գեղատեսիլ վայերը ողջ ճանապարհին\n\n📍 10:00 – Ճոպանուղի «Տաթևեր»\nԳնացեք աշխարհի ամենաերկար ճոպանուղով՝ կախված Դևի կիրճի վրա\n\n12 րոպե լողացող զգացողություն մինչև Տաթևի վանք\n\n📍 10:30 – Տաթևի վանական համալիր\nԱյցելություն 9-րդ դարի պատմական համալիր\n\nԳավիթ, եկեղեցի, զանգակատուն և հայ ճարտարապետության գլուխգործոցներ\n\nՏեսարաններ դեպի գետնափոր հովիտը\n\n📍 12:30 – Ճաշ տեղի հյուրատանը կամ գյուղական ռեստորանում\nՏեղական խոհանոց՝ խորոված, տոլմա, թան և թարմ մրգեր\n\nԸնտրովի՝ գինու համտես\n\n📍 14:00 – Սատանի կամուրջ (նախասիրությամբ)\nԲնական կամուրջ գետի վրա՝ տաք ջրերով և քարանձավներով\n\nՃանաչված է իր բուժիչ հատկություններով\n\nՑանկության դեպքում՝ լող կամ սպա տաք աղբյուրներում\n\n📍 16:00 – Խնձորեսկ (Հին և Նոր)\nԶբոսանք կախովի կամրջով դեպի հին Խնձորեսկ\n\nՔարանձավային տներ, աղբյուրներ, հնագիտական հուշարձաններ\n\nՀրաշալի լուսանկարի վայրեր\n\n📍 18:30 – Վերադարձ Գորիս կամ Երևան\nՃանապարհին հնարավոր է կանգառներ բազարների կամ տեսարժան վայրերի մոտ\n\n💼 Տուրը ներառում է՝\nՏրանսպորտ\n\nՃոպանուղու տոմս\n\nԳիդ (հայերեն/ռուսերեն/անգլերեն)\n\nՃաշ (ըստ ցանկության)\n\nՄուտքեր նշված վայրեր"

    },
    {
      image: "/tavush.jpeg",
      title: "Տուր դեպի Տավուշ",
      dates: "22.07–24.07",
      price: "$160",
      description: "🇦🇲 1 Օրյա Տուր Տավուշի Մարզում\n📍 Դիլիջան – Հաղարծին – Գոշավանք – Պարզ լիճ\n\n🕐 08:00 – Ելք Երևանից\nՀանդիպում և մեկնում դեպի Տավուշի մարզ (~2.5 ժամ)\n\nՃանապարհին կանգառ՝ Սևանավանք (ըստ ցանկության)\n\n📍 10:30 – Հաղարծին վանքային համալիր\n10-րդ դարի վանական համալիր՝ անտառներով շրջապատված\n\nԼուսանկարների հիանալի վայր\n\nՄեղր, դեղաբույսեր, տեղական արտադրանք վաճառվող տաղավարներ\n\n📍 12:00 – Պարզ լիճ\nԿարճ կանգառ և զբոսանք լճի շուրջ\n\nՑանկության դեպքում՝ կատամարան, նավակ կամ պարզապես հանգիստ բնության գրկում\n\nՍրճում՝ լճի ափին\n\n📍 13:00 – Ճաշ Դիլիջանում\nՏեղական տավեռնա՝ ավանդական ճաշատեսակներով\n\nՏաք տոլմա, լոբիով հաց, թան, խաշիլ, գինիների տեսականի\n\n📍 14:30 – Գոշավանք վանական համալիր\n12-13-րդ դարերի ճարտարապետական հուշարձան\n\nԱյցելություն Մխիթար Գոշի շիրիմին\n\nԲացատրություն վանքի պատմության և խաչքարերի մասին\n\n📍 16:00 – Դիլիջան «Հին քաղաք» թաղամաս\nԶբոսանք Դիլիջանի հին փողոցներով՝ արհեստագործների տներով\n\nԳնել հուշանվերներ՝ ձեռագործ փայտե իրեր, զարդեր, քաղցրավենիք\n\nՍրճում՝ փայտաշեն պատշգամբով սրճարանում\n\n🕐 18:00 – Վերադարձ Երևան\n\n💼 Տուրը ներառում է՝\nՏրանսպորտ և վարորդ\n\nԳիդի ծառայություն\n\nՄուտքեր բոլոր նշված վայրեր\n\nՃաշ (ըստ ցանկության՝ կարող է ներառվել)\n\nԹեթև խմիչքներ/ջուր ճանապարհին"

    },
    {
      image: "/gyumri.jpeg",
      title: "Տուր դեպի Գյումրի",
      dates: "28.07–30.07",
      price: "$140",
      description: "🇦🇲 1 Օրյա Տուր Գյումրիում\n📍 Քաղաքային մշակույթ – Հին Գյումրի – Թանգարաններ – Գաստրոնոմիա\n\n🕐 08:30 – Ելք Երևանից դեպի Գյումրի (~2 ժամ)\nՀարմարավետ տրանսպորտով ուղևորություն\n\nՃանապարհին՝ պատմական ակնարկներ Շիրակի մասին\n\n📍 10:30 – Գյումրիի կենտրոն՝ Վարդանանց հրապարակ\nԶբոսանք Գյումրիի պատմական սրտում\n\nԱյցելություն Սուրբ Ամենափրկիչ և Սուրբ Նշան եկեղեցիներ\n\nԼուսանկարներ՝ 19-րդ դարի քարաշեն ճարտարապետության ֆոնին\n\n📍 11:30 – Հին Գյումրի / Կումայրի պատմական թաղամաս\nՏեսարժան հին շենքեր, ներառյալ՝ Զմռղանյանների և Դդոյանի տները\n\nՃարտարապետական ոճերի բացատրություն (ռուսական, հայկական, եվրոպական ազդեցություններ)\n\nԱրհեստների ցուցադրություն՝ ձեռագործ հուշանվերներ\n\n📍 13:00 – Ճաշ Գյումրու ավանդական ռեստորանում\nՏեղական խոհանոց՝ Գյումրու կուֆտա, թանապուր, թափարա, թթու\n\nԸնտրովի՝ գինու կամ օղու համտես՝ շիրակցու հումորով ուղեկցված\n\n📍 14:30 – Թանգարանային շրջայց\nԸնտրովի՝\n\nԱսլամազյան քույրերի պատկերասրահ\n\nՀովհաննես Շիրազի տուն-թանգարան\n\nՂուկաս Գյումրեցու տուն\n\nԿամ Թատերական հրապարակ և դրամատիկական թատրոն զբոսանք\n\n📍 16:30 – Սև բերդ (Սև ամրոց)\nՌուսական կայսրության շրջանի ռազմական ամրոց\n\nՀիասքանչ տեսարան դեպի քաղաք\n\nՊատմական ակնարկներ և լուսանկարներ\n\n📍 17:30 – Ազատ ժամանակ / Սրճում քաղաքում\nԺողովրդական սրճարաններ, փոքր հուշանվերների գնում\n\nՀնարավորություն՝ փորձել գյումրեցու հումորն ու շփումը\n\n🕐 18:30 – Վերադարձ Երևան\n\n💼 Տուրը ներառում է՝\nՏրանսպորտ Երևան ⇄ Գյումրի\n\nԳիդի ծառայություն\n\nՃաշ տեղական ռեստորանում\n\nԹանգարան մուտքեր (ըստ ընտրության)\n\nՋուր և թեթև խմիչք ճանապարհին"

    },
  ];

  const filteredTours = allTours.filter(tour =>
    tour.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white text-[#075385] p-4 relative">
        <div className="flex items-center justify-between md:justify-start md:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/favicon.png" alt="ZenTravel Logo" className="h-14 w-auto" />
          </div>

          {/* Search bar */}
          <div className="flex-1 flex justify-center md:justify-center mt-2 md:mt-0">
            <div className="flex items-center bg-[#075385] h-10 rounded-full px-4 w-[160px] md:w-[280px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-white placeholder-white w-full text-sm"
              />
              <button className="text-white ml-1">
                <i className="material-icons text-base">search</i>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#075385] ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 ml-auto">
            <a href="#home">Գլխավոր</a>
            <a href="#tours">Տուրեր</a>
            <a href="#about">Մեր մասին</a>
            <a href="#contacts">Կոնտակտներ</a>
            <select className="bg-[#075385] text-white px-2 py-1 rounded">
              <option>ARM</option>
              <option>ENG</option>
            </select>
          </nav>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col items-start gap-2">
            <a href="#home">Գլխավոր</a>
            <a href="#tours">Տուրեր</a>
            <a href="#about">Մեր մասին</a>
            <a href="#contacts">Կոնտակտներ</a>
            <select className="bg-[#075385] text-white px-2 py-1 rounded">
              <option>ARM</option>
              <option>ENG</option>
            </select>
          </nav>
        )}
      </header>

     {/* Popular Tours */}
{allTours.slice(0, 4).filter(tour =>
  tour.title.toLowerCase().includes(searchQuery.toLowerCase())
).length > 0 && (
  <section id="tours" className="p-8">
    <h2 className="text-3xl font-bold mb-6">Տուրեր</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allTours.slice(0, 4)
        .filter(tour =>
          tour.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((tour, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow">
            <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p>{tour.dates}</p>
              <p className="font-bold mt-2">Գինը: {tour.price}</p>
              <button
                onClick={() => setSelectedTour(tour)}
                className="mt-4 bg-[#075385] text-white px-4 py-2 rounded"
              >
                Ամրագրել
              </button>
              <button
                onClick={() => setInfoTour(tour)}
                className="bg-gray-300 text-black px-4 py-2 rounded ml-[1mm]"
              >
                Ավելին
              </button>
            </div>
          </div>
        ))}
    </div>
  </section>
)}


{/* Inbound Tours */}
{allTours.slice(4).filter((tour) =>
  tour.title.toLowerCase().includes(searchQuery.toLowerCase())
).length > 0 && (
  <section id="inbound-tours" className="p-8">
    <h2 className="text-3xl font-bold mb-6">Ներգնա տուրեր</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allTours
        .slice(4)
        .filter((tour) =>
          tour.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((tour, idx) => (
          <div key={idx} className="border rounded-xl overflow-hidden shadow">
            <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p>{tour.dates}</p>
              <p className="font-bold mt-2">Գինը: {tour.price}</p>
              <div className="mt-4 flex">
                <button
                  onClick={() => setSelectedTour(tour)}
                  className="bg-[#075385] text-white px-4 py-2 rounded"
                >
                  Ամրագրել
                </button>
                <button
                  onClick={() => setInfoTour(tour)}
                  className="bg-gray-300 text-black px-4 py-2 rounded ml-[1mm]"
                >
                  Ավելին
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  </section>
)}



    {/* Info Modal */}
    {infoTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setInfoTour(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4">{infoTour.title}</h2>
            <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
              {infoTour.description}
            </p>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setSelectedTour(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Ամրագրում</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium">1. Անուն և Ազգանուն</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Մուտքագրեք ձեր անունը և ազգանունը" />
              </div>
              <div>
                <label className="block font-medium">2. Հեռախոսահամար / WhatsApp</label>
                <input type="tel" className="w-full p-2 border rounded" placeholder="Հասանելի համար կապի համար" />
              </div>
              <div>
                <label className="block font-medium">3. Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Մուտքագրեք ձեր էլ․ հասցեն" />
              </div>
              <div>
                <label className="block font-medium">4. Ընտրեք տուրը</label>
                <select className="w-full p-2 border rounded">
                  {allTours.map((t, i) => (
                    <option key={i} value={t.title}>{t.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium">5. Մարդկանց քանակը</label>
                <input type="number" min={1} className="w-full p-2 border rounded" placeholder="Օրինակ՝ 2" />
              </div>
              <button type="submit" className="bg-[#075385] text-white py-2 rounded w-full">
                Հաստատել ամրագրումը
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className=" text-white bg-[#075385] p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold">Կոնտակտներ</h4>
            <p>Email: info@travelco.com</p>
            <p>Тел: +374 00 000 000</p>
            <p>WhatsApp / Telegram</p>
          </div>
          <div>
            <h4 className="font-semibold">Հասցե</h4>
            <p>Հրազդան, Միկրոշրջան 4-րդ փողոց, 18, Հայաստան</p>
          </div>
          <div>
            <h4 className="font-semibold">Սոցիալական ցանցեր</h4>
            <p>Instagram | Facebook | TikTok</p>
            <p className="mt-2">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
