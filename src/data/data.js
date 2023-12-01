import { SiVorondesign } from "react-icons/si";
import { GiTeamDowngrade } from "react-icons/gi";
import { GiBurningPassion } from "react-icons/gi";
import { GiInspiration } from "react-icons/gi";
import blog1 from '../assets/blog/blog1.jpg'
import blog2 from '../assets/blog/blog2.jpg'
import blog3 from '../assets/blog/blog3.jpg'

export const navigateLinks = [
    {
        name: 'home.',
        path: '#',
    },
    {
        name: 'o nas.',
        path: '#o-nas',
    },
    {
        name: 'sklep.',
        path: '#sklep',
    },
    {
        name: 'projekt.',
        path: '#projekt',
    },
    {
        name: 'blog.',
        path: '#blog',
    },
    {
        name: 'kontakt.',
        path: '#kontakt',
    },
]

export const aboutAs = {
    title: 'Dlaczego My?',
    description: 'Jesteśmy pasjonatami designu i funkcjonalności. Od ponad dwóch dekad dostarczamy meble najwyższej jakości, które stają się sercem domów naszych klientów.',
    points: [
        {
            icon: SiVorondesign,
            description: 'Nasze produkty łączą w sobie nowoczesny design z niezrównaną funkcjonalnością, zapewniając komfort i elegancję każdego dnia.'
        },
        {
            icon: GiTeamDowngrade,
            description: 'To nasz zespół pasjonatów i ekspertów stanowi siłę napędową naszej firmy. Dzięki ich zaangażowaniu, kreatywności i wiedzy, dostarczamy meble, które wykraczają poza oczekiwania naszych klientów.'
        },
        {
            icon: GiBurningPassion,
            description: 'Dzięki zaangażowaniu, pasji i nieustannej dbałości o jakość, nasza firma stopniowo ewoluowała w renomowanego producenta mebli, zyskując zaufanie tysięcy klientów na całym świecie.'
        },
        {
            icon: GiInspiration,
            description: 'Chcemy inspirować, tworzyć unikalne rozwiązania i być nieustannie obecnymi przy tworzeniu wnętrz, które sprawiają radość i wyrażają osobowość każdego domu.'
        },
    ]
}

export const project = {
    title: 'Pomożemy Ci stworzyć nowoczesny projekt wnętrz',
    description: 'Nasza oferta obejmuje nie tylko najwyższej jakości meble, ale także profesjonalne doradztwo, które dopasowuje się do Twoich potrzeb. Razem stworzymy koncepcję, która pozwoli Ci poczuć się komfortowo i cieszyć się pięknem Twojego domu.',
    points: [
        { 
            id: 1, 
            label: 'Analiza i Zbieranie Informacji', 
            description: 'Nasza droga do stworzenia wymarzonego wnętrza rozpoczyna się od dogłębnej analizy Twoich potrzeb, stylu życia i preferencji. Przeprowadzamy wywiad, zbierając informacje o Twoich gustach'
        },
        { 
            id: 2, 
            label: 'Kreowanie Koncepcji i Wizualizacji', 
            description: 'Nasi doświadczeni projektanci wykorzystują zebrane dane, aby stworzyć koncepcję projektu wnętrza. Tworzymy wizualizacje 2D lub 3D, które prezentują propozycje układu przestrzeni, kolorów, mebli i dodatków.'
        },
        { 
            id: 3, 
            label: 'Projektowanie i Wybór Materiałów', 
            description: 'Po zaakceptowaniu koncepcji przystępujemy do projektowania szczegółów. Dobieramy wysokiej jakości materiały, meble i dodatki, starając się osiągnąć równowagę między funkcjonalnością a estetyką.'
        },
        { 
            id: 4, 
            label: 'Realizacja i Finalizacja Projektu', 
            description: 'Gdy wszystkie elementy są dopracowane, przechodzimy do etapu realizacji projektu. Nasz zespół rzemieślników i specjalistów dba o dokładność w realizacji każdego elementu. '
        },
    ]
}

export const blog = [
    {
        id: 1,
        title: 'Sztuka Tworzenia Harmonijnej Przestrzeni: Kluczowe Elementy Projektowania Wnętrz',
        description: [
            'Projektowanie wnętrz to nie tylko dobór mebli czy kolorów ścian. To proces, który kształtuje nasze codzienne doświadczenia i wpływa na nasze samopoczucie. Jak zatem stworzyć harmonijną przestrzeń, która wspiera nasze potrzeby? W tym artykule zgłębimy kluczowe elementy projektowania wnętrz, które pomogą w stworzeniu domu pełnego spokoju, równowagi i inspiracji.',
            'Pierwszym krokiem w tworzeniu harmonijnej przestrzeni jest zrozumienie własnych potrzeb. To nie tylko kwestia estetyki, ale również funkcjonalności. Analiza stylu życia, rutyn, preferencji oraz celów, które chcemy osiągnąć w danej przestrzeni, pozwoli nam lepiej dostosować projekt do naszych indywidualnych potrzeb. Poznanie siebie i swoich priorytetów umożliwi nam skomponowanie wnętrza, które będzie nam służyło na co dzień.',
            'Harmonia w projektowaniu wnętrz to nie tylko kwestia estetyki, ale także funkcjonalności. W tej części artykułu omówimy znaczenie balansowania elementów wizualnych, takich jak kolorystyka, tekstury czy oświetlenie, z ich praktycznym zastosowaniem. Dowiemy się, jak odpowiednio łączyć różne style, materiały i dodatki, aby stworzyć spójną, estetyczną przestrzeń, która równocześnie spełnia nasze codzienne potrzeby.',
            'Ostatnią, ale równie istotną częścią artykułu będzie omówienie sposobów tworzenia przestrzeni, która inspiruje i pobudza naszą kreatywność. Przedstawimy pomysły na personalizację przestrzeni, tworzenie wyjątkowych stref relaksu oraz techniki organizacji, które pomagają utrzymać porządek i spokój w domowym otoczeniu. Inspirujące wnętrze może być kluczem do lepszego samopoczucia i efektywności w codziennym życiu.'
        ],
        pathImg: blog1,
        author: 'Artur W.',
        timeAdd: ''
    },
    {
        id: 2,
        title: 'Moc Kolorów: Jak Wybrać i Wykorzystać Paletę Barw w Projektowaniu Wnętrz',
        description: [
            'Kolory odgrywają kluczową rolę w kształtowaniu atmosfery wnętrza. Ich odpowiedni dobór może zmienić charakter pomieszczenia, wpływając na nasze samopoczucie i nastrój. W tym artykule zgłębimy tajniki wyboru i zastosowania kolorów w projektowaniu wnętrz, ukazując ich potencjał w transformacji przestrzeni życiowej.',
            'Pierwszym aspektem, na którym się skupimy, będzie psychologiczny wpływ kolorów na nasze codzienne życie. Omówimy, jak różne kolory mogą wpływać na nasze samopoczucie: od stymulowania kreatywności przez jasne barwy, po stworzenie spokojnej atmosfery za pomocą pastelowych odcieni. Poznamy sposoby, w jakie poszczególne kolory mogą kształtować nastrój w pomieszczeniach, inspirując do lepszego dostosowania palety barw w naszych domach.',
            'Drugą część artykułu poświęcimy zasadom doboru kolorów. Przedstawimy techniki harmonii kolorystycznej, takie jak komplementarne zestawienia czy monochromatyczne schematy, które pomogą stworzyć spójną i estetyczną paletę barw. Dodatkowo omówimy, jak wykorzystać kontrastowe kombinacje, aby akcentować pewne elementy wnętrza i nadawać pomieszczeniom charakteru.'
        ],
        pathImg: blog2,
        author: 'Anna P.',
        timeAdd: ''
    },
    {
        id: 3,
        title: 'Ergonomia w Projektowaniu Wnętrz: Komfort i Funkcjonalność jako Priorytet',
        description: [
            'Projektowanie wnętrz to nie tylko kwestia estetyki, ale również funkcjonalności i komfortu użytkowania. Ergonomia odgrywa kluczową rolę w tworzeniu przestrzeni, które nie tylko wyglądają dobrze, ale także sprzyjają naszemu zdrowiu i samopoczuciu. W tym artykule zagłębimy się w temat ergonomii w projektowaniu wnętrz, podkreślając jej znaczenie i praktyczne zastosowania.',
            'Zaczniemy od zrozumienia znaczenia ergonomii w naszym codziennym otoczeniu. Omówimy, jakie korzyści niesie ze sobą projektowanie wnętrz z uwzględnieniem ergonomii dla zdrowia fizycznego i psychicznego. Przyjrzymy się wpływowi ergonomii na nasze nawyki, efektywność pracy oraz ogólne samopoczucie, co ma kluczowe znaczenie szczególnie w domowym otoczeniu.',
            'W kolejnej części artykułu przejdziemy do praktycznych aspektów ergonomii w projektowaniu wnętrz. Omówimy zasady ergonomii dotyczące układu mebli, wysokości blatów w kuchni, oświetlenia czy ergonomicznych rozwiązań dla biurka czy miejsca do odpoczynku. Pokażemy, jak można zoptymalizować przestrzeń, aby dostosować ją do indywidualnych potrzeb użytkowników, jednocześnie zachowując estetykę i funkcjonalność.',
            'W ostatniej części artykułu skoncentrujemy się na znaczeniu ergonomii w codziennym życiu. Przedstawimy praktyczne porady, jak poprawić ergonomię w istniejących wnętrzach oraz jak unikać błędów, które mogą wpływać negatywnie na nasze zdrowie i komfort. Dodatkowo, zaprezentujemy inspirujące przykłady projektów, które wykorzystują ergonomię w inteligentny sposób, aby zachęcić czytelników do świadomego projektowania swoich przestrzeni mieszkalnych.'
        ],
        pathImg: blog3,
        author: 'Karol K.',
        timeAdd: ''
    },
]