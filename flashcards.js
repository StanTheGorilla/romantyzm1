// --- Fiszki (Definicja Danych - WBUDOWANE) ---
const flashcardsByCategory = {
    "Pojęcia Kluczowe": [
        // Istniejące
        { q: "Główne hasło epoki romantyzmu?", a: "Dominacja uczucia, intuicji nad rozumem. 'Miej serce i patrzaj w serce!' <span class='source-citation'>[2, 13]</span>" },
        { q: "Co to jest mesjanizm polski?", a: "Wiara w misję Polski jako 'Chrystusa narodów', która przez cierpienie i ofiarę przyniesie wolność innym ludom. <span class='source-citation'>[4, 10]</span>" },
        { q: "Wallenrodyzm – co oznacza?", a: "Postawa patriotyczna polegająca na walce z wrogiem podstępem i zdradą, poświęcając własne zasady moralne dla dobra ojczyzny. <span class='source-citation'>[3, 5]</span>" },
        // Nowe (staram się dodać jak najwięcej)
        { q: "Czym jest irracjonalizm romantyczny?", a: "Przekonaniem o ograniczoności poznania rozumowego i dowartościowaniem intuicji, wiary, uczuć oraz snu jako dróg do prawdy. <span class='source-citation'>[1, 13]</span>" },
        { q: "Wyjaśnij pojęcie indywidualizmu romantycznego.", a: "Kult jednostki, podkreślanie jej wyjątkowości, niepowtarzalności, prawa do subiektywnych odczuć i buntu przeciw normom społecznym. <span class='source-citation'>[1, 17]</span>" },
        { q: "Co romantycy rozumieli przez 'ludowość'?", a: "Fascynację kulturą ludu (wierzeniami, obyczajami, językiem, pieśniami) jako skarbnicą autentycznych wartości, moralności i ducha narodu. <span class='source-citation'>[2, 8]</span>" },
        { q: "Na czym polegał historyzm romantyczny?", a: "Zainteresowanie przeszłością, zwłaszcza średniowieczem, jako źródłem inspiracji, tożsamości narodowej i wzorców bohaterstwa. <span class='source-citation'>[5, 11]</span>" },
        { q: "Co to jest orientalizm w romantyzmie?", a: "Fascynacja kulturą, sztuką, filozofią i egzotyką Wschodu, postrzeganego jako symbol tajemniczości, zmysłowości i duchowości. <span class='source-citation'>[16, 19]</span>" },
        { q: "Definicja gotycyzmu w literaturze romantycznej.", a: "Zainteresowanie elementami grozy, tajemnicy, zjawiskami nadprzyrodzonymi, ruinami, średniowieczem, budujące nastrój niepokoju. <span class='source-citation'>[1, 49]</span>" },
        { q: "Co oznacza 'Weltschmerz' (ból świata)?", a: "Stan głębokiej melancholii, smutku egzystencjalnego, poczucia bezsensu istnienia i rozczarowania światem, typowy dla bohaterów romantycznych. <span class='source-citation'>[6, 36]</span>" },
        { q: "Kim jest bohater bajroniczny?", a: "Typ bohatera literackiego: dumny, tajemniczy buntownik, skłócony ze światem, obciążony winą, poszukujący wielkich namiętności. <span class='source-citation'>[3, 5]</span>" },
        { q: "Co to jest synkretyzm rodzajowy i gatunkowy?", a: "Łączenie i mieszanie cech różnych rodzajów (liryka, epika, dramat) i gatunków literackich w jednym utworze. <span class='source-citation'>[1, 8]</span>" },
        { q: "Rola profetyzmu (wieszczbiarstwa) w romantyzmie.", a: "Przekonanie o szczególnej roli poety jako duchowego przywódcy narodu, wieszcza, zdolnego przewidywać przyszłość i głosić prawdy moralne. <span class='source-citation'>[4, 8]</span>" },
        { q: "Czym jest 'Sturm und Drang' (Okres Burzy i Naporu)?", a: "Niemiecki ruch literacki końca XVIII w., prekursor romantyzmu, charakteryzujący się buntem przeciwko konwencjom i kultem uczucia. <span class='source-citation'>[1]</span>" },
        { q: "Pojęcie ' winkelriedyzmu' w kontekście polskim.", a: "Idea Polski jako narodu, który (jak Arnold Winkelried) poświęca się w walce, otwierając drogę do wolności innym. <span class='source-citation'>[4, 6]</span>" },
        { q: "Co to jest 'choroba wieku'?", a: "Określenie stanu duchowego typowego dla młodego pokolenia romantyków, charakteryzującego się apatią, melancholią, poczuciem bezsensu. <span class='source-citation'>[6, 36]</span>" },
        { q: "Rola natury w światopoglądzie romantycznym.", a: "Natura jako żywioł, źródło inspiracji, przestrzeń metafizyczna, odzwierciedlenie stanów duchowych bohatera; często dzika i tajemnicza. <span class='source-citation'>[1, 16]</span>" },
        { q: "Czym charakteryzuje się bohater werteryczny?", a: "Nadwrażliwy, skłonny do melancholii, nieszczęśliwie zakochany, indywidualista, odczuwający 'ból istnienia', często kończący samobójstwem. (Od 'Cierpień młodego Wertera' Goethego). <span class='source-citation'>[1]</span>" },
        { q: "Co to jest powieść poetycka?", a: "Gatunek synkretyczny łączący elementy epiki, liryki i dramatu, o fragmentarycznej fabule, z silnie zarysowanym bohaterem indywidualistą. <span class='source-citation'>[5]</span>" },
        { q: "Cechy ballady romantycznej.", a: "Łączy elementy liryczne, epickie i dramatyczne, tematyka ludowa, fantastyczna, historyczna, obecność narratora, nastrój tajemniczości. <span class='source-citation'>[3, 13]</span>" },
        { q: "Na czym polega fragmentaryzm w kompozycji utworów romantycznych?", a: "Celowe unikanie ciągłości fabularnej, luźne łączenie scen, niedopowiedzenia, pozostawianie luk w narracji. <span class='source-citation'>[5, 8]</span>" },
        { q: "Co oznacza pojęcie 'tyrteizmu'?", a: "Poezja patriotyczna, zagrzewająca do walki o wolność, nawołująca do bohaterstwa (od imienia greckiego poety Tyrteusza). <span class='source-citation'>[11]</span>" },
        { q: "Ironia romantyczna – co to takiego?", a: "Postawa twórcy wobec dzieła i świata, polegająca na dystansie, podkreślaniu subiektywizmu, grze z konwencjami, uświadamianiu sztuczności kreacji. <span class='source-citation'>[1]</span>" },
        { q: "Kim był 'poeta przeklęty' (poète maudit)?", a: "Artysta nieprzystosowany do społeczeństwa, buntownik, geniusz nierozumiany przez tłum, często prowadzący destrukcyjny tryb życia. <span class='source-citation'>[1]</span>" },
        { q: "Czym jest mistycyzm w romantyzmie?", a: "Dążenie do bezpośredniego poznania Boga i rzeczywistości duchowej poprzez intuicję, objawienie, kontemplację, często poza oficjalnymi doktrynami religijnymi. <span class='source-citation'>[4, 8]</span>" },
        { q: "Rola motywu snu w literaturze romantycznej.", a: "Sen jako źródło poznania, medium kontaktu ze światem nadprzyrodzonym, przestrzeń wizji i proroctw, odbicie podświadomości. <span class='source-citation'>[1, 8]</span>" },
        { q: "Co to jest 'koloryt lokalny'?", a: "Wprowadzanie do utworu elementów charakterystycznych dla danego regionu, kultury, epoki (obyczaje, stroje, język, krajobraz) w celu uwiarygodnienia i uatrakcyjnienia przedstawianego świata. <span class='source-citation'>[5, 16]</span>" },
        { q: "Panteizm – jak rozumieli go romantycy?", a: "Pogląd utożsamiający Boga z naturą, wszechświatem; natura jako przejaw boskości. <span class='source-citation'>[16]</span>" },
        { q: "Co oznacza frenezja romantyczna?", a: "Nurt w literaturze i sztuce eksponujący skrajne emocje, makabrę, okrucieństwo, sceny grozy, często związane z szaleństwem i śmiercią. <span class='source-citation'>[1]</span>" },
        { q: "Jaką funkcję pełniły ruiny w estetyce romantycznej?", a: "Symbol przemijania, potęgi czasu, śladów historii, budziły melancholię i refleksję nad przeszłością. <span class='source-citation'>[1, 16]</span>" },
        { q: "Co to jest uczuciowość w romantyzmie?", a: "Prymat uczucia nad rozumem, dowartościowanie emocji, namiętności, subiektywnych przeżyć jako głównego źródła poznania i wartości. <span class='source-citation'>[1, 13]</span>" }
    ],
    "Mickiewicz - Dziady": [
        // Istniejące
        { q: "Główna idea 'Dziadów cz. II'?", a: "Ludowa moralność: 'nie ma winy bez kary', konieczność pełnego doświadczenia człowieczeństwa (cierpienia i radości). <span class='source-citation'>[8, 15]</span>" },
        { q: "Kto jest głównym bohaterem 'Dziadów cz. III'?", a: "Konrad, w którego przemienia się Gustaw z IV cz. 'Dziadów'. <span class='source-citation'>[8, 14]</span>" },
        { q: "Co to jest Wielka Improwizacja?", a: "Monolog Konrada w III cz. 'Dziadów', w którym rzuca wyzwanie Bogu, żądając władzy nad duszami w imię miłości do narodu. <span class='source-citation'>[4, 8]</span>" },
        // Nowe
        { q: "Jakie trzy rodzaje duchów pojawiają się w 'Dziadach cz. II'?", a: "Duchy lekkie (Józio i Rózia), duch ciężki (Widmo Złego Pana), duchy pośrednie (Zosia). <span class='source-citation'>[8, 15]</span>"},
        { q: "Czego symbolem jest prośba Józia i Rózi o ziarnka gorczycy?", a: "Pragnienia doświadczenia pełni życia, w tym cierpienia, którego nie zaznały. <span class='source-citation'>[8, 15]</span>"},
        { q: "Jaką karę ponosi Widmo Złego Pana w 'Dziadach cz. II'?", a: "Wieczny głód i pragnienie, dręczony przez dusze swoich ofiar (ptaki nocne). <span class='source-citation'>[8, 15]</span>"},
        { q: "Na czym polegała wina Zosi z 'Dziadów cz. II'?", a: "Na życiu 'pomiędzy niebem a ziemią', braku ziemskiego zaangażowania i nieodwzajemnianiu uczuć. <span class='source-citation'>[8, 15]</span>"},
        { q: "W jakiej scenie 'Dziadów cz. III' dokonuje się przemiana Gustawa w Konrada?", a: "W Prologu, w celi więziennej, gdzie na ścianie pisze: 'Gustavus obiit – hic natus est Conradus'. <span class='source-citation'>[8, 14]</span>"},
        { q: "O co Konrad oskarża Boga w Wielkiej Improwizacji?", a: "O obojętność na cierpienie Polski, o bycie jedynie 'mądrością', a nie 'miłością'. Nazywa Go nawet 'carem'. <span class='source-citation'>[4, 8]</span>"},
        { q: "Kto i w jakiej scenie 'Dziadów cz. III' przedstawia ideę mesjanizmu polskiego?", a: "Ksiądz Piotr w scenie 'Widzenie Księdza Piotra'. <span class='source-citation'>[4, 8, 10]</span>"},
        { q: "Co krytykuje scena 'Salon Warszawski' w 'Dziadach cz. III'?", a: "Kosmopolityzm i serwilizm arystokracji polskiej wobec zaborcy, kontrastując ją z patriotyczną młodzieżą. <span class='source-citation'>[8, 50]</span>"},
        { q: "Kim jest tajemniczy 'czterdzieści i cztery' z Widzenia Księdza Piotra?", a: "Zagadkowa postać przyszłego wybawiciela Polski, różnie interpretowana (np. sam Mickiewicz, idea, konkretna osoba). <span class='source-citation'>[4, 8]</span>"},
        { q: "Jaką rolę pełni 'Ustęp' w 'Dziadach cz. III'?", a: "Jest to epicka część opisująca Rosję carską, jej despotyzm i militaryzm, stanowiąca tło dla polskiej martyrologii. <span class='source-citation'>[8]</span>"},
        { q: "Kto jest adresatem dedykacji III części 'Dziadów'?", a: "'Narodowej Sprawie Męczennikom' – Janowi Sobolewskiemu, Cyprianowi Daszkiewiczowi i Feliksowi Kółakowskiemu oraz innym filomatom. <span class='source-citation'>[8]</span>"},
        { q: "Jakie wydarzenia historyczne są bezpośrednim tłem III cz. 'Dziadów'?", a: "Proces Filomatów i Filaretów oraz represje carskie na Litwie po 1823 roku. <span class='source-citation'>[8]</span>"},
        { q: "Czym jest prometeizm Konrada?", a: "Postawą buntu przeciw Bogu w imię miłości do ludzkości (narodu), gotowością do cierpienia za innych, na wzór mitycznego Prometeusza. <span class='source-citation'>[4, 8]</span>"},
        { q: "Podaj przykład martyrologii przedstawionej w III cz. 'Dziadów'.", a: "Historia Cichowskiego, Rollisona, wywózka dzieci na Sybir. <span class='source-citation'>[8]</span>"},
        { q: "Co symbolizuje Sen Senatora Nowosilcowa?", a: "Jego pychę, żądzę władzy, strach przed utratą łask cara, a ostatecznie jego moralny upadek i potępienie. <span class='source-citation'>[8]</span>"},
        { q: "Jaka jest rola Ewy i jej widzenia w III cz. 'Dziadów'?", a: "Symbolizuje czystość, niewinność, modlitwę; jej widzenie (kwiaty dla Maryi) kontrastuje z mrocznymi wizjami Konrada i Senatora. <span class='source-citation'>[8]</span>"},
        { q: "Jakie funkcje pełni w dramacie postać Księdza Piotra?", a: "Pokornego sługi Bożego, egzorcysty, proroka, głosiciela idei mesjanistycznej, kontrast dla pysznego Konrada. <span class='source-citation'>[4, 8]</span>"},
        { q: "Czym jest 'Mała Improwizacja' Konrada?", a: "Krótszy monolog Konrada, w którym porównuje się do orła, ale czuje się skrępowany przez 'kruka' (symbol zdrady lub własnych ograniczeń). <span class='source-citation'>[8]</span>"},
        { q: "Wymień trzy główne tematy poruszane w 'Ustępie' III cz. 'Dziadów'.", a: "Obraz Petersburga, pomnik Piotra Wielkiego, przegląd wojsk carskich, refleksje nad Rosją i jej ludem. <span class='source-citation'>[8]</span>"},
        { q: "Na czym polega ludowa sprawiedliwość w II cz. 'Dziadów'?", a: "Każda wina musi być odpokutowana; droga do nieba prowadzi przez pełne doświadczenie ludzkiego losu, w tym cierpienia. <span class='source-citation'>[8, 15]</span>"},
        { q: "Kto przewodniczy obrzędowi w II cz. 'Dziadów'?", a: "Guślarz. <span class='source-citation'>[8, 15]</span>"},
        { q: "Jaką ofiarę składają wieśniacy duchom w II cz. 'Dziadów'?", a: "Jedzenie, napoje, modlitwę. <span class='source-citation'>[8, 15]</span>"},
        { q: "Co oznaczały słowa 'Kto nie dotknął ziemi ni razu, / Ten nigdy nie może być w niebie'?", a: "Sentencja wypowiedziana przez Zosię, oznaczająca, że do zbawienia potrzebne jest pełne zaangażowanie w życie ziemskie, w tym miłość. <span class='source-citation'>[8, 15]</span>"},
        { q: "Co oznacza łaciński napis na ścianie celi Konrada?", a: "'Gustaw umarł 1 listopada 1823 – Tu narodził się Konrad 1 listopada 1823'. Symbolizuje śmierć kochanka i narodziny bojownika o sprawę narodową. <span class='source-citation'>[8, 14]</span>"},
        { q: "W jaki sposób Konrad chce 'wydrzeć Bogu piorun'?", a: "Chce posiąść boską moc kreacji i władzy nad ludzkimi duszami, aby uszczęśliwić naród. <span class='source-citation'>[4, 8]</span>"},
        { q: "Jaki rodzaj poezji reprezentuje Wielka Improwizacja?", a: "Poezję tyrtejską, profetyczną, ale też bluźnierczą w swoim buncie. <span class='source-citation'>[4, 8]</span>"},
        { q: "Co przedstawia 'Droga do Rosji' w 'Ustępie'?", a: "Obraz bezkresnych, pustych przestrzeni Rosji i kibitek wiozących zesłańców na Sybir. <span class='source-citation'>[8]</span>"},
        { q: "Kim jest Justyn Pol w 'Salonie Warszawskim'?", a: "Młody patriota, który opowiada o Cichowskim, reprezentuje postawę zaangażowaną. <span class='source-citation'>[8, 50]</span>"}
    ],
    "Mickiewicz - Sonety Krymskie": [
        // Istniejące
        { q: "Główny temat 'Sonetów Krymskich'?", a: "Podróż Pielgrzyma po egzotycznym Krymie, refleksje nad naturą, historią, kulturą Orientu, samotnością i tęsknotą za ojczyzną. <span class='source-citation'>[16, 19]</span>" },
        { q: "Który sonet opisuje potęgę poezji na tle góry?", a: "'Ajudah' – góra porównana do twórcy, a fale (żywioły) do namiętności, które poezja uwiecznia. <span class='source-citation'>[16, 32]</span>" },
        { q: "Jaki obraz przedstawia 'Burza'?", a: "Dynamiczny opis sztormu na morzu i kontrastująca z paniką innych apatia samotnego Pielgrzyma, tęskniącego za kimś, z kim mógłby się pożegnać. <span class='source-citation'>[16, 30]</span>" },
        // Nowe
        { q: "Kim jest Pielgrzym w 'Sonetach Krymskich'?", a: "Bohater liryczny, wygnaniec z ojczyzny (alter ego poety), człowiek Zachodu zafascynowany, ale i obcy w świecie Orientu. <span class='source-citation'>[16, 19]</span>" },
        { q: "Kto to jest Mirza w 'Sonetach Krymskich'?", a: "Przewodnik Pielgrzyma, człowiek Wschodu, dumny ze swojego kraju, jego kultury i historii. <span class='source-citation'>[16]</span>" },
        { q: "Co symbolizuje step w sonecie 'Stepy Akermańskie'?", a: "Bezkres, potęgę natury, ale także pustkę, samotność i tęsknotę Pielgrzyma za głosem z Litwy. <span class='source-citation'>[16]</span>" },
        { q: "Jakie zmysły dominują w opisie stepu w 'Stepach Akermańskich'?", a: "Wzrok ('koralowe ostrowy burzanu') i słuch (wytężanie ucha w ciszy). <span class='source-citation'>[16]</span>" },
        { q: "Co oznacza porównanie wozu do łodzi w 'Stepach Akermańskich'?", a: "Podkreśla bezkres i falowanie stepu, upodabniając go do oceanu. <span class='source-citation'>[16]</span>" },
        { q: "Jaki nastrój panuje w sonecie 'Cisza morska'?", a: "Spokój, bezruch, ale też ukryte napięcie ('ohydna cichość'), które Pielgrzym porównuje do uśpionych polipów zdrady. <span class='source-citation'>[16]</span>" },
        { q: "Co Pielgrzym dostrzega na dnie morza w 'Ciszy morskiej'?", a: "Mityczne krainy, polipy, co symbolizuje ukryte namiętności i wspomnienia. <span class='source-citation'>[16]</span>" },
        { q: "Tematem sonetu 'Żegluga' jest:", a: "Dynamiczna podróż statkiem, siła wiatru i fal, poczucie swobody i potęgi, ale też kruchości człowieka wobec żywiołu. <span class='source-citation'>[16]</span>" },
        { q: "Jaki jest główny motyw sonetu 'Bakczysaraj'?", a: "Refleksja nad przemijaniem potęgi i świetności dawnej stolicy chanów krymskich, kontrast między ruinami a wieczną naturą. <span class='source-citation'>[16]</span>" },
        { q: "Co symbolizuje 'fontanna haremu' w sonecie 'Bakczysaraj'?", a: "Miłość, namiętność, ale też łzy i przemijanie uczuć. <span class='source-citation'>[16]</span>" },
        { q: "W sonecie 'Bakczysaraj w nocy', co jest źródłem światła?", a: "Księżyc, gwiazdy i 'lampy Allaha' (gwiazdy), tworzące magiczny, orientalny nastrój. <span class='source-citation'>[16]</span>" },
        { q: "Jaką górę opisuje sonet 'Czatyrdah'?", a: "Majestatyczną, samotną górę, porównywaną do sułtana, masztu świata, symbolizującą potęgę natury i bliskość Boga. <span class='source-citation'>[16]</span>" },
        { q: "Czego Pielgrzym zazdrości Mirzy w sonecie 'Pielgrzym'?", a: "Zdolności do modlitwy, posiadania ojczyzny i bliskich, których Mirza może wspominać. <span class='source-citation'>[16]</span>" },
        { q: "Jaki jest główny problem Pielgrzyma w sonecie 'Pielgrzym'?", a: "Głęboka tęsknota za ojczyzną, której piękno przyćmiewa nawet uroki Krymu, oraz niemożność zapomnienia o utracie. <span class='source-citation'>[16, 19]</span>" },
        { q: "Co oznacza pytanie 'Dlaczegoż stąd ucieka serce w okolice dalekie?' w sonecie 'Pielgrzym'?", a: "Wyraża niezrozumienie Pielgrzyma dla własnej, nieustannej tęsknoty za Litwą, mimo piękna otaczającego go świata. <span class='source-citation'>[16]</span>" },
        { q: "Jaką radę daje Mirza Pielgrzymowi w sonecie 'Droga nad przepaścią w Czufut-Kale'?", a: "Aby zaufał koniowi, nie patrzył w przepaść, a przede wszystkim nie ufał własnemu rozumowi, lecz instynktowi/wierze. <span class='source-citation'>[16]</span>" },
        { q: "Co symbolizuje przepaść w sonecie 'Droga nad przepaścią w Czufut-Kale'?", a: "Niebezpieczeństwo, pokusę, zwątpienie, ale też granicę poznania ludzkiego. <span class='source-citation'>[16]</span>" },
        { q: "W sonecie 'Grave (Grób Potockiej)', nad czyim grobem Pielgrzym medytuje?", a: "Nad grobem młodej Polki, Marii Potockiej, zmarłej na Krymie, co potęguje jego refleksje o przemijaniu i losie wygnańców. <span class='source-citation'>[16]</span>" },
        { q: "Jaki jest kontrast ukazany w sonecie 'Ruiny zamku w Bałakławie'?", a: "Kontrast między potęgą ludzkich budowli (zamku) a niszczącą siłą natury i czasu. <span class='source-citation'>[16]</span>" },
        { q: "Jakie elementy orientalne można znaleźć w 'Sonetach Krymskich'?", a: "Nazwy geograficzne, słownictwo (np. minaret, harem, Allah), opisy obyczajów, krajobrazu, postaci (Mirza). <span class='source-citation'>[16, 19]</span>" },
        { q: "Jaki typ sonetu dominuje w cyklu Mickiewicza?", a: "Sonet włoski (petrarkowski) – podział na oktawę (dwie kwartyny) i sekstynę (dwie tercyny). <span class='source-citation'>[16]</span>" },
        { q: "Jaką funkcję pełni dialog Pielgrzyma z Mirzą?", a: "Konfrontuje perspektywę Zachodu z Orientem, podkreśla samotność i wyobcowanie Pielgrzyma, ukazuje różne sposoby postrzegania świata. <span class='source-citation'>[16]</span>" },
        { q: "Czym jest 'wschodni przepych' opisywany przez Mickiewicza?", a: "Bogactwo natury, egzotyka krajobrazu, intensywność barw i zapachów, odmienność kultury orientalnej. <span class='source-citation'>[16, 19]</span>" },
        { q: "Jakie uczucia dominują u Pielgrzyma podczas podróży?", a: "Zachwyt, zdumienie, melancholia, tęsknota, poczucie samotności i wyobcowania. <span class='source-citation'>[16, 19]</span>" },
        { q: "Do czego Pielgrzym porównuje swoje serce w sonecie 'Na Judahu skale' (Ajudah)?", a: "Do muszli, która 'wiecznie szumiąc pomija swą perłę' – symbolizuje tęsknotę za ojczyzną, która jest dla niego najcenniejsza. <span class='source-citation'>[16, 32]</span>" },
        { q: "Jaki jest obraz Boga w sonecie 'Czatyrdah'?", a: "Bóg jako Stwórca potężnej, majestatycznej natury, którego obecność można odczuć poprzez kontemplację gór. <span class='source-citation'>[16]</span>" },
        { q: "Czego uczy Pielgrzyma podróż po Krymie?", a: "Poznaje inną kulturę, doświadcza potęgi natury, ale przede wszystkim utwierdza się w swojej miłości i tęsknocie do ojczyzny. <span class='source-citation'>[16, 19]</span>" }
    ],
    "Mickiewicz - Ballady i Liryki": [
        // Istniejące
        { q: "Programowy utwór 'Ballad i romansów'?", a: "'Romantyczność' – manifest nowego spojrzenia na świat, prymatu uczucia i wiary nad 'szkiełkiem i okiem' mędrca. <span class='source-citation'>[3, 13]</span>" },
        { q: "Kara za złamanie przysięgi w 'Świteziance'?", a: "Zamiana strzelca w modrzew jęczący nad brzegiem jeziora, a dziewczyny-świtezianki w istotę wodną. <span class='source-citation'>[3, 49]</span>" },
        { q: "Temat liryku 'Do M*** (Precz z moich oczu!...)'?", a: "Rozpaczliwa próba zapomnienia o nieszczęśliwej miłości, która jednak wciąż tkwi głęboko w sercu i pamięci podmiotu lirycznego. <span class='source-citation'>[50, 54]</span>" },
        // Nowe
        { q: "Jaka jest główna myśl ballady 'Romantyczność'?", a: "Prawdy żywe i moralne są niedostępne dla poznania czysto rozumowego; trzeba kierować się sercem, wiarą i intuicją. <span class='source-citation'>[3, 13]</span>" },
        { q: "Kim jest Karusia z 'Romantyczności'?", a: "Prosta wiejska dziewczyna, która po śmierci ukochanego Jasieńka widzi jego ducha i rozmawia z nim. <span class='source-citation'>[3, 13]</span>" },
        { q: "Kto reprezentuje postawę racjonalistyczną w 'Romantyczności'?", a: "Starzec (mędrzec), który twierdzi, że 'dziewczyna duby smalone bredzi' i ufa tylko temu, co można zobaczyć i zmierzyć. <span class='source-citation'>[3, 13]</span>" },
        { q: "Jaką rolę odgrywa lud w 'Romantyczności'?", a: "Lud wierzy w opowieść Karusi, reprezentuje zbiorową intuicję i wiarę w świat nadprzyrodzony. <span class='source-citation'>[3, 13]</span>" },
        { q: "Co jest tematem ballady 'Świteź'?", a: "Tajemnicze zatopienie miasta Świteź, którego mieszkanki zamieniły się w kwiaty, aby uniknąć hańby z rąk najeźdźców. <span class='source-citation'>[3]</span>" },
        { q: "Jaka jest moralność ludowa przedstawiona w 'Świteziance'?", a: "Zdrada i złamanie przysięgi miłosnej muszą zostać surowo ukarane. <span class='source-citation'>[3, 49]</span>" },
        { q: "Kim jest tajemnicza dziewczyna w 'Świteziance'?", a: "Nimfą wodną (świtezianką), która wystawia na próbę wierność młodego strzelca. <span class='source-citation'>[3, 49]</span>" },
        { q: "Jakie elementy fantastyczne występują w 'Świteziance'?", a: "Postać nimfy, magiczne jezioro, przemiana ludzi w rośliny. <span class='source-citation'>[3, 49]</span>" },
        { q: "W balladzie 'Lilije', jaka zbrodnia została popełniona?", a: "Żona zabiła swojego męża, który powrócił z wojny, aby być z kochankiem (lub z obawy przed karą za zdradę). <span class='source-citation'>[3]</span>" },
        { q: "Co symbolizują lilie w balladzie 'Lilije'?", a: "Niewinność, ale też wyrzuty sumienia i nieuchronność kary; kwiaty wyrastają na grobie zamordowanego męża. <span class='source-citation'>[3]</span>" },
        { q: "Jaką rolę odgrywa pustelnik w 'Lilijach'?", a: "Jest mędrcem, który zna prawdę o zbrodni i przepowiada karę. <span class='source-citation'>[3]</span>" },
        { q: "W jaki sposób zostaje ujawniona zbrodnia w 'Lilijach'?", a: "Bracia zamordowanego przychodzą po radę do pustelnika, a następnie duch zmarłego zjawia się w cerkwi i porywa żonę-morderczynię. <span class='source-citation'>[3]</span>" },
        { q: "Jaki jest nastrój ballady 'To lubię'?", a: "Grozy, tajemniczości, związany z nocą, cmentarzem i zjawiskami nadprzyrodzonymi. <span class='source-citation'>[3]</span>" },
        { q: "Kto jest narratorem w balladzie 'To lubię'?", a: "Osoba zafascynowana mroczną stroną natury i ludowych wierzeń. <span class='source-citation'>[3]</span>" },
        { q: "W liryku 'Do Joachima Lelewela', o co Mickiewicz oskarża adresata?", a: "O nadmierny racjonalizm, brak wiary w siły duchowe i uczuciowe, które kierują historią. <span class='source-citation'>[2]</span>" },
        { q: "Jaki jest obraz miłości w liryku 'Niepewność'?", a: "Miłość jako uczucie pełne sprzeczności, wahania, niepokoju, gdzie bliskość miesza się z dystansem. <span class='source-citation'>[54]</span>" },
        { q: "Do kogo skierowany jest liryk 'Do M*** (Precz z moich oczu!...)'?", a: "Do Maryli Wereszczakówny, nieszczęśliwej miłości poety. <span class='source-citation'>[50, 54]</span>" },
        { q: "Jakie są główne cechy gatunkowe ballad Mickiewicza?", a: "Narracyjność, ludowa tematyka i moralność, elementy fantastyczne, synkretyzm rodzajowy, często interwencja sił nadprzyrodzonych. <span class='source-citation'>[3]</span>" },
        { q: "Co było inspiracją dla Mickiewicza do napisania 'Ballad i romansów'?", a: "Polska i litewska twórczość ludowa, legendy, podania, pieśni gminne. <span class='source-citation'>[3, 13]</span>" },
        { q: "Jaką rolę odegrał tom 'Ballady i romanse' w historii literatury polskiej?", a: "Uznawany jest za manifest polskiego romantyzmu i symboliczny początek tej epoki w Polsce. <span class='source-citation'>[2, 13]</span>" },
        { q: "Czym jest 'Oda do młodości'?", a: "Utwór na pograniczu klasycyzmu i romantyzmu, hymn wzywający młode pokolenie do aktywnego działania, walki o nowe idee i przekształcania świata. <span class='source-citation'>[2]</span>" },
        { q: "Jakie są główne hasła 'Ody do młodości'?", a: "'Razem, młodzi przyjaciele!', 'Sięgaj, gdzie wzrok nie sięga', 'Łam, czego rozum nie złamie'. <span class='source-citation'>[2]</span>" },
        { q: "Do jakich tradycji nawiązuje 'Pieśń Filaretów'?", a: "Do ideałów Towarzystwa Filomatów i Filaretów: przyjaźni, braterstwa, nauki, cnoty i patriotyzmu. <span class='source-citation'>[2]</span>" },
        { q: "Co oznacza 'szkiełko i oko' w 'Romantyczności'?", a: "Symbolizuje oświeceniowy racjonalizm, empiryzm, ograniczone poznanie oparte wyłącznie na zmysłach i rozumie. <span class='source-citation'>[3, 13]</span>" },
        { q: "Jaki konflikt przedstawia 'Romantyczność'?", a: "Konflikt między poznaniem racjonalnym a poznaniem intuicyjnym/uczuciowym. <span class='source-citation'>[3, 13]</span>" },
        { q: "Jaki jest motyw winy i kary w balladach Mickiewicza?", a: "Złamanie norm moralnych (zdrada, zabójstwo, krzywoprzysięstwo) prowadzi do nieuchronnej kary, często wymierzanej przez siły nadprzyrodzone. <span class='source-citation'>[3, 49]</span>" },
        { q: "Rola przyrody w 'Balladach i romansach'.", a: "Przyroda jest często tajemnicza, groźna, współuczestniczy w wydarzeniach, bywa świadkiem lub narzędziem sprawiedliwości. <span class='source-citation'>[3, 49]</span>" },
        { q: "Wymień dwa utwory z cyklu 'Ballady i romanse' oprócz 'Romantyczności' i 'Świtezianki'.", a: "Np. 'Świteź', 'Lilije', 'To lubię', 'Rybka', 'Powrót taty'. <span class='source-citation'>[3]</span>" }
    ],
    "Mickiewicz - Konrad Wallenrod": [
        // Istniejące
        { q: "Kim był Konrad Wallenrod?", a: "Litwinem (Walter Alf) działającym podstępem jako wielki mistrz krzyżacki, aby zniszczyć Zakon od wewnątrz i ocalić Litwę. <span class='source-citation'>[5, 37]</span>" },
        { q: "Co oznacza wallenrodyzm?", a: "Postawę patriotyczną polegającą na poświęceniu osobistych wartości moralnych i szczęścia oraz stosowaniu podstępu i zdrady w walce z potężnym wrogiem ojczyzny. <span class='source-citation'>[3, 5, 10]</span>" },
        // Nowe
        { q: "Jakie jest prawdziwe imię Konrada Wallenroda?", a: "Walter Alf. <span class='source-citation'>[5, 37]</span>" },
        { q: "Kto wychował Waltera Alfa w duchu nienawiści do Krzyżaków?", a: "Stary litewski wajdelota Halban, jeniec krzyżacki. <span class='source-citation'>[5, 37]</span>" },
        { q: "Kim była Aldona dla Waltera Alfa?", a: "Jego ukochaną żoną, córką litewskiego księcia Kiejstuta. <span class='source-citation'>[5]</span>" },
        { q: "Gdzie Aldona spędziła życie po rozstaniu z Walterem?", a: "Jako pustelnica zamknięta w wieży przy zamku w Malborku. <span class='source-citation'>[5]</span>" },
        { q: "Jaką rolę odgrywa 'Powieść Wajdeloty' w utworze?", a: "Ujawnia prawdziwą tożsamość i przeszłość Konrada Wallenroda (Waltera Alfa) oraz motywy jego działania. <span class='source-citation'>[5, 37]</span>" },
        { q: "W jaki sposób Konrad Wallenrod jako wielki mistrz doprowadził Krzyżaków do klęski?", a: "Celowo prowadził nieudolne kampanie wojenne, sabotował działania Zakonu, doprowadzał do głodu i chorób wśród wojsk. <span class='source-citation'>[5]</span>" },
        { q: "Jakie jest motto 'Konrada Wallenroda' i co ono oznacza?", a: "Cytat z Machiavellego: 'Musicie bowiem wiedzieć, że są dwa sposoby walczenia… trzeba być lisem i lwem'. Sugeruje konieczność stosowania siły i podstępu. <span class='source-citation'>[5, 10]</span>" },
        { q: "Co symbolizuje pieśń Halbana 'O pieśni gminna, ty arko przymierza...'?", a: "Potęgę poezji ludowej w przechowywaniu pamięci narodowej, tradycji i inspirowaniu do czynu. <span class='source-citation'>[5, 37]</span>" },
        { q: "Jaki jest główny dylemat moralny Konrada Wallenroda?", a: "Konflikt między obowiązkiem patriotycznym a rycerskim honorem i chrześcijańską moralnością; konieczność wyboru mniejszego zła. <span class='source-citation'>[3, 5, 10]</span>" },
        { q: "W jaki sposób ginie Konrad Wallenrod?", a: "Popełnia samobójstwo, wypijając truciznę, aby uniknąć hańbiącej śmierci z rąk Krzyżaków po zdemaskowaniu. <span class='source-citation'>[5]</span>" },
        { q: "Jaka jest rola Halbana po śmierci Konrada?", a: "Ma opiewać jego czyny i przekazać pamięć o nim potomnym, aby jego ofiara nie poszła na marne. <span class='source-citation'>[5, 37]</span>" },
        { q: "Jakie cechy bohatera bajronicznego posiada Konrad Wallenrod?", a: "Tajemniczość, samotność, bunt, wewnętrzne rozdarcie, skłócenie ze światem, popełnienie czynu niemoralnego w imię wyższego celu. <span class='source-citation'>[3, 5]</span>" },
        { q: "W jakim kontekście historycznym i politycznym powstał 'Konrad Wallenrod'?", a: "W okresie zaborów, po upadku powstania dekabrystów, gdy Polacy poszukiwali metod walki z potężnym zaborcą. <span class='source-citation'>[11, 17]</span>" },
        { q: "Do jakiego gatunku literackiego należy 'Konrad Wallenrod'?", a: "Do powieści poetyckiej. <span class='source-citation'>[5]</span>" },
        { q: "Jakie jest przesłanie utworu dotyczące walki o wolność?", a: "W sytuacji skrajnego zagrożenia bytu narodowego, cel (wolność ojczyzny) może uświęcać środki, nawet te niemoralne, ale wiąże się to z tragiczną ceną dla jednostki. <span class='source-citation'>[10, 11, 17]</span>" },
        { q: "Co oznaczało dla Konrada hasło 'Sposobu szukać'?", a: "Konieczność znalezienia skutecznej metody pokonania Krzyżaków, nawet jeśli miałaby to być metoda podstępna. <span class='source-citation'>[5, 37]</span>" },
        { q: "Jakie uczucia dominują w postaci Aldony?", a: "Miłość, wierność, tęsknota, cierpienie z powodu rozłąki i tragicznego losu ukochanego. <span class='source-citation'>[5]</span>" },
        { q: "Czym jest 'sąd kapturowy', który skazuje Konrada?", a: "Tajny trybunał zakonny, który wydaje wyroki śmierci. <span class='source-citation'>[5]</span>" },
        { q: "Dlaczego Konrad Wallenrod jest postacią tragiczną?", a: "Ponieważ każdy jego wybór prowadzi do nieszczęścia – albo zdrady ojczyzny, albo utraty szczęścia osobistego, honoru i życia. <span class='source-citation'>[3, 5]</span>" },
        { q: "Jaki wpływ na psychikę Konrada ma jego podwójne życie?", a: "Prowadzi do wewnętrznego rozdarcia, samotności, poczucia winy i melancholii. <span class='source-citation'>[5, 37]</span>" },
        { q: "W jaki sposób Mickiewicz wykorzystuje kostium historyczny w 'Konradzie Wallenrodzie'?", a: "Aby w formie aluzyjnej poruszyć aktualne problemy Polski pod zaborami i kwestię metod walki narodowowyzwoleńczej. <span class='source-citation'>[11, 17]</span>" },
        { q: "Co można powiedzieć o kompozycji 'Konrada Wallenroda'?", a: "Jest fragmentaryczna, inwersyjna (stopniowe odkrywanie przeszłości bohatera), co buduje tajemnicę i napięcie. <span class='source-citation'>[5]</span>" },
        { q: "Jaki jest język i styl 'Konrada Wallenroda'?", a: "Poetycki, wzniosły, patetyczny, z elementami liryzmu i dramatyzmu, często archaizowany. <span class='source-citation'>[5]</span>" },
        { q: "Jaką rolę odgrywa w utworze motyw maski?", a: "Konrad musi ukrywać swoją prawdziwą tożsamość i intencje, żyjąc pod maską lojalnego Krzyżaka. <span class='source-citation'>[5, 37]</span>" },
        { q: "Co oznaczało dla współczesnych Mickiewiczowi odczytanie 'Konrada Wallenroda'?", a: "Był to utwór inspirujący do walki, usprawiedliwiający konspirację i podstęp, ale też budzący dyskusje moralne. <span class='source-citation'>[10, 11, 17]</span>" },
        { q: "Czy 'Konrad Wallenrod' jest utworem optymistycznym czy pesymistycznym?", a: "Raczej pesymistycznym, ukazującym tragizm losu jednostki i narodu oraz wysoką cenę walki o wolność. <span class='source-citation'>[5]</span>" },
        { q: "Kim był Winrych von Kniprode w 'Konradzie Wallenrodzie'?", a: "Wielki mistrz krzyżacki, u którego Walter Alf służył jako giermek i uczył się sztuki wojennej. <span class='source-citation'>[5, 37]</span>" },
        { q: "Jakie znaczenie ma scena uczty w Malborku?", a: "Podczas niej Halban śpiewa 'Powieść Wajdeloty', demaskując Konrada i budząc w nim wspomnienia. <span class='source-citation'>[5, 37]</span>" },
        { q: "Co ostatecznie motywuje Konrada do działania przeciw Zakonowi?", a: "Miłość do ojczyzny (Litwy) i chęć pomszczenia jej krzywd. <span class='source-citation'>[5, 37]</span>" }
    ],
    "Słowacki - Kordian i Liryki": [
        // Istniejące
        { q: "Jakie hasło głosi Kordian na Mont Blanc?", a: "'Polska Winkelriedem narodów!' – Polska ma poświęcić się, by utorować drogę do wolności innym. <span class='source-citation'>[4, 6]</span>" },
        { q: "Główny temat 'Testamentu mego'?", a: "Poetyckie pożegnanie Słowackiego, wiara w siłę własnej poezji, która przetrwa i będzie inspirować naród, oraz apel o czyn i pamięć. <span class='source-citation'>[7, 15]</span>" },
        { q: "Co Słowacki krytykuje w 'Grobie Agamemnona'?", a: "Polskie wady narodowe (pycha, bierność, niezgoda, egoizm szlachty) w konfrontacji z heroiczną postawą starożytnych Greków. <span class='source-citation'>[11, 23]</span>" },
        { q: "Nastrojowy obraz jakiego jeziora przedstawia 'Nad wodą wielką i czystą...'?", a: "Jeziora Genewskiego (Lemanu) w Szwajcarii. <span class='source-citation'>[59]</span>"},
        // Nowe
        { q: "Kim jest Kordian na początku dramatu (Akt I)?", a: "Młodym, 15-letnim, nadwrażliwym poetą, cierpiącym na 'chorobę wieku', rozczarowanym miłością i światem. <span class='source-citation'>[6, 36]</span>" },
        { q: "Co skłania Kordiana do próby samobójczej w Akcie I?", a: "Poczucie pustki egzystencjalnej, nieszczęśliwa miłość do Laury, brak celu w życiu. <span class='source-citation'>[6, 36]</span>" },
        { q: "Jakie rozczarowania przynosi Kordianowi podróż po Europie (Akt II)?", a: "W Londynie odkrywa wszechwładzę pieniądza, we Włoszech fałsz kupionej miłości (Wioletta), w Watykanie cynizm papieża. <span class='source-citation'>[6]</span>" },
        { q: "Co oznacza monolog Kordiana na Mont Blanc?", a: "Jest to moment jego duchowej przemiany, odnalezienia idei (winkelriedyzmu) i sensu życia w walce o wolność Polski. <span class='source-citation'>[4, 6]</span>" },
        { q: "Na czym polega idea winkelriedyzmu Kordiana?", a: "Polska, niczym szwajcarski bohater Arnold Winkelried, ma skupić na sobie uderzenie wroga (tyranii), aby umożliwić wolność innym narodom. <span class='source-citation'>[4, 6]</span>" },
        { q: "Dlaczego Kordian decyduje się na samotny zamach na cara?", a: "Po tym, jak spiskowcy odrzucają jego plan carobójstwa, kierowany indywidualizmem i rozpaczą postanawia działać sam. <span class='source-citation'>[6]</span>" },
        { q: "Kto powstrzymuje Kordiana przed dokonaniem zamachu na cara?", a: "Strach i Imaginacja – personifikacje jego wewnętrznych lęków i słabości. <span class='source-citation'>[6]</span>" },
        { q: "Jaką rolę odgrywa Doktor (Szatan) w 'Kordianie'?", a: "Jest cynicznym komentatorem, demaskatorem iluzji, kusi Kordiana i podważa jego idealizm. <span class='source-citation'>[6]</span>" },
        { q: "Czym jest 'Przygotowanie' w 'Kordianie'?", a: "Prologiem dramatu, w którym diabły tworzą przywódców powstania listopadowego, ukazując ich wady i zapowiadając klęskę zrywu. <span class='source-citation'>[6]</span>" },
        { q: "Jakie jest zakończenie 'Kordiana'?", a: "Otwarte – Kordian ma być stracony, ale nie wiadomo, czy do egzekucji dochodzi. <span class='source-citation'>[6]</span>" },
        { q: "Z jaką ideą Mickiewicza polemizuje Słowacki w 'Kordianie'?", a: "Z mickiewiczowskim mesjanizmem pasywnym (cierpienie jako droga do zbawienia), proponując aktywną walkę (winkelriedyzm). <span class='source-citation'>[4, 6]</span>" },
        { q: "W 'Grobie Agamemnona', z kim poeta konfrontuje Polaków?", a: "Z heroicznymi obrońcami Termopil (Leonidasem i jego Spartanami). <span class='source-citation'>[11, 23]</span>" },
        { q: "Jakie są główne zarzuty Słowackiego wobec Polski szlacheckiej w 'Grobie Agamemnona'?", a: "Pycha, egoizm, bierność, wewnętrzna niezgoda, brak gotowości do prawdziwych poświęceń, 'dusza anielska w czerepie rubasznym'. <span class='source-citation'>[11, 23]</span>" },
        { q: "Co symbolizuje 'czerep rubaszny' w 'Grobie Agamemnona'?", a: "Sarmacką gnuśność, ograniczenie, przywiązanie do materializmu i tradycji, które hamują rozwój duchowy narodu. <span class='source-citation'>[11, 23]</span>" },
        { q: "Jaka jest wizja przyszłej Polski w 'Grobie Agamemnona'?", a: "Polska odrodzona duchowo, 'posąg z jednej bryły', zdolna do wielkich czynów, z nowym pokoleniem gotowym do poświęceń. <span class='source-citation'>[11, 23]</span>" },
        { q: "Jakie jest główne uczucie wyrażone w hymnie 'Smutno mi, Boże!'?", a: "Głęboki smutek, melancholia, tęsknota za ojczyzną, poczucie samotności i przemijania. <span class='source-citation'>[7]</span>" },
        { q: "W jakich okolicznościach powstał hymn 'Smutno mi, Boże!'?", a: "Podczas podróży morskiej Słowackiego na Wschód, o zachodzie słońca. <span class='source-citation'>[7]</span>" },
        { q: "Co jest refrenem 'Testamentu mego'?", a: "'Lecz zaklinam, niech żywi nie tracą nadziei / I przed narodem niosą oświaty kaganiec'. <span class='source-citation'>[7, 15]</span>" },
        { q: "Do kogo Słowacki kieruje swój 'Testament mój'?", a: "Do przyjaciół, ale przede wszystkim do całego narodu polskiego i przyszłych pokoleń. <span class='source-citation'>[7, 15]</span>" },
        { q: "Jaką 'siłę fatalną' ma poezja według 'Testamentu mego'?", a: "Siłę kształtowania dusz, inspirowania do czynu, przetrwania i zapewnienia nieśmiertelności poecie i jego ideom. <span class='source-citation'>[7, 15]</span>" },
        { q: "Co oznacza 'Być sternikiem duchami napełnionej łodzi' w 'Testamencie moim'?", a: "Pragnienie bycia duchowym przywódcą narodu, kierowania jego losami poprzez siłę poezji. <span class='source-citation'>[7, 15]</span>" },
        { q: "Tematem wiersza 'Rozłączenie' jest:", a: "Ból rozstania z ukochaną osobą, siła pamięci i miłości, która trwa mimo fizycznej separacji i upływu czasu. <span class='source-citation'>[54]</span>" },
        { q: "Jaki obraz ukochanej kreśli podmiot liryczny w 'Rozłączeniu'?", a: "Idealizowany, pełen czułości, skupiony na detalach wyglądu (usta, oczy, włosy, ręce). <span class='source-citation'>[54]</span>" },
        { q: "Co charakteryzuje Liryki Lozańskie Słowackiego?", a: "Kontemplacyjny charakter, piękno opisów przyrody (Jezioro Genewskie, Alpy), refleksje filozoficzne, melodyjność. <span class='source-citation'>[59]</span>" },
        { q: "Co symbolizuje woda w wierszu 'Nad wodą wielką i czystą...'?", a: "Czystość, głębię, zwierciadło odbijające rzeczywistość i niebo, ale także przemijanie (odbicia 'zmarłych już rzeczy'). <span class='source-citation'>[59]</span>" },
        { q: "Jaki jest główny bohater wiersza 'Sowiński w okopach Woli'?", a: "Generał Józef Sowiński, bohaterski obrońca Woli podczas powstania listopadowego. <span class='source-citation'>[11]</span>" },
        { q: "Jak Słowacki przedstawia śmierć generała Sowińskiego?", a: "Jako heroiczną, pełną godności, na posterunku, w walce do końca. <span class='source-citation'>[11]</span>" },
        { q: "Co Słowacki krytykuje w 'Sowińskim w okopach Woli' oprócz wrogów?", a: "Tchórzostwo i nieudolność niektórych polskich przywódców powstania. <span class='source-citation'>[11]</span>" }
    ],
    "Norwid - Liryki": [
        // Istniejące
        { q: "O jakim kraju tęskni podmiot w 'Mojej piosnce (II)'?", a: "O wyidealizowanej Polsce, kraju prostych wartości moralnych, poszanowania chleba, uczciwości i tradycji. <span class='source-citation'>[9, 12]</span>" },
        { q: "Temat 'W Weronie' Norwida?", a: "Refleksja nad przemijalnością ludzkich dramatów (jak historia Romea i Julii) na tle wiecznej, obojętnej natury; ironiczne spojrzenie na mit miłości. <span class='source-citation'>[12, 38]</span>" },
        { q: "Komu poświęcony jest wiersz 'Do obywatela Johna Brown'?", a: "Amerykańskiemu abolicjoniście Johnowi Brownowi, straconemu za próbę wywołania powstania niewolników, jako symbolowi walki o wolność. <span class='source-citation'>[12, 38]</span>" },
        // Nowe
        { q: "Jakie wartości są kluczowe dla idealizowanej Polski w 'Mojej piosnce (II)' Norwida?", a: "Szacunek dla chleba ('podnoszony z ziemi przez uszanowanie'), 'prawo, które nie kłamie', życzliwość, 'klucz gospodyni', brak 'bezbożnych rąk'. <span class='source-citation'>[9, 12, 57]</span>"},
        { q: "Jaki środek stylistyczny dominuje w refrenie 'Mojej piosnki (II)'?", a: "Anafora ('Do kraju tego, gdzie...') oraz paralelizm składniowy. Refren to: 'Tęskno mi, Panie...'. <span class='source-citation'>[9, 12]</span>"},
        { q: "Co symbolizują cyprysy w wierszu 'W Weronie' Norwida?", a: "Trwałość i obojętność natury wobec ludzkich tragedii; są 'świadkami' historii, które 'mówią', że to dla Romea i Julii, co jest ironiczne. <span class='source-citation'>[12, 38, 57]</span>"},
        { q: "Jak Norwid reinterpretuje mit Romea i Julii w 'W Weronie'?", a: "Demitologizuje go, wskazując na kontrast między ludzkim cierpieniem a kosmicznym porządkiem, sugerując ironiczny dystans i zadumę nad sensem. <span class='source-citation'>[12, 38]</span>"},
        { q: "Jaką rolę przypisuje Norwid poezji (pieśni) w wierszu 'Do obywatela Johna Brown'?", a: "Poezja ma moc przetrwania ('pieśń nim dojrzy, człowiek nieraz skona'), uwiecznienia czynu i inspirowania przyszłych pokoleń do walki ('A niźli skona pieśń, naród pierw wstanie'). <span class='source-citation'>[12, 38]</span>"},
        { q: "Czym charakteryzuje się styl poetycki Norwida widoczny w jego lirykach?", a: "Intelektualizm, aforystyczność, przemilczenia, aluzje, ironia, dążenie do precyzji słowa, częste wykorzystanie symboli i wieloznaczności. <span class='source-citation'>[38, 57]</span>"},
        { q: "Co Norwid rozumie przez 'pracę' w kontekście swojego programu artystycznego?", a: "Nie tylko wysiłek fizyczny, ale także twórczość intelektualną i artystyczną, która ma kształtować świadomość społeczną i przyczyniać się do postępu. <span class='source-citation'>[57]</span>"},
        { q: "Jaki jest główny temat wiersza 'Bema pamięci żałobny-rapsod'?", a: "Apoteoza bohatera narodowego, generała Józefa Bema, przedstawionego w formie stylizowanego na antyczny (i średniowieczny) obrzędu pogrzebowego. <span class='source-citation'>[12, 57]</span>"},
        { q: "Do jakiego gatunku literackiego nawiązuje 'Bema pamięci żałobny-rapsod'?", a: "Do rapsodu (pieśni o czynach bohaterów) oraz do trenu żałobnego, z elementami poematu opisowego. <span class='source-citation'>[12]</span>"},
        { q: "Jakie jest przesłanie wiersza 'Fortepian Szopena'?", a: "Refleksja nad rolą sztuki i artysty, doskonałością dzieła (muzyki Chopina) i jego tragicznym zderzeniem z brutalnością historii (zniszczenie fortepianu przez carskich żołnierzy). <span class='source-citation'>[12, 57]</span>"},
        { q: "Co symbolizuje zniszczony fortepian Szopena w wierszu Norwida?", a: "Barbarzyństwo niszczące kulturę, piękno i ducha narodowego, ale też niezniszczalność idei zawartej w sztuce. <span class='source-citation'>[12, 57]</span>"},
        { q: "Jaki jest stosunek Norwida do tradycji romantycznej?", a: "Krytyczny, ale też twórczo ją przetwarzający; dążył do przezwyciężenia pewnych jej ograniczeń, kładąc nacisk na pracę i myśl. <span class='source-citation'>[38, 57]</span>"},
        { q: "Co oznacza 'milczenie' w poezji Norwida?", a: "Jest ważnym środkiem wyrazu, sugeruje niedopowiedzenie, głębszy sens, zmusza czytelnika do refleksji i interpretacji. <span class='source-citation'>[38, 57]</span>"},
        { q: "W wierszu 'Coś ty Atenom zrobił, Sokratesie...', o co pyta poeta?", a: "O paradoks losu wielkich ludzi i idei, które często są za życia niedoceniane lub prześladowane, a dopiero po śmierci zyskują uznanie. <span class='source-citation'>[12, 57]</span>"},
        { q: "Do kogo Norwid porównuje Sokratesa, Dantego, Kolumba w wierszu 'Coś ty Atenom zrobił, Sokratesie...'?", a: "Do innych wielkich postaci historycznych, które spotkał podobny los niezrozumienia i pośmiertnej chwały. <span class='source-citation'>[12, 57]</span>"},
        { q: "Jaka jest rola historii w twórczości Norwida?", a: "Historia jest dla niego źródłem refleksji nad losem człowieka, narodu, cywilizacji, dostarcza przykładów i przestróg. <span class='source-citation'>[38, 57]</span>"},
        { q: "Czym jest 'Promethidion' Norwida?", a: "Poemat filozoficzny w formie dialogu, wykładający Norwidowską koncepcję sztuki, pracy i piękna. <span class='source-citation'>[57]</span>"},
        { q: "Jakie dwie formy piękna wyróżnia Norwid w 'Promethidionie'?", a: "Piękno jako zachwyt ('Bogumił') i piękno jako kształt pracy ('Wiesław'). <span class='source-citation'>[57]</span>"},
        { q: "Co Norwid krytykuje w polskim społeczeństwie?", a: "Bierność, brak myśli obywatelskiej, powierzchowność, naśladowanie obcych wzorców, brak szacunku dla pracy. <span class='source-citation'>[38, 57]</span>"},
        { q: "Jaki jest ideał artysty według Norwida?", a: "Artysta-myśliciel, pracownik, rzemieślnik słowa, który swoją twórczością służy społeczeństwu i prawdzie. <span class='source-citation'>[57]</span>"},
        { q: "Co symbolizuje 'narzędzie w ręku Boga' w kontekście Johna Browna?", a: "John Brown jako wykonawca woli Bożej, walczący o sprawiedliwość, nawet jeśli jego metody są radykalne. <span class='source-citation'>[12, 38]</span>"},
        { q: "W jaki sposób Norwid używa aluzji biblijnych i antycznych?", a: "Aby nadać swoim utworom uniwersalny wymiar, wpisać je w szerszy kontekst kulturowy i filozoficzny. <span class='source-citation'>[12, 38, 57]</span>"},
        { q: "Czym jest 'Vade-mecum' Norwida?", a: "Cykl stu liryków, stanowiący swoisty przewodnik poetycki i filozoficzny, podsumowanie jego myśli. <span class='source-citation'>[57]</span>"},
        { q: "Jaki jest ton wiersza 'Pielgrzym' Norwida (nie mylić z Mickiewiczowskim)?", a: "Refleksyjny, często ironiczny, dotyczący kondycji człowieka-wędrowca, poszukującego sensu i wartości. <span class='source-citation'>[57]</span>"},
        { q: "Co Norwid uważał za główne zadanie poezji?", a: "Kształtowanie myśli i sumień, dążenie do prawdy, a nie tylko dostarczanie estetycznych wzruszeń. <span class='source-citation'>[38, 57]</span>"},
        { q: "Jak Norwid postrzegał rolę cierpienia?", a: "Jako nieodłączny element ludzkiego losu, ale też jako doświadczenie, które może prowadzić do głębszego poznania i duchowego wzrostu. <span class='source-citation'>[57]</span>"},
        { q: "Czym jest 'sumienie narodu' w myśli Norwida?", a: "Zbiorowa świadomość moralna, którą powinna kształtować m.in. sztuka i myśl intelektualna. <span class='source-citation'>[38, 57]</span>"},
        { q: "Jaki jest stosunek Norwida do języka polskiego?", a: "Traktował go z wielką starannością, dążył do precyzji, tworzył neologizmy, eksperymentował z formą. <span class='source-citation'>[38, 57]</span>"}
    ]
};

// --- Fiszki (Funkcje) ---
// Reszta pliku flashcards.js (funkcje initFlashcardCategories, initFlashcards, displayFlashcard, etc.)
// pozostaje taka sama jak w poprzednich odpowiedziach. Poniżej skrócony przykład:

const flashcardElement = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardCounterDisplay = document.getElementById('flashcard-counter-display');
const flashcardCategorySelect = document.getElementById('flashcard-category-select');
let currentFlashcards = [];
let currentFlashcardIndex = 0;

function initFlashcardCategories() {
    if (!flashcardCategorySelect) {
        console.warn("Element select dla kategorii fiszek nie został znaleziony.");
        return;
    }
    flashcardCategorySelect.innerHTML = '';
    Object.keys(flashcardsByCategory).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        flashcardCategorySelect.appendChild(option);
    });
    initFlashcards();
}

function initFlashcards() {
    if (!flashcardCategorySelect) return;
    const selectedCategory = flashcardCategorySelect.value;
    currentFlashcards = flashcardsByCategory[selectedCategory] || [];

    if (typeof shuffleArray === 'function') {
        shuffleArray(currentFlashcards);
    } else {
        console.warn("Funkcja shuffleArray nie jest dostępna. Fiszki nie będą tasowane.");
    }
    
    currentFlashcardIndex = 0;
    displayFlashcard();
    if(flashcardElement) flashcardElement.classList.remove('flipped');
}

function displayFlashcard() {
    if (!flashcardFront || !flashcardBack || !flashcardCounterDisplay) {
        console.warn("Jeden lub więcej elementów UI fiszek nie zostało znalezionych.");
        return;
    }
    if (currentFlashcards.length === 0) {
        flashcardFront.innerHTML = "Brak fiszek w tej kategorii.";
        flashcardBack.innerHTML = "";
        flashcardCounterDisplay.textContent = "0/0";
        return;
    }
    const card = currentFlashcards[currentFlashcardIndex];
    flashcardFront.innerHTML = card.q;
    flashcardBack.innerHTML = card.a;
    flashcardCounterDisplay.textContent = `${currentFlashcardIndex + 1}/${currentFlashcards.length}`;
}

function flipFlashcard() {
    if (currentFlashcards.length > 0 && flashcardElement) {
      flashcardElement.classList.toggle('flipped');
    }
}

function nextFlashcard(event) {
    if (event) event.stopPropagation();
    if (currentFlashcards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
    if(flashcardElement) flashcardElement.classList.remove('flipped');
    setTimeout(displayFlashcard, 50); 
}

function prevFlashcard(event) {
    if (event) event.stopPropagation();
    if (currentFlashcards.length === 0) return;
    currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
    if(flashcardElement) flashcardElement.classList.remove('flipped');
    setTimeout(displayFlashcard, 50);
}

if (flashcardCategorySelect) {
    flashcardCategorySelect.addEventListener('change', initFlashcards);
}