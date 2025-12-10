import { z } from "zod";

export const websiteSpecificationSchema = z.object({
  clientName: z.string().min(1, "Le nom du client est requis."),
  // Rendu requis (string) mais validation conditionnelle pour permettre ""
  clientEmail: z.string().refine(val => val === "" || z.string().email().safeParse(val).success, {
    message: "Adresse e-mail invalide.",
  }),
  clientPhone: z.string().min(1, "Le numéro de téléphone est requis (WhatsApp préféré)."),
  // Rendu requis (string) pour correspondre à defaultValues: ""
  companyName: z.string(),
  projectType: z.array(z.string()).min(1, "Veuillez sélectionner au moins un type de projet."),
  websitePurpose: z.string().min(10, "Veuillez décrire le but de votre site web (au moins 10 caractères)."),
  // Rendu requis (string) pour correspondre à defaultValues: ""
  targetAudience: z.string(),
  contentElements: z.array(z.string()).min(1, "Veuillez sélectionner au moins un élément de contenu."),
  // Rendu requis (string) pour correspondre à defaultValues: ""
  designPreferences: z.string(),
  // Rendu requis (string) pour correspondre à defaultValues: ""
  pagesNeeded: z.string(),
  
  // Les champs booléens sont requis (z.boolean())
  hasDomain: z.boolean(),
  // Rendu requis (string) pour correspondre à defaultValues: ""
  domainName: z.string(),
  needsHosting: z.boolean(),
  needsAnalytics: z.boolean(),
}).superRefine((data, ctx) => {
  // Validation croisée: Si hasDomain est vrai, domainName doit être spécifié et non vide.
  if (data.hasDomain && !data.domainName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['domainName'],
      message: "Veuillez spécifier votre nom de domaine existant.",
    });
  }
});

export type WebsiteSpecificationFormValues = z.infer<typeof websiteSpecificationSchema>;