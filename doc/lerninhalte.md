# Lerninhalte

Hallo $SuS,

Die Idiotianer wollen uns zu einem tic-tac-toe Wettbewerb herausfordern. Argh Laaangweiligg!!! Um unsere Zeit nicht zu vergeuden, benötigen wir eine effiziente Lösungsroutine für dieses Problem. Unser Ziel ist es 1000 Runden ohne Verluste zu überstehen, dann haben die Idiotianer keine Lust mehr und ziehen ab.

Keine Panik. Wir schaffen das gemeinsam. Ich werde euch nun mit dem Problem vertraut machen.

## Das Problem

Ihr findet vor euch ein 3x3 Gitternetz. Zwei Spieler setzen abwechselnd ihr festes Zeichen (ein Spieler Gehirne, der andere Hämmer) in ein freies Feld. Der Spieler, der als Erster drei Zeichen in eine Zeile, Spalte oder Diagonale setzen kann, gewinnt. Wenn allerdings beide Spieler optimal spielen, kann keiner gewinnen, und es kommt zu einem Unentschieden. Das heißt, alle neun Felder sind gefüllt, ohne dass ein Spieler die erforderlichen Zeichen in einer Reihe, Spalte oder Diagonalen setzen konnte.

## Das MinMax Verfahren - eine generelle Lösung

Die simpelste Lösung zur Ermittlung einer optimalen Strategie ist das Minmax-Verfahren. Dieses Verfahren eignet sich für alle Zwei-Personen-Nullsummenspiele mit perfekter Information. Bitte Was??? Das sind Spiele, die folgende Eigenschaften erfüllen

1. zwei Spieler spielen um Punkte
2. die Summe der Punkte ist Null. zB. Gewinn +1, Verlust -1, Unentschieden 0
3. alle Spielinformationen bis auf zukünftige Zugentscheidungen sind bekannt

Das Minimax-Verfahren ist im Kern vom speziellen Spiel unabhängig, das heißt zum Beispiel Tic-Tac-Toe und Vier gewinnt benutzen dasselbe Verfahren. Schnittstellen zum speziellen Spiel sind lediglich die beiden folgenden Programmteile:

* Ermittlung welche Züge in einer konkreten Spielsituation möglich sind
* Bewertung der Spielsituation bzgl Gewinn und Verlust in Zahlen

Neben dem Minimax-Verfahren kann ein Spiel weitere spielspezifische Verfahren anwenden, beispielsweise vorberechnete Bibliotheken für Eröffnungszüge. Weil Tic-Tac-Toe ein sehr einfaches Spiel, mit nur maximal 9!=362880 möglichen Spielsituationen ist, benötigen wir hier keine Bibliotheken für gute Anfangszüge.

*Hinweis*: Du fragst Dich bestimmt, was es mit dem skurilen Namen auf sich hat. Das ist schnell erklärt. Das Verfahren geht davon aus, dass es zwei Spieler gibt. Max, das ist der für den wir den besten Zug finden wollen und Min, das ist der Gegenspieler von Max. Das Verfahren bewertet Züge. Züge die gut für Max sind werden mit einem Wert > 0 bewertet Züge die schlecht für Max sind, sind gut für Min und werden mit < 0 bewertet.

### Aufgabe 1: <<#TODO: Verschieden Spielsituationen verbildlichen>>

1. welche Kriterien eines Zwei-Personen-Nullsummenspiels mit perfekter Information erfüllt das Tic-Tac-Toe Spiel
2. Markiere in den angegebenen Spielsituationen alle aktuell möglichen Züge
3. Überlege dir, wie sich verschiedene Spielsituationen in Zahlen bewerten lassen
   1. welche Bewertungskriterien fallen Dir ein
   2. welche Bewertungen würdest du für die Möglichen Züge vergeben

## Das MinMax Verfahren - von der generellen zur allgemeinen Lösung

Nun, nachdem wir die individuellen Merkmalen von zwei-personen-nullsummenspielen mit perfekter Information kennen, werfen wir einen kurzen Blick auf die Funktionsweise des MinMax Verfahrens. Das Verfahren liefert eine Antwort auf die Frage: Welcher Zug ist der Beste?

Damit das Verfahren die Antwort ermitteln kann, benötigt es zunächst den Zustand des Spielfeldes. Ihr könnt euch diesen Zustand als eine sortierte Menge von Zeilen einer Tabelle vorstellen, in denen Felder entweder den Zustand "Gehirn", "Hammer" oder "frei" beinhalten. Nun wird für jeden möglichen Zug der MinMax-Wert berechnet. Dieser Wert drückt in einer Zahl aus, wie gut oder wie schlecht der Zug ist. Der Zug mit dem Besten MinMax Wert wird das Verfahren vorschlagen.

Nun wirst Du Dich fragen: Wie kommt das Verfahren denn auf den MinMax Wert? Um die Antwort zu verstehen, musst du wissen, was rekursion ist. (Verweis auf kapitel über Rekursion)

Nun wird es interessant. Zunächst schaut sich das Verfahren an, ob überhaupt noch ein Zug möglich ist. Wenn kein Zug möglich ist, ist das Spiel unentschieden. Der MinMax-Wert ist Null. Als nächstes wird ermittelt, ob das Spiel womöglich gewonnen oder verloren ist, also 3 gleiche Symbole in einer Reihe/Spalte/Diagonale gesetzt sind. Für Gewinn merken wir uns +10 für Verlust -10 und wenn es noch offen ist, 0. Steht Gewinn oder Verlust schon fest, ist der MinMax Wert klar.

Steht er nicht fest, wenden wir rekursion an. Dieses mächtige Konzept ist für ungeübte oft schwer zu verstehen. Ähnlich wie beim spielen mit Matroschka von Schwesterchen Russland, wenden wir das MinMax Verfahren auf alle Zugmöglichkeiten für den darauf folgenden Zug des Gegners an. Daraufhin öffnen wir die nächste Matroschka und wiederholen solange, bis wir alle Spielsituationen betrachtet haben. Der MaxMin-Wert unter Betrachtung aller Spielsituation bezieht sich auf die Jeweils besten Züge von uns und dem Gegner.

### Aufgabe 2:

Überlege dir, wie sich folgende Sachverhalte logisch ausdrücken lassen, sodass sie von einer Maschine zu *wahr* oder *falsch* ausgewertet werden können.

* Terminalbedingung (sind noch Züge möglich?)
* Bewertung der Spielsituation (Gewonnen/Verloren)

Prima! Das **Wichtigste nochmal im Überblick**:

* das Verfahren wird auf den Zustand eines konkreten Spielfeldes angewandt.
* das Verfahren wendet das minMax Prinzip auf jeden noch möglichen Zug an
  1. MinMax funktioniert rekursiv
  2. MinMax liefert eine Bewertung einer Spielsituation in Zahlen unter Berücksichtigung aller möglichen Folgesituationen
  3. MinMax benötigt einen Bewertungsmechanismus, um eine konkrete Gewinn-/Verlustsituation in Zahlen zu bewerten.
  4. MinMax benötigt eine Terminalbedingung, die aussagt, ob noch Züge möglich sind

## Quellen:

* https://de.wikipedia.org/wiki/Minimax-Algorithmus
* https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/
* https://de.wikipedia.org/wiki/Tic-Tac-Toe
* https://www.gm-d.de/wbb/index.php/Thread/22903-Computer-KI-f%C3%BCr-Tic-Tac-Toe-M%C3%BChle-Schach-4-Gewinnt-mit-dem-Minimax-Algorithmus-A/