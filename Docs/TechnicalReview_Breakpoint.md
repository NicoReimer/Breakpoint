# Bericht – Technical Review

**Datum:** 26. Mai 2025  
**Startzeit:** 14:00 Uhr  
**Endzeit:** 14:20 Uhr

---

## Teilnehmer

- Dennis (Moderator, Autor des Codes)
- Tim (Interner Reviewer, Notizen)
- Nico (Interner Reviewer)

---

## Ziel / Fokus der Review

Ziel des Reviews war die Analyse des Frontend-Codes, insbesondere der Komponenten `ArticleCard`, `SearchBar` und `LoginForm`. Diese wurden ausgewählt, da sie zentrale Elemente der Benutzeroberfläche darstellen und kürzlich im Zuge des Refactorings und der Testimplementierung überarbeitet wurden.

---

## Komponenten für die Review

- `ArticleCard.js`
- `SearchBar.js`
- `LoginForm.js`

---

## Kriterien für die Review

| Komponente      | Kriterien                                  |
|-----------------|--------------------------------------------|
| ArticleCard     | Lesbarkeit, Modularität, Testbarkeit       |
| SearchBar       | State Management, UI-Verhalten, Robustheit |
| LoginForm       | Eingabevalidierung, Code-Redundanz         |

---

## Review Methodik

Walkthrough mit interner Vorabprüfung im Team. Danach strukturierte Diskussion der externen Reviewer-Kommentare im Videocall.

---

## Ergebnisse & Maßnahmen

### ArticleCard

Klare Struktur, Props sinnvoll benannt  
Verbesserungspotenzial:
- Stildefinitionen könnten weiter ausgelagert werden (z. B. via CSS-Module oder Styled Components)

### SearchBar

Gute Nutzung von `useState` und Event Handling  
Verbesserungspotenzial:
- Eventhandler sollten entkoppelt vom JSX definiert werden

### LoginForm

Einfache Struktur, valide Trennung von Logik & Darstellung  
Verbesserungspotenzial:
- Validierungslogik könnte ausgelagert und erweitert werden

---

## Abgeleitete Maßnahmen

| Bereich       | Maßnahme                                                      |
|---------------|---------------------------------------------------------------|
| ArticleCard   | CSS-Struktur verbessern                                       |
| SearchBar     | Eventhandler auslagern                                        |
| LoginForm     | Validierung zentralisieren und durch Unit-Tests absichern     |

---

## Lernpunkte / Best Practices

- UI-Komponenten sollten möglichst unabhängig und testbar aufgebaut sein
- Getrennte Zuständigkeiten (Presentation vs. Logic) erleichtern spätere Erweiterungen
- Feedback von Außenstehenden hilft beim Erkennen von Schwächen, die intern übersehen werden

