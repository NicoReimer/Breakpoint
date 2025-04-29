# Inhaltsverzeichnis

1. [Einleitung](#1-einleitung)  
    1.1 [Zweck](#11-zweck)  
    1.2 [Umfang](#12-umfang)  
    1.3 [Zielpublikum](#13-zielpublikum)  
    1.4 [Begriffserklärungen und Abkürzungen](#14-begriffserklärungen-und-abkürzungen)  
    1.5 [Referenzen](#15-referenzen)  
    1.6 [Dokumentenstruktur](#16-dokumentenstruktur)  
2. [Evaluierungsmission und Testmotivation](#2-evaluierungsmission-und-testmotivation)  
3. [Ziel-Testobjekte](#3-ziel-testobjekte)  
4. [Geplante Tests](#4-geplante-tests)  
5. [Testansatz](#5-testansatz)  
6. [Einstiegs- und Ausstiegskriterien](#6-einstiegs--und-ausstiegskriterien)  
7. [Liefergegenstände](#7-liefergegenstände)  
8. [Testablauf](#8-testablauf)  
9. [Umgebungsanforderungen](#9-umgebungsanforderungen)  
10. [Verantwortlichkeiten](#10-verantwortlichkeiten)  
11. [Iteration-Meilensteine](#11-iteration-meilensteine)  
12. [Risiken und Einschränkungen](#12-risiken-und-einschränkungen)

---

# 1. Einleitung

## 1.1 Zweck

Dieser Testplan beschreibt die Teststrategie für das Breakpoint Wiki-Projekt. Ziel ist es, die Qualität des Systems sicherzustellen, Fehler frühzeitig zu erkennen und stabile Releases für die finale Präsentation vorzubereiten.

## 1.2 Umfang

Getestet werden folgende Ebenen:
- **Unit-Tests**: Reine Komponententests für React-Komponenten
- **Integrationstests**: Prüfung der Kommunikation zwischen Frontend und Backend
- **Systemtests**: Gesamtsicht, z.B. Benutzeraktionen vom Login bis zur Artikel-Erstellung

Testarten:
- Funktionalitätstests
- UI-Tests
- Zuverlässigkeitstests

**Ausschlüsse:**
- Keine Hardwaretests
- Keine automatisierten Lasttests
- Kein dedizierter Penetrationstest

## 1.3 Zielpublikum

- Teammitglieder
- Betreuende Professoren
- Qualitätssicherungsverantwortliche

## 1.4 Begriffserklärungen und Abkürzungen

| Begriff | Bedeutung |
| :--- | :--- |
| Unit-Test | Test einzelner Komponenten |
| Integrationstest | Test der Zusammenarbeit mehrerer Komponenten |
| Systemtest | Test des Systems als Ganzes |
| UI-Test | Test der Benutzeroberfläche |

## 1.5 Referenzen

| Titel | Quelle |
| :--- | :--- |
| React Testing Library | https://testing-library.com/docs/react-testing-library/intro/ |
| Jest | https://jestjs.io/ |

## 1.6 Dokumentenstruktur

Das Dokument führt von der Einleitung über die geplanten Tests bis hin zu den Testansätzen und Verantwortlichkeiten. Risiken und Einschränkungen werden am Ende dargestellt.

---

# 2. Evaluierungsmission und Testmotivation

## 2.1 Hintergrund

Das Breakpoint Wiki bietet eine Plattform zum Erstellen, Bearbeiten und Suchen von Artikeln. Die Kernfeatures wie Artikel-Erstellung, Kategoriensuche und Benutzerverwaltung müssen getestet werden, um ein stabiles Release zu gewährleisten.

## 2.2 Evaluierungsmission

- Hauptfeatures stabil testen
- Fokus auf Login, Suche und Artikelbearbeitung
- Sicherstellen, dass kritische Funktionen auf verschiedenen Browsern laufen

## 2.3 Testmotivatoren

- Funktionssicherheit
- Usability
- Stabilität bei Nutzerinteraktionen

---

# 3. Ziel-Testobjekte

| Komponente | Beschreibung | Priorität |
| :--- | :--- | :--- |
| Frontend | React-basierte Benutzeroberfläche | Hoch |
| Backend | API zur Artikelspeicherung | Hoch |
| Datenbank | MariaDB für Benutzer- und Artikeldaten | Mittel |

---

# 4. Geplante Tests

## 4.1 Einzuschließende Tests

- Unit-Tests für Komponenten (`LoginForm`, `SearchBar`, `ArticleCard`)
- Integrationstests für Login und Artikelspeicherung
- UI-Tests zur Überprüfung von Navigation und responsiver Darstellung

## 4.2 Weitere potenzielle Tests

- Responsiveness auf mobilen Geräten
- API-Tests der Artikel-Endpoints

## 4.3 Ausgeschlossene Tests

- Keine Lasttests
- Keine Penetrationstests
- Keine Hardwarekompatibilitätstests

---

# 5. Testansatz

## 5.1 Quellen der ersten Testideen

- Projekt-Use-Cases
- Produkt-Backlog
- Manuelle Explorationssessions

## 5.2 Testtechniken und -arten

| Testart | Tools | Ziel |
| :--- | :--- | :--- |
| Unit-Test | Jest, React Testing Library | Funktion einzelner Komponenten |
| Integrationstest | Supertest (optional) | Schnittstellen Frontend-Backend |
| UI-Test | React Testing Library | Sichtbare Interaktionen testen |

---

# 6. Einstiegs- und Ausstiegskriterien

**Einstieg:**  
- Lokale Umgebung eingerichtet
- Backend erreichbar

**Ausstieg:**  
- Mindestens 70% Testabdeckung bei Kernkomponenten

---

# 7. Liefergegenstände

- Tests im Ordner `src/tests`
- Dokumentation über bestandene und fehlgeschlagene Tests
- Testplan (`testplan.md`) im Repository

---

# 8. Testablauf

- Lokale Tests über `npm test`
- Optionale Automatisierung später über GitHub Actions

---

# 9. Umgebungsanforderungen

- Node.js >= 18
- React >= 18
- Jest
- MariaDB lokal oder per Docker

---

# 10. Verantwortlichkeiten

| Rolle | Person | Aufgabe |
| :--- | :--- | :--- |
| Testmanager | Dennis | Planung und Review |
| Entwickler | Tim | Unit- und Integrationstests |
| Entwickler | Nico | UI-Tests und Testpflege |

---

# 11. Iteration-Meilensteine

- Erste Unit-Tests in dieser Woche
- Integrationstests innerhalb der nächsten 2 Wochen
- Finaler Systemtest vor Abgabeschluss

---

# 12. Risiken und Einschränkungen

- Geringe Erfahrung mit automatisiertem Testing
- Fokus auf Kernfeatures, keine vollständige Edge-Case-Abdeckung

---