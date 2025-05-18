// --- Test (Definicja Danych - WBUDOWANE) ---
const testData = [
    // Istniejące
    { question: "Głównym tematem 'Salonu Warszawskiego' w 'Dziadach cz. III' jest:", options: ["Krytyka ugodowej arystokracji", "Opis prześladowań młodzieży", "Spór Konrada z Bogiem", "Wizja przyszłej Polski"], answer: "Krytyka ugodowej arystokracji", source: "[8, 50]" },
    { question: "Motyw 'Polski Winkelriedem narodów' Słowacki wprowadził jako polemikę z:", options: ["Wallenrodyzmem", "Racjonalizmem", "Mickiewiczowskim mesjanizmem", "Orientalizmem"], answer: "Mickiewiczowskim mesjanizmem", source: "[4, 6]" },
    // Nowe pytania (tutaj powinno być ~68+ dodatkowych pytań, które przygotowałem wcześniej)
    // Dla przykładu wkleję tylko kilka, ale Ty wklej całość
    { question: "Kto jest autorem słów 'Miej serce i patrzaj w serce!'?", options: ["Juliusz Słowacki", "Adam Mickiewicz", "Cyprian Norwid", "Zygmunt Krasiński"], answer: "Adam Mickiewicz", source: "[2, 13]" },
    { question: "W którym utworze pojawia się postać Gustawa, który później przemienia się w Konrada?", options: ["'Kordian'", "'Pan Tadeusz'", "'Dziady cz. IV' i 'Dziady cz. III'", "'Konrad Wallenrod'"], answer: "'Dziady cz. IV' i 'Dziady cz. III'", source: "[8, 14]" },
    { question: "Jaką ideę reprezentuje Ksiądz Piotr w 'Dziadach cz. III'?", options: ["Bunt prometejski", "Wallenrodyzm", "Mesjanizm oparty na pokorze i wierze", "Racjonalizm oświeceniowy"], answer: "Mesjanizm oparty na pokorze i wierze", source: "[4, 8]" },
    { question: "Który z wymienionych utworów NIE należy do cyklu 'Sonetów krymskich' Adama Mickiewicza?", options: ["'Stepy Akermańskie'", "'Burza'", "'Ajudah'", "'Reduta Ordona'"], answer: "'Reduta Ordona'", source: "[16, various]" },
    { question: "Prawdziwe imię Konrada Wallenroda to:", options: ["Halban", "Kiejstut", "Walter Alf", "Winrych von Kniprode"], answer: "Walter Alf", source: "[5, 37]" },
    { question: "W 'Kordianie' Juliusza Słowackiego, główny bohater w Akcie I cierpi na:", options: ["Chorobę płuc", "'Chorobę wieku' (Weltschmerz)", "Amnezję", "Gorączkę patriotyczną"], answer: "'Chorobę wieku' (Weltschmerz)", source: "[6, 36]" },
    { question: "Monolog Kordiana na Mont Blanc jest wyrazem:", options: ["Rezygnacji i zwątpienia", "Odnalezienia idei winkelriedyzmu i sensu walki", "Tęsknoty za Laurą", "Chęci ucieczki od problemów"], answer: "Odnalezienia idei winkelriedyzmu i sensu walki", source: "[4, 6]" },
    { question: "W 'Grobie Agamemnona' Juliusz Słowacki krytykuje Polaków, porównując ich negatywnie do:", options: ["Rzymian", "Starożytnych Egipcjan", "Obrońców Termopil (Spartan)", "Bohaterów Iliady"], answer: "Obrońców Termopil (Spartan)", source: "[11, 23]" },
    { question: "Który liryk Norwida wyraża tęsknotę za wyidealizowaną Polską, krajem prostych wartości moralnych?", options: ["'W Weronie'", "'Do obywatela Johna Brown'", "'Moja piosnka (II)'", "'Fortepian Szopena'"], answer: "'Moja piosnka (II)'", source: "[9, 12]" },
    { question: "Pojęcie irracjonalizmu w romantyzmie oznacza:", options: ["Całkowite odrzucenie rozumu", "Dowartościowanie poznania pozarozumowego (intuicja, wiara, uczucie)", "Wiarę w postęp naukowy", "Skupienie na logice i dedukcji"], answer: "Dowartościowanie poznania pozarozumowego (intuicja, wiara, uczucie)", source: "[1, 13]" },
    { question: "Ludowość w romantyzmie to:", options: ["Zainteresowanie wyłącznie życiem arystokracji", "Fascynacja kulturą ludową, jej wierzeniami i moralnością", "Promowanie kultury miejskiej", "Odrzucenie tradycji narodowych"], answer: "Fascynacja kulturą ludową, jej wierzeniami i moralnością", source: "[2, 8]" },
    { question: "W 'Dziadach cz. II' Józio i Rózia nie mogą dostać się do nieba, ponieważ:", options: ["Popełniły ciężki grzech", "Nikogo nie kochały", "Nie zaznały w życiu żadnego cierpienia", "Były zbyt dumne"], answer: "Nie zaznały w życiu żadnego cierpienia", source: "[8, 15]" },
    { question: "Widmo Złego Pana w 'Dziadach cz. II' cierpi wieczny głód i pragnienie, a dręczą go:", options: ["Diabły", "Anioły zemsty", "Dusze jego ofiar w postaci ptaków nocnych", "Wyrzuty sumienia"], answer: "Dusze jego ofiar w postaci ptaków nocnych", source: "[8, 15]" },
    { question: "Postać historyczna Senatora Nowosilcowa w 'Dziadach cz. III' jest uosobieniem:", options: ["Sprawiedliwego urzędnika", "Polskiego patrioty", "Cynizmu i okrucieństwa carskiego despotyzmu", "Mądrego władcy"], answer: "Cynizmu i okrucieństwa carskiego despotyzmu", source: "[8]" },
    { question: "Głównym celem Konrada Wallenroda było:", options: ["Zdobycie bogactwa i sławy", "Poślubienie Aldony i spokojne życie", "Zniszczenie Zakonu Krzyżackiego od wewnątrz", "Nawrócenie Krzyżaków na chrześcijaństwo"], answer: "Zniszczenie Zakonu Krzyżackiego od wewnątrz", source: "[5, 37]" },
    { question: "Aldona, żona Konrada Wallenroda, po jego odejściu:", options: ["Wyszła ponownie za mąż", "Wstąpiła do klasztoru na Litwie", "Zamknęła się jako pustelnica w wieży pod Malborkiem", "Udała się na pielgrzymkę do Ziemi Świętej"], answer: "Zamknęła się jako pustelnica w wieży pod Malborkiem", source: "[5]" },
    { question: "Powieść poetycka, jako gatunek, charakteryzuje się m.in.:", options: ["Regularną, chronologiczną fabułą i obiektywnym narratorem", "Łączeniem elementów epiki, liryki i dramatu, fragmentaryznością, subiektywizmem", "Dominacją dialogów i akcji scenicznej", "Prostym językiem i dydaktycznym przesłaniem"], answer: "Łączeniem elementów epiki, liryki i dramatu, fragmentarycznością, subiektywizmem", source: "[5]" },
    { question: "W sonecie 'Stepy Akermańskie' Mickiewicza, Pielgrzym tęskni za głosem z:", options: ["Krymu", "Warszawy", "Paryża", "Litwy"], answer: "Litwy", source: "[16]" },
    { question: "Bohater sonetu 'Burza' Mickiewicza w obliczu śmiertelnego zagrożenia:", options: ["Modli się gorliwie", "Panikuje i krzyczy", "Pomaga innym pasażerom", "Siedzi samotny, pogrążony w apatii i tęsknocie"], answer: "Siedzi samotny, pogrążony w apatii i tęsknocie", source: "[16, 30]" },
    { question: "Co symbolizuje Czartyrdah w 'Sonetach Krymskich'?", options: ["Przemijanie i ruinę", "Potęgę i majestat natury, bliskość Boga", "Chaotyczną siłę żywiołów", "Egzotyczną kulturę Orientu"], answer: "Potęgę i majestat natury, bliskość Boga", source: "[16]" },
    { question: "W 'Kordianie', kto towarzyszy bohaterowi w podróży jako cyniczny sługa Grzegorz?", options: ["To nie Grzegorz jest cynicznym sługą", "Nikt, Kordian podróżuje sam", "Stary sługa Grzegorz, który opowiada mu bajki", "Diabeł pod postacią sługi"], answer: "Stary sługa Grzegorz, który opowiada mu bajki", source: "[6]" },
    { question: "Czym jest 'czerep rubaszny' z 'Grobu Agamemnona' Słowackiego?", options: ["Starożytnym hełmem greckim", "Symbolem polskiej gościnności", "Metaforą sarmackiej gnuśności i ograniczenia umysłowego", "Relikwią znalezioną w grobowcu"], answer: "Metaforą sarmackiej gnuśności i ograniczenia umysłowego", source: "[11, 23]" },
    { question: "Refrenem hymnu Słowackiego 'Smutno mi, Boże!' jest powtarzające się wyznanie:", options: ["'Kocham Cię, Panie!'", "'Smutno mi, Boże!'", "'Chwała na wysokości!'", "'Ojczyzno moja!'"], answer: "'Smutno mi, Boże!'", source: "[7]" },
    { question: "W 'Testamencie moim' Słowacki prosi, aby jego serce:", options: ["Spoczęło w kraju", "Zostało spalone na stosie", "Zostało oddane matce", "Zostało pochowane w Paryżu"], answer: "Zostało oddane matce", source: "[7, 15]" },
    { question: "Cyprian Norwid w wierszu 'W Weronie' konfrontuje ludzką tragedię (Romea i Julii) z:", options: ["Boską sprawiedliwością", "Wiecznością i obojętnością natury (cyprysów)", "Potęgą historii", "Namiętnością innych kochanków"], answer: "Wiecznością i obojętnością natury (cyprysów)", source: "[12, 38]" },
    { question: "John Brown, bohater wiersza Norwida, walczył o:", options: ["Niepodległość Polski", "Prawa Indian", "Zniesienie niewolnictwa w USA", "Reformy społeczne w Anglii"], answer: "Zniesienie niewolnictwa w USA", source: "[12, 38]" },
    { question: "Która z wymienionych cech NIE jest typowa dla bohatera romantycznego?", options: ["Indywidualizm i bunt", "Kierowanie się rozumem i logiką", "Uczuciowość i nadwrażliwość", "Poczucie wyobcowania i samotności"], answer: "Kierowanie się rozumem i logiką", source: "[1, 17]" },
    { question: "Symboliczny początek romantyzmu w Polsce to wydanie 'Ballad i romansów' w roku:", options: ["1830", "1822", "1848", "1800"], answer: "1822", source: "[2, 13]" },
    { question: "Wielka Improwizacja to scena z:", options: ["'Konrada Wallenroda'", "'Kordiana'", "'Dziadów cz. III'", "'Pana Tadeusza'"], answer: "'Dziadów cz. III'", source: "[4, 8]" },
    { question: "Orientalizm w romantyzmie to fascynacja kulturą:", options: ["Starożytnej Grecji i Rzymu", "Ludów skandynawskich", "Wschodu (Bliskiego i Dalekiego)", "Średniowiecznej Europy"], answer: "Wschodu (Bliskiego i Dalekiego)", source: "[16, 19]" },
    { question: "Gotycyzm wprowadzał do literatury elementy:", options: ["Humoru i satyry", "Grozy, tajemniczości i zjawisk nadprzyrodzonych", "Realistycznego opisu codzienności", "Klasycznej harmonii i porządku"], answer: "Grozy, tajemniczości i zjawisk nadprzyrodzonych", source: "[1, 49]" },
    { question: "W 'Świteziance' Mickiewicza, strzelec łamie przysięgę wierności dla:", options: ["Bogactwa", "Innej, piękniejszej dziewczyny (zjawy)", "Sławy rycerskiej", "Władzy nad jeziorem"], answer: "Innej, piękniejszej dziewczyny (zjawy)", source: "[3, 49]" },
    { question: "Ballada 'Lilije' opowiada o żonie, która:", options: ["Została porwana przez rusałki", "Zabiła męża i próbowała ukryć zbrodnię", "Oczekiwała wiernie na powrót męża z wojny", "Poświęciła życie za króla"], answer: "Zabiła męża i próbowała ukryć zbrodnię", source: "[3]" },
    { question: "Motto 'Konrada Wallenroda' pochodzi od:", options: ["Platona", "Szekspira", "Machiavellego", "Dantego"], answer: "Machiavellego", source: "[5, 10]" },
    { question: "Halban w 'Konradzie Wallenrodzie' był:", options: ["Rycerzem krzyżackim", "Księciem litewskim", "Starym litewskim wajdelotą (pieśniarzem)", "Zdrajcą współpracującym z Zakonem"], answer: "Starym litewskim wajdelotą (pieśniarzem)", source: "[5, 37]" },
    { question: "Podróż Kordiana po Europie w Akcie II dramatu Słowackiego kończy się:", options: ["Znalezieniem prawdziwej miłości", "Zdobyciem bogactwa", "Głębokim rozczarowaniem i utratą iluzji", "Wstąpieniem do zakonu"], answer: "Głębokim rozczarowaniem i utratą iluzji", source: "[6]" },
    { question: "W 'Przygotowaniu' do 'Kordiana' diabły stwarzają przywódców powstania listopadowego, aby:", options: ["Zapewnić im zwycięstwo", "Ukazać ich heroizm i geniusz", "Nasycić ich wadami i doprowadzić do klęski zrywu", "Nauczyć ich strategii wojennej"], answer: "Nasycić ich wadami i doprowadzić do klęski zrywu", source: "[6]" },
    { question: "W 'Grobie Agamemnona' Słowacki wyraża wstyd za to, że Polska:", options: ["Nie miała tak wielkich poetów jak Grecja", "Była 'pawiem narodów i papugą', a stała się 'służebnicą cudzą'", "Nie doceniła jego geniuszu", "Zbyt szybko przyjęła chrześcijaństwo"], answer: "Była 'pawiem narodów i papugą', a stała się 'służebnicą cudzą'", source: "[11, 23]" },
    { question: "Liryki Lozańskie Słowackiego powstały podczas jego pobytu w:", options: ["Paryżu", "Rzymie", "Szwajcarii (nad Jeziorem Genewskim)", "Na Krymie"], answer: "Szwajcarii (nad Jeziorem Genewskim)", source: "[59]" },
    { question: "Bohaterem wiersza 'Sowiński w okopach Woli' jest:", options: ["Julian Ordon", "Józef Bem", "Józef Sowiński", "Tadeusz Kościuszko"], answer: "Józef Sowiński", source: "[11]" },
    { question: "W wierszu Norwida 'Do obywatela Johna Brown' poeta podkreśla, że:", options: ["Czyn Browna był bezsensowny", "Pieśń o bohaterze przetrwa i zainspiruje innych", "Należy potępić przemoc w każdej formie", "Ameryka jest krajem wolności dla wszystkich"], answer: "Pieśń o bohaterze przetrwa i zainspiruje innych", source: "[12, 38]" },
    { question: "Synkretyzm rodzajowy w romantyzmie to:", options: ["Dominacja jednego rodzaju literackiego", "Rygorystyczne przestrzeganie zasad gatunkowych", "Łączenie i mieszanie cech liryki, epiki i dramatu w jednym utworze", "Tworzenie wyłącznie krótkich form poetyckich"], answer: "Łączenie i mieszanie cech liryki, epiki i dramatu w jednym utworze", source: "[1, 8]" },
    { question: "Co oznacza tytuł liryku Norwida 'Bema pamięci żałobny-rapsod'?", options: ["Jest to radosna pieśń na cześć Bema", "Jest to utwór krytykujący działalność Bema", "Jest to uroczysta pieśń epicka o charakterze żałobnym poświęcona pamięci Bema", "Jest to zbiór anegdot o generale Bemie"], answer: "Jest to uroczysta pieśń epicka o charakterze żałobnym poświęcona pamięci Bema", source: "[12, 57]" },
    { question: "W 'Fortepianie Szopena' Norwida zniszczenie instrumentu symbolizuje:", options: ["Koniec epoki romantyzmu w muzyce", "Osobistą tragedię kompozytora", "Barbarzyństwo niszczące kulturę i piękno", "Zwycięstwo sztuki nad przemocą"], answer: "Barbarzyństwo niszczące kulturę i piękno", source: "[12, 57]" },
    { question: "Pojęcie 'profetyzmu' w romantyzmie odnosi się do roli poety jako:", options: ["Wyłącznie twórcy pięknych form", "Historyka dokumentującego przeszłość", "Wieszcza, duchowego przywódcy narodu, przepowiadającego przyszłość", "Krytyka społecznego piętnującego wady"], answer: "Wieszcza, duchowego przywódcy narodu, przepowiadającego przyszłość", source: "[4, 8]" },
    { question: "Kim byli Filomaci i Filareci, z którymi związany był Mickiewicz?", options: ["Tajne stowarzyszenia studenckie o charakterze naukowo-literackim i patriotycznym", "Grupa artystów malarzy", "Zakon rycerski walczący o niepodległość", "Stronnictwo polityczne na emigracji"], answer: "Tajne stowarzyszenia studenckie o charakterze naukowo-literackim i patriotycznym", source: "[2, 8]" },
    { question: "W 'Dziadach cz. II' Guślarz jest:", options: ["Kapłanem chrześcijańskim", "Przewodnikiem obrzędu ludowego ku czci zmarłych", "Duchem pokutującym", "Historykiem spisującym dzieje ludu"], answer: "Przewodnikiem obrzędu ludowego ku czci zmarłych", source: "[8, 15]" },
    { question: "Milczące Widmo pojawiające się na końcu 'Dziadów cz. II' jest często interpretowane jako zapowiedź:", options: ["Konrada Wallenroda", "Księdza Piotra", "Gustawa (bohatera IV cz. Dziadów)", "Kordiana"], answer: "Gustawa (bohatera IV cz. Dziadów)", source: "[8, 15]" },
    { question: "Pojęcie 'wieszcz' w polskim romantyzmie odnosiło się przede wszystkim do:", options: ["Mickiewicza, Słowackiego i Krasińskiego (później Norwida)", "Wyłącznie Adama Mickiewicza", "Wszystkich poetów tworzących w tej epoce", "Malarzy i muzyków"], answer: "Mickiewicza, Słowackiego i Krasińskiego (później Norwida)", source: "[4, 8]" },
    { question: "Głównym miejscem akcji 'Konrada Wallenroda' jest:", options: ["Wilno", "Krym", "Malbork (stolica państwa krzyżackiego)", "Paryż"], answer: "Malbork (stolica państwa krzyżackiego)", source: "[5]" },
    { question: "W sonecie 'Bakczysaraj w nocy' podmiot liryczny porównuje niebo do:", options: ["Oceanu gwiazd", "Namiotu rozwieszonego nad miastem", "Płonącej pochodni", "Księgi pełnej tajemnic"], answer: "Namiotu rozwieszonego nad miastem", source: "[16]" },
    { question: "Co Kordian odkrywa w James Parku w Londynie (Akt II 'Kordiana')?", options: ["Prawdziwą miłość", "Ideę walki o wolność Anglii", "Wszechwładzę pieniądza i egoizm ludzki", "Piękno angielskiej przyrody"], answer: "Wszechwładzę pieniądza i egoizm ludzki", source: "[6]" },
    { question: "Audiencja Kordiana u Papieża w Watykanie kończy się dla bohatera:", options: ["Błogosławieństwem i wsparciem dla Polski", "Głębokim rozczarowaniem postawą Papieża, który każe Polakom modlić się i być posłusznym carowi", "Nominacją na kardynała", "Zachętą do zorganizowania krucjaty"], answer: "Głębokim rozczarowaniem postawą Papieża, który każe Polakom modlić się i być posłusznym carowi", source: "[6]" },
    { question: "Strach i Imaginacja w 'Kordianie' to:", options: ["Postacie historyczne, doradcy cara", "Dwa diabły kuszące bohatera", "Personifikacje wewnętrznych słabości i lęków Kordiana", "Przyjaciele Kordiana ze spisku"], answer: "Personifikacje wewnętrznych słabości i lęków Kordiana", source: "[6]" },
    { question: "W 'Grobie Agamemnona' Słowacki używa porównania Polski do 'duszy anielskiej w czerepie rubasznym', aby:", options: ["Pochwalić polską duchowość", "Podkreślić kontrast między potencjałem duchowym narodu a jego sarmacką gnuśnością i ograniczeniami", "Wyrazić podziw dla polskiej sztuki ludowej", "Skrytykować brak religijności Polaków"], answer: "Podkreślić kontrast między potencjałem duchowym narodu a jego sarmacką gnuśnością i ograniczeniami", source: "[11, 23]" },
    { question: "Wiersz Słowackiego 'Rozłączenie' jest wyrazem:", options: ["Radości ze spotkania po latach", "Tęsknoty i bólu spowodowanego rozstaniem z ukochaną osobą", "Gniewu i chęci zemsty na zdrajcy", "Nadziei na szybki powrót do ojczyzny"], answer: "Tęsknoty i bólu spowodowanego rozstaniem z ukochaną osobą", source: "[54]" },
    { question: "Norwidowska koncepcja pracy jako wartości moralnej i artystycznej została najwyraźniej wyłożona w poemacie:", options: ["'W Weronie'", "'Bema pamięci żałobny-rapsod'", "'Promethidion'", "'Moja piosnka (II)'"], answer: "'Promethidion'", source: "[57]" },
    { question: "Elementem łączącym wiersze 'Coś ty Atenom zrobił, Sokratesie...' Norwida jest motyw:", options: ["Nieszczęśliwej miłości", "Walki o wolność", "Niezrozumienia geniuszu przez współczesnych i pośmiertnej chwały", "Piękna przyrody"], answer: "Niezrozumienia geniuszu przez współczesnych i pośmiertnej chwały", source: "[12, 57]" },
    { question: "Który z polskich romantyków jest uznawany za prekursora symbolizmu i parnasizmu?", options: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Cyprian Norwid"], answer: "Cyprian Norwid", source: "[38, 57]" },
    { question: "Wielka Emigracja, ważne zjawisko dla polskiego romantyzmu, nastąpiła po upadku:", options: ["Powstania kościuszkowskiego", "Powstania listopadowego", "Wiosny Ludów", "Powstania styczniowego"], answer: "Powstania listopadowego", source: "[1]" },
    { question: "Do tzw. 'trzech wieszczów' polskiego romantyzmu zaliczamy:", options: ["Mickiewicza, Słowackiego, Norwida", "Mickiewicza, Słowackiego, Krasińskiego", "Słowackiego, Krasińskiego, Norwida", "Mickiewicza, Krasińskiego, Fredrę"], answer: "Mickiewicza, Słowackiego, Krasińskiego", source: "[various]" },
    { question: "Konflikt klasyczny (walka rozumu z uczuciem) jest kluczowy dla którego utworu wchodzącego w skład 'Ballad i romansów'?", options: ["'Świteź'", "'Lilije'", "'Romantyczność'", "'To lubię'"], answer: "'Romantyczność'", source: "[3, 13]" },
    { question: "Postać historyczna, która zainspirowała Mickiewicza do stworzenia bohatera 'Konrada Wallenroda', to:", options: ["Zawisza Czarny", "Jan III Sobieski", "Historyczny Konrad von Wallenrode, wielki mistrz krzyżacki", "Władysław Jagiełło"], answer: "Historyczny Konrad von Wallenrode, wielki mistrz krzyżacki", source: "[5]" },
    { question: "W 'Dziadach cz. III', scena egzorcyzmów nad Konradem jest prowadzona przez:", options: ["Guślarza", "Samego Konrada", "Księdza Piotra", "Jednego z więźniów"], answer: "Księdza Piotra", source: "[8]" },
    { question: "Który z sonetów krymskich opisuje podróż konną nad urwiskiem i potrzebę zaufania instynktowi ponad rozum?", options: ["'Grave (Grób Potockiej)'", "'Droga nad przepaścią w Czufut-Kale'", "'Pielgrzym'", "'Bakczysaraj'"], answer: "'Droga nad przepaścią w Czufut-Kale'", source: "[16]" },
    { question: "W 'Kordianie', ostatnia scena dramatu przedstawia Kordiana:", options: ["Uciekającego z więzienia", "Wygłaszającego kolejny monolog", "Prowadzonego na egzekucję, której wykonanie jest niepewne", "Pojednującego się z Bogiem"], answer: "Prowadzonego na egzekucję, której wykonanie jest niepewne", source: "[6]" },
    { question: "Głównym celem 'Testamentu mego' Słowackiego jest:", options: ["Rozliczenie się z wrogami", "Prośba o przebaczenie grzechów", "Przekazanie poetyckiego dziedzictwa i wiary w siłę narodu", "Opisanie swojego życia i podróży"], answer: "Przekazanie poetyckiego dziedzictwa i wiary w siłę narodu", source: "[7, 15]" },
    { question: "W 'Mojej piosnce (II)' Norwida, tęsknota za krajem jest tęsknotą za:", options: ["Bogactwem i splendorem", "Potęgą militarną", "Krajem konkretnych wartości moralnych i obyczajowych", "Możliwością swobodnej twórczości artystycznej"], answer: "Krajem konkretnych wartości moralnych i obyczajowych", source: "[9, 12, 57]" }
];

// --- Test (Referencje do elementów DOM) ---
const testQuestionText = document.getElementById('test-question-text');
const testOptionsButtons = document.getElementById('test-options-buttons');
const testFeedbackText = document.getElementById('test-feedback-text');
const testNextButton = document.getElementById('test-next-button');
const testResultsText = document.getElementById('test-results-text');
const testContent = document.getElementById('test-content');
const testProgress = document.getElementById('test-progress');

// --- Test (Zmienne globalne dla logiki testu) ---
let currentTestQuestionIndex = 0;
let testScore = 0;

// --- Test (Funkcje) ---
function initTest() {
    if (!testContent) { 
        console.error("Kontener testu (testContent) nie istnieje lub nie został poprawnie pobrany!"); 
        // Można dodać wyświetlenie komunikatu błędu użytkownikowi w #test-results-text lub podobnym miejscu
        if(testResultsText) {
            testResultsText.innerHTML = "<p>Wystąpił błąd podczas inicjalizacji testu. Sprawdź konsolę przeglądarki.</p>";
            testResultsText.style.display = 'block';
        }
        return; 
    }
    
    if (typeof shuffleArray === 'function') {
        shuffleArray(testData);
    } else {
        console.warn("Funkcja shuffleArray nie jest dostępna. Pytania testu nie będą tasowane.");
    }

    currentTestQuestionIndex = 0;
    testScore = 0;
    testContent.style.display = 'block'; // Upewnij się, że kontener pytań jest widoczny
    if (testResultsText) testResultsText.style.display = 'none';
    if (testFeedbackText) { testFeedbackText.textContent = ''; testFeedbackText.className = 'test-feedback';}
    if (testNextButton) testNextButton.style.display = 'none';
    displayTestQuestion();
}

function displayTestQuestion() {
    if (currentTestQuestionIndex < testData.length) {
        if(!testProgress || !testQuestionText || !testOptionsButtons) {
            console.error("Jeden lub więcej kluczowych elementów UI dla pytań testowych nie istnieje!");
            if(testContent) testContent.style.display = 'none';
            if(testResultsText) {
                testResultsText.innerHTML = "<p>Błąd wyświetlania pytania. Sprawdź konsolę.</p>";
                testResultsText.style.display = 'block';
            }
            return;
        }

        if(testProgress) testProgress.textContent = `Pytanie ${currentTestQuestionIndex + 1} z ${testData.length}`;
        const currentQuestion = testData[currentTestQuestionIndex];
        if (testQuestionText) testQuestionText.innerHTML = `${currentTestQuestionIndex + 1}. ${currentQuestion.question} ${currentQuestion.source ? "<span class='source-citation'>" + currentQuestion.source + "</span>" : ''}`;
        
        if (testOptionsButtons) {
            testOptionsButtons.innerHTML = ''; // Wyczyść poprzednie opcje
            if (currentQuestion.options && Array.isArray(currentQuestion.options)) {
                // Tasowanie opcji jest ważne dla każdego pytania
                let shuffledOptions = [...currentQuestion.options]; // Stwórz kopię do tasowania
                if (typeof shuffleArray === 'function') {
                    shuffleArray(shuffledOptions);
                }

                shuffledOptions.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.onclick = () => checkTestAnswer(option, currentQuestion.answer, button);
                    testOptionsButtons.appendChild(button);
                });
            }  else {
                console.error("Brak opcji odpowiedzi dla pytania testowego:", currentQuestion);
                testOptionsButtons.innerHTML = '<p>Błąd: Brak opcji odpowiedzi.</p>';
            }
        }
        if (testFeedbackText) { testFeedbackText.textContent = ''; testFeedbackText.className = 'test-feedback';}
        if (testNextButton) {
            testNextButton.style.display = 'none'; // Ukryj przycisk "Następne"
            // Upewnij się, że event listener jest dodany tylko raz, lub usuń stary, jeśli jest potrzeba
            // W tym przypadku, przycisk jest tworzony/ukrywany, więc nie powinno być problemu z wielokrotnym dodawaniem
        }
    } else {
        showTestResults();
    }
}

function checkTestAnswer(selectedOption, correctAnswer, button) {
    if (!testOptionsButtons || !testFeedbackText || !testNextButton) {
        console.error("Kluczowe elementy UI do sprawdzania odpowiedzi nie istnieją!");
        return;
    }
    Array.from(testOptionsButtons.children).forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        testFeedbackText.textContent = "Poprawna odpowiedź!"; 
        testFeedbackText.className = 'test-feedback correct';
        testScore++;
        if (button) { button.style.backgroundColor = '#c3e6cb'; button.style.borderColor = '#155724'; }
    } else {
        testFeedbackText.textContent = `Błędna odpowiedź. Prawidłowa to: ${correctAnswer}`; 
        testFeedbackText.className = 'test-feedback incorrect';
        if (button) { button.style.backgroundColor = '#f5c6cb'; button.style.borderColor = '#721c24';}
        Array.from(testOptionsButtons.children).forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = '#c3e6cb'; btn.style.borderColor = '#155724';
            }
        });
    }
    testNextButton.style.display = 'block';
}

function nextTestQuestion() {
    currentTestQuestionIndex++;
    displayTestQuestion();
}

function showTestResults() {
    if (!testContent || !testResultsText) {
        console.error("Elementy UI do wyświetlania wyników testu nie istnieją!");
        return;
    }
    testContent.style.display = 'none';
    let percentage = 0;
    if (testData.length > 0) {
        percentage = ((testScore/testData.length)*100).toFixed(0);
    }
    testResultsText.innerHTML = `<h3>Wyniki Testu</h3><p>Zdobyłeś ${testScore} na ${testData.length} punktów (${percentage}%).</p><button onclick="initTest()">Spróbuj jeszcze raz</button>`;
    testResultsText.style.display = 'block';
}

// Dodajemy event listener do przycisku "Następne pytanie"
// Upewnij się, że ten kod jest wykonywany PO tym, jak DOM jest gotowy
// i element testNextButton istnieje.
// W tym przypadku, defer w <script> powinien to zapewnić.
if (testNextButton) {
    testNextButton.addEventListener('click', nextTestQuestion);
} else {
    // Ten console.warn może się pojawić, jeśli skrypt jest parsowany zanim DOM jest w pełni gotowy,
    // ale funkcje i tak powinny działać, bo event listener jest na stałym elemencie.
    // Jednak jeśli testNextButton jest null w momencie, gdy użytkownik mógłby go kliknąć, to jest problem.
    console.warn("Przycisk testNextButton nie został znaleziony podczas początkowego ładowania skryptu test.js. Upewnij się, że ID w HTML jest poprawne.");
}