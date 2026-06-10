import type { EditorialPage } from "@/types/page";

export const editorialPages: Record<string, EditorialPage> = {
  univers: {
    eyebrow: "Territoire sensible",
    title: "Un univers entre silence, matiere et lumiere basse.",
    intro:
      "Une porte d'entree vers les themes, les paysages interieurs et les obsessions poetiques de l'autrice.",
    details: [
      "Fragments de nuit, paysages intimes et lignes de fuite.",
      "Une approche litteraire sobre, visuelle et contemplative.",
      "Des reperes pour comprendre la voix, le rythme et les motifs.",
    ],
  },
  recueils: {
    eyebrow: "Bibliotheque",
    title: "Les recueils comme des pieces rares dans une galerie.",
    intro:
      "Un espace dedie aux ouvrages, cycles de poemes et projets editoriaux a venir.",
    details: [
      "Presentation des livres publies et des textes en preparation.",
      "Notes d'intention, extraits choisis et informations de parution.",
      "Une mise en scene calme, premium et orientee lecture.",
    ],
  },
  lecture: {
    eyebrow: "Salon d'ecoute",
    title: "Lire, entendre, revenir au souffle du texte.",
    intro:
      "Une page concue pour accueillir des extraits, lectures audio ou rendez-vous litteraires.",
    details: [
      "Selection d'extraits courts et immersifs.",
      "Espace pret pour de futures lectures enregistrees.",
      "Ambiance feutree pour privilegier l'attention.",
    ],
  },
  galerie: {
    eyebrow: "Cabinet d'images",
    title: "Images, archives et traces visuelles de l'oeuvre.",
    intro:
      "Une galerie sombre et elegante pour accompagner la presence graphique de l'autrice.",
    details: [
      "Photographies, couvertures, carnets et details d'atelier.",
      "Grille responsive inspiree des murs d'une galerie.",
      "Place reservee aux futurs medias sans dependance externe.",
    ],
  },
  videos: {
    eyebrow: "Ecran noir",
    title: "Videos, entretiens et apparitions publiques.",
    intro:
      "Un lieu pour rassembler les contenus video sans plateforme commerciale integree.",
    details: [
      "Emplacements pour lectures filmees et entretiens.",
      "Presentation sobre adaptee aux contenus embarques plus tard.",
      "Aucune integration complexe a ce stade du sprint.",
    ],
  },
  actualites: {
    eyebrow: "Chronique",
    title: "Evenements, publications et nouvelles de l'autrice.",
    intro:
      "Une page d'actualites prete a recevoir annonces, rencontres et notes de parution.",
    details: [
      "Structure simple pour de futurs articles ou communiques.",
      "Mise en avant des temps forts litteraires.",
      "Sans CMS externe pour rester leger et compilable.",
    ],
  },
  contact: {
    eyebrow: "Correspondance",
    title: "Entrer en contact avec la maison de l'autrice.",
    intro:
      "Un point de contact clair pour invitations, presse, lectures et collaborations.",
    details: [
      "Informations de contact editoriales et professionnelles.",
      "Espace pret pour un futur formulaire simple.",
      "Ton discret, direct et coherent avec l'identite premium.",
    ],
  },
};
