---
layout: page.html
author: Agata Matoga
date: 2016-08-09
locale: pl
tags: faq, pytania
---

## Najczęściej zadawane pytania

### Jak zintegrować stronę z PushPushGo?

Należy wejść w zakładkę z ustawieniami projektu, skopiować udostępnioną tam linijkę kodu i wkleić ją w dowolnym miejscu w kodzie źródłowym integrowanej strony.
Jeśli po naciśnięciu przycisku "Sprawdź integrację" zaświeci się on na zielono, oznacza to, że strona została poprawnie zintegrowana.


### Czy integracja jest płatna?

Integracja strony jest całkowicie bezpłatna. Zakładając konto otrzymujesz 14 dni na integrację i przetestowanie powiadomień web push na Twojej stronie.

### Czy w trialu dostępne są wszystkie funkcjonalności?

Tak. Podczas 14-dniowego okresu próbnego otrzymujesz pełną wersję systemu ze wszystkimi funkcjonalnościami.

### Czy mogę się spodziewać ukrytych kosztów?

Nie. Pobieramy jedynie opłaty za wysyłkę lub ilość subskrybentów, w zależności od wybranego planu. Nie ma opłat za zakładanie konta, ani rezygnację.

### Czy adblock blokuje powiadomienia push?

Nie, powiadomienia push omijają adblocka. Powiadomienia bez problemu dotrą do odbiorcy, który ma włączonego adblocka.

### Mam kilka stron, które chcę zintegrować. Czy muszę zakładać osobne konta dla każdej z nich?

Nie. Mając jedno konto można dodawać nielimitowaną liczbę projektów. W każdym projekcie możemy zintegrować inną stronę, dzięki temu oddzielane są ustawienia, kampanie, odbiorcy i wszelkie inne dane dotyczące powiadomień web push na danej stronie.

### Jak przeglądarki wspierają powiadomienia push?

Tabelka z informacjami o wsparciu powiadomień przez najpopularniejsze przeglądarki jest na bieżąco uaktualniana i znajduje się [tutaj](/pl/pages/compatibility).

### W jaki sposób mogę rozwiązać kwestię wersji językowych dla powiadomień web push?

Można rozwiązać ten problem na dwa sposoby:

1. - Można wykorzystać autotagowanie odbiorców i w zależności od wersji przekazywać tag z parametrem języka.

2. - Można stworzyć osobne projekty dla każdej wersji językowej.

### Czy mogę wysłać powiadomienie do zawężonej grupy odbiorców?

Tak. W tym celu najlepiej użyć tagów.

Wchodząc w zakładkę "Subskrybenci" mamy możliwość zaznaczania wielu odbiorców. Po wybraniu więcej niż jednego wiersza pokaże nam się button "otaguj zaznaczonych", który otworzy nam okienko z wyszukiwarką tagów. Po kliknięciu w wybrany tag, do wszystkich zaznaczonych poprzednio subskrybentów zostanie dodany kliknięty tag. W ten sposób można tworzyć dowolne kombinacje tagów i grupować odbiorców według potrzeby.

Mając już utworzone grupy odbioców, możemy wysłać do nich kampanie. Jedyne co musimy zrobić to wybrać określony tag podczas tworzenia nowego pusha. Wtenczas kampania zostanie wysłana jedynie do subskrybentów ooznaczonych tym tagiem.