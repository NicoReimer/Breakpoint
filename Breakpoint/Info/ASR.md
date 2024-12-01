# Architecture Significant Requirements (ASR)

## Utility Tree
| Qualitätsmerkmal | Verfeinerung                  | Szenarien                                                                                         | Geschäftswert | Technisches Risiko |
|------------------|-------------------------------|--------------------------------------------------------------------------------------------------|---------------|---------------------|
| Performance      | Ladezeit Kategorien           | Kategorien und Seiten sollten in weniger als 2 Sekunden geladen werden                          | H             | M                   |
|                  | Suchanfragen                  | Suchergebnisse sollten in weniger als 1.5 Sekunden zurückgegeben werden                         | M             | H                   |
| Zuverlässigkeit  | Verfügbarkeit                 | Das System muss eine Verfügbarkeit von 99.9% während Spitzenzeiten bieten                       | H             | M                   |
| Modifizierbarkeit| Komponentenbasiertes Design   | Neue Features sollten ohne großen Aufwand implementiert werden können                          | H             | M                   |
| Usability        | Intuitive Navigation          | Neue Benutzer sollten die Oberfläche ohne Anleitung verwenden können                           | H             | L                   |
| Sicherheit       | Datenintegrität               | Sicherstellen, dass Daten bei Updates nicht verloren gehen oder manipuliert werden              | H             | M                   |
| Skalierbarkeit   | Verarbeitung großer Datenmengen| Unterstützung von bis zu 100.000 Artikeln mit effizienter Suche und Verwaltung                  | M             | H                   |

---

## Architekturentscheidungen

- **Caching**: Einsatz von Redis für häufig abgerufene Inhalte.
- **Redundanz**: Server- und Datenbankreplikation zur Vermeidung von Ausfällen.
- **REST-API**: Entkopplung von Frontend und Backend, Kommunikation über APIs.
- **MVC (Backend)**: Klare Trennung von Geschäftslogik, Datenmodell und API.
- **Komponentenbasierte Architektur (Frontend)**: Wiederverwendbare ReactJS-Komponenten.
- **Responsive Design**: Optimierte Benutzeroberfläche für Desktop- und Mobilgeräte.
- **JWT-Authentifizierung**: Sichere Benutzer- und Sitzungsverwaltung.
- **Datenbankoptimierung**: Indexierung für schnelle Suchanfragen.
- **Sicherheit durch Verschlüsselung**: HTTPS zur Sicherung der Datenübertragung.
