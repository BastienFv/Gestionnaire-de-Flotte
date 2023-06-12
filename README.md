# Gestionnaire de flotte

# Objectifs:

- Créer des classes
- Utiliser l'héritage
 

# Sujet: 

Dans cet atelier, vous devez créer les classes pour une solution en ligne de commande permettant de gérer une flotte de véhicules.

 

Les classes :

Créer les classes appropriées permettant d'instancier les objets suivants : 

- Trotinette : marque, modèle, nombre de roues (defaut 2), puissance (en kWh), prix de location (€/h), autonomie, prix de l'assurance (€)

- Voiture : marque, modèle, nombre de roues (defaut 2), nombre de place, puissance (en ch), prix de location (€/h), autonomie (en km), prix de l'assurance (€), type (citadine, berline, etc...), carburant (essence, diesel, electrique)

- Moto : marque, modèle, nombre de roues (toujours à 2),  puissance (en ch), prix de location (€/h), autonomie (en km), prix de l'assurance (€), type (sport, etc...), carburant (essence, electrique), cylindrée (en cm3)

Chaque instance véhicule devra également avoir un id unique (propriété privée) générée automatiquement et proposer une méthode permettrant de récupérer l'id précédé de la mention "N°".

Par ailleurs, chaque propriété numérique (prix, etc...) des instance devra pouvoir être récupérée sous la forme la plus adaptée (nombre de décimale et unité) via une méthode.

Chaque instance véhicule devra avoir une propriété privée contenant un compteur d'heure de location, initalement à 0. Une méthode doit permettre d'ajouter des heures de location et une autre de lire cette valeur avec son unité.

Créez vos classes mères et filles de la manière qui vous semble la plus adaptée afin d'utiliser le concept d'héritage.

 

L'interface CLI :

A l'aide de l'API readline, ajoutez une interface en ligne de commande permettant de créer un objet véhicule.

 

BONUS: Ajoutez un menu permettant de choisir entre la création, l'affichage de la liste et l'ajout d'heures de location à un véhicule.