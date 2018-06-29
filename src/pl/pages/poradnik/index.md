---
layout: documentation.html
author: Agata Matoga
date: 2016-08-18
page: documentation
locale: pl
tags: dokumentacja, poradnik
title: Powiadomienia Web Push - Poradnik - PushPushGo
description: Wszystko co musisz wiedzieć o notyfikacjach web push. Zobacz jak założyć konto i przeprowadzić pierwszą wysyłkę kampanii web push z PushPushGo.
---


## O PushPushGo

PushPushGo to polska platforma do tworzenia, targetowania i wysyłania **powiadomień web push**, dedykowana sektorowi
**ecommerce**.

Notyfikacje web push pełnią w strategii marketingowej funkcję podobną do email marketingu. Pozwalają:

- **pozyskiwać** nowych płacących klientów,
- zwiększać **lojalność** odbiorców,
- zwiększać ruch i **generować sprzedaż**,
- budować **rozpoznawalność** marki,
- **edukować** rynek,
- przeprowadzać ankiety i **badania satysfakcji**.

Jednocześnie pozwalają pozostać w kontakcie z tymi odbiorcami, którzy boją się **spamu** i nie zapisują się na newslettery.
Komunikaty web push są też dużo szybsze w odbiorze i skuteczniej wywołują potrzebę pilności zapoznania się z ofertą.

Aby zmaksymalizować skuteczność działań naszych Klientów przygotowaliśmy niniejszy poradnik, który w kilku krokach
przeprowadzi Państwa przez proces zakładania i personalizacji konta oraz wysyłki kampanii z platformy PushPushGo.


## Start

### Założenie konta

Pierwszym krokiem jest **założenie konta** w aplikacji PushPushGo. Zarejestrować możesz się pod adresem:
<a href="https://app.pushpushgo.com/#register">https://app.pushpushgo.com/#register</a>.

Po pierwszym zalogowaniu do aplikacji, na pulpcie wyświetli się informacja o braku utworzonego projektu.
<img src="/images/app-screenshots/start.png" alt="Aplikacja PushPushGo - pierwsze logowanie" class="big shadow">


### Utworzenie projektu

Po kliknięciu w przycisk zachęcający do zintegrowania nowej strony zostaniesz przekierowany do formularza nowego projektu.
Jedyne informacje, które należy podać to nazwa projektu, adres www oraz język integrowanej strony.

Na tym etapie mamy dla Ciebie trzy podpowiedzi:
- pamiętaj, że nazwa projektu będzie widoczna dla użytkowników Twojej strony,
- w adresie URL strony nie musisz podawać www,
- język, który wybierzesz wpłynie na domyśle teksty naszych pluginów, które będą widoczne dla użytkowników Twojej strony.

<img src="/images/app-screenshots/create-project.png" alt="Tworzenie projektu w PushPushGo" class="big shadow">

### Integracja strony

Po utworzeniu projektu zostaniesz przekierowany do podstrony z jego ustawieniami, na której wyświetli się komunikat informujący o braku kodu integracyjnego na stronie.

<img src="/images/app-screenshots/not-integrated.png" alt="PushPushGo - integracja powiadomień web push na stronie www" class="big shadow">

Do wyboru masz trzy sposoby integracji:

- prostą integrację,
- integrację z własną domeną,
- integrację dla popularnych platform.

<br/>

**Prosta integracja**

Podstawowym sposobem na zintegrowanie strony jest wklejenie jednej linijki kodu w dowolnym miesjcu w kodzie źródłowym strony.

<img src="/images/app-screenshots/integration-simple.png" alt="PushPushGo - integracja powiadomień web push na stronie www" class="shadow">

Po wklejeniu kodu, Twoja strona jest już zintegrowana i po kliknięciu przycisku **Sprawdź integrację**, komunikat
błędu powinien zamienić się na informację o poprawnej integracji.

Pamiętaj, że wybierając prostą integrację:

- Zapis na powiadomienia będzie odbywał się dwuetapowo. Po zaakceptowaniu formularza zapisu pojawi się drugie okno, w którym należy potwierdzić zgodę na otrzymywanie powiadomień.
- Odbiorcy zapisywani są na dedykowanej dla każdego projektu subdomenie www-nazwa-strony-pl.pushpushgo.com
- W powiadomieniach bedzie wyświetlała się dedykowana subdomena www-nazwa-strony-pl.pushpushgo.com

<br/>

**Integracja z własną domeną**

W aplikacji PushPushGo możliwa jest również integracja z własną domeną. Umożliwia ona odbiorcom zapis na powiadomienia za pomocą jednego kliknięcia. Dodatkowo w wysyłanych notyfikacjach pojawia się tylko i wyłącznie adres url zintegrowanej domeny, bez adresu pushpushgo.com

Ten sposób integracji jest możliwy tylko dla domen https i polega na wklejeniu indywidualnie wygenerowanego skryptu w dowolne miejsce w kodzie html strony oraz umieszczeniu na ścieżce root serwera plików, które można pobrać w zakładce **Ustawienia** danego projektu.

Aby sprawdzić, czy nasza domena umożliwia ten typ integracji, wystarczy kliknąć w przycisk **Sprawdź certyfikat SSL**.

<img src="/images/app-screenshots/has-ssl.png" alt="PushPushGo - integracja powiadomień web push na stronie www" class="shadow">

<br/>

**Integracja dla popularnych platform**

Specjalnie dla użytkowników popularnych platform przygotowaliśmy gotowe instrukcje integracji.

Jeśli posiadasz sklep lub inną stronę, która korzysta z jednej z wymienionych powyżej platform lub narzędzi, wybierz ją, a następnie
podążaj za kolejnymi wskazówkami.

- <a href="../../blog/post/iai-shop-integracja/" target="_blank">IAI-Shop</a>
- <a href="../../blog/post/shoplo-integration/" target="_blank">Shoplo</a>
- <a href="../../blog/post/shoper-integration/" target="_blank">Shoper</a>
- <a href="../../blog/post/wordpress-integration/" target="_blank">Wordpress</a>
- <a href="../../blog/post/gtm-integration/" target="_blank">Google Tag Manager</a>
- <a href="../../blog/post/landingi-integracja/" target="_blank">Landingi.pl</a>


### Ustawienia projektu

W zakładce **Ustawienia projektu** znajduje się kilka przydatnych opcji, na które warto zwrócić uwagę podczas integracji:

**Logo projektu**

Przycięty do kwadratu obrazek będzie wyświetlał się:
- jako domyślna ikona powiadomienia,
- w oknie potwierdzającym zapis na powiadomienia.

**Kolor podstawowy marki**

Dotyczy on:
- przycisków subskrypcji w formularzu zapisu i skrzynce odbiorczej,
- symbolu dzwonka na Twojej stronie.

Wybór koloru podstawowego marki pozwoli na jeszcze lepsze dopasowanie kolorystyki formularza zapisu do wyglądu Twojej strony, co sprawia, że budzi
on większe zaufanie i skuteczniej skłania odbiorców do zapisu.

**Wyłączenie integracji**

Szybkim sposobem na chwilowe wyłączenie integracji (przykładowo, by odwiedzającym nie wyświetlał się formularz zapisu) jest przełączenie switcha **Integracja włączona** na off.

**Eventy Google Analytics**

Jeśli chcesz analizować zachowania użytkowników dotyczące zapisu na powiadomienia w Google Analyticsie skorzystaj funkcjonalności Eventów GA w naszym systemie. Zaznaczając odpowiedni checkbox w ustawieniach projektu zgadzasz się na przesyłanie do swojego Google Analytics **Zdarzeń** takich jak:
- ile osób kliknęło zezwalaj w formularzu zapisu
- ile osób kliknęło w blokuj w formularzu zapisu
- ile osób zamknęło formularz zapisu
- ile osób kliknęło zezwalaj w skrzynce odbiorczej
- ile osób wypisało się z poziomu skrzynki odbiorczej
- ile osób kliknęło w ikonkę dzwonka


<img src="/images/app-screenshots/project-settings.png" alt="PushPushGo - wybór podstawowego koloru marki" class="shadow">

## Elementy na stronie

### Formularz zapisu
Pierwszym sygnałem, że udało Ci się zintegrować stronę, jest wyświetlenie się poniższego komunikatu po wejściu na
nią.

<img src="/images/app-screenshots/form-native.png" alt="PushPushGo - domyślny formularz zapisu na powiadomienia web push" class="shadow">

Wyskakujący dymek nazywany jest formularzem zapisu, ponieważ to właśnie za jego pomocą odwiedzający stronę mogą wyrazić
zgodę na **otrzymywanie powiadomień push**.

Formularz zapisu to wizytówka Twoich działań web push na stronie sklepu. Ma on decydujący wpływ na to, czy odbiorca
Ci zaufa i postanowi poświęcić swój czas i kliknąć „Zapisz”.

Przemyślany i dobrze skonstruowany formularz sprawi, że Twoja **baza odbiorców** będzie systematycznie rosnąć
i dawać Ci realną szansę na pozostanie w kontakcie z Klientami, warto więc zadbać o jego przekaz i wygląd od samego
początku.

Wygląd formularza i jego treść możesz dowolnie edytować. Możesz to zrobić w zakładce **Szablony**, w menu aplikacji
z lewej strony.

W PushPushGo masz do wyboru 5 rodzajów formularzy zapisu:

**Domyślny**

<img src="/images/app-screenshots/form-default.png" alt="PushPushGo - formularz zapisu na powiadomienia web push - systemowy" class="shadow">

**Górna belka**

<img src="/images/app-screenshots/form-top.png" alt="PushPushGo - formularz zapisu na powiadomienia web push - górna belka" class="shadow">

**Wyśrodkowany**

<img src="/images/app-screenshots/form-center.png" alt="PushPushGo - formularz zapisu na powiadomienia web push - popup wycentrowany" class="shadow">

**Górny box**

<img src="/images/app-screenshots/form-top-box.png" alt="PushPushGo - formularz zapisu na powiadomienia web push - górny box" class="shadow">

**Spersonalizowany**

<img src="/images/app-screenshots/form-custom.png" alt="PushPushGo - Spersonalizowany formularz zapisu na web push" class="shadow">

W przypadku formularza spersonalizowanego możesz dodatkowo wybrać zdjęcie, które będzie jego głównym elementem. Sam
zdecyduj czy ma się ono wyświetlać z prawej, z lewej strony, na górze lub na dole tekstu.

<img src="/images/app-screenshots/form-custom-edit.png" alt="PushPushGo - spersonalizowany formularz zapisu na web push - ustawienia" class="shadow">

Po prawej stronie kreatora zobaczysz podgląd formularza. Sprawdź jak układa się w nim tekst i czy np. użyte emotikony
wyświetlają się prawidłowo.

**Multichannel**

<img src="/images/app-screenshots/form-multichannel-1.png" alt="PushPushGo - spersonalizowany formularz zapisu na web push i email" class="shadow">

Dzięki formularzowi typu **Multichannel** jesteś w stanie zbierać zapisy zarówno na newsletter jak i web push
za pomocą jednego pop-upa. Aby formularz zadziałał poprawnie, należy zintegrować swoją platformę do email marketingu
z PushPushGo. Aby to zrobić przejdź do ustawień projektu i wybierz z listy swoją platformę.

<img src="/images/app-screenshots/integrations-list.png" alt="PushPushGo - integracja z systemami do email marketingu" class="shadow">

Następnie, uzupełnij formularz integracji o wymagane parametry (znajdziesz je w panelu Twojej platformy email, najczęściej w ustawieniach). Po kliknięciu **Zintegruj** logo platformy będzie oznaczone odpowiednią ikonką świadczącą
o poprawnej integracji.

<img src="/images/app-screenshots/integration-mailchimp.png" alt="PushPushGo - integracja z systemami do email marketingu - instrukcja" class="shadow">

Gdy platforma będzie już zintegrowana, możesz powrócić do ustawień formularza zapisu. W polu z listą dostępnych platform,
powinna pojawić się Twoja integracja. Wybierz ją z listy, a następnie wybierz listę subskrybentów, do której mają
być dodawani nowi odbiorcy. Kliknij przycisk podsumowujący integrację i gotowe!

<img src="/images/app-screenshots/form-multichannel.png" alt="PushPushGo - spersonalizowany formularz zapisu na web push i email - wybór listy odbiorców" class="shadow">

### Czas po jakim pojawi się formularz

Istnieje możliwość ustawienia czasu (w sekundach) po jakim pojawi się formularz zapisu od momentu wejścia na stronę. Jeśli chcesz aby formularz pokazywał się w momencie, gdy użytkownik chce opuścić stronę, należy zaznaczyć opcję **Exit popup**.

<img src="/images/app-screenshots/popup-show-time.png" alt="PushPushGo - Czas po jakim pojawi się formularz zapisu na web push" class="shadow">

### Czas po jakim formularz pojawi się ponownie

W przypadku prostej integracji istnieje możliwość ponownego wyświetlenia formularza po odrzuceniu subskrypcji. Możemy przykładowo zdecydować, że co 60 dni proponujemy użytkownikowi na powiadomienia.

Ta opcja nie działa jednak w przypadku integracji z własną domeną. Proponując użytkownikom zapis za pomocą natywnego formularza przeglądarkowego ma on możliwość wciśnięcia przycisku **Blokuj**, który spowoduje, że formularz nie wyświetli się już nigdy więcej na tej stronie, na tej przeglądarce.

### Inne opcje dla formularza zapisu

W kreatorze formularza zapisu możesz też także spersonalizować inne ustawienia, takie jak:

- Włączyć popup mobilny,
- Dodać własne style css, nadpisujące wygląd formularza zapisu.


### Checkboxy z preferencjami

By w przyszłości lepiej targetować swoje komunikaty, możesz już podczas zapisu zbierać informacje o zainteresowaniach swoich odbiorców.

W tym celu udostępniliśmy możliwość wyświetlania checkboxów z kategoriami na formularzu zapisu. By dodać kategorie, w zakładce **Formularz zapisu** wejdź w tab **Ustawienia**, a następnie kliknij przycisk **Dodaj preferencje**.

<img src="/images/app-screenshots/preferences1.png" alt="PushPushGo - zbieranie preferencji na formularzu zapisu" class="shadow">

W polu **Opis** wpisz nazwę kategorii, która wyświetli się na formularzu, natomiast w polu **Tag** wpisz nazwę taga, jaki ma być dodany do odbiorcy, jeśli zaznaczy daną kategorię.

Checkboxy można wykorzystać na różne sposoby, np. w przypadku branży odzieżowej, checkboxami możesz zachęcić odbiorcę do sprecyzowania jakich artykułów poszukuje - damskich, męskich czy dziecięcych. W ten sposób mama poszukująca ubrań dla siebie i dla swojegi dziecka, będzie mogła wybrać odpowiednio dwie kategorie.

<img src="/images/app-screenshots/preferences2.png" alt="PushPushGo - zbieranie preferencji na formularzu zapisu" class="shadow">

> **Na to zwróć uwagę**

> - Formularz zapisu **nie może przeszkadzać w dokonaniu zakupu** na Twojej stronie. Lepiej żeby wyświetlał się od
razu lub po kilku sekundach od wejścia na stronę, a nie w trakcie procesu zakupowego.
> - Formularz powinien pasować do wyglądu Twojej strony, a jednocześnie musi być wyraźnie widoczny na jej tle. Z naszych
analiz wynika, że za pomocą **formularza wyśrodkowanego** najszybciej zbudujesz bazę odbiorców. Zwróć jednak
uwagę czy pasuje on do wyglądu Twojej strony.
> - Domyślny język dla powiadomień web push to angielski. Jeśli Twoi Klienci są polskojęzyczni, **zmień język formularza** zanim opublikujesz go na stronie.
> - Nie zapomnij zamieścić w formularzu zachęty, czyli informacji o **korzyściach** jakie płyną z zapisania się na
Twoją subskrypcję.


## Skrzynka odbiorcza

Kolejnym elementem jaki możesz włączyć na swojej stronie jest **skrzynka odbiorcza dla powiadomień web push**.

Analizy działań email marketingowych wykazują, że wielu odbiorców po pierwszym otwarciu newslettera kilka razy powraca
do skrzynki odbiorczej by przypomnieć sobie jego treść lub skorzystać z przesłanego kodu rabatowego. Skrzynka odbiorcza
web push to świetny sposób na to by Twoi odbiorcy mieli dostęp do powiadomień w każdej chwili.

<img src="/images/app-screenshots/sidebar-inbox-example.png" alt="PushPushGo - skrzynka odbiorcza dla powiadomień web push" class="shadow">

Po włączeniu komponentu, w lewym dolnym rogu na stronie pojawi się okrągły button z dzwoneczkiem, służący do otwierania
skrzynki odbiorczej.

Teksty i wygląd skrzynki odbiorczej możesz dowolnie edytować. Wchodząc w zakładkę **„Szablony"**, a następnie
**„Skrzynka odbiorcza"** zobaczysz dostępne pola formularza odpowiadające poszczególnym tekstom w skrzynce.

<img src="/images/app-screenshots/sidebar-inbox.png" alt="PushPushGo - skrzynka odbiorcza dla powiadomień web push - konfiguracja" class="shadow">

By w pełni spersonalizować widget dzwonka na stronie, możesz zastosować własną ikonkę. Przygotuj ikonę, by wizualnie pasowała do wyglądu Twojej strony, wgraj ją na swój serwer i zamieść link do ikony w ustawieniach skrzynki odbiorczej, w polu **Ścieżka URL do ikonki dzwonka**. Należy jednak pamiętać, że maksymalny wymiar takiej grafiki wynosi 30x30 pikseli.

<img src="/images/app-screenshots/custom-fab.png" alt="PushPushGo - skrzynka odbiorcza dla powiadomień web push - konfiguracja" class="shadow">

Wygląd komponentu (np. kolory, czcionki) można dowolnie zmieniać, nadpisując style CSS i wklejając je w odpowiednim
polu - „Nadpis CSS". Jest to opcja przeznaczona dla osób posiadających podstawową znajomość języka HTML i CSS.

> **Na to zwróć uwagę**
>
> -  Zanim włączysz skrzynkę odbiorczą **przetłumacz i dostosuj teksty**, tak by zachęcały do zapisu na powiadomienia.
> -  Jest to dodatkowa przestrzeń, w której możesz **rozwinąć informacje z formularza zapisu**.

Poinformuj w niej odbiorców np.:

 - jak często będziesz wysyłać powiadomienia,
 - jakimi informacjami będziesz się z nimi dzielić,
 - jakie korzyści wynikają z zapisu na Twoje powiadomienia,
 - że mogą zawsze wrócić do wcześniejszych powiadomień za pośrednictwem skrzynki.


## Przełącznik zapisu

Inną formą zachęty do zapisu jest dymek pojawiający się po kliknięciu w dzwoneczek:

Gdy użytkownik nie jest zapisany, wyświetlamy mu tekst z zachętą i przycisk zapisu.

<img src="/images/app-screenshots/unsubscribed-bubble.png" alt="PushPushGo - dzwoneczek z zapisem na powiadomienia web push - widok dla niezapisanego użytkownika">

Po zapisaniu się, w chmurce wyświetla się informacja, o tym że jest odbiorca zapisany oraz link służący do wypisu:
<img src="/images/app-screenshots/subscribed-bubble.png" alt="PushPushGo - dzwoneczek z zapisem na powiadomienia web push - widok dla zapisanego użytkownika" style="margin-right: 20px">


## Wysyłka kampanii

Przygotowanie kampanii ma miejsce w sekcji **Wyślij pusha**. Możesz skonfigurować tutaj:

- ikonę powiadomienia,
- tytuł,
- treść,
- url powiadomienia,
- utm kampanii,
- duży obrazek,
- akcje,
- wymaganie interakcji,
- datę wysyłki,
- grupę odbiorców.

<img src="/images/app-screenshots/push-creator.png" alt="PushPushGo - kreator kampanii web push" class="big shadow">

### Ikona

Domyślną ikoną powiadomienia jest nasza dedykowana grafika z ikoną dzwonka.

<img src="/images/app-screenshots/push-icon.png" alt="PushPushGo - ikona powiadomienia web push" class="shadow">

Jeśli chcesz ustawić swoją domyślną ikonę (np. logo strony), wejdź w ustawienia projektu, wybierz i załaduj wybrany
obrazek.

<img src="/images/app-screenshots/primary-color.png" alt="PushPushGo - logo jako domyślna ikona powiadomienia web push" class="big shadow">

Domyślną ikonę zawsze możesz zmienić, wgrywając i przycinając nowy obrazek dodany z Twojego komputera. Możesz też
wykorzystać ikony z poprzednich kampanii, klikając opcję **„Wybierz z biblioteki zdjęć"**.

<img src="/images/app-screenshots/crop.png" alt="PushPushGo - przycinanie ikony powiadomienia web push" class="medium shadow" style="margin-right: 20px;">

<img src="/images/app-screenshots/image-library.png" alt="PushPushGo - przycinanie ikony powiadomienia web push" class="medium shadow">

### Treść

W zależności od rodzaju przeglądarki z jakiej korzysta odbiorca masz do dyspozycji **określoną liczbę znaków tytułu i treści głównej**.
Odpowiednio zredagowana treść powiadomienia wpływa na wzrost statystyk kampanii.

Możesz również wzbogacić treść swoich powiadomień o przyciągające wzrok **emoji**. Wystarczy, że klinikesz symbol
emotki w edycji tytułu lub treści notyfikacji.

<img src="/images/app-screenshots/emoji.png" alt="PushPushGo - emoji w powiadomieniach web push" class="medium shadow" style="margin-right: 20px;">

Zobacz też przykładowe zastosowania notyfikacji web push w strategii marketingowej:

**Wiadomości powitalne**

Zachęć do zakupu w momencie zapisu na powiadomienia, gdy użytkownik jest najbardziej zaangażowany

<img src="/images/app-screenshots/yeah-bunny-push.png" alt="PushPushGo - przykładowa wiadomość powitalna" class="medium shadow">

**Powracający użytkownicy**

Informuj o nowościach z życia marki i specjalnych ofertach, aby klienci wielokrotnie powracali na Twoją stronę

<img src="/images/app-screenshots/ozone-push.png" alt="PushPushGo - powiadomienie web push zwiększające powracalność na stronę" class="medium shadow">

**Zaawansowane targetowanie**

Wykorzystuj informacje o przeglądanych produktach, aby jeszcze lepiej targetować komunikaty web push

<img src="/images/app-screenshots/rajsport-push.jpg" alt="PushPushGo - targetowana kampania web push" class="medium shadow">


> **Na to zwróć uwagę**
> - Wykorzystuj czytelne wezwanie do działania jak **„kliknij”, „wejdź”** - pamiętaj, że web push to nowy format
  marketingowy, nie każdy z odbiorców wie, że wyświetlony dymek należy kliknąć, co może wpływać na wskaźniki Twoich
  kampanii,
> - **Atrakcyjne zdjęcie** produktu, przyciągnie uwagę Twojego odbiorcy,
> - W przypadku ofert cenowych, **ogranicz je w czasie**, zwiększysz w ten sposób wrażenie pilności i szansę, że
  klient dokona zakupu od razu po wejściu na stronę.

### Url powiadomienia

Powiadomienia push po kliknięciu przenoszą użytkownika na podany adres www. Przykładowo, jeśli wysyłasz notyfikację
o nowym poście na Twojej stronie, to link powinien prowadzić do tego konkretnego postu.

### UTM kampanii

Jeśli Twoja strona zintegrowana jest z Google Analytics i chcesz wyróżnić wejścia na stronę pochodzące z kampanii
web push, przekaż parametry UTM kampanii. Możesz to zrobić podczas konfigurowania kampanii, zaznaczając checkbox
**„Ustaw UTM"** i uzpełniając poszczególne pola:

- <strong>Źródło kampanii</strong>, czyli silnik, dostawca czy inne źródło skąd generowana jest kampania Domyślnie
  ustawiana wartość: 'pushpushgo'.
- <strong>Medium kampanii</strong>, czyli nośnik, za pomocą którego została zrealizowana kampania.Domyślnie
  ustawiana wartość: 'push'.
- <strong>Nazwa kampanii</strong>, czyli tytuł, po którym będziesz identyfikować konkretną kampanię.

### Duże zdjęcie

Google chrome udostępnia możliwość dodania do powiadomienia dużego zdjęcia.

<img src="/images/app-screenshots/big-image.png" alt="PushPushGo - duże zdjęcie w powiadomieniu web push" class="shadow">

Warto zwrócić uwagę na to, że gdy wysyłane jest duże zdjęcie, treść powiadomienia jest ucinana do jednej linijki.
Tą opcję należy wykorzystywać rozważnie. Zdjęcie w powiadomieniu może przysłonić użytkownikowi część ekranu i być dla niego uciążliwym, dlatego nie należy takich kampanii wysyłać zbyt często.

### Akcje
Kolejną możliwością jaką udostępnia jedynie Google Chrome są akcje w powiadomieniu.

Do powiadomienia możemy dodać maksymalnie dwie opcje, z której każda posiada tytuł i linka przekierowującego.

<img src="/images/app-screenshots/push-actions-form.png" alt="PushPushGo - duże zdjęcie w powiadomieniu web push" class="shadow">

Przykładowo możemy zapytać naszych odbiorców, o satysfakcję z otrzymywanych powiadomień, a odpowiedź negatywną przekierować na ankietę satysfakcji.

<img src="/images/app-screenshots/push-actions.png" alt="PushPushGo - akcje w powiadomieniu web push" class="shadow">

Dodatkowo w raportach kampanii możemy zobaczyć statystyki kliknięć poszczególnych akcji.

### Wymagana interakcja

Zaznaczając checkbox **„Wymagana interakcja"** definiujesz, że dla użytkowników przeglądarki Google Chrome powiadomienie
nie zniknie, aż do momentu kliknięcia w treść lub manualnego zamknięcia. Wybranie tej opcji może znacznie zwiększyć
klikalność Twoich kampanii. Dzieje się tak dlatego, że odbiorca ma wówczas możliwość zapoznania się z Twoim komunikatem
wtedy, gdy ma na to czas.

### Czas wysyłki

Ustawiając czas wysyłki, możesz wybrać jedną z dwóch opcji: wysłać powiadomienie od razu lub zaplanować wysyłkę na
później. Po ustaleniu daty wysyłki na późniejszą, kampania zostanie oznaczona jako **„Gotowa do wysyłki"**,
a aplikacja wyśle ją w wyznaczonym czasie.

<img src="/images/app-screenshots/select-date.png" alt="PushPushGo - planowanie czasu wysyłki kampanii web push" class="shadow">

Możesz również zawęzić czas wyświetlania powiadomień z danej kampanii do określonego czasu, aby mieć pewność, że
dany odbiorca nie otrzyma od Ciebie dwóch wiadomości na raz.

<img src="/images/app-screenshots/push-expire-date.png" alt="PushPushGo - ustawienie czasu wygaśnięcia kampanii web push" class="shadow">

> **Zobacz to na przykładzie**
>
> - Dzień przed Black Friday wysyłasz do nich kampanię ze zniżką w wysokości 5%.
> - W dniu Black Friday o 10:00 planujesz kolejną kampanię ze zniżką w wysokości 10%.
> - Dzień po Black Friday o 10:00 wyślesz kolejną kampanię, tym razem ze zniżką w wysokości 15%.

Jeśli nie ograniczysz wyświetlania następujących po sobie kampanii w czasie osoby, które np. nie włączą komputera
przez wszystkie 3 dni, na 4 dzień otrzymają 3 kampanie na raz. Aby tego uniknąć wystarczy, że kampania 1 i kampania
2 będą mieć ograniczony czas wysyłki do godziny 10:00 kolejnego dnia.

### Strefy czasowe

Jeśli Twoi subskrybenci pochodzą z różnych stref czasowych, możesz uwzględnić je podczas wysyłki. Wystarczy wyrać opcję **Wyślij globalnie**.

<img src="/images/app-screenshots/global-choose.png" alt="PushPushGo - Wysyłka powiadomień web push w uwzględnieniem stref czasowych" class="shadow">

Przykładowo, jeśli o godzinie **12:00 danego dnia** planujesz wysyłkę na godzinę:

a) **14:00 następnego dnia** - każdy subskrybent otrzyma powiadomienie o 14:00 w swojej strefie czasowej.

<img src="/images/app-screenshots/timezone-all.png" alt="PushPushGo - Wysyłka powiadomień web push w uwzględnieniem stref czasowych" class="shadow">

b) **Od razu** - domyślnie, strefy czasowe, które przekroczyły już daną godzinę, zostaną pominięte. Jeśli jednak zaznaczysz odpowiedni checkbox, powiadomienie zostanie wysłane do tych stref o wybranej godzinie następnego dnia.

<img src="/images/app-screenshots/timezone-now.png" alt="PushPushGo - Wysyłka powiadomień web push w uwzględnieniem stref czasowych" class="shadow">


### Targetowanie wysyłki

Wysyłkę kampanii możesz zawęzić do określonej grupy odbiorców. Służą do tego tagi. Możesz zaznaczyć i odznaczyć tagi
poprzez kliknięcie. Po klinięciu **„Wyślij"**, kampania zostanie skierowana do odbiorców oznaczonych zaznaczonymi
tagami. Jeśli nie zaznaczysz żadnego z nich, kampania zostanie wysłana do wszystkich subskrybentów.

<img src="/images/app-screenshots/tag-select.png" alt="PushPushGo - targetowanie kampanii web push po zainteresowaniach odbiorców" class="shadow">


## Testy ABX

Testy ABX polegają na stworzeniu kilku wersji notyfikacji, gdzie każda wersja wysyłana jest do wybranej puli odbiorców. Wersja notyfikacji, która uzyska najlepszy wynik w postaci najwyższego wskaźnika kliknięć, zostanie wysłana do reszty odbiorców w bazie.

Pierwszy krok **Testy** umożliwia nam stworzenie kilku kampanii, które mają zostać wysłane do różnych odbiorców. Sama kreacja przebiega dokładnie tak samo jak w standardowych kampaniach push, czy automation. Aby stworzyć kolejne kampanie, należy kliknąć w przycisk **Dodaj**.

Po utworzeniu kampanii, przechodzimy do następnego kroku - **Podział procentowy**. Na tym etapie wybieramy ilość osób, do których mają zostać wysłane testowe notyfikacje. Dla każdej stworzonej przez nas notyfikacji możemy określić liczbę jej odbiorców.

<img src="/images/app-screenshots/abx-split.png" alt="PushPushGo - Testy ABX dla powiadomień web push" class="shadow">

W kroku **Czas** możemy zaplanować, kiedy mają zostać wysłane nasze testowe kampanie, kiedy ma nastąpić zakończenie wysyłania testowych kampanii oraz ustalić ograniczenie ważności wygranej kampanii. Jeśli nic nie zaznaczymy w tym kroku, kampania zostanie wysłana natychmiast, test zakończy się po dwóch godzinach, a zwycięska kampania nie będzie miała ograniczenia czasowego.

<img src="/images/app-screenshots/abx-schedule.png" alt="PushPushGo - Testy ABX dla powiadomień web push" class="shadow">

Następny krok, czyli **Targetowanie** umożliwia wysyłkę kampanii do określonej grupy odbiorców. Dokładnie tak, jak standardowej kreacji powiadomienia push. Jeśli nie wybierzemy żadnej grupy, kampania zostanie wysłana do wszystkich odbiorców.

Po wykonaniu wszystkich kroków, możemy przejść do ostatniego etapu - **Podsumowanie**, w którym możemy zobaczyć wszystkie wprowadzone przez nas informacje Na tym etapie możemy zapisać szkic kampanii i wrócić do niej później, lub zaplanować wysyłkę i czekać na efekty.


## Automation

Za pośrednictwem platformy PushPushGo możesz nie tylko planować, ale również zautomatyzować część wysyłek swoich kampanii web push. Scenariusze, według których kampanie będą później wysyłane ustalisz w naszym module **Automation**.

Dzięki nim raz ustalone ścieżki, np. gdy subskrybent **porzuci koszyk** o określonej wartości lub **nie był na Twojej stronie od określonego czasu**, będą wyzwalaczami kampanii, realizowanych później bez Twojego udziału.

Ze względu na to, że system marketing automation PushPushGo pozwala na monitorowanie wszystkich informacji z Twojej strony, wyzwalaczem do wysyłek może być praktycznie każda zarejestrowana informacja.

W dalszej części poradnika wyjaśniamy jak sprawić, aby te dane były zbierane w systemie oraz jak na ich podstawie ustawić własne scenariusze.

**Jeśli nie znajdziesz scenariusza**, który by Cię interesował napisz na adres <a href="mailto:support@pushpushgo.com">support@pushpushgo.com</a>,
doradzimy najlepiej go ustawić lub zrobimy to za Ciebie :)


### Zbieranie danych w module Automation

Wiele platform marketing automation oferuje użytkownikom **jedynie gotowe scenariusze**, według których mogą
oni ustalać jakie zachowania lub dane subskrybentów będą wyzwalaczem do uruchomienia danej wysyłki.

W PushPushGo poszliśmy o krok dalej i stworzyliśmy mechanizm, dzięki któremu **nasza platforma rozpoznaje dane elementy na Twojej stronie www**, jak np. wartość koszyka czy nazwę nagłówka danego postu na blogu.

Aby jej to umożliwić na początek należy ustawić **selektory**, które zbierają dane i przypisują je jako działanie
konkretnego subskrybenta.

1. Aby ustalić pierwszy selektor wybierz z menu głównego po lewej stronie zakładkę **Automation i Selektory**.

<img src="/images/automation-screenshots/1.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push">

2. Następnie kliknij przycisk **Użyj kreatora** po lewej stronie ekranu. (Zwróć uwagę, że jest on wspierany jedynie
przez przeglądarki Google Chrome oraz Mozilla Firefox.)

<img src="/images/automation-screenshots/2.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push">

3. W kreatorze selektorów widzisz swoją stronę www, tak jakby widział ją subskrybent. Jeżeli chcesz pozyskać ścieżkę
selektora, np. na thank you page będziesz musiał dokonać zakupu lub przejść cały inny niesprzedażowy proces, na
którego końcu wyświetlony jest landing page z podziękowaniem. Te transakcje czy inne operacje rzeczywiście dojdą
do skutku.

Zacznijmy od trzech podstawowych selektorów:

- **mail** - dzięki niemu adres email, którego używa subskrybent np. do logowania w Twoim sklepie zostanie mu
  przypisany na liście subskrybentów w PushPushGo. Będziesz mógł w ten sposób poznać płeć odbiorcy notyfikacji
  i np. sprawdzić w systemie CRM co wcześniej zamawiał, inaczej będzie to anonimowa osoba.

- **phone** - dzięki niemu zbierasz numery telefonu osób, do których możesz później wysłać kampanię SMS (nie
  zapomnij przy tym o zgodach prawnych na taką komunikację!)

- **tag** - ten selektor sprawi, że za każdym razem, gdy Twój subskrybent wyświetli daną podstronę Twojej strony
  czy e-sklepu zostanie mu przypisany tag, np. ktoś oglądał buty, otrzyma tag “buty”. Na podstawie tych informacji
  możesz później dzielić odbiorców na grupy osób o różnych zainteresowaniach i na tej podstawie podsyłać im odpowiednie
  treści.

4. Żeby ustalić selektor **mail** (identycznie w przypadku selektora phone):

Na stronie wyświetlonej w kreatorze najedź myszą na pole, w którym normalnie użytkownik podałby swój adres email/numer
telefonu.
<img src="/images/automation-screenshots/3.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - zczytywanie selektorów ze strony">

W oknie po prawej stronie zobaczysz wtedy podgląd selektora. Wciśnij wówczas zgodnie z instrukcją **“shift”**          oraz **“a”** a wyświetli się okno, w którym nadasz selektorowi własną nazwę.
<img src="/images/automation-screenshots/4.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - kreator do zbierania selektorów ze strony">

W tym przypadku powinna to być nazwa **“mail”** (lub **“phone”** w przypadku numeru telefonu).
<img src="/images/automation-screenshots/5.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - zapisywanie selektorów">

Aby dodać ten selektor do swojego projektu w PushPushGo kliknij przycisk **“sync”** w oknie kreatora i potwierdź
jego zapisanie w kolejnym oknie.

<img src="/images/automation-screenshots/6.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - zapisywanie selektorów">

Gdy to zrobisz, kreator zostanie automatycznie zamknięty i powrócisz do listy selektorów na swoim projekcie. Edytuj
ten, który właśnie utworzyłeś i upewnij się, że zawiera wartości takie jak poniżej. Pamiętaj jednak, że **ścieżka selektora** będzie różna w przypadku różnych stron www i nie musi być zgodna z poniższą.

<img src="/images/automation-screenshots/7.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - edycja selektora">

5. W kolejnym kroku możesz już w ten sam sposób ustawić selektor dla tagów, które będą przypisywane subskrybentom
na podstawie podstron, które przeglądali na Twojej stronie www.

W tym celu ponownie kliknij przycisk kreatora i najedź myszą np. na nazwę danego produktu lub kategorii produktów.

<img src="/images/automation-screenshots/8.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - tagowanie odbiorców za pomocą selektorów">

6. Następnie nazwij selektor **“tag”**, kliknij przycisk **“sync”** w kreatorze i dodaj nowy tag do swojego
projektu (analogicznie jak w poprzednim przypadku).

7. Na koniec upewnij się, że Twój selektor ma poniższe parametry, (poza ścieżką selektora, która może być różna w
przypadku różnych stron www).

<img src="/images/automation-screenshots/9.png" alt="PushPushGo - marketing automation do wysyłki powiadomień web push - tagowanie odbiorców za pomocą selektorów">

8. Właśnie utworzyłeś podstawowe selektory, dzięki którym zbierzesz ze swojej strony www więcej informacji o swoich
subskrybentach i na ich podstawie stworzysz bardziej zaawansowane kampanie marketingowe.

Przejdźmy teraz do indywidualnych scenariuszy, które zaplanujesz, np. aby wysyłać kampanie przypominające o porzuconym
koszyku, ale też takie, dla których wyzwalaczem będzie inne dowolne zachowanie odbiorcy na stronie.

Dla każdego z takich przykładowych scenariuszy utworzymy selektory i zaplanujemy wysyłkę w module Automation. Gotowy?
Zaczynamy! :)


### Scenariusz 1
*Wiadomość powitalna*

Często stosowaną, a zarazem sprawdzoną praktyką jest podziękowanie nowemu odbiorcy za subskrypcję i przesłanie mu kodu rabatowego. Do tego celu najlepiej posłuży notifikacja powitalna, wysłana bezpośrednio po zapisie.

W PushPushGo wiadomość powitalną można skonfigurować właśnie za pomocą modułu Automation. By rozpocząć należy wejść w zakładkę **Automation** i utworzyć nowy scenariusz.

![Wiadomość powitalna web push](/images/automation-screenshots/scenario1-a.png "Wiadomość powitalna web push")

Po wejściu w kreator scenariusza, nadajemy mu nazwę oraz zaznaczamy **Subskrybent zapisał się**.

Teraz należy kliknąć w przycisk **Następny**.

![Opening an account](/images/automation-screenshots/scenario1-b.png "Opening an account")

Wybieramy **Akcja -> Push**.

![Opening an account](/images/automation-screenshots/scenario1-c.png "Opening an account")

W ten sposób docieramy do ostatniego etapu, czyli tworzenia kampanii powitalnej. W tym celu należy kliknąć ikonkę “+”.

![Opening an account](/images/automation-screenshots/scenario1-d.png "Opening an account")

Po utworzeniu kampanii należy ją zapisać, po czym zapisać cały scenariusz.

Każdy scenariusz jest domyślnie wyłączony. Aby powiadomienia zaczęły działać, należy go włączyć, korzystając z przełącznika.

![Opening an account](/images/automation-screenshots/scenario1-e.png "Opening an account")

### Scenariusz 2
*Komunikacja z klientami przebywającymi na stronie*

Chcesz się komunikować tylko z osobami, które są obecnie na Twojej stronie i np. wysłać do nich notyfikację z informacją, że specjalnie dla osób, które dziś weszły na stronę masz 10% rabat lub darmowy ebook.

**Zbieranie danych**

W przypadku tego scenariusza nie musisz ustawiać żadnego selektora. Przejdź bezpośrednio do modułu Automation, wybierając z menu po lewej stronie przycisk **Automation** a następnie kliknij po lewej stronie przycisk **Nowe automation.**

**Projektowanie scenariusza**

Wyzwalaczem do wysyłki tej kampanii jest **Start sesji (czyli moment, w którym subskrybent wszedł na Twoją stronę)**, wybierz więc go jako **Zdarzenie początkowe** po prawej stronie ekranu.

Wybierz też łatwą do zapamiętania nazwę swojego scenariusza i włącz go suwakiem.

Jeśli Twoja promocja ma trwać tylko dzisiaj nie ustawiaj czasu ponowienia pozostawiając w polu zero, wówczas każdy
subskrybent, który wejdzie na Twoją stronę tylko raz otrzyma notyfikację

Następnie kliknij **niebieski przycisk Następny** na mapie scenariusza.

<img src="/images/automation-screenshots/10a.png" alt="PushPushGo - scenariusze automation - wysyłka powiadomień web push po wejściu na stronę">

Następnie wybierz zdarzenie jakie ma mieć miejsce po wejściu odbiorcy na stronę, w tym wypadku jest to **Akcja**.

<img src="/images/automation-screenshots/11.png" alt="PushPushGo - scenariusze automation - wysyłka powiadomień web push po wejściu na stronę">

Następnie wybierz kampanię **Push**.

<img src="/images/automation-screenshots/13.png" alt="PushPushGo - scenariusze automation - wysyłka powiadomień web push po wejściu na stronę">

Po czym zaprojektuj notyfikację, która będzie wysyłana do odbiorców i dodaj scenariusz klikając po prawej stronie
przycisk **Zapisz**.

<img src="/images/automation-screenshots/14.png" alt="PushPushGo - scenariusze automation - wysyłka powiadomień web push po wejściu na stronę">

Gdy minie okres obowiązywania promocji nie zapomnij wyłączyć scenariusza, w innym przypadku będzie się on realizował
codziennie dla wszystkich subskrybentów.

Żeby wyłączyć scenariusz, odnajdź jego nazwę na liście automatyzacji i kliknij **przycisk ołówka**.

<img src="/images/automation-screenshots/15.png" alt="PushPushGo - web push automation - edycja scenariusza">

Następnie wyłącz scenariusz przyciskiem on/off i kliknij przycisk **Zapisz**.

Wyłączony scenariusz będzie wyszarzony na liście automatyzacji.

### Scenariusz 3
*Odzyskiwanie porzuconych koszyków*

Klienci porzucają koszyk w Twoim sklepie. Chcesz im wysyłać 3 różne notyfikacje web push w zależności od wartości
koszyka i każdemu z tych subskrybentów nadać tag “porzucający”.

**Zbieranie danych**
W tym scenariuszu musisz mieć pewność, że notyfikację otrzymają jedynie ci odbiorcy, którzy rzeczywiście porzucili
koszyk, będziesz w tym celu potrzebować 2 selektorów.

**Selektor 1**

Pozwoli Ci oddzielić osoby, które nic nie wrzuciły do koszyka, od osób, które coś w nim miały.

W tym celu aplikacja musi monitorować czy wartość koszyka danego odbiorcy wynosiła zero czy się zmieniła.

Użyj kreatora selektorów i najedź myszą na wartość koszyka. Poniżej zobaczysz czy wartość w kreatorze zgadza się
z tą na stronie, to znaczy, że ścieżka selektora jest prawidłowa.

<img src="/images/automation-screenshots/17.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Jeśli tak naciśnij z klawiatury przyciski “shift” i “a” i zapisz selektor np. pod nazwą “zmiana wartości koszyka”
i kliknij przycisk sync by dodać selektor do projektu w nowym oknie.

Upewnij się następnie, że Twój selektor ma poniższe wartości (oczywiście Twoja ścieżka selektora może być zupełnie
inna, zależy to od struktury strony).

<img src="/images/automation-screenshots/18.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

**Selektor 2**

Drugi Selektor oddzieli odbiorców, którzy przeszli do thank you page czyli dokonali zakupu od tych, którzy tego nie
zrobili czyli porzucili koszyk.

Musi on więc monitorować wyświetlenie thank you page czyli np. kliknięcie w przycisk płacę.

W tym celu wejdź do menu selektorów i za pomocą kreatora najedź na przycisk zakupu. Zapisz selektor skrótem klawiszowym
“shift” i “a”, nadaj mu nazwę i przyciskiem “sync” dodaj do projektu.

Parametry selektora powinny być takie jak poniższe.

<img src="/images/automation-screenshots/19.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

**Projektowanie scenariusza**

Gdy ustawiłeś już 2 selektory, czas przejść do mapy scenariusza klikając przycisk** Nowe automation** w **menu Automation**.

Nadaj scenariuszowi własną nazwę np. porzucony koszyk i włącz go suwakiem. Możesz wybrać za ile scenariusz zrealizuje się ponownie dla danego subskrybenta. Można go ustawić na 1 dzień.

Pamiętaj, że ten scenariusz jest realizowany na koniec sesji, 30 minut po tym, gdy odbiorca opuścił stronę. Możesz go również dowolnie opóźnić projektując już ścieżkę, wybierając opcję opóźnienie.

Po wykonaniu powyższych czynności kliknij w przycisk **Następny**

<img src="/images/automation-screenshots/scenariusz-koszyk-1e.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Teraz wybierz opcję **Warunek**. Wybierz z listy rozwijalnej nazwę selektora, którym oznaczyłeś zmianę wartości koszyka z zera na inną (jeszcze przed wyświetleniem thank you page) i ustaw, że powinna być wyższa niż zero.

<img src="/images/automation-screenshots/scenariusz-koszyk-2e.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Oddzielasz w ten sposób od siebie osoby, które włożyły coś do koszyka, od których, które tego nie zrobiły. Teraz kliknij w przycisk “Prawda”.

<img src="/images/automation-screenshots/scenariusz-koszyk-prawdae.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Na ścieżce Prawda wybierz kolejny warunek. Znajdź na liście nazwę selektora monitorującego kliknięcie w przycisk kupuję i oznacz, że ten warunek nie został spełniony słowem fałsz.

Na ścieżce prawda (czyli w grupie osób, które porzuciły koszyk) wybierz Akcję i Tag i ustal, że po porzuceniu koszyka nada się odbiorcy tag “porzucający”.

<img src="/images/automation-screenshots/scenariusz-koszyk-3e.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Teraz kliknij w przycisk **“Następny”**.

<img src="/images/automation-screenshots/scenariusz-koszyk-3ee.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Wybierz opcję **Opóźnienie** i zaplanuj, kiedy ma się pojawić przypomnienie o niedokończonych zakupach. Jeśli od razu chcesz wysłać powiadomienie po opuszczeniu strony przez klienta, pomiń ten krok.

<img src="/images/automation-screenshots/scenariusz-koszyk-4e.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Teraz kliknij w przycisk **Następny**.

<img src="/images/automation-screenshots/scenariusz-koszyk-4ee.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Wybierz “Akcja” -> “Push” i stwórz nową kampanię. Zaprojektuj przypomnienie o porzuconym koszyku.

<img src="/images/automation-screenshots/scenariusz-koszyk-5e.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Tak powinno wyglądać docelowe drzewko:

<img src="/images/automation-screenshots/Drzewko.png" alt="PushPushGo - web push automation - odzyskiwanie porzuconych koszyków">

Oczywiście jest to podstawowa wersja, istnieje niezliczona ilość możliwości projektowania takiego scenariusza.

Następnie wybierz kolejny warunek i wybierz osoby, których wartość koszyka była mniejsza lub równa 100 zł. Dla nich na ścieżce prawda dodaj akcję Push i przygotuj odpowiednią kampanię.
Na ścieżce fałsz, która oznacza osoby, które porzuciły koszyk, ale jego wartość była wyższa od 100 ustal kolejny warunek, aby ich wartość koszyka była większa lub równa 300 zł.
Na ścieżce Prawda ustal kampanię dla osób, których wartość koszyka była większa lub równa 300 zł.
Na ścieżce Fałsz zaprojektuj kampanię dla osób, których wartość koszyka będzie mniejsza od 300 zł, ale większa lub równa 101 zł.

### Scenariusz 4
*Przypomnienie, po długiej nieobecności*

 Każdemu subskrybentowi, który nie był na Twojej stronie od miesiąca chcesz automatycznie wysłać notyfikację przypominającą.

**Zbieranie danych**

W tym scenariuszu nie potrzebujesz dodatkowych selektorów, ponieważ PushPushGo monitoruje kiedy i ile razy subskrybenci
weszli na Twoją stronę.

**Pola dodatkowe**

Aby zrealizować ten scenariusz będziemy potrzebowali stworzyć pole dodatkowe na subskrybencie, które będzie przechowywało datę jego ostatniej wizyty na stronie. W tym celu wchodzimy z zakładkę odbiorcy, klikamy przycisk "Pola dodatkowe", a następnie dodajemy pole o przykładowej nazwie **Data ostatniej wizyty** i typie Data.

<img src="/images/app-screenshots/last-visit-date-custom-field.png" alt="Pole dodatkowe - data ostatniej wizyty na stronie">

**Projektowanie scenariusza**

Ten scenariusz będzie się składał z dwóch podscenariuszy. W pierwszym zaktualizujemy datę ostatniej wizyty, a w drugim sprawdzimy, kiedy był ostatnio na stronie i wyślemy przypominające powiadomienie.

W zakładce **Automation** z menu głównego utwórz nowe automation.

Wybierz jako zdarzenie początkowe **start sesji**. Jedyny krok jaki należy dodać w tym automation to Akcja -> Aktualizuj. Nastęonie w formularzu edycji kroku, edytujemy pole data_ostatniej_wizyty i ustawiamy je na **Aktualna data**.

<img src="/images/app-screenshots/last-visit-edition.png" alt="Aktualizacja daty ostatniej wizyty na stronie">

Po wykonaniu instrukcji, zapisz i włącz automation.

Drugim krokiem będzie stworzenie scenariusza z notyfikacją przypominającą. W zakładce **Automation** ponownie wybierz opcję - Nowe automation.

Zdarzeniem początkowym bedzie tutaj zakończona sesja. Kolejnym krokiem będzie **Opóźnienie** ustawione przykładowo na 30 dni.

<img src="/images/app-screenshots/30-days-delay.png" alt="Odczekanie x dni, po ostatniej wizycie na stronie">

Kolejnym krokiem będzie warunek sprawdzający czy data ostatniego wejścia na stronę jest większa lub równa czasowi, jaki ustaliliśmy w opóźnieniu, czyli w tym przypadku 30 dni.

Na ścieżce **Prawda** znajdą się te osoby, które nie były na Twojej stronie dłużej niż miesiąc, dla nich wybierz opcje **Akcja** oraz **PUSH** i przygotuj odpowiednią notyfikację

Na ścieżce **Fałsz** znajdą się te osoby, dla których od ostatniej wizyty nie minął jeszcze miesiąc, one nie otrzymają notyfikacji.

### Scenariusz 5
*Zniżka na kolejne zakupy*

Gdy klient kupił już produkt chcesz, aby otrzymał automatyczną notyfikację ze zniżką na kolejne zakupy.

**Zbieranie danych**

W tym scenariuszu wykorzystasz tylko selektor wyświetlenie thank you page, czyli strony dziękującej za zakup (został ustawiony w scenariuszu 2), nie musisz go więc ponownie ustawiać.

**Projektowanie scenariusza**

W kreatorze scenariusza, ustaw zdarzenie początkowe jako **Koniec sesji**, aby mieć pewność, że odbiorca zakończył zakupy.

W tym scenariuszu ustawiłam okres 3 miesięcy, jako następny moment, w którym dany subskrybent otrzyma zniżkę, tak aby nie otrzymywał jej po każdym zakupie.

<img src="/images/automation-screenshots/26.png" alt="PushPushGo - web push automation - powiadomienie po długiej nieobecności na stronie">

W kreatorze scenariusza wybierz jako pierwszy **Warunek** i ustaw w nim wyświetlenie strony thank you page, której wyświetlenie jest potwierdzeniem dokonania transakcji.

<img src="/images/automation-screenshots/27.png" alt="PushPushGo - web push automation - powiadomienie po długiej nieobecności na stronie">

Na ścieżce **Prawda**, czyli dla osób, które dokonały zakupu ustaw **Akcję** a następnie **Push** i stwórz kampanię, z kodem promocyjnym, którą powinny otrzymać.

### Scenariusz 6
*Seria powiadomień*

Każdemu nowemu subskrybentowi chcesz wysłać 3 edukacyjne kampanie web push z inną treścią. Każdą z 1 tygodniowym odstępem czasu.

**Zbieranie danych**

 tym scenariuszu nie będziesz potrzebować żadnych selektorów.

**Projektowanie scenariusza**

W kreatorze automation wybierz jako zdarzenie początkowe **Subskrybent zapisał się**, dodanie nowego subskrybenta na listę będzie wyzwalaczem do wysyłki pierwszej notyfikacji.

Czas ponowienia powinien wynosić zero, ponieważ chcesz, żeby Twój subskrybent otrzymał całą kampanię aktywacyjną tylko jeden raz.

<img src="/images/automation-screenshots/28.png" alt="PushPushGo - automation - seria automatycznych powiadomień web push">

Następnie jako pierwszy krok w swojej automatyzacji wybierz **Akcję** i **Push**, wówczas pierwsza notyfikacja zostanie dostarczona bezpośrednio po zapisie.

Na ścieżce **Doręczony** (masz wtedy pewność, że subskrybent otrzymał pierwszą notyfikację), wybierz opóźnienie.

<img src="/images/automation-screenshots/30.png" alt="PushPushGo - automation - seria automatycznych powiadomień web push">

I ustaw jego okres na 7 dni.

<img src="/images/automation-screenshots/32.png" alt="PushPushGo - automation - seria automatycznych powiadomień web push">

Ponieważ chcesz, aby nowo zapisany subskrybent otrzymał jeszcze dwie takie kampanie, powtórz jeszcze dwa razy ostatnie kroki, aż uzyskasz poniższą mapę automation.

<img src="/images/automation-screenshots/31.png" alt="PushPushGo - automation - seria automatycznych powiadomień web push">

Gratulacje, teraz już możesz korzystać z własnych scenariuszy marketing automation! :)

## Exporty

W dowolnej chwili możesz stworzyć export CSV jednej z trzech kolekcji:

- kampanii
- subskrybentów
- aktywności subskrybentów *(historia wysyłek, dostarczeń, i kliknięć w kampanie każdego subskrybenta)*

Aby rozpocząć kliknij w przycisk **Nowy Export**, po czym w formularzu wybierz dowolną kolekcję oraz zakres czasowy. Po kliknięciu przycisku **Zapisz**, rozpocznie się generowanie exportu. Na liście poniżej pojawi się nowy wiersz z informacją o postępie exportu oraz w przypadku gotowego pliku przycisk do jego pobrania. W zależności od tego jak duża jest Twoja baza, export może potrwać od jednej sekundy do kilkudziesięciu minut.

<img src="/images/app-screenshots/export.png" alt="PushPushGo - Export danych do CSV">

W przypadku większych exportów, możesz opuścić aplikację i wrócić do niej po dowolnym czasie by **pobrać gotowy plik**, gdyż tworzenie exportu odbywa się na naszych serwerach.

## Testowanie

PushPushGo oferuje narzędzia do testowania:
- subskrypcji na powiadomienia,
- scenariuszy automation,
- wysyłki kampanii.

### Testy subskrypcji

W celu sprawdzenia czy jesteśmy zapisani na powiadomienia na danej przeglądarce, należy skorzystać z **trybu testowego**. Aby wejść na stronę w trybie testowym, należy będąc na stronie dodać do linku parametr **ppg_test_mode=on** i odświeżyć stronę. Przykładowo na fikcyjnej stronie www.mojastrona.pl, link wyglądałby następująco: www.mojastrona.pl?ppg_test_mode=on.

Znakiem, że udało nam się wejść w tryb testowy, jest zielony panel na dole strony. Możemy znaleźć w nim informację czy już **jesteśmy zapisani na powiadomienia**, nasze **subscriberID** oraz testowe tagi, którymi się oznaczyliśmy.

<img src="/images/app-screenshots/test-mode.png" alt="PushPushGo - automation - testowanie powiadomień web push">

### Testy scenariuszy automation

W trybie testowym widoczne są również przyciski takie jak **Start Session** (rozpoczęcie sesji) oraz **End Session** (zakończenie sesji). Klikając w nie, wyzwalamy scenariusze automation, które zostały stworzone na koncie w trybie podglądowym. Dzięki temu możemy wygodnie przetestować działanie wybranych scenariuszy automation.

### Testy kampanii

Podczas kreowania ręcznej kampanii, istnieje możliwość wysyłki testowego powiadomienia na dowolne urządzenie. Dzięki temu będziemy mogli zobaczyć, jak realnie wygląda stworzona przez nas notyfikacja na laptopie, telefonie lub tablecie.

Pierwszym krokiem, który musimy wykonać tylko raz, jest nadanie na swoich urządzeniach tagów testowych.
By to zrobić, należy wejść na stronę w trybie podglądowym i wpisać w odpowiednim polu tag, który określi z jakiego urządzenia się zapisujemy. Można dodać tag w przykładowym schemacie: imię-przeglądarka-urządzenie. Tryb podglądowy działa zarówno na desktopie jak i na mobile.

<img src="/images/app-screenshots/test-tags.png" alt="PushPushGo - automation - testowanie powiadomień web push">

Kolejnym krokiem jest wybranie tagów testowych podczas tworzenia kampanii i wysyłka testu. W tym celu należy wejść w zakładkę **Wyślij kampanię -> Push**. Po prawej stronie kreatora znajdziemy sekcję **Testowe powiadomienie**. Pod zielonym przyciskiem “Wyślij na tą przeglądarkę” znajdziemy miejsce, gdzie możemy wpisać swój indywidualne tagi, które nadaliśmy wcześniej na naszych urządzeniach. Następnie klikamy przycisk “Przelicz”, ponieważ kampania testowa może być wysłana maksymalnie do 10 odbiorców.

Po przeliczeniu pojawi się opcja zapisu szkicu i wysyłki testowej notyfikacji na wpisane przez nas tagi.

<img src="/images/app-screenshots/test-push.png" alt="PushPushGo - automation - testowanie powiadomień web push">


## Odbiorcy

### Tagowanie

Aplikacja umożliwia tagowanie odbiorców na cztery sposoby:

  - manualnie, w **tabeli odbiorców**,
  - automatyczne, za pomocą **selektorów** tagujących,
  - automatyczne, za pomocą **kroku Tag w module automation**,
  - za pomocą dodatkowego **tagu HTML** na stronie.


**Manualne dodawanie tagów**

Możesz przypisać dowolny tag do określonego subskrybenta w tabeli subskrybentów. Po najechaniu na komórkę, w której znajdują się tagi wyświetli się ikonka plusa. Po kliknięciu w nią, pojawi się okienko z wyszukiwarką tagów.

<img src="/images/app-screenshots/tags.png" alt="PushPushGo - zarządzanie tagami odbiorców" class="shadow">

Oprócz przeszukiwania możesz również dodawać nowe i usuwać istniejące tagi. Aby otagować wybranego odbiorcę kliknij w wybrany tag w wyszukiwarce bądź wpisz dowolny ciąg znaków i wciśnij enter by stworzyć nowy tag.

**Tagowanie poprzez selektory**

Aby użytkownicy tagowali się automatycznie według odwiedzanych podstron, możemy skorzystać z selektorów. W tym celu należy wejść w zakładkę Automation -> Selektory i stworzyć nowy selektor, wybierając akcję **Dodaj tag na podstawie treści elementu**.

<img src="/images/automation-screenshots/9.png" alt="PushPushGo - tagowanie odbiorców web push za pomocą selektorów na stronie" class="shadow">

Kluczowym elementem każdego selektora jest jego ścieżka. Jest to klasa css, id lub ścieżka elementu na stronie, z którego chcemy pobrać wartość i umieścić w tagu. Przykładwo, jeśli każda nasza podstrona ma tytuł, to w parametrze ścieżka możemy podać klasę css tego tytułu i wtedy odbiorcy będą tagowani według tytułów odwiedzanych podstron.

**Tagowanie poprzez automation**

Innym sposobem automatycznego nadawania tagów jest moduł automation. W każdym momencie scenariusza możemy wybrać **akcję Tag**, która pozwala na dodawanie i usuwanie tagów z subskrybenta.

<img src="/images/app-screenshots/automation-tag-step.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

<img src="/images/app-screenshots/automation-tagging.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

**Tagowanie poprzez dodatkowy tag HTML**

Istnieje również możliwość tagowania, poprzez dodanie znacznika HTML do kodu danej strony, wg poniższego schematu:

```
<var id="ppg-tags" data-tags="Tenisówki męskie; rozmiar 40"></var>
```

Dowolną ilość tagów można oddzielić od siebie średnikami. Do użytkownika, który odwiedzi otagowaną stronę, zostaną przypisane tagi wymienione w atrybucie **ppg-tags=""**.


### Wykorzystanie tagów w targetowaniu kampanii

Skoro wiesz już w jaki sposób tagować subskrybentów, warto zastanowić się nad wykorzystaniem ich w targetowaniu. Domyślnie wszystkie tagi dodawane do subskrybenta kumulują się.

Jeśli jednak chcesz, aby subskrybenci posiadali jedynie najświeższe tagi możesz **stworzyć etykietę**, która określi zachowanie tagów na subskrybencie.


**Tworzenie etykiet**

Aby stworzyć etykietę, wejdź w zakładkę **Odbiorcy > Tagi** w bocznym menu i kliknij przycisk **Nowa etykieta**.

<img src="/images/app-screenshots/tag-labels.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

Tworząc etykietę możesz określić jedno z dwóch dostępnych zachowań tagów:

- jedną z możliwości jest **nadpisywanie tagów** o tej samej etykiecie

<img src="/images/app-screenshots/tag-label-strategy.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

- drugą możliwością jest **usuwanie tagów** po określonym czasie

<img src="/images/app-screenshots/tag-label-time.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

**Wykorzystanie etykiet**

Po stworzeniu etykiety możesz wykorzystać ją w dwóch miejscach:

- W **ustawieniach selektora** tagującego. Wtenczas wszystkie tagi nadane z tego selektora będą miały przypisaną określoną etykietę.

<img src="/images/app-screenshots/selector-label.png" alt="PushPushGo - tagowanie odbiorców w module web push automation" class="shadow">

- Jeśli korzystasz z tagowania za pomocą **znacznika HTML**, możesz podać etykiety tagów, stosując schemat **nazwa etykiety:nazwa tagu**:

```
<var id="ppg-tags" data-tags="Ostatnia kategoria:Tenisówki męskie; Ostatni rozmiar:rozmiar 40"></var>
```

### Wygląd tabeli

W tabeli odbiorców można dowolnie ukrywać i pokazywać poszczególne kolumny.
Jeśli chcesz zwiekszyć przejrzystość tabeli i ukryć kolumny, które Cię mniej interesują, wystarczy kliknąć przycisk
  „Pokaż/ukryj kolumny" i odznaczyć odpowiednie pola:

<img src="/images/app-screenshots/table-small.png" alt="PushPushGo - ukrywanie kolumn na liście odbiorców" class="big shadow">


## Linki

Linki umożliwiają wyświetlanie formularza zapisu na innej stronie niż własna. W systemie możesz wygenerować dowolną ilość linków i udostępniać je swoim klientom. Funkcjonalność ta świetnie sprawdza się w przypadku aukcji internetowych, na których chcemy zbierać zapisy na powiadomienia.

Aby wygenerować link, wejdź w zakładkę “Linki” i kliknij “Nowy link”. Pojawi się okienko, gdzie trzeba będzie wprowadzić dane.

<img src="/images/app-screenshots/new-link.png" alt="PushPushGo - Linki - Wyświetlanie formularza zapisu na web push na zewnętrznych stronach" class="big shadow">

**Nazwa** - może być dowolna, np. nazwa strony na której ma się wyświetlić formularz

**Url** - zamieszczamy dokładny adres strony na której ma się pojawić formularz zapisu, np. link to aukcji internetowej

Po zapisaniu linku, na liście pojawi się nowy wiersz z wygenerowanym skróconym linkiem.

<img src="/images/app-screenshots/links-list.png" alt="PushPushGo - Linki - Wyświetlanie formularza zapisu na web push na zewnętrznych stronach" class="big shadow">

Kliknięcie w skrócony link spowoduje przekierowanie na docelową stronę z formularzem. Skopiuj go i udostępniaj swoim klientom poprzez portale społecznościowe, czy newsletter.

## Rss

RSS czyli Really Simple Syndication (Łatwa dystrybucja treści), umożliwia zgromadzenie treści z kilku źródeł w jednym miejscu. Dzięki temu odbiorcy szybciej mogą znaleźć interesujące ich informacje. Aby umieścić taki kanał na swojej stronie, należy wejść w zakładkę “RSS” i klinąć “Dodaj RSS”. Pojawi się okienko:

<img src="/images/app-screenshots/new-rss.png" alt="RSS - Wysyłanie powiadomień web push na podstawie feedów z RSS" class="big shadow">

**Nazwa** - podajemy dowolną, może to być np. nazwa projektu na którym ma być kanał.

**Typ** kampanii - zostawiamy “Push”

**Automated** - po zaznaczeniu stworzona kampania zostanie od razu wysłana. W przeciwnym razie zostanie tylko zapisana jako szkic

**Paused** - po zaznaczeniu, wpis zostanie pominięty podczas sprawdzania nowych feedów

**Url** - umieszczamy ścieżkę do naszego kanału RSS

<img src="/images/app-screenshots/rss-list.png" alt="RSS - Wysyłanie powiadomień web push na podstawie feedów z RSS" class="big shadow">


