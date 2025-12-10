import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { WebsiteSpecificationFormValues } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats the website specification data into a readable WhatsApp message.
 */
export function formatToWhatsAppMessage(data: WebsiteSpecificationFormValues): string {
  let message = "Nouveau Cahier de Charges pour Site Web:\n\n";
  
  // Coordonnées
  message += "--- VOS COORDONNÉES ---\n";
  message += `Nom: ${data.clientName}\n`;
  message += `Email: ${data.clientEmail}\n`;
  message += `Téléphone (WhatsApp): ${data.clientPhone}\n`;
  if (data.companyName) {
    message += `Entreprise: ${data.companyName}\n`;
  }
  message += "\n";

  // Détails du Projet
  message += "--- DÉTAILS DU PROJET ---\n";
  message += `Type(s) de projet: ${data.projectType.join(", ")}\n`;
  message += `But du site: ${data.websitePurpose}\n`;
  if (data.targetAudience) {
    message += `Public Cible: ${data.targetAudience}\n`;
  }
  message += "\n";

  // Contenu et Design
  message += "--- CONTENU ET DESIGN ---\n";
  message += `Éléments de contenu: ${data.contentElements.join(", ")}\n`;
  if (data.pagesNeeded) {
    message += `Pages souhaitées: ${data.pagesNeeded}\n`;
  }
  if (data.designPreferences) {
    message += `Préférences de design: ${data.designPreferences}\n`;
  }
  message += "\n";

  // Options Techniques
  message += "--- OPTIONS TECHNIQUES ---\n";
  message += `Domaine existant: ${data.hasDomain ? "Oui" : "Non"}\n`;
  if (data.domainName) {
    message += `Nom de domaine: ${data.domainName}\n`;
  }
  message += `Besoin d'hébergement gratuit (.BF): ${data.needsHosting ? "Oui" : "Non"}\n`;
  message += `Besoin d'analytique: ${data.needsAnalytics ? "Oui" : "Non"}\n`;

  return encodeURIComponent(message);
}